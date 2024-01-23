import { ObjectId } from "typeorm";

export interface User {
  _id: ObjectId | null;
  fullName: string;
  email: string;
  age: number;
  password: string;
  createdAt: NativeDate;
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
