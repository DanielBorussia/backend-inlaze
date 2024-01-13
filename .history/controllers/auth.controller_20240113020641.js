const Model = require("../models/user");
const bcrypt = require("bcryptjs");

async function login(req, res) {
  const user = await Model.findOne({ email: req.body.email });
  if (!user) {
    return Promise.reject("Error en el email o clave");
  }

  const validate = bcrypt.compareSync(req.body.password, user.password);

  if (!validate) {
    return Promise.reject("Error en el email o clave");
  }
}

module.exports = {
  login,
};
