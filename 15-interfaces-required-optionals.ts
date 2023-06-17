interface UserEssentials {
  userId: string;
  firstname: string;
  lastname: string;
  email: string;
}

interface UserOptionals {
  age: number;
  gender: boolean;
  tall: number;
}

interface UserProperties {
  userId: string;
  firstname: string;
  lastname: string;
  email: string;
  age?: number;
  gender?: boolean;
  tall?: number;
}

// UserEssentials & Partial<UserOptionals>

interface IUser {
  fullname: string;
  update(): void;
  delete(): void;
  reconstitute(): void;
}

class User implements IUser {
  fullname: string = "";
  userId: string;
  firstname: string;
  lastname: string;
  age: number;
  gender: boolean;
  email: string;
  tall: number;

  constructor(properties: UserEssentials & Partial<UserOptionals>) {
    Object.assign(this, properties);
  }

  update() {}

  delete() {}

  reconstitute() {}
}

//const user = new User("58ef97b1-d61c-4f3d-bd8e-74234138ac37", "zavala", "javier", 34, true, "javier.zavala@correo.com", 180)
const properties: UserEssentials & Partial<UserOptionals> = {
  userId: "58ef97b1-d61c-4f3d-bd8e-74234138ac37",
  firstname: "Javier",
  lastname: "zavala",
  age: 34,
  //gender: true,
  email: "javier.zavala@correo.com",
  //tall: 180
};

const user = new User(properties);
console.log(user);
