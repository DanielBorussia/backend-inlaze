import { Request, Response } from "express";

import Model from "../models/user";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { User } from "../interfaces/user.interface";

async function login(req: Request) {
  const user = await Model.findOne({ email: req.body.email });
  if (!user) {
    return Promise.reject("Error en el email o clave");
  }

  const validate = bcrypt.compareSync(req.body.password, user.password);

  if (!validate) {
    return Promise.reject("Error en el email o clave");
  }

  return Promise.resolve({
    token: createToken(user),
    username: { fullName: user.fullName, email: user.email, _id: user._id },
  });
}

function createToken(user: User) {
  const payload = {
    _id: user._id,
  };
  return jwt.sign(payload, "INLAZE");
}

export = {
  login,
};
