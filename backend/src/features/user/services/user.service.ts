import { CollectionsNamesMongo } from "@/infrastructure/mongoDb";
import { User } from "@/infrastructure/mongoDb/Models/User/Entity";
import UserMongoSchema from "@/infrastructure/mongoDb/Models/User/Schema/User.schema";
import MongoHelpers from "@/lib/Mongo/MongoHelpers";
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
