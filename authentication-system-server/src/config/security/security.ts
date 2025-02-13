import { REFESCH_TOKEN_SECRET_KEY, TOKEN_SECRET_KEY } from "@/constants";
import { JwtHelpers } from "./JwtHelpers";

export const jwtHelpers = new JwtHelpers(
  TOKEN_SECRET_KEY,
  REFESCH_TOKEN_SECRET_KEY
);
