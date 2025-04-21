import { jwtHelpers } from '@/core/security/security';
import { CustomError } from '@/lib';
import { RequestHandler } from 'express';

export const authorize: RequestHandler = async (req, _res, next) => {
  try {
    const authorizeHeader = req.headers.authorization;

    if (!authorizeHeader) return next(CustomError(401, 'Not authorized'));

    const token = authorizeHeader?.split(' ')[1];

    const validateToken = jwtHelpers.verifyToken<string>(token!);

    if (!validateToken || !validateToken.payload) {
      return next(CustomError(401, 'Not authorized - invalid access data'));
    }

    (req as any).user = { uuid: validateToken!.payload };

    next();
  } catch (error) {
    return next(CustomError(401, `Not authorized -> ${error}`));
  }
};
