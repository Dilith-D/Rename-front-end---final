import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import LoginButton from "./Loginbutton";
import ReactDOM from "react-dom/client";
// import { BrowserRouter, Routes, Route }   //from "react-router-dom";
// import Upl from "./pages/Upl";

function App() {
  return (
    <>
     {/* <BrowserRouter>
    <Route path="Upl" element={<Upl />} />
    </BrowserRouter>  */}
      <div
        style={{
          backgroundImage: 'url("/bg.jpg")',
          width: "100%",
          //height: "100vh",
          // marginTop: "-70px",
          marginTop: "auto",
          marginBottom: "auto",

          fontSize: "50px",
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          style={{
            paddingTop: "100px",
            paddingBottom: "101px",
          }}
        >
          <div style={{ paddingLeft: "100px" }}>
            <h1 style={{ fontSize: "100px" }}>DataHub</h1>
            <h2 style={{ fontSize: "50px" }}>
              Empowering AI, One Annotation at a Time.
            </h2>
          </div>
          <div
            style={{
              backgroundColor: "whitesmoke",
              borderRadius: "17px",
              padding: "15px",
              opacity: ".4",
              width: "1500px",
              marginTop: "100px",
              marginLeft: "100px",
              color: "black",
              textAlign: "justify",
            }}
          >
            <h2>Your Gateway to Precise Data Labelling!</h2>
            <p>
              Unlock the true potentialof your data with DataHub, the premier
              platform for accurate and efficient data labelling. We understand
              the power of clean,labeled data and its impact on shaping the
              future of artificial intelligence. At DataHub, we merge
              cutting-edge technology with human expertise to provide you with
              the highest-quality labelled datasets, fueling groundbreaking
              advancements across industries.
            </p>
          </div>
        </div>

        <LoginButton />
      </div>
    </>
  );
}

export default App;
