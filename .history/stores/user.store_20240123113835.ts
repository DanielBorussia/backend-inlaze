import { User } from "../interfaces/user.interface";

import Model from "../models/user";

function addUser(user: User) {
  const myUser = new Model(user);
  return myUser.save();
}

function listUsers() {
  return Model.find();
}

function listUserById(id: number) {
  return Model.findOne({ _id: id, isDeleted: false });
}

function updateUser(user: User) {
  return Model.findByIdAndUpdate(user._id, { fullName: user.fullName, age: user.age, email: user.email });
}

function deleteUser(id: number) {
  return Model.findByIdAndUpdate(id, { isDeleted: true });
}

export = {
  add: addUser,
  list: listUsers,
  listUserById,
  updateUser,
  deleteUser,
};
