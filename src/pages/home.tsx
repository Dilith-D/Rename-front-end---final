import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter,BrowserRouter, RouterProvider, Route } from "react-router-dom";
import Upl from "./Upl"



function Home() {
  return (
    <>
        <div
          // style={{
          //   paddingTop: "100px",
          //   paddingBottom: "101px",
          // }}
        >
        
        
          <div
            style={{
              backgroundColor: "whitesmoke",
              borderRadius: "17px",
              padding: "15px",
              opacity: "1",
              width: "1400px",
              marginTop: "100px",
              marginLeft: "100px",
              color:"black",
              textAlign:"justify"
            }}
          >
            <h2 style={{color:"black",fontSize:"70px",fontFamily:"sans-serif"}}>Your Gateway to Precise Data Labelling!</h2>
            <p style={{color:"black",fontSize:"40px",fontFamily:"monospace"}}>
              Unlock the true potential of your data with DataHub, the premier
              platform for accurate and efficient data labelling. We understand
              the power of clean,labeled data and its impact on shaping the
              future of artificial intelligence. At DataHub, we merge
              cutting-edge technology with human expertise to provide you with
              the highest-quality labelled datasets, fueling groundbreaking
              advancements across industries.
            </p>
          </div>
        </div>

       
    
    </>
  );
}

export default Home;
