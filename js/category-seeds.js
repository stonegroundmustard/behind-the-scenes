const { Category } = require('../models');

const categoryData = [
  {
    category_name: 'Drinks',
  },
  {
    category_name: 'Hygeine',
  },
  {
    category_name: 'Shirts',
  },
  {
    category_name: 'Music',
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;