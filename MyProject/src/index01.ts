import { AppDataSource } from "./data-source";
import { User } from "./entity/User";

AppDataSource.initialize()
  .then(async () => {
    const user = new User("Bill", "Doe", "bill.doe@email.com", 25, true);

    //await AppDataSource.manager.save(user);
    //await AppDataSource.manager.connection.getRepository(User).save(user);
    //await AppDataSource.getRepository(User).save(user);

    AppDataSource.getRepository(User)
      .save(user)
      .then(console.log)
      .catch(console.error);

    //const users = await AppDataSource.manager.find(User);
    /*const users = await AppDataSource.manager.connection
      .getRepository(User)
      .find();*/
    //const users = await AppDataSource.getRepository(User).find();
    //console.log(users);
  })
  .catch((error) => console.log(error));
