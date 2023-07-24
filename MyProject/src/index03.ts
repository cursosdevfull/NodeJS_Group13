import { AppDataSource } from "./data-source";
import { CarEntity } from "./entity/Car";

AppDataSource.initialize()
  .then(async () => {
    const car = new CarEntity();
    car.brand = "Toyota";
    car.model = "Corolla";
    car.year = 2018;
    car.color = "White";

    const carRepository = AppDataSource.getRepository(CarEntity);
    const carSaved = await carRepository.save(car);

    console.log("carSaved", carSaved);
  })
  .catch((error) => console.log(error));
