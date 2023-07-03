import React, { useState } from "react";
import { useAuth0 } from '@auth0/auth0-react';

const Mycomponent = () =>{
const {
  // Auth state:
  error,
  isAuthenticated,
  isLoading,
  user,
  // Auth methods:
  getAccessTokenSilently,
  getAccessTokenWithPopup,
  getIdTokenClaims,
  loginWithRedirect,
  loginWithPopup,
  logout,
} = useAuth0();

const renderContent =():JSX.Element => {
if(isLoading){
  return <div> Loading ....... Please Wait</div>;
}

if (error){
  return <div> Error Occured Please try again and lets Label some DATA : {error.message}</div>;
}
if (!isAuthenticated){
  return <div> USER IS NOT AUTHORIZED TO VIEW THIS , PLEASE LOGIN</div>;
}


return <Upl />;
};



  const Upl = () => {

    
  const [selectedImage, setSelectedImage] = useState<FileList | null>(null);
  const [tags, setTags] = useState<string[]>([]);
  const [outputImage, setOutputImage] = useState<string>("");

  const handleImageUpload = () => {
    if (selectedImage) {
      const formData = new FormData();
      formData.append("image", selectedImage[0]);

      fetch("http://127.0.0.1:8000/api/object-detection/", {
        method: "POST",
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Upload success:", data);
          // Update the state with the received data
          setTags(data.tags);
          setOutputImage(data.output_image);
        })
        .catch((error) => {
          console.error("Upload error:", error);
          // Handle any errors that occurred during upload
        });
    }
  };

  return (
    <>
      <div>
        <h1 style={{fontSize:"55px",fontFamily:"monospace",}}>Upload Image</h1>

        {selectedImage && (
          <div>
            <img
              alt="not found"
              width={"250px"}
              src={URL.createObjectURL(selectedImage[0])}
            />
            <br />
            <button style={{borderRadius:"20px",width:"130px",height:"50px",fontFamily:"monospace",fontSize:"30px",border:"0",marginTop:"30px",cursor:"pointer",color:"#fff",backgroundColor:"#6c63ff"}}  onClick={() => setSelectedImage(null)}>Remove</button>
          </div>
        )}

        <br />
        <br />

        <input
          type="file"
          name="myImage"
          onChange={(event) => {
            const file = event.target.files;
            setSelectedImage(file);
          }}
        />

        <br />
        <br />

        <button style={{borderRadius:"20px",width:"130px",height:"50px",fontFamily:"monospace",fontSize:"30px",border:"0",marginTop:"30px",cursor:"pointer",color:"#fff",backgroundColor:"#6c63ff"}}onClick={handleImageUpload}>Upload</button>

        <div>
          {tags.length > 0 && (
            <>
              <h2 style={{fontSize:"55px",fontFamily:"monospace"}}>Tags:</h2>
              <ul>
                {tags.map((tag, index) => (
                  <li key={index}>{tag}</li>
                ))}
              </ul>
            </>
          )}

          {outputImage && (
            <>
              <h2 style={{fontSize:"55px",fontFamily:"monospace",}}>Output Image:</h2>
              <img alt="output" src={`data:image/png;base64, ${outputImage}`} />
            </>
          )}
        </div>
      </div>
    </>
  );     
  };

  return ( 
  <div>

    


    
    {isAuthenticated && user &&(
      <div
          style={{
            background: "#f8f8f8",
            padding: "20px",
            fontSize: "24px",
            fontFamily: "Arial, sans-serif",
            fontWeight: "bold",
            color: "#333",
            alignContent:"center",
          }}
        >
        Hello {user.name}, Welcome ! Let's Label some data
      </div>
    )}
    {renderContent() }
  </div>
  );
};
  export default Mycomponent;