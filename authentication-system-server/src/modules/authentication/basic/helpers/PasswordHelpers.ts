import bcrypt from "bcrypt";

class PasswordHelpers {
  public compare(
    passwordInRequest: string,
    passwordInDatabase: string | any
  ): boolean {
    return bcrypt.compareSync(passwordInRequest, passwordInDatabase);
  }

  public validateCharacters(password: string): boolean {
    const regexKey =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!#%"*?&])[A-Za-z\d@$!"#%*?&]{8,14}$/;
    return regexKey.test(password);
  }

  public generateHashing(password: string, hasheoLength: number): string {
    return bcrypt.hashSync(password, hasheoLength);
  }

  public generateSecurePassword = (username: string): string => {
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const specialChars = '@$!#%"*?&';
    const allChars = uppercase + lowercase + numbers + specialChars;

    let password = "";

    // Asegurar al menos un carácter de cada tipo
    password += uppercase[Math.floor(Math.random() * uppercase.length)];
    password += lowercase[Math.floor(Math.random() * lowercase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += specialChars[Math.floor(Math.random() * specialChars.length)];

    // Tomar 2 caracteres aleatorios del username (si tiene menos de 2, usar el nombre completo)
    // const namePart = username.length >= 2 ? username.slice(0, 2) : username;
    password += username;

    // Completar la contraseña hasta que tenga entre 8 y 14 caracteres
    while (password.length < 10) {
      password += allChars[Math.floor(Math.random() * allChars.length)];
    }

    // Limitar la contraseña a un máximo de 14 caracteres
    password = password.slice(0, 14);

    // Mezclar los caracteres de la contraseña
    password = password
      .split("")
      .sort(() => 0.5 - Math.random())
      .join("");

    return password;
  };
}

export default new PasswordHelpers();
