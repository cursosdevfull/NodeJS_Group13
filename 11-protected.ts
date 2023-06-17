class User {
  readonly userId: string = "58ef97b1-d61c-4f3d-bd8e-74234138ac37";
  protected readonly password: string = "Wz4uK7U2Bph9PRj";
}

class Developer extends User {
  getPasswordLength() {
    return this.password.length;
  }
}

class DeveloperCloud extends Developer {
  constructor() {
    super();
    console.log(this.password);
  }
}

const user = new User();
//console.log(user.password)

const developer = new Developer();
//console.log(developer.password)
console.log(developer.getPasswordLength());

const developerCloud = new DeveloperCloud();
//console.log(developerCloud.password)
