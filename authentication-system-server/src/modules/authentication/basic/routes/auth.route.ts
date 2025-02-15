import { asyncHandler } from "@/config/api";
import { PublicRoutes } from "@/constants";
import { Router } from "express";
import AuthenticationController from "@/modules/authentication/basic/controllers/auth.controller";
import changePasswordController from "@/modules/authentication/change-password/controllers/changePassword.controller";
import AuthenticationGoogleController from "@/modules/authentication/google/controllers/authGoogle.controller"

const authenticationPaths: Router = Router();

authenticationPaths.post(
  PublicRoutes.REGISTER,
  asyncHandler(AuthenticationController.register)
);
authenticationPaths.post(
  PublicRoutes.LOGIN,
  asyncHandler(AuthenticationController.login)
);
authenticationPaths.post(
  PublicRoutes.FORGOT_PASSWORD,
  asyncHandler(changePasswordController.sendCode)
)
authenticationPaths.post(
  PublicRoutes.VARIFY_CODE,
  asyncHandler(changePasswordController.verifyCode)
);
authenticationPaths.put(
  PublicRoutes.CHANGE_PASSWORD,
  asyncHandler(changePasswordController.changePassword)
);
authenticationPaths.post(
  PublicRoutes.GOOGLE_LOGIN,
  asyncHandler(AuthenticationGoogleController.login)
)


export default authenticationPaths;
