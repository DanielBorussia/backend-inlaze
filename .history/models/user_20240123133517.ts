import { Schema, model } from "mongoose";

const mySchema = new Schema(
  {
    fullName: { type: String, required: true },
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
