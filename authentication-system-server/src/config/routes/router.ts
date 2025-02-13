import { ApiPrefixAuthRoutes } from "@/constants/routes";
import { Router } from "express";
import authenticationPaths from "@/modules/authentication/basic/routes/auth.route";

const routerApplication: Router = Router();

routerApplication.use(ApiPrefixAuthRoutes, authenticationPaths);

export default routerApplication;
