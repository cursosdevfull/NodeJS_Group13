import "reflect-metadata";

import { Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";

import { MedicApplication } from "../application/medic.application";
import { Disease } from "../domain/entities/disease";
import { MedicProperties } from "../domain/roots/medic";
import { MedicCreateResponse } from "./dtos/responses/medic-create.dto";
import { MedicGetAllResponse } from "./dtos/responses/medic-get-all.dto";

export class MedicController {
  private application: MedicApplication;

  constructor(app: MedicApplication) {
    this.application = app;
    //this.getAll = this.getAll.bind(this);
  }

  insert(req: Request, res: Response) {
    console.log("body", req.body);
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
      res.json(MedicCreateResponse.fromDomainToResponse(result.value));
    }
  }

  getAll(req: Request, res: Response) {
    const result = this.application.getAll();
    if (result.isErr()) {
      console.log(result.error.name, result.error.message);
    } else {
      res.json(MedicGetAllResponse.fromDomainToResponse(result.value));
    }
  }
}
