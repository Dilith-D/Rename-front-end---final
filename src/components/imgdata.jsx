import React from 'react';
import ImageConverter from './ImageConverter';

const Img = () => {
  const base64ImageData = "data:image/png;base64,/9j/4AAQSkZJRgABAQE...";
  
  return (
    <div>
      <h1>Image Conversion Example</h1>
      <ImageConverter base64Image={base64ImageData} />
    </div>
  );
};

export default Img;