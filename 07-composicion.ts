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

  constructor(firstName: string, lastName: string, salary: number) {
    this.info = new UserInformationPersonal(firstName, lastName);
    this.salary = salary;
  }
}

const user = new UserSalary("Luis", "Cáceres", 4000);
console.log(user);
