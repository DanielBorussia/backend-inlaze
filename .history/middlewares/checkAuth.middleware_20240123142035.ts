import { NextFunction, Response } from "express";

const checkToken = (_req: Request, _res: Response, next: NextFunction) => {
  next();
};

export default checkToken;
