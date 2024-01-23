import { Schema, model } from "mongoose";

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

const itemModel = model("User", mySchema);
export default itemModel;
