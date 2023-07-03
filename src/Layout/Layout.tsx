import React  from "react";
import { Link } from 'react-router-dom';
import { Outlet } from "react-router-dom";
import LoginButton from "../pages/Loginbutton";
import bg_image from "../assets/img1.jpg";
// function Layout() {
  const Layout = () => {
    return (<React.Fragment>
      <main >
        <header style={{backgroundColor:"#6c63ff",paddingLeft:"100px",marginTop:"-75px"}} >
        <div >
          <span>
             <h1 style={{fontStyle:"normal",fontFamily:"monospace",textAlign:"center",color:"white",fontSize:"100px"}}>Rename <Link style={{fontSize:"50px",textAlign:"right"}} to={"/upload"}>upload</Link>   <LoginButton  /> </h1>
             {/* <div style={{width:'100%', alignItems:'space-between'}}> */}
             {/* <LoginButton  />  */}
              <h2 style={{ fontSize: "35px",fontFamily:"monospace",textAlign:"center",color:"white",paddingBottom:"10px",marginTop:"-110px"}}>
                  Empowering AI,One Annotation at a Time.</h2>
                
             {/* </div> */}
            </span>
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
export default Layout;

// const Header = () => {
//     return (
//       <header style={styles.container}>
//         <div style={styles.left}>
//           <span>
//               <h1 style={{fontStyle:"normal",fontFamily:"monospace",fontSize:"100px"}}>Rename <Link style={{fontSize:"50px",textAlign:"right"}} to={"/upload"}>upload</Link></h1>
//               <h2 style={{ fontSize: "35px",fontFamily:"monospace",paddingBottom:"10px",marginTop:"-70px"}}>
//                  Empowering AI, One Annotation at a Time.         </h2>
//               </span>
//         </div>
//         <div >
//         <LoginButton  />
//         </div>
//       </header>
//     );
//   };
  // <div
  // style={{
  //   backgroundImage: 'url("/img1.jpg")',
  //   marginTop: "auto",
  //   marginBottom: "auto",
  //   height:"auto",
  //   width:"auto",
  
  //   fontSize: "50px",
  //   backgroundSize: "100% 100%",
  //   backgroundRepeat: "no-repeat",}}></div> 
    
  //   //<Bg/>
  
  // const styles = {
  //   container: {
  //     display: 'flex',
  //     justifyContent: 'space-between',
  //     alignItems: 'center',
  //     height: '180px',
  //     backgroundColor: "#F8F8FF",
  //     padding: '0 20px',
  //   },
  //   left: {
  //     flex: 1,
  //   },
  //   middle: {
  //     flex: 1,
  //     textAlign: 'center',
  //   },
  //   right: {
  //     flex: 1,
  //     textAlign: 'right',
  //   },
  // };
  
//   export default Header;