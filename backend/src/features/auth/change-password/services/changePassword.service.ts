import { Resend } from 'resend';
import InMemoryCodeSecurity from '../helpers/CodeSecurity/InMemoryCideService';
import PasswordHelpers from '../../../../lib/Passwords/PasswordHelpers';
import CustomApiResponses from '@/config/responses/CustomResponses';
import { RESEND_KEY } from '@/config/env/env';
import UserModel from '@/infrastructure/mongoDb/Models/User/UserModel';

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
