import mongoose from "mongoose";
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

const model = mongoose.model("User", mySchema);
export default model;
