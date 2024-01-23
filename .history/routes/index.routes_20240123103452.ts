const user = require("../networks/user.network");
const post = require("../networks/post.network");
const auth = require("../networks/auth.network");
const { checkToken } = require("../middlewares/checkAuth.middleware");

export const routes = function (server) {
  server.use("/user", user);
  server.use("/post", checkToken, post);
  server.use("/auth", auth);
};
