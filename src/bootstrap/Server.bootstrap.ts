import { Application } from "express";
import http from "http";

import { Bootstrap } from "./bootstrap";

export default class implements Bootstrap {
  constructor(private readonly app: Application) {}

  initialize(): Promise<boolean | Error> {
    return new Promise((resolve, reject) => {
      const server = http.createServer(this.app);

      server
        .listen(3000)
        .on("listening", () => {
          console.log(`Server is running on port ${3000}`);
          resolve(true);
        })
        .on("error", (error: Error) => {
          reject(error);
        });
    });
  }
}
