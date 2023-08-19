import { Application } from 'express';
import http from 'http';

import logger from '../core/helpers/logger';
import { Parameters } from '../core/helpers/parameters';
import { Bootstrap } from './bootstrap';

export default class implements Bootstrap {
  constructor(private readonly app: Application) {}

  initialize(): Promise<boolean | Error> {
    return new Promise((resolve, reject) => {
      const server = http.createServer(this.app);

      server
        .listen(Parameters.PORT)
        .on('listening', () => {
          logger.info(`Server is running on port ${Parameters.PORT}`);
          resolve(true);
        })
        .on('error', (error: Error) => {
          reject(error);
        });
    });
  }

  close() {
    process.exit(1);
  }
}
