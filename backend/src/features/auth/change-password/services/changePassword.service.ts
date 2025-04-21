import { RESEND_KEY } from '@/constants';
import { Resend } from 'resend';
import InMemoryCodeSecurity from '../helpers/CodeSecurity/InMemoryCideService';
import MongoHelpers from '@/lib/Mongo/MongoHelpers';
import { CollectionsNamesMongo } from '@/infrastructure/mongoDb';
import UserMongoSchema from '@/infrastructure/mongoDb/Models/User/Schema/User.schema';
import { User } from '@/infrastructure/mongoDb/Models/User/Entity';
import PasswordHelpers from '../../../../lib/Passwords/PasswordHelpers';
import CustomApiResponses from '@/config/responses/CustomResponses';

class ChangePasswordService {
  private resend: Resend;

  constructor() {
    if (!RESEND_KEY) {
      throw new Error('RESEND_KEY no está configurado en las variables de entorno.');
    }
    this.resend = new Resend(RESEND_KEY);
  }

  public sendCodeForEmail = async (email: string) => {
    try {
      const code = InMemoryCodeSecurity.createCode(email); // Cambiar a este método según su implementación

      await this.resend.emails.send({
        from: 'onboarding@resend.dev', // Cambiar a este dominio
        to: [email],
        subject: 'Cambio de Contraseña',
        html: `<p>Este es tu codigo para recuperar tu contraseña <strong>${code}</strong>. Espira en 5 minutos.</p>`,
      });
    } catch (error) {
      return CustomApiResponses.error('Error al enviar el codigo de verificacion');
    }
  };

  public verifyCode = async (code: string) => {
    const isCorrect = InMemoryCodeSecurity.verifyCode(code);

    if (!isCorrect) {
      throw new Error('El código es incorrecto o expiró.');
    }

    return true;
  };

  public changePassword = async (data: { email: string; newPassword: string }) => {
    const UserModel = MongoHelpers.getDataCollectionModel<User>(
      CollectionsNamesMongo.USERS,
      UserMongoSchema
    );

    const hashedPassword = PasswordHelpers.generateHashing(data.newPassword, 12);

    await UserModel.findOneAndUpdate(
      { email: data.email },
      { password: hashedPassword },
      { new: true }
    );

    return CustomApiResponses.success('Contraseña actualizada correctamente!');
  };
}

export default new ChangePasswordService();
