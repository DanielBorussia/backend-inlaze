const jwt = require("jsonwebtoken");

function checkToken(req, res, next) {
  console.log("MIDDLEWARE");
  if (!req.headers["authorization"]) {
    return res.json({ error: "Debes incluir la cabecera con el token" });
  }

  const token = req.headers["authorization"];
  try {
    const payload = jwt.verify(token, "INLAZE");
    console.log(payload);
  } catch (e) {
    return res.json({ error: "El Token no es correcto" });
  }
  next();
}

module.exports = {
  checkToken,
};
