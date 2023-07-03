import React, { useState } from "react";

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
        <h1 style={{fontSize:"55px",fontFamily:"monospace",paddingLeft:"100px"}}>Upload Image</h1>

        {selectedImage && (
          <div>
            <img
              alt="not found"
              width={"250px"}
              src={URL.createObjectURL(selectedImage[0])}
            />
            <br />
            <button style={{borderRadius:"17px",width:"130px",height:"50px",
            fontFamily:"monospace",fontSize:"30px",marginRight:"5px",paddingBottom:"10px",}}  onClick={() => setSelectedImage(null)}>Remove</button>
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

        <button style={{borderRadius:"17px",width:"130px",height:"50px",
        fontFamily:"monospace",fontSize:"30px",marginRight:"5px",paddingBottom:"10px",}}onClick={handleImageUpload}>Upload</button>

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
              <h2 style={{fontSize:"55px",fontFamily:"monospace",paddingLeft:"100px"}}>Output Image:</h2>
              <img alt="output" src={`data:image/png;base64, ${outputImage}`} />
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Upl;

