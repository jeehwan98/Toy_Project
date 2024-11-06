"use server"

import { loginUserAPI } from "@/lib/api/auth-api";
import * as cookie from 'cookie';

export async function loginAction(prevState: unknown, formData: FormData) {
  const errors = {
    email: '',
    password: '',
  };

  const inputtedDetails = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const details = await loginUserAPI(inputtedDetails);
  const { token, user } = details;

  if (details) {
    const tokenCookie = cookie.serialize('token', details.token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60 * 3,
      path: '/',
    });
    return {
      user: user,
      token: token,
    };
  } else {
    console.log("failed");
  }

  return errors;
};