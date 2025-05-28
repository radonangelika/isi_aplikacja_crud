module.exports = (sequelize, DataTypes) => {
  return sequelize.define("user", {
    imie: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    haslo: {
      type: DataTypes.STRING,
      allowNull: false
    },
    rola: {
        type: DataTypes.STRING,
        defaultValue: "klient" // lub "admin"
    }
  });
};