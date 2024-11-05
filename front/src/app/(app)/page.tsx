import { authOptions } from "@/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/register");
  }
  return (
    <>
      <div>HomePage</div>
      <h1>Welcome, {session.user?.name}</h1>
    </>
  );
}