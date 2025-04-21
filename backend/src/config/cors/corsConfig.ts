import cors from 'cors';

// Lista de origenes permitodos
const originWhileList: string[] = ['http://localhost:5173'];

export const CorsConfig = () => {
  return cors({
    origin: (origin, callback) => {
      console.log('Solicitud desde origen:', origin); // Solo para desarrollo
      if (!origin || originWhileList.includes(origin)) {
        callback(null, true);
      } else {
        console.error(`Origen no permitido por CORS: ${origin}`); // Solo para desarrollo
        callback(new Error('Not allowed by CORS'));
      }
    },
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization', 'Origin'],
    exposedHeaders: ['Authorization', 'X-Total-Count'],
    optionsSuccessStatus: 200,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'], // Metodos permitidos
    preflightContinue: false,
    maxAge: 3600, // Expira en 1 hora
    // secure: true, // Uncomment if using HTTPS
  });
};
