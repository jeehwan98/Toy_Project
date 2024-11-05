import UserAuthForm from "@/components/auth/user-auth-form";
import React from "react";

export default function LoginPage() {

  return (
    <UserAuthForm
      title="Login to your account"
      details="Enter your email and password below to login to your account"
    />
  )
}