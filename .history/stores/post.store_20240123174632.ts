import { PostCreate, PostUpdate } from "../interfaces/post.interface";
import Model from "../models/post";

function addPost(post: PostCreate) {
  Model.init();
  const myPost = new Model(post);
  return myPost.save();
}

function listPosts() {
  return Model.find({ isDeleted: false })
    .populate("user", {
      fullName: 1,
      email: 1,
    })
    .sort({
      createdAt: -1,
    });
}

function listPostById(id: string) {
  return Model.find({ _id: id, isDeleted: false });
}

function updatePost(post: PostUpdate) {
  return Model.findByIdAndUpdate(post._id, { title: post.title, content: post.content }, { new: true });
}

function deletePost(id: string) {
  return Model.findByIdAndUpdate(id, { isDeleted: true });
}

export = {
  addPost,
  listPosts,
  listPostById,
  updatePost,
  deletePost,
};
