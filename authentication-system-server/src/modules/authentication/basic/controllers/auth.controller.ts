import { CustomError } from "@/helpers";
import { RequestHandler } from "express";
import AuthenticationServices from "@/modules/authentication/basic/services/auth.service";

class AuthenticationController {
  register: RequestHandler = async (req, res, next) => {
    const data = req.body as any;
    if (!data) next(CustomError(500, "Bad request"));

    const response = await AuthenticationServices.register(data);

    res.status(200).send(response);
  };

  login: RequestHandler = async (req, res, next) => {
    const data = req.body as any;

    if (!data || !data.email || !data.password)
      next(CustomError(400, "Bad credentials"));

    const response = await AuthenticationServices.login(data);

    res.status(200).send(response);
  };

  logout: RequestHandler = () => {};
}

export default new AuthenticationController();
