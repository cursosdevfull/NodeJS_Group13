import express, { Application } from "express";

import { HandlerErrors } from "./core/helpers/errors";
import MedicRouter from "./modules/medic/presentation/medic.routes";
import UserRouter from "./modules/user/presentation/user.routes";

class App {
  private readonly app: Application;

  constructor() {
    this.app = express();
    this.mountHealthCheck();
    this.mountMiddlewares();
    this.mountRoutes();
    this.mountHandlerErrors();
  }

  mountHealthCheck(): void {
    this.app.get("/", (req, res) => {
      res.send("ok");
    });

    this.app.get("/health", (req, res) => {
      res.send("ok");
    });

    this.app.get("/healthz", (req, res) => {
      res.send("ok");
    });

    this.app.get("/healthcheck", (req, res) => {
      res.send("ok");
    });
  }

  mountMiddlewares(): void {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }

  mountRoutes(): void {
    this.app.use("/medic", MedicRouter);
    this.app.use("/user", UserRouter);
  }

  mountHandlerErrors(): void {
    this.app.use(HandlerErrors.notFound);
    this.app.use(HandlerErrors.generic);
  }

  getApp(): Application {
    return this.app;
  }
}

export default new App().getApp();
