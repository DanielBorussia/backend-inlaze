import { Router, Response, Request } from "express";
import { handleHttpError } from "../helpers/response";
import controller from "../controllers/post.controller";
const router = Router();

router.post("/", async (req: Request, res: Response) => {
  try {
    const post = await controller.addPost(req);
    res.send({ data: post });
  } catch (e) {
    handleHttpError(res, "Error al registrar un post");
  }
});

router.get("/", async (_req: Request, res: Response) => {
  try {
    const posts = await controller.listPosts();
    res.send({ data: posts });
  } catch (e) {
    handleHttpError(res, "Error al consultar posts");
  }
});

router.get("/:id", async (req: Request, res: Response) => {
  try {
    const post = await controller.listPostById(req.params.id);
    res.send({ data: post });
  } catch (e) {
    handleHttpError(res, "Error al consultar el post deseado");
  }
});

router.put("/:id", async (req: Request, res: Response) => {
  try {
    const post = await controller.updatePost(req);
    res.send({ data: post });
  } catch (e) {
    handleHttpError(res, "Error al actualizar el post");
  }
});

router.post("/addLikes/:id", async (req: Request, res: Response) => {
  try {
    const post = await controller.addLikesByPost(req.params.id);
    res.send({ data: post });
  } catch (e) {
    handleHttpError(res, "Error al agregar likes al post");
  }
});

router.delete("/:id", async (req: Request, res: Response) => {
  try {
    const post = await controller.deletePost(req.params.id);
    res.send({ data: post });
  } catch (e) {
    handleHttpError(res, "Error al eliminar el post");
  }
});

export { router };
