import bcrypt from "bcryptjs";

import { RoleRepository } from "../../role/domain/repositories/role.repository";
import { UserRepository } from "../domain/repositories/user.repository";
import { User, UserProperties } from "../domain/roots/user";

export class UserApplication {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly roleRepository: RoleRepository
  ) {}

  async getAll() {
    return await this.userRepository.getAll();
  }

  async create(user: User) {
    let rolesUser;
    const rolesGetByIdsResult = await this.roleRepository.getByIds(
      user.properties().roles as number[]
    );

    if (rolesGetByIdsResult.isErr()) {
    } else {
      rolesUser = rolesGetByIdsResult.value;
    }

    const passwordHashed = await bcrypt.hash(user.properties().password, 10);
    const userProperties: UserProperties = {
      ...user.properties(),
      password: passwordHashed,
      roles: rolesUser,
    };

    const userHash = User.reconstitute(userProperties);

    return await this.userRepository.save(userHash);
  }
}
