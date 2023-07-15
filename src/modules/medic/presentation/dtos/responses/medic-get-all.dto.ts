import {
  Exclude,
  Expose,
  instanceToPlain,
  plainToInstance,
  Type,
} from "class-transformer";
import { v4 as uuidv4 } from "uuid";

import { Address } from "../../../domain/entities/address";
import { Disease } from "../../../domain/entities/disease";
import { Specialty } from "../../../domain/entities/specialty";
import { GENDER, Medic } from "../../../domain/roots/medic";

export class MedicGotAllDto {
  @Expose({ name: "id" })
  medicId: string;

  @Expose({ name: "name" })
  nombre: string;

  lastname: string;
  cmp: string;
  specialty: Specialty;

  @Expose({ groups: ["admin"] })
  email: string;

  @Exclude()
  dni: string;

  @Exclude()
  phone: string;

  @Exclude()
  address: Address[];

  @Exclude()
  nationality: string;

  @Exclude()
  gender: GENDER;

  @Exclude()
  diseases: Disease[];

  @Exclude()
  age: number;

  @Exclude()
  active: boolean;

  @Exclude()
  createdAt: Date;

  @Exclude()
  private updatedAt: Date | null;

  @Exclude()
  private deletedAt: Date | null;
}

export class StandardResponse {
  traceId: string;

  @Type(() => MedicGotAllDto)
  result: MedicGotAllDto[];

  constructor() {
    this.traceId = uuidv4();
  }
}

export class MedicGetAllResponse {
  static fromDomainToResponse(medics: Medic[]) {
    const listMedic = medics.map((medic) => {
      const properties = medic.properties();
      return plainToInstance(MedicGotAllDto, { ...properties });
    });

    const result = instanceToPlain(listMedic);

    return plainToInstance(
      StandardResponse,
      { result: result },
      { groups: ["admin"] }
    );
  }
}
