import "tsconfig-paths/register";
import express from "express";
import dotenv from "dotenv";
import { ApiPrefix, DATABASE_URL } from "@/constants";
import routerApplication from "./routes/router";
import { handleNotFound } from "./routes";
import { GlobalHandleError, setHeaders, CorsConfig } from "./api";
import MongoHelpers from './infraestructure/mongoDb/MongoHelpers'

dotenv.config();
const app = express();

// Conexion a la base de datos (En este caso una de mongoDB)
MongoHelpers.creteDatabaseConnection(DATABASE_URL);

// Configuracion
app.use(setHeaders)
app.use(CorsConfig())

app.use(express.json());
app.use(express.urlencoded({ limit: '1mb', extended: true }));

// Rutas
app.use(ApiPrefix, routerApplication)
app.use('*', handleNotFound);

// Middleware global para el manejo de errores
app.use(GlobalHandleError)

// Configuración
app.disable("x-powered-by");

export default app;
