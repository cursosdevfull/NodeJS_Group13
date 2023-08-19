import dotenv from "dotenv";
import { DataSource } from "typeorm";

import app from "./app";
import { Bootstrap } from "./bootstrap/bootstrap";
import MySQLBootstrap from "./bootstrap/MySQL.bootstrap";
import RedisBootstrap from "./bootstrap/Redis.bootstrap";
import ServerBootstrap from "./bootstrap/Server.bootstrap";
import logger from "./core/helpers/logger";

const server: Bootstrap = new ServerBootstrap(app);
const mysql: Bootstrap = new MySQLBootstrap();
const redis: Bootstrap = new RedisBootstrap();

dotenv.config({ path: "env.txt" });

(async () => {
  try {
    logger.log("info", "Starting server...");
    const promises: Array<Promise<boolean | Error | DataSource>> = [
      server.initialize(),
      mysql.initialize(),
      redis.initialize(),
    ];
    await Promise.all(promises);
    logger.info("MySQL connected");
  } catch (error) {
    logger.error(error);
    mysql.close();
    server.close();
    redis.close();
  }
})();
