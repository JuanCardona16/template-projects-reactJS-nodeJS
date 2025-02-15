import { CustomError } from "@/helpers";
import { RequestHandler } from "express";
import ChangePasswordService from "../services/changePassword.service";
import { CustomApiResponses } from "@/config/api";

class ChangePasswordController {
  private key: string = "";

  sendCode: RequestHandler = async (req, res, next) => {
    const { email } = req.body as { email: string };
    this.key = email;

    if (!email) return next(CustomError(500, "Internal Error server"));

    await ChangePasswordService.sendCodeForEmail(email);

    res.status(200).send(CustomApiResponses.success("Code sent successfully"));
  };

  verifyCode: RequestHandler = async (req, res, next) => {
    const { code } = req.body as { code: string };

    if (!code) return next(CustomError(500, "Internal Error server"));

    await ChangePasswordService.verifyCode(code);

    res
      .status(200)
      .send(CustomApiResponses.success("Code is verify correctly!"));
  };

  changePassword: RequestHandler = async (req, res, next) => {
    const { password } = req.body as { password: string };

    if (!password) return next(CustomError(500, "Internal Error server"));

    const response = await ChangePasswordService.changePassword({
      email: this.key,
      newPassword: password,
    });

    res.status(200).send(response);
  };
}

export default new ChangePasswordController();
