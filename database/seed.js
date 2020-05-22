const db = require('./index.js');

let names = [" HYDRATING", " COMPLEXION", " ESSENTIALS", " PRO FILTR", " Foundation", " Esentials", " MATTIFYING", " SOFT MATTE", " INVISIMATTE", " BLUSH", " FULL", " GLOW", " POWDER", " LUMINIZER", " MATTIFYING", " SOFT MATTE", " LIPSTICK", " PRIMER", " LUSCIOUS", " MOROCCAN", " EYESHADOW", " Pro"];

let prices = [20, 30, 35, 45, 55, 65, 90, 150, 42, 69, 82, 2, 3000, 420, 94, 18, 20, 15, 10, 70, 75, 80, 85, 100];


let foregrounds = ["https://feccapstone.s3-us-west-1.amazonaws.com/FB30020_FB0340.jpg", "https://feccapstone.s3-us-west-1.amazonaws.com/fec-forground-images/27822V1_final.jpg", "https://feccapstone.s3-us-west-1.amazonaws.com/fec-forground-images/29024.jpg", "https://feccapstone.s3-us-west-1.amazonaws.com/fec-forground-images/29475_alt2.jpg", "https://feccapstone.s3-us-west-1.amazonaws.com/fec-forground-images/29505.jpg", "https://feccapstone.s3-us-west-1.amazonaws.com/fec-forground-images/35535.jpg.jpg", "https://feccapstone.s3-us-west-1.amazonaws.com/fec-forground-images/41654.jpg", "https://feccapstone.s3-us-west-1.amazonaws.com/fec-forground-images/42439.jpg", "https://feccapstone.s3-us-west-1.amazonaws.com/fec-forground-images/FB30006_FB0340.jpg", "https://feccapstone.s3-us-west-1.amazonaws.com/fec-forground-images/FB30020_FB0340.jpg", "https://feccapstone.s3-us-west-1.amazonaws.com/fec-forground-images/FB30022_FB9042.jpg", "https://feccapstone.s3-us-west-1.amazonaws.com/fec-forground-images/FB30024_FB3008.jpg", "https://feccapstone.s3-us-west-1.amazonaws.com/fec-forground-images/FB40013_FB8003.jpg", "https://feccapstone.s3-us-west-1.amazonaws.com/fec-forground-images/FB40019_FB8028.jpg", "https://feccapstone.s3-us-west-1.amazonaws.com/fec-forground-images/FB70001.jpg", "https://feccapstone.s3-us-west-1.amazonaws.com/fec-forground-images/FB70022_FB9024.jpg", "https://feccapstone.s3-us-west-1.amazonaws.com/fec-forground-images/FB80001_FB8030_alt1.jpg", "https://feccapstone.s3-us-west-1.amazonaws.com/fec-forground-images/Pro-Filtr-Essentials_Sponge.jpg", "https://feccapstone.s3-us-west-1.amazonaws.com/fec-forground-images/mattifying-foundation-essentials-brush.jpg", "https://feccapstone.s3-us-west-1.amazonaws.com/fec-forground-images/mattifying-foundation-essentials-sponge.jpg", "https://feccapstone.s3-us-west-1.amazonaws.com/fec-forground-images/pro-filtr-hydrating-foundation-essentials-brush.jpg"];

let randomNameLength = () =>{
  //generates a random product name that has one word up to 5 words
  let random = Math.floor(Math.random() * 5) + 1;
  let randoName = '';

  for (let i = 0; i < random; i++) {
    randoName += names[Math.floor(Math.random() * Math.floor(names.length))];
  }

  return randoName;
};

let createMockProduct = () =>{
  let product = {};
  product["name"] = randomNameLength();
  product["price"] = prices[Math.floor(Math.random() * Math.floor(prices.length))];
  product["foreground"] = foregrounds[Math.floor(Math.random() * Math.floor(foregrounds.length))];

  return product;
};


const createProducts = () => {
  let productsArr = [];
  for (let j = 0; j < 100; j++) {
    for (let i = 0; i < 100000; i++) {
      productsArr.push(createMockProduct());
    }
  }
  return productsArr;
};

let products = createProducts();

var seedDb = () =>{
  for (let i = 0; i < products.length; i++) {
    let queryStr = `INSERT INTO products (name, price, foreground) VALUES ('${products[i]["name"]}',${products[i]["price"]},'${products[i]["foreground"]}');`;
    db.query(queryStr, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log('seeded: ', i);
      }
    });
  }
  console.log(process.memoryUsage());
};

seedDb();

