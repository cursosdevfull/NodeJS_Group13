import { v4 as uuidv4 } from "uuid";

import { MedicApplication } from "../application/medic.application";
import { Disease } from "../domain/entities/disease";
import { MedicRepository } from "../domain/repositories/medic.repository";
import { MedicProperties } from "../domain/roots/medic";
import { MedicInfrastructure } from "../infrastructure/medic.infrastructure";

export class MedicController {
  private application: MedicApplication;

  constructor(app: MedicApplication) {
    this.application = app;
  }

  insert() {
    const props: MedicProperties = {
      id: uuidv4(),
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

    const result = this.application.create(props);
    if (result.isErr()) {
      console.log(result.error.name, result.error.message);
    } else {
      return result.value;
    }
  }
}
const infrastructure: MedicRepository = new MedicInfrastructure();
const application = new MedicApplication(infrastructure);
const controller = new MedicController(application);
console.log(controller.insert());
