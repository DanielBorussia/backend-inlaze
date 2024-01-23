import { Router, Response, Request } from "express";
//import { User } from "../interfaces/user.interface";
import controller from "../controllers/user.controller";

const response = require("../helpers/response");

const routerUser = Router();

routerUser.post("/", async (req: Request, res: Response) => {
  try {
    const users = await controller.addUser(req);
    response.success(req, res, users);
  } catch (e) {
    response.error(req, res, "Error al registrar un usuario", 500, e);
  }
});

routerUser.get("/", async (req: Request, res: Response) => {
  try {
    const users = await controller.listUsers();
    response.success(req, res, users);
  } catch (e) {
    response.error(req, res, "Error al consultar usuarios", 500, e);
  }
});

routerUser.get("/:id", async (req: Request, res: Response) => {
  try {
    const user = await controller.listUserById(req.params.id);
    response.success(req, res, user);
  } catch (e) {
    response.error(req, res, "Error al consultar el usuario deseado", 500, e);
  }
});

routerUser.put("/:id", async (req: Request, res: Response) => {
  try {
    const user = await controller.updateUser(req);
    response.success(req, res, user);
  } catch (e) {
    response.error(req, res, "Error al actualizar el usuario", 500, e);
  }
});

routerUser.delete("/:id", async (req: Request, res: Response) => {
  try {
    const user = await controller.deleteUser(req.params.id);
    response.success(req, res, user);
  } catch (e) {
    response.error(req, res, "Error al eliminar el usuario", 500, e);
  }
});

export { routerUser };
