interface AuthValidationPatterns {
  [pattern: string]: string | RegExp;
}

export const authValidationPatterns: AuthValidationPatterns = {
  "email": "[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,4}$",
  'cin': /^[0-9a-zA-Z]+$/,
  'adherentNum': /^[0-9a-zA-Z]+$/,
};
