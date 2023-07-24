import "reflect-metadata";

import { DataSource } from "typeorm";

import { CarEntity } from "./entity/Car";
import { User } from "./entity/User";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "user",
  password: "12345",
  database: "course_nodejs",
  synchronize: true,
  logging: false,
  entities: [User, CarEntity],
  migrations: [],
  subscribers: [],
});
