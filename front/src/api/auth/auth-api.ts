"use server"

import { API_URLS } from "@/lib/constant";
import { RegisterProps } from "@/lib/types/register-user";

async function registerUserAPI(registerDetails: RegisterProps) {
  console.log('register details:', registerDetails);
  try {
    const response = await fetch(API_URLS.REGISTER_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify(registerDetails)
    });

    const responseData = await response.json();
    if (response.ok) {
      if (responseData.message === "success") {
        console.log(responseData);
        return true;
      }
    }
  } catch (error) {
    throw error;
  }
}

export {
  registerUserAPI
}