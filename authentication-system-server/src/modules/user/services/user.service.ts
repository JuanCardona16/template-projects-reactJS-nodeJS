import { CollectionsNamesMongo } from "@/config/infraestructure/mongoDb";
import { User } from "@/config/infraestructure/mongoDb/Models/User/Entity";
import UserMongoSchema from "@/config/infraestructure/mongoDb/Models/User/Schema/User.schema";
import MongoHelpers from "@/config/infraestructure/mongoDb/MongoHelpers";
import { CustomError } from "@/helpers";

class UserServices {
  getInfo = async (data: string) => {
    const model = MongoHelpers.getDataCollectionModel<User>(
      CollectionsNamesMongo.USERS,
      UserMongoSchema
    );

    const user = await model.findOne({ uuid: data });

    if (!user) return CustomError(404, "User not found");

    return user;
  };
}

export default new UserServices();
