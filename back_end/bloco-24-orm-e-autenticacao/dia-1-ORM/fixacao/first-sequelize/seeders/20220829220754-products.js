'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('Products',
  [
    {
      name: 'Energy Drink 500ml',
      price: '8.99',
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    {
      name: 'Skinny Pants S',
      price: '79.99',
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
  ], {}),
  down: async (queryInterface) => queryInterface.bulkDelete('Products', null, {}),
};
