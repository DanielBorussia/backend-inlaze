import { Request } from "express";
import { Types } from "mongoose";
import store from "../stores/user.store";
import bcrypt from "bcryptjs";
import { UserCreate, UserUpdate } from "../interfaces/user.interface";

async function addUser(req: Request) {
  const { fullName, age, email, password } = req.body;

  const passwordHash = await bcrypt.hash(password, 10);
  const user: UserCreate = {
    fullName: fullName,
    age: age,
    email: email,
    password: passwordHash,
    isDeleted: false,
    _id: new Types.ObjectId(),
  };

  return store.add(user);
}

function listUsers() {
  return store.list();
}

function listUserById(id: string) {
  return store.listUserById(id);
}

function updateUser(req: Request) {
  const { fullName, age, email } = req.body;
  const user: UserUpdate = {
    _id: req.params.id,
    fullName,
    age,
    email,
  };

  return store.updateUser(user);
}

function deleteUser(id: string) {
  const userFound = store.listUserById(id);
  if (!userFound) {
    return Promise.reject("El usuario no se encontro.");
  }
  return store.deleteUser(id);
}

export = {
  addUser,
  listUsers,
  listUserById,
  updateUser,
  deleteUser,
};
