const { Router } = require("express");
const router = Router();
const categoriaControllers = require("../controllers/categoriasControllers");

router.get("/", categoriaControllers.obtenerCategorias);
router.get("/:id", categoriaControllers.obtenerCategoria);
router.get("/:id/productos",categoriaControllers.obtenerCategoriaConProductos);

router.post("/", categoriaControllers.crearCategoria);
module.exports = router;
