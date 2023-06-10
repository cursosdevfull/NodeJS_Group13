let username: string = "José Luis";

username = "Sergio";
username = "Carla";
//username = 40

let patientAge: number;
let isLogged: boolean;
let listNames: string[] = ["Javier", "Pedro"];
let listStudentsNames: { name: string; age: number; addresses: string[] }[] = [
  { name: "Claudia", age: 25, addresses: [] },
  { name: "Gerardo", age: 28, addresses: ["calle 123. San Isidro"] },
];

let studentsNames: Array<string> = ["Javier", "Pedro"];

let data: Array<Array<string>> = [
  ["Pedro", "Jimena"],
  ["Carla", "Sofia", "Carmen"],
];
let dataUsers: Array<Array<{ name: string; age: number }>> = [
  [
    { name: "Luisa", age: 20 },
    { name: "Claudia", age: 34 },
  ],

  [{ name: "Gustavo", age: 29 }],
];

function infoUser() {
  let age = 17;
  console.log("age", age);
  return age > 18 ? "Menor de edad" : "Mayor de edad";
}

console.log(infoUser());
//console.log(age)
