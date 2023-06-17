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

type UserProperties = UserEssentials & Partial<UserOptionals>;

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

  constructor(properties: UserProperties) {
    Object.assign(this, properties);
  }

  update() {}

  delete() {}

  reconstitute() {}
}

const properties: UserProperties = {
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
