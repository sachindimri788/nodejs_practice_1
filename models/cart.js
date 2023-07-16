const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Cart = sequelize.define('cart', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  }
}
,
  {
    createdAt: false,
    updatedAt: false,
    freezeTableName: true,
  }
  );

module.exports = Cart;
