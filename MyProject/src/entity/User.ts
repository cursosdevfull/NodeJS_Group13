import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

import { CarEntity } from "./Car";

@Entity()
export class User {
  //@PrimaryColumn()
  @PrimaryGeneratedColumn()
  private id: number;

  @Column({ length: 50 })
  public name: string;

  @Column({ length: 50 })
  private lastname: string;

  @Column({ length: 100 })
  public email: string;

  @Column({ type: "int" })
  private age: number;

  @Column({ type: "boolean" })
  private isActive: boolean;

  //@ManyToOne(() => CarEntity, (car) => car.users, { cascade: true })
  //@JoinColumn()
  @ManyToMany(() => CarEntity, (car) => car.users)
  cars: Promise<CarEntity[]>;

  constructor(
    name: string,
    lastname: string,
    email: string,
    age: number,
    isActive: boolean,
    cars: Promise<CarEntity[]>
  ) {
    this.name = name;
    this.lastname = lastname;
    this.email = email;
    this.age = age;
    this.isActive = isActive;
    this.cars = cars;
  }
}
