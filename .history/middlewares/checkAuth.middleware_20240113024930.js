const jwt = require("jsonwebtoken");

function checkToken(req, res, next) {
  console.log("MIDDLEWARE");
  if (!req.headers["authorization"]) {
    return res.json({ error: "Debes incluir la cabecera con el token" });
  }

  const token = req.headers["authorization"];
  console.log(token);
  try {
    const payload = jwt.verify(
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWEyMzUwNDY1NGVjMDY4YTAyM2YxZmUiLCJpYXQiOjE3MDUxMzIwMTV9.H5FnKntX22k6RtrluuPpIeDTXJ34a56NbHGvVTdny4M",
      "INLAZE"
    );
    console.log(payload);
  } catch (e) {
    return res.json({ error: "El Token no es correcto" });
  }
  next();
}

module.exports = {
  checkToken,
};
