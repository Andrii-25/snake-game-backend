const env = process.env.NODE_ENV || "development";
const Sequelize = require("sequelize");
const User = require("./user");
const Score = require("./score");
const Token = require("./token");
const config = require("../config/config")[env];

const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}

db.User = User(sequelize, Sequelize.DataTypes);
db.Score = Score(sequelize, Sequelize.DataTypes);
db.Token = Token(sequelize, Sequelize.DataTypes);

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
