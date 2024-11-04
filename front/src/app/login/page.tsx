import UserAuthForm from "@/context/auth/user-auth-form";

export default function LoginPage() {
  return (
    <div className="mt04 md:mt-0 space-y-6 flex flex-col justify-center h-full max-w-screen-sm mx-auto">
      <div className="flex flex-col space-y-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">
          Login to your account
        </h1>
        <p className="text-sm text-muted-foreground">
          Enter your email and password below to login to your account
        </p>
      </div>
      <UserAuthForm />
    </div>
  )
}