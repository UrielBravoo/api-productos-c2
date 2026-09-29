const express = require("express");
const app = express();
//import routes
const routerProductos = require("./routes/productosRoutes");
const routerCategoria = require("./routes/categoriasRoutes");
const routerProveedor= require("./routes/proveedoresRoutes");

const db = require("./models");
const PORT = 3000;

app.set("json spaces", 2);

app.use(express.json());
//use routers
app.use("/productos", routerProductos);
app.use("/categorias", routerCategoria);
app.use("/proveedores",routerProveedor)

app.listen(PORT, async () => {

  try{
  
    await db.sequelize.sync();
    console.log("http://localhost:3000");
  
  } catch (error){
      console.log("error al sincronizar con la base de datos",error)
  }
  
  
});
