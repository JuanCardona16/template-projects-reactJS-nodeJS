import { ApiPrefixAuthRoutes, ApiPrefixRouteUser } from "@/constants/routes";
import { Router } from "express";
import authenticationPaths from "@/modules/authentication/routes/auth.route";
import userRouterPaths from "@/modules/user/routes/user.router"

const routerApplication: Router = Router();

routerApplication.use(ApiPrefixAuthRoutes, authenticationPaths);
routerApplication.use(ApiPrefixRouteUser, userRouterPaths)

export default routerApplication;
