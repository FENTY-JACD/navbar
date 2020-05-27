const faker = require('faker');
const fs = require('fs');
const pool = require('./index');
const path = require('path');

const foregroundImg = ["https://feccapstone.s3-us-west-1.amazonaws.com/FB30020_FB0340.jpg", "https://feccapstone.s3-us-west-1.amazonaws.com/fec-forground-images/27822V1_final.jpg", "https://feccapstone.s3-us-west-1.amazonaws.com/fec-forground-images/29024.jpg", "https://feccapstone.s3-us-west-1.amazonaws.com/fec-forground-images/29475_alt2.jpg", "https://feccapstone.s3-us-west-1.amazonaws.com/fec-forground-images/29505.jpg", "https://feccapstone.s3-us-west-1.amazonaws.com/fec-forground-images/35535.jpg.jpg", "https://feccapstone.s3-us-west-1.amazonaws.com/fec-forground-images/41654.jpg", "https://feccapstone.s3-us-west-1.amazonaws.com/fec-forground-images/42439.jpg", "https://feccapstone.s3-us-west-1.amazonaws.com/fec-forground-images/FB30006_FB0340.jpg", "https://feccapstone.s3-us-west-1.amazonaws.com/fec-forground-images/FB30020_FB0340.jpg", "https://feccapstone.s3-us-west-1.amazonaws.com/fec-forground-images/FB30022_FB9042.jpg", "https://feccapstone.s3-us-west-1.amazonaws.com/fec-forground-images/FB30024_FB3008.jpg", "https://feccapstone.s3-us-west-1.amazonaws.com/fec-forground-images/FB40013_FB8003.jpg", "https://feccapstone.s3-us-west-1.amazonaws.com/fec-forground-images/FB40019_FB8028.jpg", "https://feccapstone.s3-us-west-1.amazonaws.com/fec-forground-images/FB70001.jpg", "https://feccapstone.s3-us-west-1.amazonaws.com/fec-forground-images/FB70022_FB9024.jpg", "https://feccapstone.s3-us-west-1.amazonaws.com/fec-forground-images/FB80001_FB8030_alt1.jpg", "https://feccapstone.s3-us-west-1.amazonaws.com/fec-forground-images/Pro-Filtr-Essentials_Sponge.jpg", "https://feccapstone.s3-us-west-1.amazonaws.com/fec-forground-images/mattifying-foundation-essentials-brush.jpg", "https://feccapstone.s3-us-west-1.amazonaws.com/fec-forground-images/mattifying-foundation-essentials-sponge.jpg", "https://feccapstone.s3-us-west-1.amazonaws.com/fec-forground-images/pro-filtr-hydrating-foundation-essentials-brush.jpg"];

const writeProducts = fs.createWriteStream('products.csv');
writeProducts.write('id,name,price,foreground\n', 'utf8');

const writeTenMillionTimes = (writer, encoding, callback) => {
  let i = 10000000;
  let id = 0;
  const write = () => {
    let ok = true;
    do {
      i--;
      id++;
      const name = faker.lorem.word();
      const price = Math.floor(Math.random() * (70 - 45 + 1) + 45);
      const foreground = foregroundImg[Math.floor(Math.random() * foregroundImg.length)];
      const data = `${id},${name},${price},${foreground}\n`;
      if (i === 0) {
        writer.write(data, encoding, callback);
      } else {
        ok = writer.write(data, encoding);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      writer.once('drain', write);
    }
  };
  write();
};

const pathToCSV = path.join(__dirname, '../products.csv');
const queryData = () => {
  const queryStr = `\COPY products FROM '${pathToCSV}' delimiter ',' HEADER CSV;`;
  pool.query(queryStr, (err, result) => {
    if (err) {
      console.error(err);
    } else {
      console.log('CSV file imported to database');
    }
  });
};
writeTenMillionTimes(writeProducts, 'utf-8', () => {
  writeProducts.end();
  queryData();
});

