import { ApiIntance, ConsultationsPaths } from "../../../../config";
import { LoginRequestData, RegisterRequestData } from "../types";

class AuthenticationServices {
  login = async (data: LoginRequestData) => {
    try {
      const response = await ApiIntance.post(ConsultationsPaths.LOGIN, data);
      return response.data;
    } catch (error) {
      return error;
    }
  };

  register = async (data: RegisterRequestData) => {
    try {
      const response = await ApiIntance.post(ConsultationsPaths.REGISTER, data);
      return response.data;
    } catch (error) {
      return error;
    }
  };
}

export default new AuthenticationServices();
