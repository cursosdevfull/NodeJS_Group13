import { AppDataSource } from "./data-source";
import { CarEntity } from "./entity/Car";
import { User } from "./entity/User";

AppDataSource.initialize()
  .then(async () => {
    const queryRunner = AppDataSource.manager.connection.createQueryRunner();
    await queryRunner.startTransaction();
    const manager = queryRunner.manager;

    try {
      const carInserted = await manager
        .createQueryBuilder()
        .from(CarEntity, "car")
        .insert()
        .values({
          brand: "Ford",
          model: "Fiesta",
          year: 2010,
          color: "red",
        })
        .execute();

      const userInserted = await manager
        .createQueryBuilder()
        .from(User, "user")
        .insert()
        .values({
          name: "Willy",
          lastname: "Colón",
          email: "myWilly@email.com",
          age: 30,
        })
        .execute();

      console.log("carInserted", carInserted);
      console.log("userInserted", userInserted);

      await queryRunner.commitTransaction();
    } catch (error) {
      await queryRunner.rollbackTransaction();
      console.log(error);
    } finally {
      await queryRunner.release();
    }
  })
  .catch((error) => console.log(error));
