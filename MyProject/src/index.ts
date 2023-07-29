import { AppDataSource } from "./data-source";
import { CarEntity } from "./entity/Car";
import { User } from "./entity/User";

AppDataSource.initialize()
  .then(async () => {
    const report = await AppDataSource.manager
      .createQueryBuilder()
      .from(CarEntity, "car")
      .select([
        "car.id",
        "car.brand",
        "car.model",
        "car.year",
        "car.color",
        "user.name",
        "user.email",
        "user.age",
      ])
      .leftJoin("car.users", "user")
      .getRawMany();

    //console.log(report);

    const reportUsers = await AppDataSource.manager
      .createQueryBuilder()
      .from(User, "user")
      .select([
        "user.id",
        "user.name",
        "user.lastname",
        "user.email",
        "user.age",
        "car.brand",
        "car.model",
        "car.year",
        "car.color",
      ])
      .leftJoin("user.cars", "car")
      .getRawMany();

    console.log(reportUsers);
  })
  .catch((error) => console.log(error));
