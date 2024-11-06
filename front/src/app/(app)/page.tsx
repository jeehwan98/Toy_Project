"use client"


import { jwtDecode } from "jwt-decode";

export default function Home() {
  let userDetails = "";
  const authenticated = localStorage.getItem('token');

  if (authenticated) {
    userDetails = jwtDecode(authenticated);
  }

  // const logout = localStorage.removeItem('token');
  console.log(userDetails);


  if (authenticated) {
    return (
      <>
        <div>HomePage</div>
        <div>{userDetails.name}</div>
      </>
    );
  } else {
    return (
      <div>not authenticated. go back</div>
    )
  }
}