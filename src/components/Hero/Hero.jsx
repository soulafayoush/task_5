import React from 'react';
import { Container } from 'react-bootstrap';
import './Hero.css'; 
import heroImage from '../../../public/assets/img/building.svg'; 

const HeroSection = () => {
  return (
    <div className="hero-section">
      <Container>
        <img src={heroImage} alt="Hero" className="hero-image" /> 
        <div className="content">
          <h1 className="heading">
            Discover a place<br /> 
            you will love to live
          </h1>
          <span className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
            Imperdiet tempus felis vitae sit est quisque.
          </span>
          
          {/* نص تحت اللوغو */}
          <div className="logo-text">
            <p>Your Trusted Partner in Real Estate</p>
          </div>

          {/* ديف للأيقونات */}
          <div className="hero-info">
            <div className="hero-card">
              <div className="card-icon">
                <img src="images/location.png" alt="Location" />
              </div>
              <div className="card-text">
                <p>Location</p>
                <span>Ahmedabad, India</span>
              </div>
            </div>

            <div className="hero-card">
              <div className="card-icon">
                <img src="images/dollar.png" alt="Price" />
              </div>
              <div className="card-text">
                <p>Price</p>
                <span>$1000 - $10,000</span>
              </div>
            </div>

            <div className="hero-card">
              <div className="card-icon">
                <img src="images/house.svg" alt="House" />
              </div>
              <div className="card-text">
                <p>Type of Property</p>
                <span>Apartment</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HeroSection;
