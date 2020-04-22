// Dependencies
import React from 'react';
import { v4 as uuidv4 } from 'uuid';
// CSS
import '../styles/CardStyles.css';


function CardExperience(props) {
  const { cardInfo } = props;
  
  return (
    <div className="CardExperience">
      <div className="CardExperience-Company">
        <span>{cardInfo.company}</span>
        <span>{`${cardInfo.startDate} - ${cardInfo.endDate}`}</span>
      </div>
      <ul className="CardExperience-Description">
        {cardInfo.descriptions.map(description => (
          <li key={uuidv4()}>{description}</li>
        ))}
      </ul>
    </div>
  )
}

export default CardExperience
