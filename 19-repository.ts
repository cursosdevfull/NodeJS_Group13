// Domain
class User {
  /*firstname: string
    lastname: string
  
    constructor(firstname: string, lastname: string){
      this.firstname = firstname
      this.lastname = lastname
    }*/

  constructor(
    public firstname: string,
    public lastname: string,
    readonly age: number
  ) {}
}

interface UserRepository {
  insert(user: User): User;
  findAll(): User[];
}

// Application
class UserCreated {
  //infra: UserInfrastructure

  constructor(public repository: UserRepository) {
    //this.infra = new UserInfrastructure()
    //this.infra = infra
  }

  execute(user: User) {
    const existingUser = this.validateExistingUser(user);

    if (!existingUser) return this.repository.insert(user);

    return null;
  }

  validateExistingUser(user: User): boolean {
    const users = this.repository.findAll();
    const isMatch = users.find(
      (el) => el.firstname === user.firstname && el.lastname === user.lastname
    );
    return isMatch ? true : false;
  }
}

class UserGetAll {
  constructor(public repository: UserRepository) {}

  execute() {
    return this.repository.findAll();
  }
}

interface IApplication {
  save(user: User): User;
}

// Infrastructure
class UserInfrastructure implements UserRepository {
  users = [new User("Claudia", "Lima", 40), new User("Alfonso", "Pérez", 20)];

  insert(user: User): User {
    this.users.push(user);
    return user;
  }

  findAll(): User[] {
    return this.fetch();
  }

  fetch(): User[] {
    return this.users;
  }
}

const infrastructure: UserRepository = new UserInfrastructure();
const userCreate = new UserCreated(infrastructure);
const userGetAll = new UserGetAll(infrastructure);
const user = new User("Juan", "Pérez", 30);

console.log(userCreate.execute(user));
console.log(userGetAll.execute());
