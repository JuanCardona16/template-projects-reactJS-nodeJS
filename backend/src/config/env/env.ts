import dotenv from 'dotenv';

dotenv.config();

export const PORT = process.env.PORT || 3000;
export const TOKEN_SECRET_KEY = process.env.TOKEN_SECRET_KEY as string;
export const REFESCH_TOKEN_SECRET_KEY = process.env.REFESCH_TOKEN_SECRET_KEY as string;
export const DATABASE_URL = process.env.DATABASE_URL as string;

// Email enviroments
export const RESEND_KEY = process.env.RESEND_KEY as string;

// Google enviroments
export const CLIENT_GOOGLE_ID = process.env.CLIENT_GOOGLE_ID!;
export const CLIENT_GOOGLE_SECRET = process.env.CLIENT_GOOGLE_SECRET!;