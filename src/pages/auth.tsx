
// const Mycomponent = () =>{
//     const {
//       // Auth state:
//       error,
//       isAuthenticated,
//       isLoading,
//       user,
//       // Auth methods:
//       getAccessTokenSilently,
//       getAccessTokenWithPopup,
//       getIdTokenClaims,
//       loginWithRedirect,
//       loginWithPopup,
//       logout,
//     } = useAuth0();
    
//     const renderContent =():JSX.Element => {
//     if(isLoading){
//       return <div> Loading ....... Please Wait</div>;
//     }
    
//     if (error){
//       return <div> Error Occured Please try again and lets Label some DATA : {error.message}</div>;
//     }
//     if (!isAuthenticated){
//       return <div> USER IS NOT AUTHORIZED TO VIEW THIS , PLEASE LOGIN</div>;
//     }
    
    
   
//     };
//     return ( 
//         <div>
      
          
      
      
          
//           {isAuthenticated && user &&(
//             <div
//                 style={{
//                   background: "#f8f8f8",
//                   padding: "20px",
//                   fontSize: "24px",
//                   fontFamily: "Arial, sans-serif",
//                   fontWeight: "bold",
//                   color: "#333",
//                   alignContent:"center",
//                 }}
//               >
//               Hello {user.name}, Welcome ! Let's Label some data
//             </div>
//           )}
//           {renderContent() }
//         </div>
//         );
//       };
//         export default Mycomponent;

    