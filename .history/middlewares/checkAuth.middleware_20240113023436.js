function checkToken(req, res, next) {
  console.log("MIDDLEWARE");
  next();
}

module.exports = {
  checkToken,
};
