import { useRef } from "react";
import { useFormState, useFormStatus } from "react-dom";

export default function LoginForm() {

  const formRef = useRef<HTMLFormElement>(null);
  const [state, action] = useFormState(loginAction, {
    message: '',
  });

  if (state.message === "success") {
    formRef.current?.reset();
  }

  return (
    <form
      action={action}
      ref={formRef}
    >
      <div className="grid gap-2" >
        <div className="grid gap-2" >
          <input
            className="border border-gray-400"
            type="text"
            name="name"
          />
          <input
            className="border border-gray-400"
            type="password"
            name="password"
          />
        </div>
      </div>
      <LoginButton />
    </form>
  );
}

function LoginButton() {
  const status = useFormStatus();
  return (
    <button className="bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4" >
      {status.pending ? "Logging..." : "Login"}
    </button>
  )
}

export {
  LoginButton,
}