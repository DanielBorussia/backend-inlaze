import { Router, Response, Request } from "express";
//import { User } from "../interfaces/user.interface";
import controller from "../controllers/user.controller";

import { handleHttpError } from "../helpers/response";

const routerUser = Router();

routerUser.post("/", async (req: Request, res: Response) => {
  try {
    const users = await controller.addUser(req);
    res.send({ data: users });
  } catch (e) {
    handleHttpError(res, "Error al registrar un usuario");
  }
});

routerUser.get("/", async (_req: Request, res: Response) => {
  try {
    const users = await controller.listUsers();
    res.send({ data: users });
  } catch (e) {
    handleHttpError(res, "Error al consultar usuarios");
  }
});

routerUser.get("/:id", async (req: Request, res: Response) => {
  try {
    const user = await controller.listUserById(req.params.id);
    res.send({ data: user });
  } catch (e) {
    handleHttpError(res, "Error al consultar el usuario deseado");
  }
});

routerUser.put("/:id", async (req: Request, res: Response) => {
  try {
    const user = await controller.updateUser(req);
    res.send({ data: user });
  } catch (e) {
    handleHttpError(res, "Error al actualizar el usuario");
  }
});

routerUser.delete("/:id", async (req: Request, res: Response) => {
  try {
    const user = await controller.deleteUser(req.params.id);
    res.send({ data: user });
  } catch (e) {
    handleHttpError(res, "Error al eliminar el usuario");
  }
});

export { routerUser };
