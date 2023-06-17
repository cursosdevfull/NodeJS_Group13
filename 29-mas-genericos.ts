// domain
class Medic {
  constructor(
    public id: number,
    public name: string,
    public lastname: string
  ) {}
}

class User {
  constructor(
    public id: string,
    public fullname: string,
    public email: string,
    public password: string
  ) {}
}

abstract class Repository<Entity, TypeID> {
  abstract elements: Entity[];

  create(entity: Entity): Entity {
    this.elements.push(entity);
    return entity;
  }
  getOne(id: TypeID): Entity {
    return this.elements.find((el: any) => user.id === id);
  }
  getAll(): Entity[] {
    return this.elements;
  }
  /*abstract create(entity: Entity): Entity
    abstract getOne(id: number): Entity
    abstract getAll(): Entity[]*/
}

abstract class MedicRepository extends Repository<Medic, number> {
  abstract report(): Medic[];
}

/*interface MedicRepository {
    create(medic: Medic): Medic
    getOne(id: number): Medic
    getAll(): Medic[]
  }
  
  interface UserRepository {
    create(user: User): User
    getOne(id: number): User
    getAll(): User[]
  }*/

// application
class Create<Entity, TypeID> {
  constructor(private readonly repository: Repository<Entity, TypeID>) {}

  execute(entity: Entity): Entity {
    return this.repository.create(entity);
  }
}

class MedicReport {
  constructor(private readonly repository: MedicRepository) {}

  execute() {
    return this.repository.report();
  }
}

/*class MedicCreate {
    constructor(private readonly repository: Repository<Medic>) { }
  
    execute(medic: Medic): Medic {
      return this.repository.create(medic)
    }
  }
  
  class UserCreate {
    constructor(private readonly repository: Repository<User>) { }
  
    execute(user: User): User {
      return this.repository.create(user)
    }
  }*/

// infrastructure
//class MedicInfrastructure implements MedicRepository {
class MedicInfrastructure extends MedicRepository {
  elements: Medic[] = [
    new Medic(1, "Jorge", "Zapata"),
    new Medic(2, "Jimena", "Rincón"),
  ];

  report() {
    return this.elements;
  }
}

//class UserInfrastructure implements UserRepository {
class UserInfrastructure extends Repository<User, string> {
  elements: User[] = [
    new User("1", "Juan Pérez", "juan.perez@correo.com", "123"),
    new User("2", "Julieta Vargas", "julieta.vargas@correo.com", "123"),
  ];
}

const infraMedic: Repository<Medic, number> = new MedicInfrastructure();
const medicCreate = new Create<Medic, number>(infraMedic);
const medic = new Medic(3, "Carla", "Torrejón");
console.log(medicCreate.execute(medic));

const infraUser: Repository<User, string> = new UserInfrastructure();
const userCreate = new Create<User, string>(infraUser);
const user = new User("3", "Camila Yepez", "camila.yepez@correo.com", "123");
console.log(userCreate.execute(user));
