import { Type } from "class-transformer";
import {
  ArrayMaxSize,
  ArrayMinSize,
  IsArray,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
  Max,
  MaxLength,
  Min,
  MinLength,
  ValidateNested,
} from "class-validator";

import { Disease } from "../../../../../modules/medic/domain/entities/disease";
import { Address } from "../../../domain/entities/address";
import { Specialty } from "../../../domain/entities/specialty";
import { GENDER } from "../../../domain/roots/medic";

export class MedicCreateDto {
  @IsNotEmpty()
  @IsString()
  @IsUUID()
  id: string;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  lastname: string;

  @IsNotEmpty()
  @IsString()
  cmp: string;

  @IsOptional()
  specialty: Specialty;

  @IsNotEmpty()
  @IsString()
  @IsEmail({}, { message: "El correo no es válido" })
  email: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(8)
  @MaxLength(8)
  dni: string;

  @IsOptional()
  @IsString()
  @MinLength(9)
  @MaxLength(9)
  phone: string;

  @IsOptional()
  @IsArray()
  @ValidateNested()
  @ArrayMinSize(1)
  @ArrayMaxSize(3)
  @Type(() => Address)
  address: Address[];

  @IsOptional()
  @IsString()
  nationality: string;

  @IsOptional()
  @IsString()
  @MinLength(1)
  @MaxLength(1)
  gender: GENDER;

  @IsOptional()
  @IsArray()
  diseases: Disease[];

  @IsOptional()
  @IsNumber()
  @Min(18)
  @Max(80)
  age: number;
}
