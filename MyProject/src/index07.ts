import { AppDataSource } from "./data-source";
import { CarEntity } from "./entity/Car";
import { User } from "./entity/User";

AppDataSource.initialize()
  .then(async () => {
    const userRepository = AppDataSource.getRepository(User);
    const carRepository = AppDataSource.getRepository(CarEntity);

    const users = await userRepository.find({ relations: ["cars"] });
    console.log("users", JSON.stringify(users, null, "\t"));

    const cars = await carRepository.find({ relations: ["users"] });
    console.log("cars", JSON.stringify(cars, null, "\t"));
  })
  .catch((error) => console.log(error));
