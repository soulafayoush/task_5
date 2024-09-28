import React from 'react';
import './Banner.css'; 

const Banner = () => {
  return (
    <div className="banner">
      <img 
        src="../../../public/assets/img/Rectangle4102.png" 
        alt="Dream Home" 
        className="banner-image" 
      />
      <div className="overlay"></div>
      <div className="content">
        <h1 className="banner-title">Find Your Dream Home</h1>
        <span className="banner-subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </span>
      </div>
    </div>
  );
};

export default Banner;
