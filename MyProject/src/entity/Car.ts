import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

import { User } from './User';

@Entity({ name: "car" })
export class CarEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50, type: "varchar", name: "marca" })
  brand: string;

  @Column({ length: 50, type: "varchar", name: "modelo" })
  model: string;

  @Column({ type: "int", name: "annio" })
  year: number;

  @Column({ length: 50, type: "varchar" })
  color: string;

  @Column({ type: "timestamp", default: () => "now()" })
  createdAt: Date;

  //@OneToMany(() => User, (user) => user.car)
  @ManyToMany(() => User, (user) => user.cars/*, { eager: true }*/)
  @JoinTable()
  users: Promise<User[]>;
}
