import { Router, Request, Response } from "express";
import { handleHttpError } from "../helpers/response";

const routerAuth = Router();
import controller from "../controllers/auth.controller";

routerAuth.post("/login", async (req: Request, res: Response) => {
  try {
    const data = await controller.login(req, res);
    res.send({ data: data });
  } catch (e) {
    handleHttpError(res, "Error en las crednciales de acceso");
  }
});

export = { routerAuth };
