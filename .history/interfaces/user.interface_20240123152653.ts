import { Types } from "mongoose";

export interface User {
  _id: Types.ObjectId;
  fullName: string;
  email: string;
  age: number;
  password: string;
  createdAt: string;
}

export interface UserCreate {
  fullName: string;
  age: number;
  email: string;
  password: string;
  isDeleted: boolean;
}

export interface UserUpdate {
  _id: string;
  fullName: string;
  email: string;
  age: number;
}
