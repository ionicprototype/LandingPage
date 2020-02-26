// Dependencies
import React from 'react';

function CardExperience(props) {
  const { cardInfo } = props;
  console.log(cardInfo);
  return (
    <div className="CardExperience">
      <div className="CardExperience-Company">{cardInfo.company}</div>
      <hr />
      <div className="CardExperience-Date">
        {`${cardInfo.startDate} - ${cardInfo.endDate}`}
      </div>
      <ul className="CardExperience-Description">
        {cardInfo.descriptions.map(description => (
          <li>{description}</li>
        ))}
      </ul>
    </div>
  )
}

export default CardExperience
