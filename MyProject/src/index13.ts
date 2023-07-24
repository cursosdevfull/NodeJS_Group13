import { AppDataSource } from "./data-source";
import { CarEntity } from "./entity/Car";

AppDataSource.initialize()
  .then(async () => {
    const manager = AppDataSource.manager;

    const car = await manager
      .createQueryBuilder()
      .from(CarEntity, "query_car")
      .where("query_car.id = 7")
      .getRawOne();

    console.log("car", car);

    const car2 = await manager
      .createQueryBuilder()
      .from(CarEntity, "query_car")
      .select("query_car.id, query_car.marca, query_car.annio")
      .where("query_car.id = 7")
      .getSql();
    //.getRawOne();

    console.log("car2", car2);
  })
  .catch((error) => console.log(error));
