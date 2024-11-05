"use client"

import { loginAction } from "@/lib/actions/login-action";
import React, { useActionState, useRef } from "react";
import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";

export default function LoginForm() {

  const formRef = useRef<HTMLFormElement>(null);
  const [state, action] = useActionState(loginAction, { message: '' });

  if (state.message === "success") {
    formRef.current?.reset();
  }

  return (
    <form
      action={action}
      ref={formRef}
      className="max-w-md mx-auto space-y-6"
    >
      <div className="space-y-4">
        <FormField label="Email">
          <Input
            type="text"
            name="email"
            placeholder="name@example.com"
          />
        </FormField>
        <FormField label="Password">
          <Input
            type="password"
            name="password"
          />
        </FormField>
      </div>
      <LoginButton />
    </form>
  );
}

function LoginButton() {
  const status = useFormStatus();
  return (
    <Button
      className="w-full font-semibold py-2 px-4"
    >
      {status.pending ? "Logging..." : "Login"}
    </Button>
  );
}

function FormField({
  label,
  children
}: {
  label: string;
  children: React.ReactNode
}) {
  return (
    <div className="space-y-2 w-full">
      <Label>{label}</Label>
      {children}
    </div>
  )
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <label className="block font-semibold mb-1">
      {children}
    </label>
  )
}

function Input({ ...props }) {
  return (
    <input
      className="w-full border border-gray-700 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
      {...props}
    />
  );
}

export {
  LoginButton,
  FormField,
  Label,
  Input,
}