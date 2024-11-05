import { useActionState } from "react";
import { FormField, Input, SubmitButton } from "./login-form";
import { registerAction } from "@/lib/actions/register-action";

export default function RegisterForm() {
  const [data, action, isPending] = useActionState(registerAction, undefined);
  return (
    <form
      action={action}
      className="max-w-lg mx-auto space-y-6 w-64"
    >
      <div className="space-y-4">
        <FormField label="Name">
          <Input
            type="text"
            name="name"
          />
          {data?.name && (
            <div className="text-red-500">{data.name}</div>
          )}
        </FormField>
        <FormField label="Email">
          <Input
            type="text"
            name="email"
            placeholder="name@example.com"
          />
          {data?.email && (
            <div className="text-red-500">{data.email}</div>
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
        <FormField label="Password Confirmation">
          <Input
            type="password"
            name="passwordConfirmation"
          />
          {data?.passwordConfirmation && (
            <div className="text-red-500">{data.passwordConfirmation}</div>
          )}
        </FormField>
      </div>
      <SubmitButton text="Register" isPending={isPending} />
    </form>
  );
}