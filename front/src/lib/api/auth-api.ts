"use server"

import { API_URLS } from "@/lib/constant";
import { LoginProps, RegisterProps } from "@/lib/types/register-user";

async function registerUserAPI(inputtedDetails: RegisterProps) {
  try {
    const response = await fetch(API_URLS.REGISTER_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify(inputtedDetails)
    });

    const responseData = await response.json();
    if (response.ok) {
      if (responseData.message === "success") {
        return null;
      }
    }
  } catch (error) {
    throw error;
  }
}

async function loginUserAPI(inputtedDetails: LoginProps) {
  try {
    const response = await fetch(API_URLS.LOGIN_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify(inputtedDetails)
    });

    const responseData = await response.json();
    if (response.ok) {
      if (responseData.message === "success") {
        return {
          user: responseData.user,
          token: responseData.token,
        }
      }
    }
  } catch (error) {
    throw error;
  }
}

export {
  registerUserAPI,
  loginUserAPI,
}