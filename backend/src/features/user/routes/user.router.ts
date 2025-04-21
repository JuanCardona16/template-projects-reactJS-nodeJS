import { PrivateRoutes } from '@/constants';
import { authorize } from '@/core/middleware/auth/authorize';
import { Router } from 'express';
import userControllers from '../controller/user.controllers';

const userRouterPaths: Router = Router();

userRouterPaths.get(PrivateRoutes.PROFILE, authorize, userControllers.getUserInfo);

export default userRouterPaths;
