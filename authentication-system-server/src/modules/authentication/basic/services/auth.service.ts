import { CollectionsNamesMongo } from "@/config/infraestructure/mongoDb";
import { User } from "@/config/infraestructure/mongoDb/Models/User/Entity";
import UserMongoSchema from "@/config/infraestructure/mongoDb/Models/User/Schema/User.schema.ts";
import MongoHelpers from "@/config/infraestructure/mongoDb/MongoHelpers";
import { jwtHelpers } from "@/config/security/security";
import { CustomError } from "@/helpers";
import { LoginRequestData, RegisterRequestData } from "../types";
import PasswordHelpers from "../helpers/PasswordHelpers";

class AuthenticationServices {
  register = async (data: RegisterRequestData) => {
    const UserModel = MongoHelpers.getDataCollectionModel<User>(
      CollectionsNamesMongo.USERS,
      UserMongoSchema
    );

    if (!UserModel) return CustomError(409, "User not found");

    const newUser = new UserModel(data);
    const newUserInDb = await newUser.save();

    const token = jwtHelpers.generateToken<string>(
      { payload: newUserInDb.uuid },
      "2d"
    );

    return token;
  };

  login = async (data: LoginRequestData) => {
    const UserModel = MongoHelpers.getDataCollectionModel<User>(
      CollectionsNamesMongo.USERS,
      UserMongoSchema
    );

    const isExistUserInDb = await UserModel.findOne({ email: data.email });
    if (!isExistUserInDb) return CustomError(401, "Unauthorized");

    if (!PasswordHelpers.compare(data.password, isExistUserInDb.password))
      return CustomError(403, "Password incorrect");

    const token = jwtHelpers.generateToken<string>(
      { payload: isExistUserInDb.uuid },
      "2d"
    );

    return token;
  };

  logout() {}
}

export default new AuthenticationServices();
