import { Schema } from "mongoose";

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
