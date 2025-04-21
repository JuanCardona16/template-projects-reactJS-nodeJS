import { PublicRoutes } from '@/constants';
import { Router } from 'express';
import AuthenticationController from '@/features/auth/basic/controllers/auth.controller';
import changePasswordController from '@/features/auth/change-password/controllers/changePassword.controller';
import AuthenticationGoogleController from '@/features/auth/google/controllers/authGoogle.controller';
import { asyncHandler } from '@/core/errors';

const authenticationPaths: Router = Router();

/**
 * @swagger
 * /register:
 *   post:
 *     summary: Register a new user
 *     tags:
 *       - Authentication
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: user@example.com
 *               password:
 *                 type: string
 *                 example: Password123!
 *               username:
 *                 type: string
 *                 example: johndoe
 *     responses:
 *       201:
 *         description: User registered successfully
 *       400:
 *         description: Bad request
 */
authenticationPaths.post(PublicRoutes.REGISTER, asyncHandler(AuthenticationController.register));

/**
 * @swagger
 * /login:
 *   post:
 *     summary: Log in a user
 *     tags:
 *       - Authentication
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: user@example.com
 *               password:
 *                 type: string
 *                 example: Password123!
 *     responses:
 *       200:
 *         description: User logged in successfully
 *       401:
 *         description: Unauthorized
 */
authenticationPaths.post(PublicRoutes.LOGIN, asyncHandler(AuthenticationController.login));

/**
 * @swagger
 * /forgot-password:
 *   post:
 *     summary: Send a password reset code to the user's email
 *     tags:
 *       - Authentication
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: user@example.com
 *     responses:
 *       200:
 *         description: Reset code sent successfully
 *       404:
 *         description: User not found
 */
authenticationPaths.post(
  PublicRoutes.FORGOT_PASSWORD,
  asyncHandler(changePasswordController.sendCode)
);

/**
 * @swagger
 * /verify-code:
 *   post:
 *     summary: Verify the password reset code
 *     tags:
 *       - Authentication
 *     requestBody:
 *       required: true
 *       content:
 *         application/json
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: user@example.com
 *               code:
 *                 type: string
 *                 example: 123456
 *     responses:
 *       200:
 *         description: Code verified successfully
 *       400:
 *         description: Invalid code
 */
authenticationPaths.post(
  PublicRoutes.VARIFY_CODE,
  asyncHandler(changePasswordController.verifyCode)
);

/**
 * @swagger
 * /change-password:
 *   put:
 *     summary: Change the user's password
 *     tags:
 *       - Authentication
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: user@example.com
 *               code:
 *                 type: string
 *                 example: 123456
 *               newPassword:
 *                 type: string
 *                 example: NewPassword123!
 *     responses:
 *       200:
 *         description: Password changed successfully
 *       400:
 *         description: Invalid request
 */
authenticationPaths.put(
  PublicRoutes.CHANGE_PASSWORD,
  asyncHandler(changePasswordController.changePassword)
);

/**
 * @swagger
 * /google-login:
 *   post:
 *     summary: Log in a user using Google authentication
 *     tags:
 *       - Authentication
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               token:
 *                 type: string
 *                 example: ya29.a0AfH6SM...
 *     responses:
 *       200:
 *         description: User logged in successfully
 *       401:
 *         description: Unauthorized
 */
authenticationPaths.post(
  PublicRoutes.GOOGLE_LOGIN,
  asyncHandler(AuthenticationGoogleController.login)
);

export default authenticationPaths;
