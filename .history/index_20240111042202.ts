const express = require("express");
const cors = require("cors");
require("dotenv").config();
const bodyParser = require("body-parser");
require("./db");
const router = require("./routes/index.routes");
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

router(app);

app.use("/app", express.static("public"));

app.listen(5000, function () {
  console.log("server listo !");
});
