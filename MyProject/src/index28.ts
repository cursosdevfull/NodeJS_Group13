import { AppDataSource } from "./data-source";
import { User } from "./entity/User";

AppDataSource.initialize()
  .then(async () => {
    const manager = AppDataSource.manager;

    const userInserted = await manager
      .createQueryBuilder()
      .from(User, "user")
      .insert()
      .values({
        name: "Jana",
        lastname: "Doe",
        email: "janadoe@email.com",
        age: 23,
      })
      .execute();
  })
  .catch((error) => console.log(error));
