import { ApiIntance } from "../../../../config";
import { ConsultationsPaths } from "../../../../constants";

class AuthGoogleServices {
  handleGoogleLogin = async (code: string) => {
    try {
      const response = await ApiIntance.post(ConsultationsPaths.GOOGLE_LOGIN, {
        code,
      });
      console.log("Google login response: ", response.data);
      return response.data;
    } catch (error) {
      console.log("Error: ", error);
    }
  };
}

export default new AuthGoogleServices();
