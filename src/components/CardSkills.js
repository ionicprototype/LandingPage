// Dependencies
import React from 'react'

function CardSkills(props) {
  const { cardInfo } = props;
  console.log(cardInfo);
  return (
    <div className="CardSkills">
      {cardInfo.skills.map(info => (
      <div className="CardSkills-Container">
        <img className="CardSkills-Icon" src={`${info.URL}`} alt={info.name} />
      </div>
      ))}
    </div>
  )
}

export default CardSkills
