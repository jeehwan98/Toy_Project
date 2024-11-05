"use client"

import { loginAction } from "@/lib/actions/login-action";
import React, { useActionState, useRef } from "react";
import { Button } from "../ui/button";

export default function LoginForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [data, action, isPending] = useActionState(loginAction, undefined);

  return (
    <form
      action={action}
      ref={formRef}
      className="max-w-lg mx-auto space-y-6 w-64"
    >
      <div className="space-y-4">
        <FormField label="Email">
          <Input
            type="text"
            name="email"
            placeholder="name@example.com"
          />
          {data?.email && (
            <div className="text-red-500">{data?.email}</div>
          )}
        </FormField>
        <FormField label="Password">
          <Input
            type="password"
            name="password"
          />
          {data?.password && (
            <div className="text-red-500">{data.password}</div>
          )}
        </FormField>
      </div>
      <LoginButton isPending={isPending} />
    </form>
  );
}

function LoginButton({ isPending }: { isPending: boolean }) {
  return (
    <Button
      className="w-full font-semibold py-2 px-4"
    >
      {isPending ? "Logging..." : "Login"}
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