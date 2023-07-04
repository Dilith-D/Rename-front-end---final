import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button style={{marginLeft:"1100px" ,borderRadius:"20px",width:"80px",height:"40px",fontFamily:"monospace",fontSize:"15px",border:"0",marginTop:"30px",cursor:"pointer",color:"#fff",backgroundColor:"#1285e8"}} onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      Log Out
    </button>
  );
};

export default LogoutButton;