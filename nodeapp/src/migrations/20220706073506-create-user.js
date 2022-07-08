"use strict";
module.exports = {
  // firstName: DataTypes.STRING,
  // lastName: DataTypes.STRING,
  // email: DataTypes.STRING,
  // password: DataTypes.STRING,
  // address: DataTypes.STRING,
  // gender:DataTypes.BOOLEAN,

  // image: DataTypes.STRING,

  // roleId: DataTypes.STRING,
  // phoneNumber: DataTypes.STRING,
  // positionId: DataTypes.STRING,

  // image: DataTypes.STRING

  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },

      image: {
        type: Sequelize.STRING,
      },
      firstName: {
        type: Sequelize.STRING,
      },
      password: {
        type: Sequelize.STRING,
      },
      lastName: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
      },
      address: {
        type: Sequelize.STRING,
      },
      gender: {
        type: Sequelize.BOOLEAN,
      },

      roleId: {
        type: Sequelize.STRING,
      },

      phoneNumber: {
        type: Sequelize.STRING,
      },

      positionId: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Users");
  },
};
