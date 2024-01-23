import { Router, Response, Request } from "express";
const controller = require("../controllers/user.controller");
const response = require("../helpers/response");

const router = Router();

router.post("/", (req: Request, res: Response) => {
  controller
    .addUser(req)
    .then((data) => {
      response.success(req, res, data, 201);
    })
    .catch((e) => {
      response.error(req, res, "Error al registrar", 500, e);
    });
});

router.get("/", (req: Request, res: Response) => {
  controller
    .listUsers()
    .then((users) => {
      response.success(req, res, users);
    })
    .catch((e) => {
      response.error(req, res, "Error al consultar usuarios", 500, e);
    });
});

router.get("/:id", (req: Request, res: Response) => {
  controller
    .listUserById(req.params.id)
    .then((user) => {
      response.success(req, res, user);
    })
    .catch((e) => {
      response.error(req, res, "Error al consultar el usuario deseado", 500, e);
    });
});

router.put("/:id", (req: Request, res: Response) => {
  controller
    .updateUser(req)
    .then((user) => {
      response.success(req, res, user);
    })
    .catch((e) => {
      response.error(req, res, "Error al actualizar el usuario", 500, e);
    });
});

router.delete("/:id", (req: Request, res: Response) => {
  controller
    .deleteUser(req.params.id)
    .then((user) => {
      response.success(req, res, user);
    })
    .catch((e) => {
      response.error(req, res, "Error al eliminar el usuario", 500, e);
    });
});

export { router };
