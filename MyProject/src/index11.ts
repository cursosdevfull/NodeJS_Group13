import { AppDataSource } from "./data-source";
import { User } from "./entity/User";

AppDataSource.initialize()
  .then(async () => {
    const userRepository = AppDataSource.getRepository(User);

    const PAGE_SIZE = 3;
    const PAGE = 0;

    const [registers, count] = await userRepository.findAndCount({
      skip: PAGE * PAGE_SIZE,
      take: PAGE_SIZE,
      order: { name: "ASC" },
    });

    console.log("registers", registers);
    console.log("count", count);
  })
  .catch((error) => console.log(error));
