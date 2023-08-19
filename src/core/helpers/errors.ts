import { NextFunction, Request, Response } from 'express';

import { IError } from '../error/error.interface';
import { Parameters } from './parameters';

export class HandlerErrors {
  static notFound(req: Request, res: Response, next: NextFunction) {
    const err: IError = new Error();
    err.name = 'NotFound';
    err.message = 'Not Found';
    err.status = 404;

    next(err);
  }

  static generic(
    error: IError,
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    const messageError: Record<string, any> = {
      name: error.name || 'Internal Server Error',
      message: error.message || 'Internal Server Error',
    };

    if (Parameters.ENVIRONMENT !== 'production') {
      messageError['stack'] = error.stack;
    }

    return res.status(error.status || 500).json(messageError);
  }
}
