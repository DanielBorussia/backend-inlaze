import { Router } from "express";
import { user } from "../networks/user.network";

const routerUser = Router();

routerUser.use("/user", user);
//router.use("/post", checkToken, post);
//router.use("/auth", auth);

export { routerUser };
