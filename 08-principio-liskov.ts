class Persona {
  firstName: string;
  lastName: string;
  age: number;

  constructor(firstName: string, lastName: string, age: number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  getProperties() {
    return {
      firstName: this.firstName,
      lastName: this.lastName,
      age: this.age,
    };
  }
}

class Adult extends Persona {
  license: string;

  constructor(
    firstName: string,
    lastName: string,
    age: number,
    license: string
  ) {
    super(firstName, lastName, age);
    this.license = license;
  }

  getLicense() {
    return this.license;
  }
}

class Baby extends Persona {}

const persona: Persona = new Baby("Jorge", "Pinedo", 1);
console.log("persona", persona.getProperties());

const adult: Adult = new Adult("Pedro", "Salinas", 40, "abc-1234");
console.log("adult", adult.getProperties());
console.log("license", adult.getLicense());

const persona2: Persona = new Adult("Luis", "Camacho", 23, "def-5678");
console.log("persona2", persona2.getProperties());

const persona3: Persona = new Baby("Luis", "Camacho", 23);
console.log("persona2", persona3.getProperties());
