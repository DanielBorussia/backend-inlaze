const Model = require("../models/post");

function addPost(post) {
  const myPost = new Model(post);
  return myPost.save();
}

function listPosts() {
  return Model.find({ isDeleted: false }, { sort: [["createdAt", "asc"]] }).populate("user", {
    fullName: 1,
    email: 1,
  });
}

function listPostById(id) {
  return Model.find({ _id: id, isDeleted: false });
}

function updatePost(post) {
  return Model.findByIdAndUpdate(post._id, { title: post.title, content: post.content });
}

function deletePost(id) {
  return Model.findByIdAndUpdate(id, { isDeleted: true });
}

function updateLikesPost(post) {
  return Model.findByIdAndUpdate(post._id, { likes: post.likes + 1 });
}

module.exports = {
  addPost,
  listPosts,
  listPostById,
  updatePost,
  deletePost,
  updateLikesPost,
};
