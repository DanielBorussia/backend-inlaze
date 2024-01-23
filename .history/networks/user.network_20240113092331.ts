const express = require("express");
const router = express.Router();
const controller = require("../controllers/user.controller");
const response = require("../helpers/response");

router.post("/", function (req, res) {
  controller
    .addUser(req)
    .then((data) => {
      response.success(req, res, data, 201);
    })
    .catch((e) => {
      response.error(req, res, "Error al registrar", 500, e);
    });
});

router.get("/", function (req, res) {
  controller
    .listUsers()
    .then((users) => {
      response.success(req, res, users);
    })
    .catch((e) => {
      response.error(req, res, "Error al consultar usuarios", 500, e);
    });
});

router.get("/:id", function (req, res) {
  controller
    .listUserById(req.params.id)
    .then((user) => {
      response.success(req, res, user);
    })
    .catch((e) => {
      response.error(req, res, "Error al consultar el usuario deseado", 500, e);
    });
});

router.put("/:id", function (req, res) {
  controller
    .updateUser(req)
    .then((user) => {
      response.success(req, res, user);
    })
    .catch((e) => {
      response.error(req, res, "Error al actualizar el usuario", 500, e);
    });
});

router.delete("/:id", function (req, res) {
  controller
    .deleteUser(req.params.id)
    .then((user) => {
      response.success(req, res, user);
    })
    .catch((e) => {
      response.error(req, res, "Error al eliminar el usuario", 500, e);
    });
});

module.exports = router;
