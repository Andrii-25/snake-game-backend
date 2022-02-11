"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.addColumn("Scores", "snakeSpeed", {
      type: Sequelize.DOUBLE,
    });
    queryInterface.addColumn("Scores", "snakeLength", {
      type: Sequelize.INTEGER,
    });
  },

  async down(queryInterface, Sequelize) {
    queryInterface.removeColumn("Scores", "snakeSpeed");
    queryInterface.removeColumn("Scores", "snakeLength");
  },
};
