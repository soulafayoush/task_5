import React from 'react';
import './Card.css'; 
import '@fortawesome/fontawesome-free/css/all.min.css';

const Card = ({ image, price, title, location, address }) => {
  return (
    <div className="property-card">
      <img 
        src={image} 
        alt={`${title} - ${location}`} 
        className="card-image" 
      />
      <div className="card-price">{price}</div>
      <h3 className="card-title">{title}</h3>
      <h4 className="card-location">{location}</h4>
      <div className="card-address">
        <i className="fas fa-map-marker-alt location-icon"></i>
        <span>{address}</span>
      </div>
    </div>
  );
}

Card.defaultProps = {
  image: 'default-image-url.jpg',
  price: 'غير متوفر',
  title: 'عنوان غير متوفر',
  location: 'موقع غير متوفر',
  address: 'عنوان غير متوفر',
};

export default Card;
