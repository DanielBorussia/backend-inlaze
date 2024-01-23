import { Router } from "express";
import { user } from "../networks/user.network";

const router = Router();

router.use("/user", user);
//router.use("/post", checkToken, post);
//router.use("/auth", auth);

export { router };
