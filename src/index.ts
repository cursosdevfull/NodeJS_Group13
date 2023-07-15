import app from "./app";
import { Bootstrap } from "./bootstrap/bootstrap";
import ServerBootstrap from "./bootstrap/Server.bootstrap";
import logger from "./core/helpers/logger";

const server: Bootstrap = new ServerBootstrap(app);

(async () => {
  try {
    logger.log("info", "Starting server...");
    const promises: Array<Promise<boolean | Error>> = [server.initialize()];
    await Promise.all(promises);
  } catch (error) {
    logger.error(error);
    process.exit(1);
  }
})();
