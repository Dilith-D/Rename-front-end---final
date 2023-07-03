import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
    <button style={{borderRadius:"20px",width:"130px",height:"70px",fontFamily:"monospace",marginBottom:"10px",fontSize:"25px",border:"0",marginTop:"30px",cursor:"pointer",marginRight:"10px",color:"#6c63ff",backgroundColor:"white"}}
    onClick={() => loginWithRedirect()}>
      LogIn
    </button>
    </div>
  );
};

export default LoginButton;
