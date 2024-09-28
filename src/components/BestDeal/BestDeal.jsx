import React, { useState } from 'react';
import './BestDeal.css';
import { properties } from '../../data/Bestdeal'; 
import Header from '../Header/Header';

const BestDeal = () => {
  const [activeFilter, setActiveFilter] = useState('All'); 

  const handleFilterClick = (type) => {
    setActiveFilter(type);
  };


  const filteredProperties = activeFilter === 'All' 
    ? properties 
    : properties.filter(property => property.type === activeFilter);

  return (
    <div className="best-deal-container">
      <Header 
        text="Best Real Estate Deals" 
        subText="Discover the best real estate deals available today"
      />

      <div className="filter-buttons">
        {['Residential Property', 'Commercial Property', 'Agriculture Property', 'Industrial Property'].map(type => (
          <button 
            key={type} 
            className={`filter-button ${activeFilter === type ? 'active' : ''}`} 
            onClick={() => handleFilterClick(type)}
          >
            {type}
          </button>
        ))}
      </div>

      <div className="property-images">
        {filteredProperties.map(property => (
          <img 
            key={property.id} 
            src={property.imageUrl} 
            alt={property.type} 
            className="property-image" 
          />
        ))}
      </div>
    </div>
  );
};

export default BestDeal;
