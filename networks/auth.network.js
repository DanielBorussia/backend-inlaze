const express = require("express");
const router = express.Router();
const controller = require("../controllers/auth.controller");
const response = require("../helpers/response");

router.post("/login", function (req, res) {
  controller
    .login(req, res)
    .then((data) => {
      response.success(req, res, data, 200);
    })
    .catch((e) => {
      response.error(req, res, "Error al loguearse", 500, e);
    });
});

module.exports = router;
