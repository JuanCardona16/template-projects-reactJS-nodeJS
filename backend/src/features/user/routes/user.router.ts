import { PrivateRoutes } from '@/constants';
import { authorize } from '@/core/middleware/auth/authorize';
import { Router } from 'express';
import userControllers from '../controller/user.controllers';

const userRouterPaths: Router = Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     UserRouterPaths:
 *       type: object
 *       description: Routes related to user operations.
 *       properties:
 *         path:
 *           type: string
 *           description: The endpoint path for the user route.
 *         method:
 *           type: string
 *           description: The HTTP method used for the route (e.g., GET, POST, PUT, DELETE).
 *         description:
 *           type: string
 *           description: A brief description of the route's functionality.
 *       required:
 *         - path
 *         - method
 *         - description
 * 
 * tags:
 *   - name: Users
 *     description: Operations related to user management.
 * 
 * paths:
 *   /users:
 *     get:
 *       tags:
 *         - Users
 *       summary: Retrieve a list of users.
 *       responses:
 *         200:
 *           description: A list of users.
 *           content:
 *             application/json:
 *               schema:
 *                 type: array
 *                 items:
 *                   $ref: '#/components/schemas/UserRouterPaths'
 */
userRouterPaths.get(PrivateRoutes.PROFILE, authorize, userControllers.getUserInfo);

export default userRouterPaths;
