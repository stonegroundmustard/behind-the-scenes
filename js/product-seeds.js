const { Product } = require('../models');

const productData = [
  {
    product_name: 'Monster Energy Drink',
    price: 24.99,
    stock: 100,
    category_id: 1,
  },
  {
    product_name: 'Giraffe Lotion',
    price: 7.99,
    stock: 1,
    category_id: 2,
  },
  {
    product_name: 'Lisa Frank Tube Top',
    price: 150.99,
    stock: 40,
    category_id: 3,
  },
  {
    product_name: 'U2 Apple Music Download',
    price: 0.99,
    stock: 10000,
    category_id: 4,
  },
  {
    product_name: 'Hannibal Lecter Snapback',
    price: 9.99,
    stock: 8,
    category_id: 3,
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;