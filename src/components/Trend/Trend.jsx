import React from 'react';
import { Card } from 'react-bootstrap';
import Header from '../Header/Header';
import { cardData } from '../../data/CardData';
import './Trend.css'; 

const Trend = () => {
  return (
    <div className="trend-section">
      <Header 
        text="Most Trending" 
        subText="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      />

      <div className="row g-4">
        {cardData.map((card, index) => (
          <div className="col-lg-4 col-md-6 col-sm-12" key={index}>
            <CardComponent
              price={card.price}
              title={card.title}
              address={card.address}
              image={card.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
};


const CardComponent = ({ price, title, address, image }) => {
  return (
    <Card className="property-card h-100">
      <Card.Img variant="top" src={image} className="property-image" />
      <Card.Body>
        <h4 className="card-price">{price}</h4>
        <h5 className="card-title">{title.split('\n').map((line, index) => (
          <span key={index}>{line}<br/></span>
        ))}</h5>
        <div className="location">
          <i className="fa fa-map-marker" aria-hidden="true"></i>
          <span>{address}</span>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Trend;
