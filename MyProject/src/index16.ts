import { AppDataSource } from "./data-source";
import { User } from "./entity/User";

AppDataSource.initialize()
  .then(async () => {
    const manager = AppDataSource.manager;

    const users = await manager
      .createQueryBuilder()
      .from(User, "user")
      .select(["user.id", "user.name", "user.lastname"])
      .where("user.id in (:...ids)")
      .setParameters({ ids: [9, 10] })
      .getRawMany();

    console.log("users", users);
  })
  .catch((error) => console.log(error));
