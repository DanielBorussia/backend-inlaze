const store = require("../stores/user.store");

function addUser(req) {
  const { fullName, age, email, password } = req.body;

  const user = {
    fullName: fullName,
    age: age,
    email: email,
    password: password,
    isDeleted: false,
  };
  console.log(user);
  return store.add(user);
}

function listUsers() {
  return store.list();
}

function listUserById(id) {
  return store.listUserById(id);
}

function updateUser(req) {
  const { fullName, age, email } = req.body;
  const user = {
    _id: req.params.id,
    fullName: fullName,
    age: age,
    email: email,
  };
  console.log("user editar ");
  console.log(user);
  return store.updateUser(user);
}

function deleteUser(id) {
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
