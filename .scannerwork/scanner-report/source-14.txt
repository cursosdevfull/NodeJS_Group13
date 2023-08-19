import { addMinutes } from 'date-fns';
import jwt from 'jwt-simple';

import { User } from '../../modules/user/domain/roots/user';
import { IError } from '../error/error.interface';
import { Parameters } from './parameters';

export class Token {
  static generateAccessToken(user: User): string {
    const currentDate = new Date();
    const expiresDate = addMinutes(new Date(), Parameters.TOKEN_EXPIRES_TIME);
    const { name, lastname, email, roles } = user.properties();

    const payload = {
      iat: currentDate.getTime(),
      exp: expiresDate.getTime(),
      name,
      lastname,
      email,
      roles: roles.map((el: any) => el.name),
    };

    return jwt.encode(payload, Parameters.TOKEN_SECRET_KEY);
  }

  static validateAccessToken(accessToken: string) {
    return new Promise((resolve, reject) => {
      try {
        const payload = jwt.decode(accessToken, Parameters.TOKEN_SECRET_KEY);
        if (payload.exp < Date.now()) {
          const err: IError = new Error('Token expired');
          err.status = 403;
          reject(err);
        } else {
          resolve(payload);
        }
      } catch (error) {
        console.log(error);
        const err: IError = new Error('Token invalid');
        err.status = 401;
        reject(err);
      }
    });
  }
}
