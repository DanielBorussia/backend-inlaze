export interface Post {
  _id: string;
  title: string;
  content: string;
  userId: number;
  likes: number;
  isDeleted: boolean;
  createdAt: Date;
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
  isDeleted: boolean;
  likes: number;
}

export interface PostUpdate {
  _id: string;
  title: string;
  content: string;
  likes?: number;
}
