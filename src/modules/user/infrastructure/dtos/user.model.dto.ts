import { plainToInstance } from 'class-transformer';

import { RoleEntity } from '../../../role/infrastructure/persistence/entities/role.entity';
import { UserCreatedResponse } from '../../application/responses/user-created.response';
import { User, UserProperties } from '../../domain/roots/user';
import { UserEntity } from '../persistence/entities/user.entity';

export class UserModelDto {
  static fromDomainToData(user: User): UserEntity {
    const properties = user.properties();

    const userEntity = new UserEntity();
    userEntity.id = properties.id;
    userEntity.name = properties.name;
    userEntity.lastname = properties.lastname;
    userEntity.email = properties.email;
    userEntity.password = properties.password;
    userEntity.photo = properties.photo;
    userEntity.isActive = properties.isActive;
    userEntity.refreshToken = properties.refreshToken;
    userEntity.createdAt = properties.createdAt;
    userEntity.updatedAt = properties.updatedAt;
    userEntity.deletedAt = properties.deletedAt;
    userEntity.roles = properties.roles.map((role: any) => {
      const roleObj = new RoleEntity();
      roleObj.id = role.id;
      roleObj.name = role.name;
      return roleObj;
    });

    return userEntity;
  }

  static fromDataToResponse(
    userEntity: UserEntity | UserEntity[],
  ): UserCreatedResponse | UserCreatedResponse[] {
    if (Array.isArray(userEntity)) {
      return userEntity.map((user) => {
        return plainToInstance(UserCreatedResponse, user, {
          excludeExtraneousValues: true,
        });
      });
    }
    return plainToInstance(UserCreatedResponse, userEntity, {
      excludeExtraneousValues: true,
    });
  }

  static fromDataToDomain(userEntity: UserEntity): User {
    const properties: UserProperties = {
      id: userEntity.id,
      name: userEntity.name,
      lastname: userEntity.lastname,
      email: userEntity.email,
      password: userEntity.password,
      photo: userEntity.photo,
      isActive: userEntity.isActive,
      refreshToken: userEntity.refreshToken,
      createdAt: userEntity.createdAt,
      updatedAt: userEntity.updatedAt,
      deletedAt: userEntity.deletedAt,
      roles: userEntity.roles,
    };

    return User.reconstitute(properties);
  }
}
