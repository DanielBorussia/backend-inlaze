const jwt = require("jsonwebtoken");

function checkToken(req, res, next) {
  if (!req.headers["authorization"]) {
    return res.json({ error: "Debes incluir la cabecera con el token" });
  }
  let token;
  token = req.headers["authorization"];
  //token = token.split(" ")[1];
  try {
    const payload = jwt.verify(token, "INLAZE");
  } catch (e) {
    return res.json({ error: "El Token no es correcto" });
  }
  next();
}

module.exports = {
  checkToken,
};
