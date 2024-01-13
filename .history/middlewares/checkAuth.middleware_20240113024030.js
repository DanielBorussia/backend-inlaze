function checkToken(req, res, next) {
  console.log("MIDDLEWARE");
  if (!req.headers["authorization"]) {
    return res.json({ error: "Debes incluir la cabecera con el token" });
  }
  next();
}

module.exports = {
  checkToken,
};
