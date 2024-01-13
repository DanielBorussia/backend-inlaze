const express = require("express");
const user = require("../networks/user.network");
const post = require("../networks/post.network");

const routes = function (server) {
  server.use("/user", user);
  server.use("/post", post);
};

module.exports = routes;
