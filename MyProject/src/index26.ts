import { AppDataSource } from "./data-source";

AppDataSource.initialize()
  .then(async () => {
    const manager = AppDataSource.manager;

    const users = await manager.query(
      "select id, name, lastname, age from user"
    );

    console.log("users", users);
  })
  .catch((error) => console.log(error));
