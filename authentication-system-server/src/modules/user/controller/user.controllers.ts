import { RequestHandler } from "express";
import UserServices from "../services/user.service";
import { CustomApiResponses } from "@/config/api";

class UserControllers {
  getUserInfo: RequestHandler = async (req, res, next) => {
    const user = (req as any).user;

    const response = await UserServices.getInfo(user.uuid);

    res.status(200).send(CustomApiResponses.success(response));
  };
}

export default new UserControllers();
