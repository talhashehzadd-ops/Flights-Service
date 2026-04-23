'use strict';
const { Op } = require('sequelize');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('Airplanes',[
     {
       modelNumber: 'Boeing 737',
       capacity: 180,
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
       modelNumber: 'Airbus A320',
       capacity: 150,
       createdAt: new Date(),
       updatedAt: new Date()
     }
   ])
  },


  // this happens when we do npx sequelize db:seed:undo or npx sequelize db:seed:undo:all
  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Airplanes', {[Op.or]: [
      {modelNumber: 'Boeing 737'},
      {modelNumber: 'Airbus A320'}
    ]});
  }
};
