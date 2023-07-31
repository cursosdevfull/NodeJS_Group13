import { ok, Result } from "neverthrow";

import { DatabaseException } from "../../../core/exceptions/database.exception";
import { MedicRepository } from "../domain/repositories/medic.repository";
import { Medic } from "../domain/roots/medic";
import { MedicGetAllDto } from "./dtos/get-all.dto";

export type MedicSaveResult = Result<Medic, DatabaseException>;
export type MedicGetAllResult = Result<Medic[], Error>;
export class MedicInfrastructure implements MedicRepository {
  save(medic: Medic): MedicSaveResult {
    return ok(medic);
  }

  getAll(): MedicGetAllResult {
    const medic = {
      id: "6b17223b-eb8e-400e-9959-55e0a4e33355",
      nombre: "Juan",
      apellido: "Pérez",
      dni: "12345678",
      email: "juan.perez@correo.com",
      telefono: "987654321",
      direccion: "Av. Los Olivos 123",
      distrito: "Los Olivos",
      provincia: "Lima",
      departamento: "Lima",
      nacionalidad: "Peruano",
      cmp: "12345",
      especialidad: "Cardiología",
      descripcion: "Especialidad que estudia el corazón",
      especialidadId: "6b17223b-eb8e-400e-9959-55e0a4e33355",
      enfermedad1: "Diabetes",
      enfermedad2: "Hipertensión",
      edad: 30,
      sexo: "M",
    };

    const listMedic = [medic, medic, medic, medic];

    return MedicGetAllDto.fromDataToDomain(listMedic);
  }
}
