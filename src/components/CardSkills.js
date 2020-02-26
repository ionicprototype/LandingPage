// Dependencies
import React from 'react'

function CardSkills(props) {
  const { cardInfo } = props;
  console.log(cardInfo);
  return (
    <div className="CardSkills">
      {cardInfo.skills.map(info => (
        <img className="CardSkills-Icon" src={`${info.URL}`} alt={info.name} />
      ))}
    </div>
  )
}

export default CardSkills
