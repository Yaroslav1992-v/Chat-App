export interface Data {
  [key: string]: string;
}

export interface ValidationConfig {
  [key: string]: {
    [key: string]: {
      message: string;
      value?: number;
    };
  };
}
export const registerValidator: ValidationConfig = {
  email: {
    isRequired: { message: "Email is Required For Registration " },
    isEmail: { message: "Invalid Email " },
  },
  firstName: {
    isRequired: { message: "First Name is Required For Registration " },
    min: {
      message: "first  name must contain  at least 3 symbols",
      value: 3,
    },
  },
  lastName: {
    isRequired: { message: "Last Name is Required For Registration " },
    min: {
      message: "first  name must contain  at least 3 symbols",
      value: 3,
    },
  },

  password: {
    isRequired: { message: "Password is Required For Registration " },
    isCapitalSymbol: {
      message: "Password Must Have One Capital Symbol",
    },

    isContainDigit: {
      message: "Password Must At Least One Digit",
    },
    min: {
      message: "Password Must Contain At Least 8 Symbols",
      value: 8,
    },
  },
};
