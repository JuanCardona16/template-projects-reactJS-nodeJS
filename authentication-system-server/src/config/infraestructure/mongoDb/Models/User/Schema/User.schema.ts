import { Schema } from "mongoose";
import crypto from "node:crypto";
import { AuthMethods, User } from "../Entity/User.entity";
import PasswordHelpers from "@/modules/authentication/basic/helpers/PasswordHelpers.ts";
import { CustomError } from "@/helpers";

const UserMongoSchema = new Schema<User>(
  {
    uuid: {
      type: String,
      required: true,
      unique: true,
      default: () => crypto.randomUUID(),
    },
    username: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    authenticationMethod: {
      type: String,
      required: true,
      enum: Object.values(AuthMethods),
      default: AuthMethods.BASIC,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    versionKey: false
  }
);

UserMongoSchema.pre("save", async function (next) {
  if (!PasswordHelpers.validateCharacters(this.password)) {
    return next(CustomError(400, "Invalid Credentials"));
  }
  this.password = PasswordHelpers.generateHashing(this.password, 12);
  next();
});

export default UserMongoSchema;
