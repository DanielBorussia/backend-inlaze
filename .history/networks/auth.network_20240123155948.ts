import { Router, Request, Response } from "express";
import { handleHttpError } from "../helpers/response";
import controller from "../controllers/auth.controller";

const routerAuth = Router();

routerAuth.post("/login", async (req: Request, res: Response) => {
  try {
    const data = await controller.login(req);
    res.send({ data: data });
  } catch (e) {
    handleHttpError(res, "Error en las crednciales de acceso");
  }
});

export { routerAuth };
