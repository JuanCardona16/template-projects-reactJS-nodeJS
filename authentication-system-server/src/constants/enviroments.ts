import dotenv from "dotenv";

dotenv.config();

export const PORT = process.env.PORT || 3000;
export const TOKEN_SECRET_KEY = process.env.TOKEN_SECRET_KEY as string;
export const REFESCH_TOKEN_SECRET_KEY = process.env.REFESCH_TOKEN_SECRET_KEY as string;
export const DATABASE_URL = process.env.DATABASE_URL as string;
export const RESEND_KEY = process.env.RESEND_KEY as string;

// Redis enviroments

export const REDIS_HOST = process.env.REDIS_HOST || "localhost";
export const REDIS_PORT = process.env.REDIS_PORT || 6379;
export const REDIS_PASS = process.env.REDIS_PASS || undefined;

// Email enviroments
