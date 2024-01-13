const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const Schema = mongoose.Schema;

const mySchema = new Schema(
  {
    fullName: String,
    age: Number,
    email: String,
    password: String,
    isDeleted: Boolean,
  },
  {
    timestamps: true,
  }
);

mySchema.methods.encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

mySchema.methods.matchPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

const model = mongoose.model("User", mySchema);
module.exports = model;
