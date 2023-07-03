// import React, { useState } from "react";

// const Upl = () => {
//   const [selectedImage, setSelectedImage] = useState(null);

//   const handleImageUpload = () => {
//     if (selectedImage) {
//       const formData = new FormData();
//       formData.append("image", selectedImage);

//       fetch("http://127.0.0.1:8000/api/object-detection/", {
//         method: "POST",
//         body: formData,
//       })
//         .then((response) => response.json())
//         .then((data) => {
//           // Handle the response from the Django backend
//           console.log(data);
//         })
//         .catch((error) => {
//           // Handle any errors
//           console.error(error);
//         });
//     }
//   };

//   return (
//     <div>
//       <h1>Upload Image</h1>

//       {selectedImage && (
//         <div>
//           <img
//             alt="not found"
//             width={"250px"}
//             src={URL.createObjectURL(selectedImage)}
//           />
//           <br />
//           <button onClick={() => setSelectedImage(null)}>Remove</button>
//         </div>
//       )}

//       <br />
//       <br />

//       <input
//         type="file"
//         name="myImage"
//         onChange={(event) => {
//           setSelectedImage(event.target.files[0]);
//         }}
//       />

//       <br />
//       <br />

//       <button onClick={handleImageUpload}>Upload Image</button>
//     </div>
//   );
// };

// export default Upl;
