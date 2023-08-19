import { err, ok, Result } from 'neverthrow';
import { In } from 'typeorm';

import MySQLBootstrap from '../../../bootstrap/MySQL.bootstrap';
import { DatabaseException } from '../../../core/exceptions/database.exception';
import { RoleEntity } from './persistence/entities/role.entity';

export type GetRolesByIdsResult = Result<RoleEntity[], DatabaseException>;

export class RoleInfrastructure implements RoleInfrastructure {
  async getByIds(ids: number[]): Promise<GetRolesByIdsResult> {
    try {
      const roleRepository =
        MySQLBootstrap.dataSource.getRepository(RoleEntity);
      const roles = await roleRepository.findBy({
        id: In(ids),
      });
      return ok(roles);
    } catch (error) {
      return err(new DatabaseException(error.message));
    }
  }
}
