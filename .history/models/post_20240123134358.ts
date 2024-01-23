import { Schema, model } from "mongoose";

const mySchema = new Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    likes: { type: Number },
    userId: { type: String, required: true },
    isDeleted: { type: Boolean },
    user: {
      type: Schema.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const model = mongoose.model("Post", mySchema);
module.exports = model;
