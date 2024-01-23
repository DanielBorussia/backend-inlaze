import { UserCreate, UserUpdate } from "../interfaces/user.interface";

import Model from "../models/user";

function addUser(user: UserCreate) {
  const myUser = new Model(user);
  return myUser.save();
}

function listUsers() {
  return Model.find().sort({
    updatedAt: -1,
  });
}

function listUserById(id: string) {
  return Model.findOne({ _id: id, isDeleted: false });
}

function updateUser(user: UserUpdate) {
  return Model.findByIdAndUpdate(user._id, { fullName: user.fullName, age: user.age, email: user.email }, new : true);
}

function deleteUser(id: string) {
  return Model.findByIdAndUpdate(id, { isDeleted: true });
}

export = {
  add: addUser,
  list: listUsers,
  listUserById,
  updateUser,
  deleteUser,
};
