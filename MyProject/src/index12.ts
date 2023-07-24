import { AppDataSource } from "./data-source";
import { CarEntity } from "./entity/Car";

AppDataSource.initialize()
  .then(async () => {
    const carRepository = AppDataSource.getRepository(CarEntity);

    const car = await carRepository
      .createQueryBuilder("query_car")
      .where("query_car.id = 7")
      .getOne();

    console.log("car", car);
  })
  .catch((error) => console.log(error));
