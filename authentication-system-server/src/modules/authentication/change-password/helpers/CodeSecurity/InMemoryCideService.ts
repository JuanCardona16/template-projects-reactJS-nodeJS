class InMemoryCodeSecurity {
  private codes: Map<string, { code: string, expiresAt: number }> = new Map();
  private key: string = "";

  private generateCode(): string {
    return Math.floor(100000 + Math.random() * 900000).toString();
  }

  /**
   * Genera y almacena un código en memoria con una expiración determinada
   * @param email - Email del usuario para generar la clave
   * @param expiry - Tiempo de expiración en segundos (por defecto 5 minutos)
   * @returns Código generado
   */
  public createCode(email: string, expiry: number = 5): string {
    this.key = email;
    const code = this.generateCode();
    const expiresAt = Date.now() + expiry * 60 * 1000; // Expiracion en `expiry` minutos

    this.codes.set(this.key, { code, expiresAt });

    console.log(`Codigo generado para ${this.key}: ${code}`);
    return code;
  }

  /**
   * Verifica si el código ingresado es válido
   * @param email - Email del usuario
   * @param code - Código ingresado
   * @returns `true` si el código es válido, `false` si es incorrecto o expirado
   */
  public verifyCode(code: string): boolean {

    const data = this.codes.get(this.key);
    if (!data) return false;

    if (Date.now() > data.expiresAt) {
      this.codes.delete(this.key);
      return false;
    }

    if (data.code !== code) return false;

    this.codes.delete(this.key); // Eliminar despues del uso
    return true;
  }

}

export default new InMemoryCodeSecurity();