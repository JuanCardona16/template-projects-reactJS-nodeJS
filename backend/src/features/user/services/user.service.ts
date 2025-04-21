import UserModel from '@/infrastructure/mongoDb/Models/User/UserModel';
import { CustomError } from '@/lib';

class UserServices {
  getInfo = async (data: string) => {
    const user = await UserModel.findOne({ uuid: data });

    if (!user) return CustomError(404, 'User not found');

    return user;
  };
}

export default new UserServices();
