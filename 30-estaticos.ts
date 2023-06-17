class Database {
  private static readonly protocol = "http";

  static getConnectionString(
    host: string,
    username: string,
    password: string
  ): string {
    return `${this.protocol}://${host}/${username}:${password}`;
  }
}

//console.log(Database.protocol)
console.log(Database.getConnectionString("cursos-dev.com", "shidalgo", "123"));
