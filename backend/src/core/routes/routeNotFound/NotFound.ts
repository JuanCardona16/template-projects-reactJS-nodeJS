import { CustomError } from "@/lib";
import { RequestHandler } from "express";

export const handleNotFound: RequestHandler = (_req, _res, next) => {
  next(CustomError(404, "Route Not Found"))
}
