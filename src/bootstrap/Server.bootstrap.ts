import http from "http";

import app from "../app";

export class ServerBootstrap {
  constructor() {}

  initialize() {
    return new Promise((resolve, reject) => {
      const server = http.createServer(app);

      server
        .listen(3000)
        .on("listening", () => {
          console.log("Server running...");
          resolve("Finally promise resolved");
        })
        .on("error", (error: NodeJS.ErrnoException) => {
          //console.log(error.message);
          reject(error);
        });
    });

    /* promise.then(
      (messageReturned: string) => {
        console.log(messageReturned);
      },
      (messageErrorReturned: NodeJS.ErrnoException) => {
        console.log(messageErrorReturned);
      }
    );*/

    /*promise
      .then((messageReturned: string) => {
        console.log(messageReturned);
      })
      .catch((messageErrorReturned: NodeJS.ErrnoException) => {
        console.log(messageErrorReturned);
      });*/

    /*promise.then((messageReturned: string) => {
      console.log(messageReturned);
    });

    promise.catch((messageErrorReturned: NodeJS.ErrnoException) => {
      console.log(messageErrorReturned);
    });*/
  }
}
