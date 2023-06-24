import { Address } from "../entities/address";
import { Disease } from "../entities/disease";
import { Specialty } from "../entities/specialty";

type GENDER = "M" | "F";

interface Props {
  id: string;
  name: string;
  lastname: string;
  dni: string;
  email: string;
  phone: string;
  gender: GENDER;
  address: Address[];
  nationality: string;
  cmp: string;
  specialty: Specialty;
  diseases: Disease[];
  age: number;
}

class Medic {
  private readonly id: string;
  private name: string;
  private lastname: string;
  private dni: string;
  private readonly email: string;
  private phone: string;
  private address: Address[];
  private nationality: string;
  private cmp: string;
  private gender: GENDER;
  private specialty: Specialty;
  private diseases: Disease[];
  private age: number;

  constructor(props: Props) {
    if (props.age < 18) throw new Error("El médico debe ser mayor de edad");
    if (props.age > 80) throw new Error("El médico debe ser menor de 80 años");

    if (props.dni.length !== 8) throw new Error("El DNI debe tener 8 dígitos");

    if (props.phone.length !== 9)
      throw new Error("El teléfono debe tener 9 dígitos");

    if (props.cmp.length !== 5) throw new Error("El CMP debe tener 5 dígitos");

    if (props.address.length === 0)
      throw new Error("El médico debe tener al menos una dirección");
    if (props.address.length > 3)
      throw new Error("El médico no puede tener más de 3 direcciones");

    Object.assign(this, props);
    /*this.id = props.id;
    this.name = props.name;
    this.lastname = props.lastname;
    this.dni = props.dni;
    this.email = props.email;
    this.phone = props.phone;
    this.address = props.address;
    this.nationality = props.nationality;
    this.cmp = props.cmp;
    this.specialty = props.specialty;
    this.diseases = props.diseases;
    this.age = props.age;
    this.gender = props.gender;*/
  }
}

const props: Props = {
  id: "6b17223b-eb8e-400e-9959-55e0a4e33355",
  name: "Juan",
  lastname: "Pérez",
  dni: "12345678",
  email: "juan.perez@correo.com",
  phone: "987654321",
  address: [
    {
      address: "Av. Los Olivos 123",
      district: "Los Olivos",
      province: "Lima",
      department: "Lima",
    },
  ],
  nationality: "Peruvian",
  cmp: "12345",
  specialty: {
    id: "6b17223b-eb8e-400e-9959-55e0a4e33355",
    name: "Cardiología",
    description: "Especialidad que estudia el corazón",
  },
  diseases: [new Disease("Diabetes"), new Disease("Hipertensión")],
  age: 30,
  gender: "M",
};

const medic = new Medic(props);

console.log(medic);
