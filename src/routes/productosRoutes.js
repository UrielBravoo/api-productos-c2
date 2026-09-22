const { Router } = require("express");
const router = Router();
const {
  obtenerProductos,
  obtenerProducto,
  crearProducto,
} = require("../controllers/productosControllers");

router.get("/", obtenerProductos);
router.get("/:id", obtenerProducto);
router.post("/", crearProducto);

module.exports = router;
