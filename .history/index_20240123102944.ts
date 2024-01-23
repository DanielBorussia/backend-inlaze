import express from "express";
import cors from "cors";
require("dotenv").config();
import bodyParser from "body-parser";
require("./db");
import router from "./routes/index.routes";
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

router(app);

app.use("/app", express.static("public"));

app.listen(5000, function () {
  console.log("server listo !");
});
