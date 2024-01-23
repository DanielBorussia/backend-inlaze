const express = require("express");
const router = express.Router();
const controller = require("../controllers/post.controller");
const response = require("../helpers/response");

router.post("/", function (req, res) {
  controller
    .addPost(req)
    .then((data) => {
      response.success(req, res, data, 201);
    })
    .catch((e) => {
      response.error(req, res, "Error al registrar", 500, e);
    });
});

router.get("/", function (req, res) {
  controller
    .listPosts()
    .then((posts) => {
      response.success(req, res, posts);
    })
    .catch((e) => {
      response.error(req, res, "Error al consultar posts", 500, e);
    });
});

router.get("/:id", function (req, res) {
  controller
    .listPostById(req.params.id)
    .then((post) => {
      response.success(req, res, post);
    })
    .catch((e) => {
      response.error(req, res, "Error al consultar el post deseado", 500, e);
    });
});

router.put("/:id", function (req, res) {
  controller
    .updatePost(req)
    .then((post) => {
      response.success(req, res, post);
    })
    .catch((e) => {
      response.error(req, res, "Error al actualizar el post", 500, e);
    });
});

router.post("/addLikes/:id", function (req, res) {
  controller
    .addLikesByPost(req.params.id)
    .then((data) => {
      response.success(req, res, data, 201);
    })
    .catch((e) => {
      response.error(req, res, "Error al agregar likes", 500, e);
    });
});

router.delete("/:id", function (req, res) {
  controller
    .deletePost(req.params.id)
    .then((post) => {
      response.success(req, res, post);
    })
    .catch((e) => {
      response.error(req, res, "Error al eliminar el post", 500, e);
    });
});

module.exports = router;
