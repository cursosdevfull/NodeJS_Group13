import { AppDataSource } from "./data-source";
import { CarEntity } from "./entity/Car";
import { User } from "./entity/User";

AppDataSource.initialize()
  .then(async () => {
    const car = new CarEntity();
    car.brand = "Toyota";
    car.model = "Corolla";
    car.year = 2018;
    car.color = "White";

    const carRepository = AppDataSource.getRepository(CarEntity);
    //const carSaved = await carRepository.save(car);

    //console.log("carSaved", carSaved);

    const userRepository = AppDataSource.getRepository(User);

    const user = new User("Mark", "Zuckerberg", "mark@meta.com", 34, true, car);
    const userSaved = await userRepository.save(user);
    console.log("userSaved", userSaved);

    const user2 = new User("Elon", "Musk", "elon@twitter.com", 34, true, car);
    const userSaved2 = await userRepository.save(user2);
    console.log("userSaved", userSaved2);
  })
  .catch((error) => console.log(error));
