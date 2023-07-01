import * as React from "react";
import  * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from "./home";
import "bootstrap/dist/css/bootstrap.css";
import { Auth0Provider } from "@auth0/auth0-react";
import Upl from "./Upl.jsx";

const router = createBrowserRouter([
  {
    path: "/Upl",
    element: <Upl/>,
  },
]); 


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
