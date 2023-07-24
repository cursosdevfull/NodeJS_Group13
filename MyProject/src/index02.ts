import { AppDataSource } from "./data-source";
import { User } from "./entity/User";

AppDataSource.initialize()
  .then(async () => {
    const userRepository = AppDataSource.getRepository(User);

    const listUsers = await userRepository.find();
    console.log("listUsers", listUsers);

    const userMark = await userRepository.find({ where: { name: "Mark" } });
    console.log("userMark", userMark);

    const userOnlyMark = await userRepository.findOne({
      where: { name: "Mark" },
    });
    console.log("userOnlyMark", userOnlyMark);

    const user30YearsOld = await userRepository.findOne({ where: { age: 30 } });
    console.log("user30YearsOld", user30YearsOld);

    const [usersRegistered, count] = await userRepository.findAndCount({
      where: { age: 25 },
    });
    //console.log("registerUsers", registerUsers);
    console.log("usersRegistered", usersRegistered);
    console.log("count", count);
  })
  .catch((error) => console.log(error));
