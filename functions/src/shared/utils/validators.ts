import { checkSchema } from "express-validator/check";
import { ValidationChain } from "express-validator/check/check";

export const cinValidator: ValidationChain[] = checkSchema({
  cin: {
    in: ['params','query'],
    errorMessage: 'CIN must be at least 1 chars long and must be alphanumeric',
    isAlphanumeric: {
      errorMessage: 'CIN must be must be alphanumeric',
    },
    isLength: {
      errorMessage: 'CIN must be at least 1 chars long',
      options: {min: 3}
    },
    optional:false
  }
});

