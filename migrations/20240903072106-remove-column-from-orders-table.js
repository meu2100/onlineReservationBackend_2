'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    // 刪除欄位
    await queryInterface.removeColumn("orders", "serviceID");
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("orders", "serviceID", {
      type: Sequelize.INTEGER,
      allowNull: true, // 根據你的需求設置
    });
  },
};
