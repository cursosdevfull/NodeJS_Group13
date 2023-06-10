class UserInformationPersonal {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

class UserSalary {
  salary: number;
  info: UserInformationPersonal;

  constructor(info: UserInformationPersonal, salary: number) {
    this.info = info;
    this.salary = salary;
  }
}

const information = new UserInformationPersonal("Luis", "Cáceres");
const user = new UserSalary(information, 4000);
console.log(user);
