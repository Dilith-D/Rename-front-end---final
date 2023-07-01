// import React, { useState } from "react";

// const ImageUploader = () => {
//   const [selectedImage, setSelectedImage] = useState(null);

//   const handleImageUpload = async () => {
//     // Perform image upload to Django backend using FormData

//     // After successful upload, receive the response from the backend

//     // Assuming the response data contains the base64-encoded image string as 'output_image'
//     const responseData = {
//       output_image: "base64-encoded-image-string",
//     };

//     // Decode the base64 image string
//     const decodedImage = atob(responseData.output_image);

//     // Create a Uint8Array to hold the decoded image data
//     const imageBytes = new Uint8Array(decodedImage.length);
//     for (let i = 0; i < decodedImage.length; i++) {
//       imageBytes[i] = decodedImage.charCodeAt(i);
//     }

//     // Create a Blob from the Uint8Array
//     const blob = new Blob([imageBytes.buffer], { type: "image/jpeg" });

//     // Create an object URL for the Blob
//     const imageUrl = URL.createObjectURL(blob);

//     // Set the selected image URL to display in the component
//     setSelectedImage(imageUrl);
//   };

//   return (
//     <div>
//       <h1>Image Uploader</h1>

//       {selectedImage && (
//         <div>
//           <img alt="Selected" src={selectedImage} />
//         </div>
//       )}

//       <button onClick={handleImageUpload}>Upload Image</button>
//     </div>
//   );
// };

// export default ImageUploader;
