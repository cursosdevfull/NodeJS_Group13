interface IProperties {
  name: string;
  lastname: string;
  cmp: string;
  email: string;
  specialty: string;
  subSpecialty: string;
}
type TProperties = {
  name: string;
  lastname: string;
  cmp: string;
  email: string;
  specialty: string;
  subSpecialty: string;
};

class Medic {
  name: string;
  lastname: string;
  cmp: string;
  email: string;
  specialty: string;
  subSpecialty: string;

  //constructor(obj: {name: string, lastname: string, cmp: string, email: string, specialty: string, subSpecialty: string}){
  //constructor(obj: IProperties) {
  constructor(obj: TProperties) {
    /*this.name = name;
    this.lastname = lastname
    this.cmp = cmp
    this.email = email
    this.specialty = specialty
    this.subSpecialty = subSpecialty*/
    this.name = obj.name;
    this.lastname = obj.lastname;
    this.cmp = obj.cmp;
    this.email = obj.email;
    this.specialty = obj.specialty;
    this.subSpecialty = obj.subSpecialty;
  }
}

//const medic = new Medic("José", "Lozada", "abc-123", "jose.lozada@correo.com", "Cardiología", "Cardiología geriátrica")
//const properties: IProperties = {name: "José", lastname: "Lozada", cmp: "abc-123", email: "jose.lozada@correo.com", specialty: "Cardiología", subSpecialty:"Cardiología geriátrica"}
const properties: TProperties = {
  name: "José",
  lastname: "Lozada",
  cmp: "abc-123",
  email: "jose.lozada@correo.com",
  specialty: "Cardiología",
  subSpecialty: "Cardiología geriátrica",
};
const medic = new Medic(properties);
