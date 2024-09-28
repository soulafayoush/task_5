import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons'; 
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <Row className="footer-sections">
   
          <Col className="footer-section logo-section">
            <img src="./assets/img/logo.png" alt="Logo" className="footer-logo" />
            <p className="footer-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet tempus
              felis vitae sit est quisque.
            </p>
          </Col>

    
          <Col className="footer-section">
            <h4>Services</h4>
            <p>Payment & Tax</p>
            <p>View Booking</p>
            <p>Features</p>
            <p>Support</p>
          </Col>

    
          <Col className="footer-section">
            <h4>About</h4>
            <p>About us</p>
            <p>Pricing</p>
            <p>News</p>
            <p>New Property</p>
          </Col>

     
          <Col className="footer-section">
            <h4>Our Location</h4>
            <p>2972 Westheimer Rd. Santa Ana, Illinois 85486</p>
            <div className="social-icons">
              <div className="icon-circle">
                <FontAwesomeIcon icon={faFacebookF} />
              </div>
              <div className="icon-circle">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </div>
              <div className="icon-circle">
                <FontAwesomeIcon icon={faInstagram} />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="footer-line"></div>
      <div className="footer-text-wrapper">
        <div className="footer-text-links">
          <p className="footer-text">
            Copyright 2024 flora. All Rights Reserved.
          </p>
          <div className="footer-links">
            <span className="footer-link">Terms & Conditions</span>
            <span className="footer-link">Privacy Policy</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
