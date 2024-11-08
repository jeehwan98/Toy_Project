"use client"

import { loginAction } from "@/lib/actions/login-action";
import React, { useActionState, useEffect, useRef } from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [data, action, isPending] = useActionState(loginAction, undefined);
  const router = useRouter();

  useEffect(() => {
    if (data) {
      localStorage.setItem('token', data.token);
      router.push("/");
    }
  }, [data, router]);

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
      <SubmitButton text="Login" isPending={isPending} />
    </form>
  );
}

function SubmitButton({
  text,
  isPending
}: {
  text: string;
  isPending: boolean
}) {
  return (
    <Button
      className="w-full font-semibold py-2 px-4"
    >
      {isPending ? "Submitting..." : text}
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
    <div className=" w-full">
      <Label>{label}</Label>
      {children}
    </div>
  )
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <label className="block font-semibold">
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
  SubmitButton,
  FormField,
  Label,
  Input,
}