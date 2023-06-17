interface ICar {
  brake(): void;
  accelerate(): void;
}

interface IHybrid extends ICar {
  hybrid(): void;
}

class Toyota implements ICar {
  brake(): void {
    console.log("frenando en un Toyota");
  }
  accelerate(): void {
    console.log("acelerando en un Toyota");
  }
}

class Kia implements ICar {
  brake(): void {
    console.log("frenando en un Kia");
  }
  accelerate(): void {
    console.log("acelerando en un Kia");
  }
}

class ToyotaPrius implements IHybrid {
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
