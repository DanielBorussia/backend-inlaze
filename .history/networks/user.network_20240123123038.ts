import { Router, Response, Request } from "express";
//import { User } from "../interfaces/user.interface";
import controller from "../controllers/user.controller";

const response = require("../helpers/response");

const routerUser = Router();

routerUser.post("/", (req: Request, res: Response) => {
  controller
    .addUser(req)
    .then((data: object) => {
      response.success(req, res, data, 201);
    })
    .catch((e: unknown) => {
      response.error(req, res, "Error al registrar", 500, e);
    });
});

routerUser.get("/", (req: Request, res: Response) => {
  controller
    .listUsers()
    .then((users: any) => {
      response.success(req, res, users);
    })
    .catch((e: unknown) => {
      response.error(req, res, "Error al consultar usuarios", 500, e);
    });
});
/*
routerUser.get("/:id", (req: Request, res: Response) => {
  controller
    .listUserById(req.params.id)
    .then((user: object) => {
      response.success(req, res, user);
    })
    .catch((e: unknown) => {
      response.error(req, res, "Error al consultar el usuario deseado", 500, e);
    });
});

routerUser.put("/:id", (req: Request, res: Response) => {
  controller
    .updateUser(req)
    .then((user: object) => {
      response.success(req, res, user);
    })
    .catch((e: unknown) => {
      response.error(req, res, "Error al actualizar el usuario", 500, e);
    });
});

routerUser.delete("/:id", (req: Request, res: Response) => {
  controller
    .deleteUser(req.params.id)
    .then((user: object) => {
      response.success(req, res, user);
    })
    .catch((e: unknown) => {
      response.error(req, res, "Error al eliminar el usuario", 500, e);
    });
});*/

export { routerUser };
