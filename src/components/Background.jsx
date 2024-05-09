import React, { useState } from 'react';
import './css/Background.css';

import backgroundImage1 from '../assets/bg1.jpeg';
import backgroundImage2 from '../assets/bg2.jpg';
import backgroundImage3 from '../assets/bg3.jpg';

const Background = () => {
  const [backgroundImage, setBackgroundImage] = useState(backgroundImage1);

  const handleBackgroundChange = (event) => {
    const selectedImage = event.target.value;
    setBackgroundImage(selectedImage);
  };

  return (
    <div className="background" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <select value={backgroundImage} onChange={handleBackgroundChange}>
        <option value={backgroundImage1}>Imagem 1</option>
        <option value={backgroundImage2}>Imagem 2</option>
        <option value={backgroundImage3}>Imagem 3</option>
      </select>
    </div>
  );
};

export default Background;