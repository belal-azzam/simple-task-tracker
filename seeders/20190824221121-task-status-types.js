'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
     queryInterface.bulkInsert('task_statuses', [
        {
        name: 'Todo',
        display_order: 1,
        },
        {
        name: 'In Progress',
        display_order: 2,
        },
        {
        name: 'Done',
        display_order: 3,
        },
    ], {});
     return queryInterface.bulkInsert('task_types', [
         {
             name: 'Epic',
         },
         {
             name: 'Story',
         },
         {
             name: 'Task',
         },
     ], {});
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
      console.log('a8a');
       queryInterface.bulkDelete('task_statuses');
      return queryInterface.bulkDelete('task_types');
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
