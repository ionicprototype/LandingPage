// Dependencies
import React from 'react'
import { v4 as uuidv4 } from 'uuid';

function CardSkills(props) {
  const { cardInfo } = props;
  
  return (
    <div className="CardSkills">
      {cardInfo.skills.map(info => (
        <img className="CardSkills-Icon" key={uuidv4()} src={`${info.URL}`} alt={info.name} />
      ))}
    </div>
  )
}

export default CardSkills
