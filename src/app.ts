import express, { Application } from "express";

import MedicRouter from "./modules/medic/presentation/medic.routes";

class App {
  private readonly app: Application;

  constructor() {
    this.app = express();
    this.mountMiddlewares();
    this.mountRoutes();
  }

  mountMiddlewares(): void {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }

  mountRoutes(): void {
    this.app.use("/medic", MedicRouter);
  }

  getApp(): Application {
    return this.app;
  }
}

export default new App().getApp();
