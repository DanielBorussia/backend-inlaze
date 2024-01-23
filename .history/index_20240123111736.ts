import express from "express";
import cors from "cors";
require("dotenv").config();
import bodyParser from "body-parser";
import db from "./config/db";
import { router } from "./routes/index.routes";
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(router);
db().then(() => console.log("Conexion Establecida | BD"));

app.listen(5000, function () {
  console.log("server listo !");
});
