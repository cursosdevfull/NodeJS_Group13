class UserInformationPersonal {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

class UserSalary {
  private salary: number;
  info: UserInformationPersonal;

  constructor(info: UserInformationPersonal, salary: number) {
    this.info = info;
    this.salary = salary;
  }

  get earnUser() {
    return this.salary;
  }

  set earnUser(salary: number) {
    this.salary = salary;
  }
}

const information = new UserInformationPersonal("Luis", "Cáceres");
const user = new UserSalary(information, 4000);
user.earnUser = 6000;
console.log(user.earnUser);
