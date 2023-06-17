class Database {
  private readonly protocol = "http";
  private host: string;
  private username: string;
  private readonly password: string;
  private static domainsAllowed = ["cursos-dev.com", "cursosdev.com"];

  private constructor(host: string, username: string, password: string) {
    this.host = host;
    this.username = username;
    this.password = password;
  }

  static create(host: string, username: string, password: string) {
    if (!this.domainsAllowed.includes(host)) return null;

    if (password.length < 8) return null;

    return new Database(host, username, password);
  }

  getConnectionString() {
    return `${this.protocol}://${this.host}/${this.username}:${this.password}`;
  }
}

//console.log(Database.protocol)
const database = Database.create("cursos-dev.com", "shidalgo", "12345678");
console.log(database);
