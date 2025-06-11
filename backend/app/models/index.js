const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  }
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Klientka = require("./klientka.model.js")(sequelize, DataTypes);
db.User = require("./user.model.js")(sequelize, DataTypes);

db.authenticate = () => sequelize.authenticate().then(() => console.log("✅ Połączono z PostgreSQL"));
db.sync = () => sequelize.sync();

module.exports = db;
