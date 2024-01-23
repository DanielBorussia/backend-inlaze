import { Response } from "express";
export const success = (req, res, message, status) => {
  res.status(status || 200).send({
    error: "",
    data: message,
  });
};

exports.error = function (req, res, message, status, details) {
  res.status(status || 500).send({
    error: details,
    data: "",
  });
};
