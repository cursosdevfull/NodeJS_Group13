import { Router } from "express";

import { RoleRepository } from "../../role/domain/repositories/role.repository";
import { RoleInfrastructure } from "../../role/infrastructure/role.infrastructure";
import { UserApplication } from "../application/user.application";
import { UserRepository } from "../domain/repositories/user.repository";
import { UserInfrastructure } from "../infrastructure/user.infrastructure";
import { UserController } from "./user.controller";

const userRepository: UserRepository = new UserInfrastructure();
const roleRepository: RoleRepository = new RoleInfrastructure();
const userApplication: UserApplication = new UserApplication(
  userRepository,
  roleRepository
);
const userController = new UserController(userApplication);

class UserRoutes {
  router: Router;

  constructor() {
    this.router = Router();
    this.addRoutes();
  }

  addRoutes() {
    this.router.post("/", userController.insert.bind(userController));
    this.router.get("/", userController.getAll.bind(userController));
  }
}

export default new UserRoutes().router;
