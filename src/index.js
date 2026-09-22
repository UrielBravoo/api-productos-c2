const express = require("express");
const app = express();
const routerProductos = require("./routes/productosRoutes");
const routerCategoria = require("./routes/categoriasRoutes");
const db = require("./models");
const PORT = 3000;

app.use(express.json());
app.use("/productos", routerProductos);
app.use("/categorias", routerCategoria);

app.listen(PORT, async () => {
  await db.sequelize.sync();
});
