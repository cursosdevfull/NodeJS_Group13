import "reflect-metadata";

import { validate } from "class-validator";
import { NextFunction, Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";

import { IError } from "../../../core/error/error.interface";
import logger from "../../../core/helpers/logger";
import { MedicApplication } from "../application/medic.application";
import { Disease } from "../domain/entities/disease";
import { MedicProperties } from "../domain/roots/medic";
import { MedicCreateDto } from "./dtos/requests/medic-create.dto";
import { MedicCreateResponse } from "./dtos/responses/medic-created.dto";
import { MedicGetAllResponse } from "./dtos/responses/medic-get-all.dto";

export class MedicController {
  private application: MedicApplication;

  constructor(app: MedicApplication) {
    this.application = app;
    this.getAll = this.getAll.bind(this);
  }

  async insert(req: Request, res: Response, next: NextFunction) {
    const medicCreateDto = new MedicCreateDto();
    medicCreateDto.id = req.body.id;
    medicCreateDto.name = req.body.name;
    medicCreateDto.lastname = req.body.lastname;
    medicCreateDto.dni = req.body.dni;
    medicCreateDto.email = req.body.email;
    medicCreateDto.phone = req.body.phone;
    medicCreateDto.address = req.body.address;
    medicCreateDto.cmp = req.body.cmp;
    medicCreateDto.specialty = req.body.specialty;
    medicCreateDto.diseases = req.body.diseases;
    medicCreateDto.nationality = req.body.nationality;
    medicCreateDto.age = req.body.age;
    medicCreateDto.gender = req.body.gender;

    const errors = await validate(medicCreateDto);

    if (errors.length > 0) {
      const listErrors: string[] = [];
      for (const error of errors) {
        for (const constraint in error.constraints) {
          listErrors.push(error.constraints[constraint]);
        }
      }

      const err: IError = new Error();
      err.name = "ValidationError";
      err.message = "Validation Error";
      err.stack = listErrors.join(" || ");
      err.status = 411;

      /*const err: IError = new Error();
      err.name = "ValidationError";
      err.message = "Validation Error";
      err.stack = JSON.stringify(errors);
      err.status = 411;*/
      //logger.error(errors);
      // console.log(errors);
      return next(err);
      //return res.status(411).json(listErrors);
      //return res.status(err.status).json(err);
    }

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
      logger.error(result.error.name, result.error.message);
    } else {
      res.json(MedicCreateResponse.fromDomainToResponse(result.value));
    }
  }

  getAll(req: Request, res: Response) {
    const result = this.application.getAll();
    if (result.isErr()) {
      logger.error(result.error.name, result.error.message);
    } else {
      res.json(MedicGetAllResponse.fromDomainToResponse(result.value));
    }
  }
}
