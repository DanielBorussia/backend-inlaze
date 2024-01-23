import { NextFunction, Response, Request } from "express";

import jwt from "jsonwebtoken";
import { handleHttpError } from "../helpers/response";

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
      handleHttpError(res, "No es valido el token", 401);
    } else {
      next();
    }
  } catch (e) {
    return res.json({ error: "El Token no es correcto" });
  }
  next();
};

export { checkToken };
