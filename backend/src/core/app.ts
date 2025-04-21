import 'tsconfig-paths/register';
import { ApiPrefix, DATABASE_URL } from '@/constants';
import dotenv from 'dotenv';
import express from 'express';
import { CorsConfig, setHeaders } from '../config';
import MongoHelpers from '../lib/Mongo/MongoHelpers';
import { GlobalHandleError } from './errors';
import { handleNotFound } from './routes';
import routerApplication from './routes/router';

dotenv.config();
const app = express();

// Conexion a la base de datos (En este caso una de mongoDB)
MongoHelpers.createDatabaseConnection(DATABASE_URL);

// Configuracion
app.use(setHeaders);
app.use(CorsConfig());

app.use(express.json());
app.use(express.urlencoded({ limit: '1mb', extended: true }));

// Rutas
app.use(ApiPrefix, routerApplication);
app.use('*', handleNotFound);

// Middleware global para el manejo de errores
app.use(GlobalHandleError);

// Configuración
app.disable('x-powered-by');

export default app;
