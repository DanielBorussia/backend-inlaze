import { Request } from "express";
import store from "../stores/post.store";
import { PostCreate, PostUpdate } from "../interfaces/post.interface";

function addPost(req: Request) {
  const { title, content, userId } = req.body;

  const newPost: PostCreate = {
    title: title,
    content: content,
    user: userId,
    likes: 0,
    isDeleted: false,
  };
  return store.addPost(newPost);
}

function listPosts() {
  return store.listPosts();
}

function listPostById(id: string) {
  return store.listPostById(id);
}

function updatePost(req: Request) {
  const { title, content } = req.body;
  const post: PostUpdate = {
    _id: req.params.id,
    title,
    content,
  };
  return store.updatePost(post);
}

function deletePost(id: string) {
  const postFound = store.listPostById(id);
  if (!postFound) {
    return Promise.reject("El post no se encontro.");
  }
  return store.deletePost(id);
}

function addLikesByPost(id: string) {
  const postFound = store.listPostById(id);
  if (!postFound) {
    return Promise.reject("El post no se encontro.");
  }
  //return store.updateLikesPost(postFound);
}

export = {
  addPost,
  listPostById,
  listPosts,
  updatePost,
  deletePost,
  addLikesByPost,
};
