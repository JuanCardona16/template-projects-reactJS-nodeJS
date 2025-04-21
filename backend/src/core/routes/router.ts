import { ApiPrefixAuthRoutes, ApiPrefixRouteUser } from '@/constants/routes';
import { Router } from 'express';
import authenticationPaths from '@/features/auth/routes/auth.route';
import userRouterPaths from '@/features/user/routes/user.router';

const routerApplication: Router = Router();

routerApplication.use(ApiPrefixAuthRoutes, authenticationPaths);
routerApplication.use(ApiPrefixRouteUser, userRouterPaths);

export default routerApplication;
