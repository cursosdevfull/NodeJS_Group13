class User {
  private readonly userId: number;
  private email: string;
  private name: string;
  private age: number;
  private readonly createdAt: Date;
  private updatedAt: Date | string | null = null;

  constructor(email: string, name: string, age: number) {
    this.email = email;
    this.name = name;
    this.age = age;
    this.userId = Math.random();
    this.createdAt = new Date();
  }

  getProperties() {
    return {
      userId: this.userId,
      email: this.email,
      name: this.name,
      age: this.age,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }

  update(email: string, name: string, age: number) {
    //this.userId = 50
    this.email = email;
    this.name = name;
    this.age = age;
    this.updatedAt = new Date().toString();
  }
}

const user = new User("sergio@correo.com", "Sergio", 40);
console.log(user.getProperties());
user.update("juan@correo.com", "Juan", 30);
console.log(user.getProperties());

const isLogged: boolean = false;
const text = "No logueado";

console.log("test", isLogged || text);
