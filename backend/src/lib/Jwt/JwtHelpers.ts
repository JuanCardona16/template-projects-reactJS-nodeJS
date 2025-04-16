import jwt from "jsonwebtoken";
import { Payload } from "./types/TokenPayload";

export class JwtHelpers {
  private SECRET_KEY: string;
  private SECRET_REFRESH_KEY: string;

  constructor(secretKey: string, secretRefreshKey: string) {
    this.SECRET_KEY = secretKey;
    this.SECRET_REFRESH_KEY = secretRefreshKey;
  }

  public generateToken<T>(
    payload: Payload<T>,
    expiresIn: string | number = "24h"
  ): string {
    return jwt.sign(payload!, this.SECRET_KEY, {
      expiresIn,
    } as jwt.SignOptions);
  }

  public generateRefreshToken<T>(
    payload: Payload<T>,
    expiresIn: string | number = "7d"
  ): string {
    return jwt.sign(payload!, this.SECRET_REFRESH_KEY, {
      expiresIn,
    } as jwt.SignOptions);
  }

  verifyToken<T>(payload: string): Payload<T> | null {
    console.log("Payload: ", payload);
    try {
      return jwt.verify(payload!, this.SECRET_KEY) as Payload<T>;
    } catch (error) {
      console.log("Invalid token jwt", error); // Solo para desarrollo
      return null;
    }
  }

  verifyRefreshToken<T>(token: string): T | null {
    try {
      return jwt.verify(token, this.SECRET_REFRESH_KEY) as T;
    } catch (error) {
      console.error("Invalid refresh token:", error); // Solo para desarrollo
      return null;
    }
  }

  // Método para refrescar el access token usando un refresh token válido
  refreshAccessToken<T>(
    refreschAccessToken: string,
    expiresIn: string | number = "1h"
  ): string | null {
    const decode = this.verifyRefreshToken<Payload<T>>(refreschAccessToken);

    if (decode) return this.generateRefreshToken(decode, expiresIn);

    return null;
  }
}
