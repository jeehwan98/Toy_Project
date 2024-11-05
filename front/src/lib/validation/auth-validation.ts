import { ERROR, VALIDATE } from "../constant"

const validateUserRegister = ({
  name,
  email,
  password,
  passwordConfirmation
}: {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}) => {
  const errors = {
    name: '',
    email: '',
    password: '',
    passwordConfirmation: '',
  };

  if (!isValidName(name)) {
    errors.name = ERROR.INVALID_NAME_INPUT;
  };

  if (!isValidEmail(email)) {
    errors.email = ERROR.INVALID_EMAIL_INPUT;
  };

  if (!isValidPassword(password)) {
    errors.password = ERROR.INVALID_PASSWORD_INPUT;
  };

  if (!isValidpasswordConfirmation(password, passwordConfirmation)) {
    errors.passwordConfirmation = ERROR.INVALID_CONFIRM_PASSWORD_INPUT;
  };

  return errors;
};

const isValidEmail = (email: string): boolean => {
  if (VALIDATE.EMAIL_REGEX.test(email)) {
    return true;
  } else {
    return false;
  };
};

const isValidPassword = (password: string): boolean => {
  if (VALIDATE.PASSWORD_REGEX.test(password)) {
    return true;
  } else {
    return false;
  };
};

const isValidName = (name: string): boolean => {
  if (VALIDATE.NAME_REGEX.test(name)) {
    return true;
  } else {
    return false;
  };
};

const isValidpasswordConfirmation = (password: string, passwordConfirmation: string): boolean => {
  if (password !== passwordConfirmation) {
    return false;
  } else {
    return true;
  };
};

export {
  validateUserRegister,
}