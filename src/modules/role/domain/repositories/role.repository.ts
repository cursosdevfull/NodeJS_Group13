import { GetRolesByIdsResult } from "../../infrastructure/role.infrastructure";

export interface RoleRepository {
  getByIds(ids: number[]): Promise<GetRolesByIdsResult>;
}
