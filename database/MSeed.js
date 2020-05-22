const faker = require('faker');
const fs = require('fs');

const foregroundImg = ["https://feccapstone.s3-us-west-1.amazonaws.com/FB30020_FB0340.jpg", "https://feccapstone.s3-us-west-1.amazonaws.com/fec-forground-images/27822V1_final.jpg", "https://feccapstone.s3-us-west-1.amazonaws.com/fec-forground-images/29024.jpg", "https://feccapstone.s3-us-west-1.amazonaws.com/fec-forground-images/29475_alt2.jpg", "https://feccapstone.s3-us-west-1.amazonaws.com/fec-forground-images/29505.jpg", "https://feccapstone.s3-us-west-1.amazonaws.com/fec-forground-images/35535.jpg.jpg", "https://feccapstone.s3-us-west-1.amazonaws.com/fec-forground-images/41654.jpg", "https://feccapstone.s3-us-west-1.amazonaws.com/fec-forground-images/42439.jpg", "https://feccapstone.s3-us-west-1.amazonaws.com/fec-forground-images/FB30006_FB0340.jpg", "https://feccapstone.s3-us-west-1.amazonaws.com/fec-forground-images/FB30020_FB0340.jpg", "https://feccapstone.s3-us-west-1.amazonaws.com/fec-forground-images/FB30022_FB9042.jpg", "https://feccapstone.s3-us-west-1.amazonaws.com/fec-forground-images/FB30024_FB3008.jpg", "https://feccapstone.s3-us-west-1.amazonaws.com/fec-forground-images/FB40013_FB8003.jpg", "https://feccapstone.s3-us-west-1.amazonaws.com/fec-forground-images/FB40019_FB8028.jpg", "https://feccapstone.s3-us-west-1.amazonaws.com/fec-forground-images/FB70001.jpg", "https://feccapstone.s3-us-west-1.amazonaws.com/fec-forground-images/FB70022_FB9024.jpg", "https://feccapstone.s3-us-west-1.amazonaws.com/fec-forground-images/FB80001_FB8030_alt1.jpg", "https://feccapstone.s3-us-west-1.amazonaws.com/fec-forground-images/Pro-Filtr-Essentials_Sponge.jpg", "https://feccapstone.s3-us-west-1.amazonaws.com/fec-forground-images/mattifying-foundation-essentials-brush.jpg", "https://feccapstone.s3-us-west-1.amazonaws.com/fec-forground-images/mattifying-foundation-essentials-sponge.jpg", "https://feccapstone.s3-us-west-1.amazonaws.com/fec-forground-images/pro-filtr-hydrating-foundation-essentials-brush.jpg"];

// createWriteStream creates a writable stream in a very simple manner
// createWriteStream(PATH)
const writeProducts = fs.createWriteStream('products.csv');
writeProducts.write('id,name,price,foreground\n', 'utf8');

// write the data to the supplied writable stream ten million times
const writeTenMillionTimes = (writer, encoding, callback) => {
  let i = 10000000;
  let id = 0;
  const write = () => {
    let ok = true;
    do {
      i--;
      id += 1;
      const name = faker.commerce.productName();
      const price = faker.commerce.price(45, 60);
      const foreground = foregroundImg[Math.floor(Math.random() * foregroundImg.length)];
      const data = `${id},${name},${price},${foreground}\n`;
      if (i === 0) {
        // last time when i reaches 0
        // writing the data, in this case, id, name, price, and foreground 
        // into products.csv file with utf-8 encoding and a callback
        // in our case, the callback is ending
        writer.write(data, encoding, callback);
      } else {
        // while i is greater than 0
        // reassigning ok to writing the data, in this case, id, name, price, and foreground 
        // into products.csv file with utf-8 encoding
        ok = writer.write(data, encoding);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      // stops early and writes more
      writer.once('drain', write);
    }
  };
  write();
};

// “COPY {tableName} ({col1Name}, {col2Name}) FROM ‘/Users/admin/sample/data.csv’ with header=true and delimiter =’,’;”

// pauses write process when buffer is full and once the drain event is fired, it continues until all the records have been written
writeTenMillionTimes(writeProducts, 'utf-8', () => {
  writeProducts.end();
});