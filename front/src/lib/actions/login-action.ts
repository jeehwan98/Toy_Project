"use server"

import { ERROR } from "../constant";
import { isValidEmail, isValidPassword } from "../validation/auth-validation";

export async function loginAction(prevState: unknown, formData: FormData) {
  const errors = {
    email: '',
    password: '',
  };

  const inputtedDetails = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const validateEmail = isValidEmail(inputtedDetails.email);

  if (!validateEmail) {
    errors.email = ERROR.INVALID_EMAIL_INPUT;
  }
  const validatePassword = isValidPassword(inputtedDetails.password);

  if (!validatePassword) {
    errors.password = ERROR.INVALID_PASSWORD_INPUT;
  };

  return errors;
};