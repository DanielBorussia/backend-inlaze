import { Response } from "express";

export const handleHttpSuccess = (res: Response, message: object) => {
  res.status(200).send({
    error: "",
    data: message,
  });
};

export const handleHttpError = (res: Response, message: string, status?: number) => {
  res.status(status || 500).send({
    error: message,
  });
};
