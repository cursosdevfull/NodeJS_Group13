import { Brackets } from "typeorm";

import { AppDataSource } from "./data-source";
import { User } from "./entity/User";

AppDataSource.initialize()
  .then(async () => {
    const manager = AppDataSource.manager;

    const users = await manager
      .createQueryBuilder()
      .from(User, "user")
      .select(["user.id", "user.name", "user.lastname"])
      .where("user.age>=:minAge")
      .andWhere("user.age<=:maxAge")
      .andWhere(
        new Brackets((qb) => {
          qb.where("user.name like :name", { name: "%Elon%" }).orWhere(
            "user.lastname=:lastname",
            { lastname: "Pérez" }
          );
        })
      )
      .setParameters({ minAge: 20, maxAge: 40 })
      .getSql();
    //.getRawMany();

    console.log("users", users);
  })
  .catch((error) => console.log(error));
