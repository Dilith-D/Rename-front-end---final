import React  from "react";
import { Link } from 'react-router-dom';
import { Outlet } from "react-router-dom";

function Layout() {
    return (<React.Fragment>
        <header style={{backgroundColor:"lavender",paddingTop:"0px"}}>
            <span>
        <h1 style={{fontSize:"100px",fontFamily:"monospace"}} >ReName  <Link style={{fontSize:"50px"}} to={"/upload"}>upload</Link></h1>
        <h2 style={{ fontSize: "50px",paddingInline:"0px",paddingBottom:"20px",fontFamily:"fantasy"}}>
              Empowering AI, One Annotation at a Time.
            </h2>
            </span>
        </header>
        

        <Outlet />

        {/* <footer>
        <h2>Footer</h2>
        </footer> */}

        


   
    </React.Fragment>)
    
}
export default Layout;