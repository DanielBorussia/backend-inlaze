import { Router, Response, Request } from "express";
import controller from "../controllers/post.controller";
import { handleHttpError } from "../helpers/response";

const routerPost = Router();

routerPost.get("/", async (_req: Request, res: any) => {
  try {
    console.log("LLEGO");
    const posts = await controller.listPosts();
    res.send({ data: posts });
  } catch (error) {
    handleHttpError(res, "Error al listar los posts");
  }
});

routerPost.post("/", async (req: Request, res: Response) => {
  try {
    const post = await controller.addPost(req);
    res.send({ data: post });
  } catch (e) {
    handleHttpError(res, "Error al registrar un post");
  }
});

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
