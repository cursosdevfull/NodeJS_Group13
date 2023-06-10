class Animal {
  raza: string;
  color: string;

  constructor(raza: string, color: string) {
    this.raza = raza;
    this.color = color;
  }

  getDescription() {
    return `Raza del animal: ${this.raza}`;
  }
}

class Mamifero extends Animal {
  tipo: string = "Cetáceo";
  readonly createdAt: Date;

  constructor(inputRaza: string, inputColor: string) {
    super(inputRaza, inputColor);
    this.createdAt = new Date();
  }
}

const mamifero: Mamifero = new Mamifero("Ballena", "azul");
console.log("description", mamifero.getDescription());
