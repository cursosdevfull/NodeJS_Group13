import { AppDataSource } from "./data-source";
import { User } from "./entity/User";

AppDataSource.initialize()
  .then(async () => {
    const manager = AppDataSource.manager;

    const users = await manager
      .createQueryBuilder()
      .from(User, "user")
      .select("user.id, user.lastname, user.age")
      .orderBy("user.age", "DESC")
      .addOrderBy("user.lastname", "ASC")
      .offset(0)
      .limit(2)
      .getRawMany();

    console.log("users", users);
  })
  .catch((error) => console.log(error));
