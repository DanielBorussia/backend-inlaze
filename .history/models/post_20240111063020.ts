const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const mySchema = new Schema(
  {
    title: String,
    content: String,
    likes: Number,
    userId: String,
    isDeleted: Boolean,
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
