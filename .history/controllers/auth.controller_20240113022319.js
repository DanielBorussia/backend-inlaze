const Model = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

async function login(req, res) {
  const user = await Model.findOne({ email: req.body.email });
  if (!user) {
    return Promise.reject("Error en el email o clave");
  }

  const validate = bcrypt.compareSync(req.body.password, user.password);

  if (!validate) {
    return Promise.reject("Error en el email o clave");
  }
  console.log("LLEGO");
  /*res.json({
    success: "Login Correcto",
    token: createToken(user),
  });*/
}

function createToken(user) {
  const payload = {
    _id: user._id,
  };
  return jwt.sign(payload, "INLAZE");
}

module.exports = {
  login,
};
