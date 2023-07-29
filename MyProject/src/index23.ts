import { AppDataSource } from "./data-source";
import { User } from "./entity/User";

AppDataSource.initialize()
  .then(async () => {
    const manager = AppDataSource.manager;

    const users = await manager
      .createQueryBuilder()
      .from(User, "user")
      .select("user.id, user.name")
      .having("user.id > 2")
      .getRawMany();

    console.log("users", users);
  })
  .catch((error) => console.log(error));
