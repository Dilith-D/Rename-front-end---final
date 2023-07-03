import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <button style={{borderRadius:"17px",width:"130px",height:"50px",fontFamily:"monospace",fontSize:"30px",marginRight:"5px",paddingBottom:"10px"}}
    onClick={() => loginWithRedirect()}>
      Log In
    </button>
  );
};

export default LoginButton;
