import MongoHelpers from '@/lib/Mongo/MongoHelpers';
import { User } from './Entity/User.entity';
import { CollectionsNamesMongo } from '../../Collections/Collections';
import UserMongoSchema from './Schema/User.schema';
import mongoose from 'mongoose';

const UserModel = MongoHelpers.getDataCollectionModel<User>(
  CollectionsNamesMongo.USERS,
  UserMongoSchema
) satisfies mongoose.Model<User>; // 👉 "Asegúrate de que esto cumple con el tipo Model<User> de Mongoose"

export default UserModel;
