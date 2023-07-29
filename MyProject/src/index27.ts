import { AppDataSource } from "./data-source";

AppDataSource.initialize()
  .then(async () => {
    const manager = AppDataSource.manager;

    const users = await manager.query("call getUsersByAge(?)", [34]);

    console.log("users", users[0]);

    await manager.query("call addUser(?, ?, ?, ?)", [
      "John",
      "Doe",
      34,
      "johndo@email.com",
    ]);
  })
  .catch((error) => console.log(error));
