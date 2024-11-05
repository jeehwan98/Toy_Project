import { validateUserRegister } from "../validation/auth-validation";

export async function registerAction(prevState: unknown, formData: FormData) {

  const inputtedDetails = {
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    password: formData.get("password") as string,
    passwordConfirmation: formData.get("passwordConfirmation") as string,
  };

  const validateRegisterDetails = validateUserRegister(inputtedDetails);

  if (validateRegisterDetails) {
    return validateRegisterDetails;
  };
};