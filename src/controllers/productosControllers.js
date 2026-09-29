const { Producto, Categoria,Proveedor } = require("../models");

const obtenerProductos = async (req, res) => {
  try {
    const productos = await Producto.findAll({
    attributes: ["id", "nombre", "precio", "stock"],
    include: {
      model: Categoria,
      as: "categoria",
      attributes: ["nombre"],
    },
  });
  res.json(productos);
  } catch (error) {
    res.status(500).json("error al obtener los productos")
    
  }
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

const asociarProveedor= async(req,res)=>{
  try {
    const {prodId,provId}=req.params;
    const producto= await Producto.findByPk(prdoId)
    if(!producto){
      res.status(404).json("produdcto no encontrado")
    }
    const proveedor= await Proveedor.findByPk(provId)
    if(!proveedor){
      res.status(404).json("proveedor no encontrado")
    }
    await producto.addProveedors(proveedor)       // funcion creada automaticamente addProveedor

    res.status(201).json({message:"proveedor asociado con exito"});
  } catch (error) {
    res.status(500).json({message:"error al asociar el producto con el provedor"});
  }
}

module.exports = {
  obtenerProductos,
  obtenerProducto,
  crearProducto,
  asociarProveedor
};
