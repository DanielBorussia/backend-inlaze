import { Router, Response, Request } from "express";
//import { User } from "../interfaces/user.interface";
import controller from "../controllers/user.controller";

import { handleHttpError, handleHttpSuccess } from "../helpers/response";

const routerUser = Router();

routerUser.post("/", async (req: Request, res: Response) => {
  try {
    const users = await controller.addUser(req);
    handleHttpSuccess(res, users);
  } catch (e) {
    handleHttpError(res, "Error al registrar un usuario");
  }
});

routerUser.get("/", async (_req: Request, res: Response) => {
  try {
    const users = await controller.listUsers();
    handleHttpSuccess(res, users);
  } catch (e) {
    handleHttpError(res, "Error al consultar usuarios");
  }
});

routerUser.get("/:id", async (req: Request, res: Response) => {
  try {
    const user = await controller.listUserById(req.params.id);
    handleHttpSuccess(res, user);
  } catch (e) {
    handleHttpError(res, "Error al consultar el usuario deseado");
  }
});

routerUser.put("/:id", async (req: Request, res: Response) => {
  try {
    const user = await controller.updateUser(req);
    response.success(req, res, user);
  } catch (e) {
    handleHttpError(res, "Error al actualizar el usuario");
  }
});

routerUser.delete("/:id", async (req: Request, res: Response) => {
  try {
    const user = await controller.deleteUser(req.params.id);
    response.success(req, res, user);
  } catch (e) {
    handleHttpError(res, "Error al eliminar el usuario");
  }
});

export { routerUser };
