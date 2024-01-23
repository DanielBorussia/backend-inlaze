import { Request } from "express";

import store from "../stores/user.store";
import bcrypt from "bcryptjs";

async function addUser(req: Request) {
  const { fullName, age, email, password } = req.body;

  const passwordHash = await bcrypt.hash(password, 10);
  const user = {
    fullName: fullName,
    age: age,
    email: email,
    password: passwordHash,
    isDeleted: false,
  };

  return store.add(user);
}

function listUsers() {
  return store.list();
}

function listUserById(id: number) {
  return store.listUserById(id);
}

function updateUser(req: Request) {
  const { fullName, age, email } = req.body;
  const user = {
    _id: req.params.id,
    fullName,
    age,
    email,
  };

  return store.updateUser(user);
}

function deleteUser(id: number) {
  const userFound = store.listUserById(id);
  if (!userFound) {
    return Promise.reject("El usuario no se encontro.");
  }
  return store.deleteUser(id);
}

module.exports = {
  addUser,
  listUsers,
  listUserById,
  updateUser,
  deleteUser,
};
