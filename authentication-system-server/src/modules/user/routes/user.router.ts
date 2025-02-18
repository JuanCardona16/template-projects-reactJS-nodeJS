import { PrivateRoutes } from '@/constants';
import { authorize } from '@/modules/authentication/basic/middleware/authorize';
import { Router } from 'express';
import UserControllers from '@/modules/user/controller/user.controllers';

const userRouterPaths: Router = Router();

userRouterPaths.get(PrivateRoutes.PROFILE, authorize, UserControllers.getUserInfo);

export default userRouterPaths;