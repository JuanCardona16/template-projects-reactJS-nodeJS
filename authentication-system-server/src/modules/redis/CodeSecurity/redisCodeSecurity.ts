import redis from "@/config/redis/redis";

class RedisCodeService {
  private generateCode(): string {
    return Math.floor(100000 + Math.random() * 900000).toString(); // Codigo de 6 digitos
  }

  /**
   * Genera y almacena un código en Redis con una expiración determinada
   * @param email - Email del usuario para generar la clave en Redis
   * @param expiry - Tiempo de expiración en segundos (por defecto 5 minutos)
   * @returns Código generado
   */
  public async createCode(email: string, expiry: number = 300): Promise<string> {
    const code = this.generateCode();
    const key = `password-reset:${email}`;

    await redis.setex(key, expiry, code);
    console.log(`Codigo generado para ${email}: ${code}`);
    return code;
  }

  /**
   * Verifica si el código ingresado es válido
   * @param email - Email del usuario
   * @param code - Código ingresado
   * @returns `true` si el código es válido, `false` si es incorrecto o expirado
   */
  public async verifyCode(email: string, code: string): Promise<boolean> {
    const key = `password-reset:${email}`;
    const storedCode = await redis.get(key);

    if (!storedCode) return false;
    if (storedCode !== code) return false;

    await redis.del(key); // Elimina el codigo despues de la validacion
    return true;
  }
}

export default new RedisCodeService();
