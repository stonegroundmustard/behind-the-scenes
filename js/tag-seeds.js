const { Tag } = require('../models');

const tagData = [
  {
    tag_name: 'clothing',
  },
  {
    tag_name: 'music',
  },
  {
    tag_name: 'drink',
  },
  {
    tag_name: 'hygeine',
  },
  {
    tag_name: 'food',
  },
  {
    tag_name: 'hats',
  },
  {
    tag_name: 'cannibal',
  },
  {
    tag_name: 'style',
  },
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;