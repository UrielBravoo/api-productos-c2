'use strict';
const {
  Model
} = require('sequelize');
const producto = require('./producto');
module.exports = (sequelize, DataTypes) => {
  class Proveedor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Proveedor.belongsToMany(models.Producto,{
        through:models.ProductoProveedor,
        foreignKey:"proveedorID",
        otherKey:"productoID",
        as:"productos"

      })

    }
  }
  Proveedor.init(
    {
      nombre: {
        type: DataTypes.STRING,
        allowNull:false

    }}
  , {
    sequelize,
    modelName: 'Proveedor',
  });
  return Proveedor;
};