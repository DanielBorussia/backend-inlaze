import { Schema, model } from "mongoose";

const mySchema = new Schema(
  {
    fullName: { type: String, required: true },
    age: { type: Number, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    isDeleted: { type: Boolean },
  },
  {
    timestamps: true,
  }
);

const itemModel = model("User", mySchema);
export default itemModel;
