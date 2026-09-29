const {Proveedor}=require('../models')


const obtenerProveedores= async(req,res) =>{
    try {
        const proveedores=await Proveedor.findAll()
        res.status(200).json(proveedores)
    } catch (error) {
        res.status(500).json("error al obtener los proveedores")
    }
}

const obtenerProveedor= async(req,res)=>{
    try {
        const {id}=req.params
        const proveedor= await Proveedor.findByPk(id)

        if (!proveedor){
            return res.status(404).json("proveedor no encontrado")
        }
        res.status(200).json(proveedor)

    } catch (error) {
        res.status(500).json("error al obtener el proveedor")
    }
}

const crearProveedor= async (req,res)=>{
    try {
        const {nombre}= req.body
        await Proveedor.create({nombre});
        res.status(201).json("proveedor creado con exito")
    } catch (error) {
        res.status(500).json("error al crear el proveedor")
    }
}

module.exports={obtenerProveedores,obtenerProveedor,crearProveedor}