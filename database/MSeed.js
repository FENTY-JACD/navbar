const faker = require('faker');
const model = require('./index');

let adjectives = [''];
let names = [''];
let type = [
  'lip gloss', 'lip stick', 'foundation', 'concealer', 'powder', 'blush', 'contour', 'highlighter', 'mascara', 'eyeshadow palette', 'eyeliner', 'blending brush'
];
const createName = () => {
  let lips = ['gloss', 'stick'];
  let liquids = ['foundation', 'concealer'];
  let powders = ['blush', 'contour', 'highlighter'];
};

const createOneProduct = () => {
  let product = {};
};

let createProducts = () => {
  let products = [];
  for (let i = 1; i <= 100; i++) {
    products.push(createOneProduct());
  }
  return products;
};

let data = createProducts();

let seedData = () => {
  data.forEach((product) => {
    model
      .create(product)
      .then((result) => {
        console.log('seeded', result);
      })
      .catch(err => console.log(err));
  });
};

seedData();






