import { Router, Response, Request } from "express";
import { handleHttpError } from "../helpers/response";
import controller, { getPosts } from "../controllers/post.controller";
import { checkToken } from "../middlewares/checkAuth.middleware";
const routerPost = Router();

routerPost.post("/", async (req: Request, res: Response) => {
  try {
    const post = await controller.addPost(req);
    res.send({ data: post });
  } catch (e) {
    handleHttpError(res, "Error al registrar un post");
  }
});

routerPost.get("/", checkToken, getPosts);

routerPost.get("/:id", async (req: Request, res: Response) => {
  try {
    const post = await controller.listPostById(req.params.id);
    res.send({ data: post });
  } catch (e) {
    handleHttpError(res, "Error al consultar el post deseado");
  }
});

routerPost.put("/:id", async (req: Request, res: Response) => {
  try {
    const post = await controller.updatePost(req);
    res.send({ data: post });
  } catch (e) {
    handleHttpError(res, "Error al actualizar el post");
  }
});

routerPost.delete("/:id", async (req: Request, res: Response) => {
  try {
    const post = await controller.deletePost(req.params.id);
    res.send({ data: post });
  } catch (e) {
    handleHttpError(res, "Error al eliminar el post");
  }
});

export { routerPost };
