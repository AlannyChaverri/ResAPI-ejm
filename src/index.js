const express = require("express");
const app = express();
const morgan = require("morgan");

// settings
// asignar puerto al server
app.set("port", process.env.PORT || 3000);
app.set("json spaces", 2);

// middleware
// morgan envia msj sobre el error
app.use(morgan("dev"));
// para entender datos datos que viene de inputs formularios
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Routes
app.use(require("./routes/index"));

//iniciar el server
app.listen(app.get("port"), () => {
  console.log(`Server en el puerto ${app.get("port")}`);
});
