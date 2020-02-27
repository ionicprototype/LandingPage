// Dependencies
import React from 'react';
import { v4 as uuidv4 } from 'uuid';
// CSS
import '../styles/CardStyles.css';


function CardExperience(props) {
  const { cardInfo } = props;
  
  return (
    <div className="CardExperience">
      <div className="CardExperience-Company">{cardInfo.company}</div>
      <div className="CardExperience-Date">
        {`${cardInfo.startDate} - ${cardInfo.endDate}`}
      </div>
      <hr style={{ width: "50%" }} />
      <ul className="CardExperience-Description">
        {cardInfo.descriptions.map(description => (
          <li key={uuidv4()}>{description}</li>
        ))}
      </ul>
    </div>
  )
}

export default CardExperience
