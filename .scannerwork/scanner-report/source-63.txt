import { IsOptional, IsString } from 'class-validator';

export class UserUpdateDto {
  @IsString()
  @IsOptional()
  name: string;

  @IsString()
  @IsOptional()
  lastname: string;

  @IsString()
  @IsOptional()
  password: string;

  @IsOptional()
  roles: string[] | unknown[];
}
