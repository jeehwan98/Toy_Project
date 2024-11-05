import { VALIDATE } from "../constant"

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

export {
  isValidEmail,
  isValidPassword,
}