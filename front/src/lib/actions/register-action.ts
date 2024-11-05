"use server"

import { registerUserAPI } from "@/api/auth/auth-api";
import { validateUserRegister } from "../validation/auth-validation";
import { revalidatePath } from "next/cache";

export async function registerAction(prevState: unknown, formData: FormData) {

  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const passwordConfirmation = formData.get("passwordConfirmation") as string;

  const inputtedDetails = {
    name,
    email,
    password,
    passwordConfirmation
  };

  const registerUser = {
    name,
    email,
    password,
  }

  const validateRegisterDetails = validateUserRegister(inputtedDetails);
  const isRegistered = await registerUserAPI(registerUser);
  if (isRegistered) {
    revalidatePath("/login");
  }

  if (validateRegisterDetails) {
    return validateRegisterDetails;
  };
};