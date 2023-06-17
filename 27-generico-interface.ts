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
    public id: number,
    public fullname: string,
    public email: string,
    public password: string
  ) {}
}

interface Repository<Entity> {
  create(element: Entity): Entity;
  getOne(id: number): Entity;
  getAll(): Entity[];
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
class Create<Entity> {
  constructor(private readonly repository: Repository<Entity>) {}

  execute(entity: Entity) {
    return this.repository.create(entity);
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
class MedicInfrastructure implements Repository<Medic> {
  private medics: Medic[] = [
    new Medic(1, "Jorge", "Zapata"),
    new Medic(2, "Jimena", "Rincón"),
  ];

  create(medic: Medic): Medic {
    this.medics.push(medic);
    return medic;
  }
  getOne(id: number): Medic {
    return this.medics.find((medic) => medic.id === id);
  }
  getAll(): Medic[] {
    return this.medics;
  }
}

//class UserInfrastructure implements UserRepository {
class UserInfrastructure implements Repository<User> {
  private users: User[] = [
    new User(1, "Juan Pérez", "juan.perez@correo.com", "123"),
    new User(2, "Julieta Vargas", "julieta.vargas@correo.com", "123"),
  ];

  create(user: User): User {
    this.users.push(user);
    return user;
  }
  getOne(id: number): User {
    return this.users.find((user) => user.id === id);
  }
  getAll(): User[] {
    return this.users;
  }
}

const infraMedic: Repository<Medic> = new MedicInfrastructure();
const medicCreate = new Create<Medic>(infraMedic);
const medic = new Medic(3, "Carla", "Torrejón");
console.log(medicCreate.execute(medic));

const infraUser: Repository<User> = new UserInfrastructure();
const userCreate = new Create<User>(infraUser);
const user = new User(3, "Camila Yepez", "camila.yepez@correo.com", "123");
console.log(userCreate.execute(user));
