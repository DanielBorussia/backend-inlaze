import { Router } from "express";
import { routerUser } from "../networks/user.network";

const router = Router();

router.use("/user", routerUser);
//router.use("/post", checkToken, post);
//router.use("/auth", auth);

export { router };
