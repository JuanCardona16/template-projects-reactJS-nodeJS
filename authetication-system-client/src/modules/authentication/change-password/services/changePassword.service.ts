import { ApiIntance, ConsultationsPaths } from "../../../../config";

class ChangePasswordServices {

  public sendCode = async (email: string) => {
    try {
      const response = await ApiIntance.post(ConsultationsPaths.FORGOT_PASSWORD, { email })
      return response.data
    } catch (error) { 
      return error
    }
  }

  public verifyCode = async (code: string) => {
    try {
      const response = await ApiIntance.post(ConsultationsPaths.VERIFY_CODE, { code })
      return response.data
    } catch (error) {
      return error
    }
  }

  public resetPassword = async (password: string) => { 
    try {
      const response = await ApiIntance.put(ConsultationsPaths.RESET_PASSWORD, { password })
      return response.data
    } catch (error) {
      return error
    }
  }

}

export default new ChangePasswordServices();
