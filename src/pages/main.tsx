// // import * as React from "react";
// // import  * as ReactDOM from "react-dom/client";
// // import {
// //   createBrowserRouter,
// //   RouterProvider,
// // } from "react-router-dom";
// // import App from "./home";
// // import "bootstrap/dist/css/bootstrap.css";
// // import { Auth0Provider } from "@auth0/auth0-react";
// // import Upl from "./Upl.jsx";

// // const router = createBrowserRouter([
// //   {
// //     path: "/Upl",
// //     element: <Upl/>,
// //   },
// // ]); 


// // ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
// //   <Auth0Provider
// //     domain="dev-006fyqkon6m7rf4w.us.auth0.com"
// //     clientId="ZNg7BnproP8f3ubMkpbOp7RZAUpGJlqM"
// //     authorizationParams={{
// //       redirect_uri: window.location.origin,
// //     }}
// // >
    
// //      <App /> 
// //   </Auth0Provider>
// // );


// import React from "react";
// import ReactDOM from "react-dom";
// import { BrowserRouter } from "react-router-dom";
// import Layout from "../Layout/Layout";
// import "bootstrap/dist/css/bootstrap.css";
// import { Auth0Provider } from "@auth0/auth0-react";

// const redirectUri = window.location.origin;

// ReactDOM.render(
//   <BrowserRouter>
//   <h1> hai this is main page component</h1>
//     {/* <Auth0Provider
//       domain="dev-006fyqkon6m7rf4w.us.auth0.com"
//       clientId="ZNg7BnproP8f3ubMkpbOp7RZAUpGJlqM"
//       redirectUri={"http://localhost:5173/upload"}
//       // // @ts-ignore
//       // cacheLocation="localstorage"
//     >
//       <Layout />
//     </Auth0Provider> */}
//   </BrowserRouter>,
//   document.getElementById("root")
// );

import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../pages/home";
import Upl from "../pages/Upl";
import { Auth0Provider } from '@auth0/auth0-react';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/upload" element={<Upl />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(
  <Auth0Provider
    domain="dev-006fyqkon6m7rf4w.us.auth0.com"
    clientId="ZNg7BnproP8f3ubMkpbOp7RZAUpGJlqM"
    authorizationParams={{
      redirect_uri: "http://localhost:5174/upload",
    }}
  >
    <App />
  </Auth0Provider>,
  document.getElementById('root')
);