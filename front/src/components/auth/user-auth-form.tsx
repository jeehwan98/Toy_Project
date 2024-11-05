"use client"

import LoginForm from "./login-form"
import { usePathname } from "next/navigation";
import RegisterForm from "./register-form";
import React from "react";

export default function UserAuthForm({
  title,
  details
}: {
  title: string;
  details: string;
}) {
  const pathname = usePathname();

  return (
    <main className="mt04 md:mt-0 space-y-6 flex flex-col justify-center h-full max-w-screen-sm mx-auto">
      <AuthHeader
        title={title}
        details={details}
      />
      <AuthBody>
        {pathname === "/login" ? (
          <LoginForm />
        ) : pathname === "/register" ? (
          <RegisterForm />
        ) : (
          <div>Page not found </div>
        )
        }
      </AuthBody>
    </main>
  )
};

function AuthHeader({
  title,
  details
}: {
  title: string;
  details: string;
}) {
  return (
    <div className="flex flex-col space-y-2 text-center">
      <h1 className="text-2xl font-semibold tracking-tight">
        {title}
      </h1>
      <p className="text-sm text-muted-foreground">
        {details}
      </p>
    </div>
  );
}

function AuthBody({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen flex justify-center mb-10">
      {children}
    </div>
  )
}