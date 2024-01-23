import { Router } from "express";
import { routerUser } from "../networks/user.network";
import { routerPost } from "../networks/post.network";

const router = Router();

router.use("/user", routerUser);
router.use("/post", routerPost);
//router.use("/auth", auth);

export { router };
