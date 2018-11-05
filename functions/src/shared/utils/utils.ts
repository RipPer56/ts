import { Request, Response } from 'express';
import { Error, ErrorTypes } from "../../core/error.model";

export function ip(req: Request) {
  return req.ip;
}

export function sendError(res: Response, status: number, errorType: ErrorTypes, error: string, errorCode?: string) {
  res.status(status).send({
    code: errorCode,
    type: errorType,
    message: error
  } as Error);
}

export function wait(timeout: number) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, timeout);
  });
}
