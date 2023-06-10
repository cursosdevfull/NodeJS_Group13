class Animal {
  raza: string;
  public color: string;

  constructor() {
    this.color = "beige";
    this.raza = "husky";
  }

  getDescription() {
    return `Raza: ${this.raza}. Color: ${this.color}`;
  }
}

const animal = new Animal();

console.log("raza", animal.raza);
console.log("color", animal.color);
console.log("description", animal.getDescription());
