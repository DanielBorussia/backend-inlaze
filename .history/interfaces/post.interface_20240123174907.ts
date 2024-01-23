import { ObjectId } from "typeorm";

export interface Post {
  _id: ObjectId | null;
  title: string;
  content: string;
  userId: number;
  likes: number;
  isDeleted: boolean;
  createdAt: NativeDate;
  updatedAt: Date;
  user: UserPost;
}

export interface UserCreate {
  fullName: string;
  age: number;
  email: string;
  password: string;
  isDeleted: boolean;
}

export interface UserPost {
  _id: string;
  fullName: string;
  email: string;
}

export interface PostCreate {
  title: string;
  content: string;
  user: string;
  userId: string;
  isDeleted: boolean;
  likes: number;
  _id?: ObjectId;
}

export interface PostUpdate {
  _id: string;
  title: string;
  content: string;
}
