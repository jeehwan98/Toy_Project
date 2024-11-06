interface RegisterProps {
  name: string;
  password: string;
  email: string;
}

interface LoginProps {
  email: string;
  password: string;
}

export type {
  RegisterProps,
  LoginProps,
}