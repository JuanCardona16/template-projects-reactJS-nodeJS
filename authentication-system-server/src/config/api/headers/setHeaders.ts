import { RequestHandler } from "express";

// Configuracion de los encabezados (headers)
export const setHeaders: RequestHandler = (_req, res, next) => {
  res.header('Access-Control-Allow-Methods', 'GET, PUT, DELETE, POST, PATCH')
  res.header("Access-Control-Allow-Credentials", 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept');
  next()
}
