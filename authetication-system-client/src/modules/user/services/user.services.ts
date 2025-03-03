import { ApiIntance, ConsultationsPaths } from "../../../config";
import { UserAdapter } from "../../../config/api/adapters";

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
      const { data } = response.data;
      return UserAdapter(data)
    } catch (error) {
      return `Internal error: ${error}`;
    }
  }
}

export default new UserServices();
