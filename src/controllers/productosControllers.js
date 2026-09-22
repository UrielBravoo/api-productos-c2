const { Producto, Categoria } = require("../models");

const obtenerProductos = async (req, res) => {
  const productos = await Producto.findAll({
    attributes: ["id", "nombre", "precio", "stock"],
    include: {
      model: Categoria,
      as: "categoria",
      attributes: ["nombre"],
    },
  });
  res.json(productos);
};

const obtenerProducto = async (req, res) => {
  const { id } = req.params;
  const producto = await Producto.findByPk(id, {
    attributes: ["id", "nombre", "precio", "stock"],
    include: {
      model: Categoria,
      as: "categoria",
      attributes: ["nombre"],
    },
  });
  res.json(producto);
};

const crearProducto = async (req, res) => {
  const { nombre, precio, stock, categoriaId } = req.body;
  await Producto.create({
    nombre,
    precio,
    stock,
    categoriaId,
  });
  res.json({ message: "Producto creado con exito!!!" });
};

module.exports = {
  obtenerProductos,
  obtenerProducto,
  crearProducto,
};
