import { NextFunction, Response, Request } from "express";

import jwt from "jsonwebtoken";

const checkToken = (req: Request, res: Response, next: NextFunction) => {
  const header = req.headers;
  const { authorization } = header;
  if (!authorization) {
    return res.json({ error: "Debes incluir la cabecera con el token" });
  }
  let token;
  token = authorization;
  token = token.split(" ")[1];
  console.log(token);
  try {
    const payload = jwt.verify(token, "INLAZE");
    console.log(payload);
    if (!payload) {
      res.status(401);
      res.json({ error: "El Token no es valido" });
    }
  } catch (e) {
    res.status(400);
    return res.json({ error: "Error de token" });
  }
  next();
};

export { checkToken };
