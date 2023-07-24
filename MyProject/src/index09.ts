import { AppDataSource } from "./data-source";
import { CarEntity } from "./entity/Car";

AppDataSource.initialize()
  .then(async () => {
    const car1 = new CarEntity();
    car1.brand = "Toyota";
    car1.model = "Corolla";
    car1.year = 2018;
    car1.color = "White";

    const carRepository = AppDataSource.getRepository(CarEntity);
    const cars = await carRepository.find({
      select: {
        brand: true,
        model: true,
        year: true,
      },
    });

    console.log("cars", cars);
  })
  .catch((error) => console.log(error));
