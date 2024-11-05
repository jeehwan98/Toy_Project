"use server"

export async function loginAction(prevState: undefined, formData: FormData) {

  const loginDetails = {
    name: formData.get("name") as string,
    password: formData.get("password") as string,
  };

  console.log(loginDetails);
  return {
    message: "success",
  };
}