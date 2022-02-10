"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Score extends Model {
    static associate(models) {
      this.belongsTo(models.User, {
        foreignKey: "user",
        otherKey: "id",
      });
    }
  }
  Score.init(
    {
      score: DataTypes.NUMBER,
      user: {
        type: DataTypes.INTEGER,
        references: {
          model: "User",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "Score",
    }
  );
  return Score;
};
