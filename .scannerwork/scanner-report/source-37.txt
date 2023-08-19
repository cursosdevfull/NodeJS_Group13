import { Address } from '../entities/address';
import { Disease } from '../entities/disease';
import { Specialty } from '../entities/specialty';
import { MedicFactory } from './medic.factory';

export type GENDER = 'M' | 'F';

export interface MedicEssentials {
  readonly id: string;
  readonly name: string;
  readonly lastname: string;
  readonly dni: string;
  readonly email: string;
  readonly cmp: string;
}

export interface MedicOptionals {
  readonly phone: string;
  readonly gender: GENDER;
  readonly address: Address[];
  readonly nationality: string;
  readonly specialty: Specialty;
  readonly diseases: Disease[];
  readonly age: number;
  readonly active: boolean;
  readonly createdAt: Date;
  readonly updatedAt: Date | null;
  readonly deletedAt: Date | null;
}

export type MedicUpdate = Partial<
  Omit<MedicEssentials, 'id' | 'email'> &
    Omit<MedicOptionals, 'createdAt' | 'deletedAt' | 'updatedAt' | 'active'>
>;

export type MedicProperties = MedicEssentials & Partial<MedicOptionals>;

export class Medic {
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
  private active: boolean;
  private readonly createdAt: Date;
  private updatedAt: Date | null;
  private deletedAt: Date | null;

  constructor(props: MedicProperties) {
    Object.assign(this, props);
    this.active = true;
    this.createdAt = new Date();
  }

  update(props: MedicUpdate) {
    if (!this.active) return;
    Object.assign(this, props);
    this.updatedAt = new Date();
  }

  delete() {
    this.active = false;
    this.deletedAt = new Date();
  }

  properties(): MedicProperties {
    return Object.assign(
      {},
      {
        id: this.id,
        name: this.name,
        lastname: this.lastname,
        dni: this.dni,
        email: this.email,
        phone: this.phone,
        address: this.address,
        cmp: this.cmp,
        gender: this.gender,
        nationality: this.nationality,
        specialty: this.specialty,
        diseases: this.diseases,
        age: this.age,
        active: this.active,
        createdAt: this.createdAt,
        updatedAt: this.updatedAt,
        deletedAt: this.deletedAt,
      },
    );
  }

  static reconstitute(props: MedicProperties) {
    return MedicFactory.create(props);
  }
}

/*const props: Props = {
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

console.log(medic);*/
