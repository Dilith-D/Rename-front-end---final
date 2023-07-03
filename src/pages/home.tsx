import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter,BrowserRouter, RouterProvider, Route } from "react-router-dom";
import Upl from "./Upl"
import gallery from '../assets/gallery.png'



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
              backgroundColor: "#F8F8FF",
              borderRadius: "17px",
              padding: "30px",
              opacity: "1",
              width: "1200px",
              marginTop: "100px",
              marginLeft: "70px",
              marginBottom:"100px",
              color:"black",
              textAlign:"justify"
            }}
          >
           
            <h2 style={{color:"black",fontSize:"50px",fontFamily:"sans-serif"}}>Your Gateway to Precise Data Labelling!</h2>
            <p style={{color:"black",fontSize:"40px",fontFamily:"sans-serif"}}>
              Unlock the true potential of your data with DataHub, the premier
              platform for accurate and efficient data labelling. We understand
              the power of clean,labeled data and its impact on shaping the
              future of artificial intelligence. At DataHub, we merge
              cutting-edge technology with human expertise to provide you with
              the highest-quality labelled datasets, fueling groundbreaking
              advancements across industries.
            </p>
            
          </div>
           <div  style={{display: 'flex', justifyContent: "right",height:"400px",paddingRight:"250px",paddingBottom:"100px",alignContent:"end",marginTop:"-550px"}}>
              <img src={gallery}  alt=""/>
            </div>
        </div>

       
    
    </>
  );
}

export default Home;
