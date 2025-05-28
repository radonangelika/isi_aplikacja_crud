module.exports = (sequelize, DataTypes) => {
  return sequelize.define("Klientka", {
    imie: {
      type: DataTypes.STRING,
      allowNull: false
    },
    nazwisko: {
      type: DataTypes.STRING,
      allowNull: true // lub false, jeśli wymagane
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    zabieg: {
      type: DataTypes.STRING,
      allowNull: false
    },
    dataWizyty: {
      type: DataTypes.DATE,
      allowNull: false
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });
};