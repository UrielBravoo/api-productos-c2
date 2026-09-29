const { Router } = require('express');
const router = Router();
const proveedoresControllers=require('../controllers/proveedoresControllers');

router.get('/',proveedoresControllers.obtenerProveedores);
router.get('/:id',proveedoresControllers.obtenerProveedor);
router.post('/',proveedoresControllers.crearProveedor)

module.exports= router;