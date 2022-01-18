import { NextFunction, Request, Response } from "express";
import { HttpException } from "../../httpException";

const errorMiddleware = (
  error: HttpException,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const status: number = error.status || 500;
    const errorMessage: string = error.message || "!Oops something went wrong";

    console.error(`StatusCode : ${status}, Message : ${errorMessage}`);
    res.status(status).json({ error: errorMessage });
  } catch (error) {
    next(error);
  }
};

export default errorMiddleware;
