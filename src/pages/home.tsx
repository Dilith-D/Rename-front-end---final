import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter,BrowserRouter, RouterProvider, Route } from "react-router-dom";
import Upl from "./Upl"
import gallery from '../assets/gallery.png'
import LoginButton from "./Loginbutton";



function Home() {
  return (
    <>
        <div
          style={{display:"flex"}}
        >
        
        
          <div
            style={{
              backgroundColor: "#F8F8FF",
              borderRadius: "17px",
              padding: "30px",
              opacity: "1",
              width: "420px",
              marginTop: "100px",
              marginLeft: "70px",
              marginBottom:"100px",
              color:"black",
              textAlign:"justify"
            }}
          >
           
            <h2 style={{color:"black",fontSize:"35px",fontFamily:"sans-serif"}}>Your Gateway to Precise Data Labelling!</h2>
            <p style={{color:"black",fontSize:"20px",fontFamily:"sans-serif"}}>
              Unlock the true potential of your data with DataHub, the premier
              platform for accurate and efficient data labelling. We understand
              the power of clean,labeled data and its impact on shaping the
              future of artificial intelligence. At DataHub, we merge
              cutting-edge technology with human expertise to provide you with
              the highest-quality labelled datasets, fueling groundbreaking
              advancements across industries.
            </p>
            </div>

            <div
            style={{
              backgroundColor: "#F8F8FF",
              borderRadius: "17px",
              padding: "30px",
              opacity: "1",
              width: "420px",
              marginTop: "100px",
              marginLeft: "70px",
              marginRight:"0px",
              
              marginBottom:"100px",
              color:"black",
              textAlign:"center"
              
            }}
          >
          <h1 style={{fontFamily:"sans-serif"}}>Welcome to Rename</h1>
          <h2 style={{fontFamily:"sans-serif"}}>To get started,please sign in!</h2>
          <div style={{paddingRight:"130px"}}>
          <LoginButton/>
          </div>
          </div>
            


          
           {/* <div  style={{display: 'flex', justifyContent: "right",height:"400px",paddingRight:"250px",paddingBottom:"100px",alignContent:"end",marginTop:"-550px"}}>
              <img src={gallery}  alt=""/>
            </div> */}
        </div>

    
    
    </>
  );
}

export default Home;
