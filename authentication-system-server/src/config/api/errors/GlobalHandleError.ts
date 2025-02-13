import { NextFunction, Request, Response } from "express";

export const GlobalHandleError = (
  error: any,
  _req: Request,
  res: Response,
  _next: NextFunction
): void => {
  const statusCode: number = error.status || 500; // Si no hay statusCode en el error, usamos 500 como valor predeterminado
  const message: string = error.message || "An error occurred"; // Si no hay mensaje en el error, usamos el mensaje predeterminado

  res.status(statusCode).json({
    error: {
      message,
      status: statusCode,
      timestamp: new Date().toISOString(),
    },
  });
};
