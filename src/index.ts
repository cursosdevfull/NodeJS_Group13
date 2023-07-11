import app from "./app";
import { Bootstrap } from "./bootstrap/bootstrap";
import ServerBootstrap from "./bootstrap/Server.bootstrap";

const server: Bootstrap = new ServerBootstrap(app);

(async () => {
  try {
    const promises: Array<Promise<boolean | Error>> = [server.initialize()];
    await Promise.all(promises);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
})();
