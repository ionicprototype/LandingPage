// Dependencies
import React from 'react';
// CSS
import '../styles/CardStyles.css';


function CardEducation(props) {
  const { cardInfo } = props;

  return (
    <div className="CardEducation">
      <div className="CardEducation-Degree">{cardInfo.degree}</div>
      <div className="CardEducation-Date">{`${cardInfo.startDate} - ${cardInfo.endDate}`}</div>
    </div>    

    )
}

export default CardEducation;