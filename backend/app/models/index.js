const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize("salon", "root", "", {
  host: "localhost",
  dialect: "mysql"
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Klientka = require("./klientka.model.js")(sequelize, DataTypes);


db.authenticate = () => sequelize.authenticate().then(() => console.log("✅ Połączono z bazą"));
db.sync = () => sequelize.sync();
db.User = require("./user.model.js")(sequelize, DataTypes);
module.exports = db;
