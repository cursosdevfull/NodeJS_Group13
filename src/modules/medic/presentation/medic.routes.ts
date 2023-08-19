import { Router } from 'express';

import { MedicApplication } from '../application/medic.application';
import { MedicInfrastructure } from '../infrastructure/medic.infrastructure';
import { MedicController } from './medic.controller';

export class MedicRouter {
  private readonly router: Router;

  constructor() {
    this.router = Router();
    this.mountRoutes();
  }

  mountRoutes(): void {
    const infrastructure = new MedicInfrastructure();
    const application = new MedicApplication(infrastructure);
    const controller = new MedicController(application);

    this.router.get('/', controller.getAll);

    this.router.post('/', (req: any, res: any, next: any) => {
      controller.insert(req, res, next);
    });
  }

  getRouter(): Router {
    return this.router;
  }
}

export default new MedicRouter().getRouter();
