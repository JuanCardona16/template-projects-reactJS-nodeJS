import { ApiIntance, ConsultationsPaths } from "../../../config";

class UserServices {
  async getUserInfo(token: string): Promise<any> {
    try {
      const response = await ApiIntance.get(
        ConsultationsPaths.GET_USER_PROFILE,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      return `Internal error: ${error}`;
    }
  }
}

export default new UserServices();
