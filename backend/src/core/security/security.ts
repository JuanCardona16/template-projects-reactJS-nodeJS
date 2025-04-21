import { REFESCH_TOKEN_SECRET_KEY, TOKEN_SECRET_KEY } from '@/config/env/env';
import { JwtHelpers } from '@/lib/Jwt/JwtHelpers';

export const jwtHelpers = new JwtHelpers(TOKEN_SECRET_KEY, REFESCH_TOKEN_SECRET_KEY);
