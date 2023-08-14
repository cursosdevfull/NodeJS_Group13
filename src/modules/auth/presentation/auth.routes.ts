import { Router } from "express";

import { Validator } from "../../../core/presentation/middlewares/validator";
import { UserInfrastructure } from "../../../modules/user/infrastructure/user.infrastructure";
import { RoleInfrastructure } from "../../role/infrastructure/role.infrastructure";
import { UserApplication } from "../../user/application/user.application";
import { AuthApplication } from "../application/auth.application";
import { AuthController } from "./auth.controller";
import { AuthLoginDto } from "./dtos/requests/auth-login.dto";

const roleRepository = new RoleInfrastructure();
const userRepository = new UserInfrastructure();
const userApplication = new UserApplication(userRepository, roleRepository);
const authApplication = new AuthApplication(userApplication);
const authController = new AuthController(authApplication);

class AuthRoutes {
  router: Router;

  constructor() {
    this.router = Router();
    this.addRoutes();
  }

  addRoutes() {
    this.router.post(
      "/login",
      Validator.execute({ body: new AuthLoginDto() }),
      authController.login.bind(authController)
    );
  }
}

export default new AuthRoutes().router;
