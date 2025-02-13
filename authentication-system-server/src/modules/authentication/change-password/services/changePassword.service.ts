import { RESEND_KEY } from "@/constants";
import { Resend } from "resend";
import InMemoryCodeSecurity from "../helpers/CodeSecurity/InMemoryCideService";
import MongoHelpers from "@/config/infraestructure/mongoDb/MongoHelpers";
import { CollectionsNamesMongo } from "@/config/infraestructure/mongoDb";
import UserMongoSchema from "@/config/infraestructure/mongoDb/Models/User/Schema/User.schema";
import { User } from "@/config/infraestructure/mongoDb/Models/User/Entity";
import { CustomError } from "@/helpers";
import PasswordHelpers from "../../basic/helpers/PasswordHelpers";

class ChangePasswordService {
  private resend: Resend;

  constructor() {
    if (!RESEND_KEY) {
      throw new Error(
        "RESEND_KEY no está configurado en las variables de entorno."
      );
    }
    this.resend = new Resend(RESEND_KEY);
  }

  public sendCodeForEmail = async (email: string) => {
    try {
      console.log("Enviando correo a:", email);

      const code = InMemoryCodeSecurity.createCode(email); // Cambiar a este método según su implementación

      const response = await this.resend.emails.send({
        from: "onboarding@resend.dev", // Cambiar a este dominio
        to: [email],
        subject: "Cambio de Contraseña",
        html: `<p>Este es tu codigo para recuperar tu contraseña <strong>${code}</strong>. Espira en 5 minutos.</p>`,
      });

      console.log("Respuesta del servicio Resend:", response);
    } catch (error) {
      console.error("Error al enviar el correo:", error);
    }
  };

  public verifyCode = async (code: string) => {
    console.log("Codigo recibido: ", code);

    const isCorrect = InMemoryCodeSecurity.verifyCode(code);

    if (!isCorrect) {
      throw new Error("El código es incorrecto o expiró.");
    }

    console.log("El código es correcto.");
    return true;
  };

  public changePassword = async (data: { email: string, newPassword: string }) => {
    const UserModel = MongoHelpers.getDataCollectionModel<User>(
      CollectionsNamesMongo.USERS,
      UserMongoSchema
    );

    const hashedPassword = PasswordHelpers.generateHashing(data.newPassword, 12)

    await UserModel.findOneAndUpdate(
      { email: data.email },
      { password: hashedPassword },
      { new: true },
    )
  
    return { message: "Contraseña actualizada correctamente" }

  };
}

export default new ChangePasswordService();
