import React, { useState } from "react";


const Upl = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
<>
<div
        style={{
          backgroundImage: 'url("/bg.jpg")',
        
          //height: "100vh",
          // marginTop: "-70px",
          marginTop: "auto",
          marginBottom: "auto",
          height:"auto",
          width:"auto",

          fontSize: "50px",
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
        }}
      >
        </div>
    <div>
      <h1>Upload Image</h1>

      {selectedImage && (
        <div>
          <img
            alt="not found"
            width={"250px"}
            src={URL.createObjectURL(selectedImage)}
          />
          <br />
          <button onClick={() => setSelectedImage}>Remove</button>
        </div>
      )}

      <br />
      <br />

      <input
        type="file"
        name="myImage"
        onChange={(event) => {
          console.log(event.target?.files);
          // setSelectedImage(event.target?.files[0]);
        }}
      />
    </div>
    </>
  );
};

export default Upl;
