const Model = require("../models/user");

function addUser(user) {
  const myUser = new Model(user);
  return myUser.save();
}

function listUsers() {
  return Model.find();
}

function listUserById(id) {
  return Model.findOne({ _id: id, isDeleted: false });
}

function updateUser(user) {
  return Model.findByIdAndUpdate(user._id, { fullName: user.fullName });
}

function deleteUser(id) {
  return Model.findByIdAndUpdate(id, { isDeleted: true });
}

module.exports = {
  add: addUser,
  list: listUsers,
  listUserById,
  updateUser,
  deleteUser,
};
