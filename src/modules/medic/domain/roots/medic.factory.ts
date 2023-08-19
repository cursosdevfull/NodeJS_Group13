import { err, ok, Result } from 'neverthrow';

import {
  MedicAddressEmptyException,
  MedicAddressMaximumException,
} from '../exceptions/address.exception';
import { MedicAgeException } from '../exceptions/age.exception';
import { MedicCMPException } from '../exceptions/cmp.exception';
import { MedicDNIException } from '../exceptions/dni.exception';
import { MedicPhoneException } from '../exceptions/phone.exception';
import { UUIDException } from '../exceptions/uuid.exception';
import { UuidVO } from '../value-object/uuid.vo';
import { Medic, MedicProperties } from './medic';

export type MedicFactoryResult = Result<
  Medic,
  | MedicAgeException
  | MedicDNIException
  | MedicPhoneException
  | MedicCMPException
  | MedicAddressEmptyException
  | MedicAddressMaximumException
  | UUIDException
>;

export class MedicFactory {
  private constructor() {}

  static create(props: MedicProperties): MedicFactoryResult {
    const resultUuid = UuidVO.create(props.id);
    if (resultUuid.isErr()) return err(resultUuid.error);

    /*if (props.age < 18) throw new Error("El médico debe ser mayor de edad");
    if (props.age > 80) throw new Error("El médico debe ser menor de 80 años");*/

    if (props.age < 18 || props.age > 80) return err(new MedicAgeException());

    if (props.dni.length !== 8) return err(new MedicDNIException());

    if (props.phone.length !== 9)
      return err(new MedicPhoneException('El teléfono debe tener 9 dígitos'));

    if (props.cmp.length !== 5)
      return err(new MedicCMPException('El CMP debe tener 5 dígitos'));

    if (props.address.length === 0)
      return err(
        new MedicAddressEmptyException(
          'El médico debe tener al menos una dirección',
        ),
      );
    if (props.address.length > 3)
      return err(
        new MedicAddressMaximumException(
          'El médico no puede tener más de 3 direcciones',
        ),
      );

    return ok(new Medic(props));
  }
}
