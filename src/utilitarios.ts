const className = "Utilitarios";

export default className;

export class ToUpper {
  static execute(value: string) {
    return value.toUpperCase();
  }
}

export class ToLower {
  static execute(value: string) {
    return value.toLowerCase();
  }
}

export class Capitalize {
  static execute(value: string) {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }
}
