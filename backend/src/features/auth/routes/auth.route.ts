import { PublicRoutes } from '@/constants';
import { Router } from 'express';
import AuthenticationController from '@/features/auth/basic/controllers/auth.controller';
import changePasswordController from '@/features/auth//change-password/controllers/changePassword.controller';
import AuthenticationGoogleController from '@/features/auth//google/controllers/authGoogle.controller';
import { asyncHandler } from '@/core/errors';

const authenticationPaths: Router = Router();

authenticationPaths.post(PublicRoutes.REGISTER, asyncHandler(AuthenticationController.register));
authenticationPaths.post(PublicRoutes.LOGIN, asyncHandler(AuthenticationController.login));
authenticationPaths.post(
  PublicRoutes.FORGOT_PASSWORD,
  asyncHandler(changePasswordController.sendCode)
);
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
);

export default authenticationPaths;
