import { Request, Response } from "express";
import { handleHttpError } from "../helpers/response";

const express = require("express");
const router = express.Router();
const controller = require("../controllers/auth.controller");
const response = require("../helpers/response");

router.post("/login", async (req: Request, res: Response) => {
  try {
    const data = await controller.login(req, res);
    res.send({ data: data });
  } catch (e) {
    handleHttpError(res, "Error en las crednciales de acceso");
  }
});

export = { router };
