const store = require("../stores/post.store");

function addPost(req) {
  const { title, content, userId } = req.body;

  const newPost = {
    title: title,
    content: content,
    userId: userId,
    user: userId,
    likes: 0,
    isDeleted: false,
  };
  return store.addPost(newPost);
}

function listPosts() {
  return store.listPosts();
}

function listPostById(id) {
  return store.listPostById(id);
}

function updatePost(req) {
  const { title, content } = req.body;
  const post = {
    _id: req.params.id,
    title,
    content,
  };
  return store.updatePost(post);
}

function deletePost(id) {
  const postFound = store.listPostById(id);
  if (!postFound) {
    return Promise.reject("El post no se encontro.");
  }
  return store.deletePost(id);
}

function addLikesByPost(id) {
  const postFound = store.listPostById(id);
  if (!postFound) {
    return Promise.reject("El post no se encontro.");
  }
  return store.updateLikesPost(postFound);
}

module.exports = {
  addPost,
  listPostById,
  listPosts,
  updatePost,
  deletePost,
  addLikesByPost,
};
