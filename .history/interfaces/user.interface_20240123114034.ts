export interface User {
  _id: string;
  fullName: string;
  email: string;
  age: number;
  createdAt: string;
}

export interface UserCreate {
  fullName: string;
  age: number;
  email: string;
  password: string;
  isDeleted: boolean;
}
