interface ICar {
  brake(): void;
  accelerate(): void;
  hybrid(): void;
}

class Toyota implements ICar {
  hybrid(): void {
    throw new Error("Method not implemented.");
  }
  brake(): void {
    console.log("frenando en un Toyota");
  }
  accelerate(): void {
    console.log("acelerando en un Toyota");
  }
}

class Kia implements ICar {
  hybrid(): void {
    throw new Error("Method not implemented.");
  }
  brake(): void {
    console.log("frenando en un Kia");
  }
  accelerate(): void {
    console.log("acelerando en un Kia");
  }
}

class ToyotaPrius implements ICar {
  hybrid(): void {
    console.log("function hybrid");
  }
  brake(): void {
    console.log("frenando en un Toyota Prius");
  }
  accelerate(): void {
    console.log("acelerando en un Toyota Prius");
  }
}
