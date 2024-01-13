function checkToken(req, res, next) {
  console.log("MIDDLEWARE");
  if (!req.headers["authorization"]) {
    return res.json({ error: "ERROR" });
  }
  next();
}

module.exports = {
  checkToken,
};
