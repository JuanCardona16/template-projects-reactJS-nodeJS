import { jwtHelpers } from '@/core/security/security';
import { CustomError } from '@/lib';
import { LoginRequestData, RegisterRequestData } from '../types';
import PasswordHelpers from '../../../../lib/Passwords/PasswordHelpers';
import CustomApiResponses from '@/config/responses/CustomResponses';
import UserModel from '@/infrastructure/mongoDb/Models/User/UserModel';

class AuthenticationServices {
  register = async (data: RegisterRequestData) => {
    if (!UserModel) return CustomError(409, 'User not found');

    const newUser = new UserModel(data);
    const newUserInDb = await newUser.save();

    const token = jwtHelpers.generateToken<string>({ payload: newUserInDb.uuid }, '2d');

    return CustomApiResponses.success(token);
  };

  login = async (data: LoginRequestData) => {
    const isExistUserInDb = await UserModel.findOne({ email: data.email });
    if (!isExistUserInDb) return CustomError(401, 'Unauthorized');

    if (!PasswordHelpers.compare(data.password, isExistUserInDb.password))
      return CustomError(403, 'Password incorrect');

    const token = jwtHelpers.generateToken<string>({ payload: isExistUserInDb.uuid }, '2d');

    return CustomApiResponses.success(token);
  };

  logout() {}
}

export default new AuthenticationServices();
