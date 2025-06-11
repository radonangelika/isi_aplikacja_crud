const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "mysql"
  }
);

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Klientka = require("./klientka.model.js")(sequelize, DataTypes);


db.authenticate = () => sequelize.authenticate().then(() => console.log("✅ Połączono z bazą"));
db.sync = () => sequelize.sync();
db.User = require("./user.model.js")(sequelize, DataTypes);
module.exports = db;
