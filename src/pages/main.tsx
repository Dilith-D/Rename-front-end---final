import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import { Auth0Provider } from "@auth0/auth0-react";


ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Auth0Provider
    domain="dev-006fyqkon6m7rf4w.us.auth0.com"
    clientId="ZNg7BnproP8f3ubMkpbOp7RZAUpGJlqM"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
     <App /> 
  </Auth0Provider>
);
