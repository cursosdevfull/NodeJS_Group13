type TProperties = {
  name: string;
  lastname: string;
  cmp: string;
  email: string;
  specialty: string;
  subSpecialty: string;
  isActive: boolean;
};

class Medic {
  name: string;
  lastname: string;
  cmp: string;
  email: string;
  specialty: string;
  subSpecialty: string;
  isActive: boolean;

  constructor(obj: TProperties) {
    this.name = obj.name;
    this.lastname = obj.lastname;
    this.cmp = obj.cmp;
    this.email = obj.email;
    this.specialty = obj.specialty;
    this.subSpecialty = obj.subSpecialty;
    this.isActive = obj.isActive;
  }
}

class MedicBuilder {
  private name: string = "";
  private lastname: string = "";
  private cmp: string = "";
  private email: string = "";
  private specialty: string = "";
  private subSpecialty: string = "";
  private isActive: boolean = false;

  addName(name: string) {
    this.name = name;
    return this;
  }

  addLastname(lastname: string) {
    this.lastname = lastname;
    return this;
  }

  addCmp(cmp: string) {
    this.cmp = cmp;
    return this;
  }

  addEmail(email: string) {
    this.email = email;
    return this;
  }

  addSpecialty(specialty: string) {
    this.specialty = specialty;
    return this;
  }

  addSubSpecialty(subSpecialty: string) {
    this.subSpecialty = subSpecialty;
    return this;
  }

  active() {
    this.isActive = true;
    return this;
  }

  create() {
    const obj: TProperties = {
      name: this.name,
      lastname: this.lastname,
      cmp: this.cmp,
      email: this.email,
      specialty: this.specialty,
      subSpecialty: this.subSpecialty,
      isActive: this.isActive,
    };
    return new Medic(obj);
  }
}

const medic = new MedicBuilder()
  .active()
  .addName("José")
  .addLastname("Lozada")
  .addCmp("abc-123")
  .addEmail("jose.lozada@correo.com")
  .addSpecialty("Cardiología")
  .addSubSpecialty("Cardiología geriátrica")
  .create();

console.log(medic);
