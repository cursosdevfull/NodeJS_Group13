class Database {
  private host: string;
  private username: string;
  private password: string;
  private createdAt: Date;

  private static instance: Database;

  private constructor(host: string, username: string, password: string) {
    this.createdAt = new Date();
    this.host = host;
    this.username = username;
    this.password = password;
  }

  static create(host: string, username: string, password: string) {
    if (!this.instance) {
      this.instance = new Database(host, username, password);
    }

    return this.instance;
  }

  get date() {
    return this.createdAt;
  }

  changeUsername(newUsername: string) {
    this.username = newUsername;
  }
}

//const instance01 = new Database("localhost", "user", "dios")
//const instance02 = new Database("localhost", "user", "dios")
const instance01 = Database.create("localhost", "user1", "dios");
const instance02 = Database.create("localhost", "user2", "dios");
const instance03 = Database.create("localhost", "user3", "dios");
const instance04 = Database.create("localhost", "user4", "dios");

console.log(instance01.date);
console.log(instance02.date);
console.log(instance03.date);
console.log(instance04.date);

instance01.changeUsername("shidalgo");
console.log(instance04);
