import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <button className="button"
    // style={{
    //   border-radius: "15px",
    // padding-top: "0%",
    // padding-right: "0%",
    // }}
    onClick={() => loginWithRedirect()}>
      Log In
    </button>
  );
};

export default LoginButton;
