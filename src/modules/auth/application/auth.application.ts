import { UserApplication } from 'src/modules/user/application/user.application';

import { Crypt } from '../../../core/helpers/crypt';
import { User } from '../../user/domain/roots/user';

export class AuthApplication {
  constructor(private readonly application: UserApplication) {}

  async existingUser(email: string, password: string): Promise<User> {
    const userFoundResult = await this.application.getByEmail(email);

    if (userFoundResult.isErr()) return null;

    const userMatch = await Crypt.compare(
      password,
      userFoundResult.value.properties().password,
    );

    if (!userMatch) return null;

    return userFoundResult.value;
  }
}
