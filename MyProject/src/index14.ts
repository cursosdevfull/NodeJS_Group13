import { AppDataSource } from "./data-source";
import { User } from "./entity/User";

AppDataSource.initialize()
  .then(async () => {
    const manager = AppDataSource.manager;

    await manager
      .createQueryBuilder()
      .from(User, "user")
      .update()
      .set({ email: "luis.perez@correo.com" })
      .where("user.id = :id", { id: 13 })
      .execute();

    await manager
      .createQueryBuilder()
      .from(User, "user")
      .delete()
      .where("user.id = :id", { id: 12 })
      .execute();

    await manager
      .createQueryBuilder()
      .from(User, "user")
      .delete()
      .where("user.id = :id")
      .setParameter("id", 11)
      .execute();
  })
  .catch((error) => console.log(error));
