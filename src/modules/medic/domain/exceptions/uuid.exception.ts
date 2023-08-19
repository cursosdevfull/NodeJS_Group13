import {
  ExceptionBase,
  ExceptionCode,
} from '../../../../core/exceptions/exception-base';

export class UUIDException extends ExceptionBase {
  constructor() {
    super('Invalid uuid');
    Object.setPrototypeOf(this, UUIDException.prototype);
    this.code = ExceptionCode.UUIDException;
  }
}
