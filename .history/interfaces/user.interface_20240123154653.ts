import { ObjectID } from "typeorm";

export interface User {
  _id: ObjectID;
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