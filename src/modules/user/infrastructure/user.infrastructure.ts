import { err, ok, Result } from "neverthrow";

import MySQLBootstrap from "../../../bootstrap/MySQL.bootstrap";
import { DatabaseException } from "../../../core/exceptions/database.exception";
import { UserCreatedResponse } from "../application/responses/user-created.response";
import { UserRepository } from "../domain/repositories/user.repository";
import { User } from "../domain/roots/user";
import { UserModelDto } from "./dtos/user.model.dto";
import { UserEntity } from "./persistence/entities/user.entity";

export type UserResult = Result<
  UserCreatedResponse | UserCreatedResponse[],
  DatabaseException
>;

export class UserInfrastructure implements UserRepository {
  async getAll(): Promise<UserResult> {
    try {
      const userRepository =
        MySQLBootstrap.dataSource.getRepository(UserEntity);

      const users = await userRepository.find({
        where: { isActive: true },
        //relations: ["roles"],
      });

      return ok(UserModelDto.fromDataToResponse(users));
    } catch (error) {
      return err(new DatabaseException(error.message));
    }
  }
  async save(user: User): Promise<UserResult> {
    try {
      const userRepository =
        MySQLBootstrap.dataSource.getRepository(UserEntity);

      const userEntity = UserModelDto.fromDomainToData(user);

      await userRepository.save(userEntity);

      return ok(UserModelDto.fromDataToResponse(userEntity));
    } catch (error) {
      return err(new DatabaseException(error.message));
    }
  }
}
