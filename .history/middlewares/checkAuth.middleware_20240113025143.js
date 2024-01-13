const jwt = require("jsonwebtoken");

function checkToken(req, res, next) {
  console.log("MIDDLEWARE");
  if (!req.headers["authorization"]) {
    return res.json({ error: "Debes incluir la cabecera con el token" });
  }
  let token;
  token = req.headers["authorization"];
  console.log(token);
  token = token.split(" ")[1];
  console.log(token);
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
