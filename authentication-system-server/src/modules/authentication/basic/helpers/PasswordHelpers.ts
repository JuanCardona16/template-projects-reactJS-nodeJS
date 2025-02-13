import bcrypt from 'bcrypt'

class PasswordHelpers {
  
  public compare(passwordInRequest: string, passwordInDatabase: string | any): boolean {
    return bcrypt.compareSync(passwordInRequest, passwordInDatabase);
  }

  public validateCharacters(password: string): boolean {
    const regexKey = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!#%"*?&])[A-Za-z\d@$!"#%*?&]{8,14}$/
    return regexKey.test(password);
  }

  public generateHashing(password: string, hasheoLength: number): string {
    return bcrypt.hashSync(password, hasheoLength)
  }

}

export default new PasswordHelpers;
