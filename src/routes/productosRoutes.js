const { Router } = require("express");
const router = Router();
const {
  obtenerProductos,
  obtenerProducto,
  crearProducto,
  asociarProveedor
} = require("../controllers/productosControllers");

router.get("/", obtenerProductos);
router.get("/:id", obtenerProducto);
router.post("/", crearProducto);


// end ponit proveedor en n a m
router.post('/:prodId/proveedor/:provId',asociarProveedor)

//router.post('/:prodId/proveedores') // hacer dsps

module.exports = router;
