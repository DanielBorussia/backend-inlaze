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
  console.log(token);
  try {
    const payload = jwt.verify(token, "INLAZE");
    console.log(payload);
  } catch (e) {
    return res.json({ error: "El Token no es correcto" });
  }
  next();
};

export { checkToken };
