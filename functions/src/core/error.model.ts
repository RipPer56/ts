export interface Error {
  code?: string,
  type: ErrorTypes,
  message: string
}

export enum ErrorTypes {
  INTERNAL_EXCEPTION = 'Internal Server Exception',
  RESOURCE_NOT_FOUND = 'Resource NOT Found'
}
