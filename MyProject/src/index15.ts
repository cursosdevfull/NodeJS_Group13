import { AppDataSource } from "./data-source";
import { User } from "./entity/User";

AppDataSource.initialize()
  .then(async () => {
    const manager = AppDataSource.manager;

    const users = await manager
      .createQueryBuilder()
      .from(User, "user")
      .select(["user.id", "user.name", "user.lastname"])
      .where("user.age between :minAge and :maxAge")
      .setParameters({ minAge: 20, maxAge: 35 })
      .getRawMany();

    console.log("users", users);
  })
  .catch((error) => console.log(error));
