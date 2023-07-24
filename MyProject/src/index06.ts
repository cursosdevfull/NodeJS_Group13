import { AppDataSource } from "./data-source";
import { CarEntity } from "./entity/Car";
import { User } from "./entity/User";

AppDataSource.initialize()
  .then(async () => {
    const car1 = new CarEntity();
    car1.brand = "Toyota";
    car1.model = "Corolla";
    car1.year = 2018;
    car1.color = "White";

    const carRepository = AppDataSource.getRepository(CarEntity);

    const carSaved1 = await carRepository.save(car1);
    console.log("carSaved", carSaved1);

    const car2 = new CarEntity();
    car2.brand = "Kia";
    car2.model = "Santa Fe";
    car2.year = 2023;
    car2.color = "Red";

    const carSaved2 = await carRepository.save(car2);
    console.log("carSaved", carSaved2);

    const userRepository = AppDataSource.getRepository(User);

    const user = new User("Mark", "Zuckerberg", "mark@meta.com", 34, true, [
      car1,
      car2,
    ]);
    const userSaved = await userRepository.save(user);
    console.log("userSaved", userSaved);

    const user2 = new User("Elon", "Musk", "elon@twitter.com", 34, true, [
      car2,
    ]);
    const userSaved2 = await userRepository.save(user2);
    console.log("userSaved", userSaved2);
  })
  .catch((error) => console.log(error));
