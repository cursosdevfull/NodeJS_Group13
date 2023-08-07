import { err, ok, Result } from "neverthrow";
import { In } from "typeorm";

import MySQLBootstrap from "../../../bootstrap/MySQL.bootstrap";
import { DatabaseException } from "../../../core/exceptions/database.exception";
import { RoleEntity } from "../../role/infrastructure/persistence/entities/role.entity";
import { UserCreatedResponse } from "../application/responses/user-created.response";
import { UserRepository } from "../domain/repositories/user.repository";
import { User } from "../domain/roots/user";
import { UserModelDto } from "./dtos/user.model.dto";
import { UserEntity } from "./persistence/entities/user.entity";

export type UserResult = Result<
  UserCreatedResponse | UserCreatedResponse[],
  DatabaseException
>;

export type UserDomainResult = Result<User, DatabaseException>;

export type UserGetByPageResult = Result<
  [entities: UserCreatedResponse[], total: number],
  DatabaseException
>;

export class UserInfrastructure implements UserRepository {
  async getByPage(
    page: number,
    pageSize: number
  ): Promise<UserGetByPageResult> {
    try {
      const userRepository =
        MySQLBootstrap.dataSource.getRepository(UserEntity);
      const [userEntities, total] = await userRepository.findAndCount({
        where: { isActive: true },
        skip: page * pageSize,
        take: pageSize,
        relations: ["roles"],
      });

      const entities = UserModelDto.fromDataToResponse(
        userEntities
      ) as UserCreatedResponse[];
      return ok([entities, total]);
    } catch (error) {}
  }
  async getAll(): Promise<UserResult> {
    try {
      const userRepository =
        MySQLBootstrap.dataSource.getRepository(UserEntity);

      const users = await userRepository.find({
        where: { isActive: true },
      });

      return ok(UserModelDto.fromDataToResponse(users));
    } catch (error) {
      return err(new DatabaseException(error.message));
    }
  }
  async save(user: User): Promise<UserResult> {
    try {
      const roleRepository =
        MySQLBootstrap.dataSource.getRepository(RoleEntity);
      const rolesUser = await roleRepository.findBy({
        id: In(user.properties().roles as number[]),
      });

      const userRepository =
        MySQLBootstrap.dataSource.getRepository(UserEntity);

      const userEntity = UserModelDto.fromDomainToData(user);
      userEntity.roles = rolesUser;

      await userRepository.save(userEntity);

      return ok(UserModelDto.fromDataToResponse(userEntity));
    } catch (error) {
      return err(new DatabaseException(error.message));
    }
  }

  async getById(id: string): Promise<UserDomainResult> {
    try {
      const userRepository =
        MySQLBootstrap.dataSource.getRepository(UserEntity);

      const userEntity = await userRepository.findOne({
        where: { id, isActive: true },
        relations: ["roles"],
      });

      return ok(UserModelDto.fromDataToDomain(userEntity));
    } catch (error) {
      return err(new DatabaseException(error.message));
    }
  }
}
