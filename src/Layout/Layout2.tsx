import React  from "react";
import { Link } from 'react-router-dom';
import { Outlet } from "react-router-dom";
import LoginButton from "../pages/Loginbutton";
import bg_image from "../assets/img1.jpg";
import LogoutButton from "../pages/LogoutButton";


  const Layout2 = () => {
    return (<React.Fragment>
      <main >
        <header style={{backgroundColor:"#6c63ff",paddingLeft:"100px",marginTop:"-75px"}} >
        <LogoutButton/>
        <div >
          
             <h1 style={{fontStyle:"normal",fontFamily:"monospace",textAlign:"center",color:"white",fontSize:"60px",marginTop:"70px"}}>Rename   hddkcj  </h1>
            
              <h2 style={{ fontSize: "35px",fontFamily:"monospace",textAlign:"center",color:"white",paddingBottom:"10px",marginTop:"-40px"}}>
                  Empowering AI,One Annotation at a Time.</h2>
                
             {/* </div> */}
            
          </div>
        <div >
       </div>
     </header>
     {/* <div
  style={{
    backgroundImage: 'url(/img1.jpg)',
    marginTop: "-31px",
    marginBottom: "auto",
    height:"2000px",
    width:"1000px",
  position:"relative",
    fontSize: "50px",
    backgroundSize: "fill",
    backgroundRepeat: "no-repeat",
    }}></div>    */}

    {/* <img src=require('assets/img1.jpg')/> */}
    
    
{/*   
  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: '180px',
      backgroundColor: "#F8F8FF",
      padding: '0 20px',
    },
    left: {
      flex: 1,
    },
    middle: {
      flex: 1,
      textAlign: 'center',
    },
    right: {
      flex: 1,
      textAlign: 'right',
    },
  };
   */}
        
        
        <Outlet />
      </main>
    </React.Fragment>)
    
}
export default Layout2;