import React from "react";
import ReactDOM from "react-dom/client";  
import Layout from "../Layout/Layout";



function ImageConverter(){
  

const convertBase64ToJpg = (base64Image: string) => {
  // Remove the data URL prefix
  const base64WithoutPrefix = base64Image.split(",")[1];

  // Convert base64 to binary data
  const binaryData = atob(base64WithoutPrefix);

  // Create a Uint8Array to hold the binary data
  const uint8Array = new Uint8Array(binaryData.length);
  for (let i = 0; i < binaryData.length; i++) {
    uint8Array[i] = binaryData.charCodeAt(i);
  }

  // Create a Blob object with the binary data
  const blob = new Blob([uint8Array], { type: 'image/jpeg' });

  // Generate a URL for the Blob object
  const imageUrl = URL.createObjectURL(blob);

  return imageUrl;
};

const ImageConverter = ({ base64Image  }:{base64Image:any}) => {
  const jpgImageUrl = convertBase64ToJpg(base64Image);

  return (
    <div>
      <h2>Converted Image</h2>
      <img src={jpgImageUrl} alt="Converted Image" />
    </div>
  );
};
}
export default ImageConverter;
