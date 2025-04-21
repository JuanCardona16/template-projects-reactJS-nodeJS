import CustomApiResponses from '@/config/responses/CustomResponses';
import { jwtHelpers } from '@/core/security/security';
import { CLIENT_GOOGLE_ID, CLIENT_GOOGLE_SECRET } from '@/config/env/env';
import axios from 'axios';
import { client } from '../config/AuthGoogleConfig';
import { AuthMethods } from '@/infrastructure/mongoDb/Models/User';
import UserModel from '@/infrastructure/mongoDb/Models/User/UserModel';

class AuthenticationGoogleServices {
  private verifyGoogle = async (id_token: string) => {
    try {
      const ticket = await client.verifyIdToken({
        idToken: id_token,
        audience: CLIENT_GOOGLE_ID,
      });

      const payload = ticket.getPayload();
      return {
        email: payload?.email,
        name: payload?.given_name,
        lastname: payload?.family_name,
        photo: payload?.picture,
      };
    } catch (error) {
      throw new Error('No se pudo verificar el token de Google.');
    }
  };

  private exchangeCodeForTokens = async (code: string) => {
    try {
      const response = await axios.post('https://oauth2.googleapis.com/token', {
        code,
        client_id: CLIENT_GOOGLE_ID,
        client_secret: CLIENT_GOOGLE_SECRET,
        redirect_uri: 'postmessage',
        grant_type: 'authorization_code',
      });

      if (!response.data.id_token) {
        throw new Error('No se ha recibido id_token en la respuesta de Google.');
      }

      return response.data.id_token;
    } catch (error) {
      throw new Error('No se pudo intercambiar el código por un token.');
    }
  };

  public autenticate = async (code: string) => {
    try {
      // Intercambiar código por un ID token
      const id_token = await this.exchangeCodeForTokens(code);

      // Verificar el token
      const userData = await this.verifyGoogle(id_token);

      let user = await UserModel.findOne({ email: userData.email });

      // 🔥 Validar si el usuario ya existe con autenticación tradicional
      if (user) {
        if (user.authenticationMethod !== AuthMethods.GOOGLE) {
          return CustomApiResponses.error(
            'El correo ya está registrado con otro método de autenticación.'
          );
        }

        // Si el usuario ya existe con Google, simplemente lo autenticamos
        const token = jwtHelpers.generateToken<string>({ payload: user.uuid }, '1d');

        return CustomApiResponses.success(token);
      }

      // 🔥 Si el usuario no existe, lo creamos con Google
      let data = {
        username: `${userData.name} ${userData.lastname}`,
        email: userData.email,
        password: 'p:', // Se generará una contraseña aleatoria
        authenticationMethod: AuthMethods.GOOGLE,
        isVerified: true,
      };

      const newUser = new UserModel(data);
      await newUser.save();

      // Generar token para el nuevo usuario
      const token = jwtHelpers.generateToken<string>({ payload: newUser.uuid }, '1d');

      return CustomApiResponses.success(token);
    } catch (error) {
      return CustomApiResponses.error('Error en la autenticación con Google.');
    }
  };
}

export default new AuthenticationGoogleServices();
