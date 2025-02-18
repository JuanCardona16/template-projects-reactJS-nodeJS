
import { jwtHelpers } from "@/config/security/security";
import { CustomError } from "@/helpers";
import { RequestHandler } from "express";

export const authorize: RequestHandler = async (req, _res, next) => {
  try {
    const authorizeHeader = req.headers.authorization;
    console.log(authorizeHeader);

    if (!authorizeHeader) return next(CustomError(401, "Not authorized"));

    const token = authorizeHeader?.split(" ")[1];

    const validateToken = jwtHelpers.verifyToken<string>(token!);
    // console.log("Informacion del token", validateToken);

    if (!validateToken || !validateToken.payload) {
      return next(CustomError(401, "Not authorized - invalid access data"));
    }

    (req as any).user = { uuid: validateToken!.payload };

    next();
  } catch (error) {
    return next(CustomError(401, `Not authorized -> ${error}`));
  }
};
