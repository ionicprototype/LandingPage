// Dependencies
import React, { useState } from 'react'

function CardProjects(props) {
  const { cardInfo } = props;
  const [ flip, setFlip ] = useState("front");

  const flipCard = () => {
    let flipValue = flip;
    if( flipValue === "front") {
      flipValue = "back"
    } else {
      flipValue = "front"
    }
    setFlip(flipValue);
  }

  return (
    <div className="CardProjects">
      <div className={`CardProjects-FlipBody ${flip}`}>
        <div className="CardProjects-Front">
          <img className="CardProjects-Image" src={`./images/backgrounds/landscape.jpg`} alt="HTML5"/>
          <div>Made With:</div>
            <div className="CardProjects-MadeWith">
            {cardInfo.projectTools.map(tool => (
              <img className="CardProjects-MadeWithIcon" src={tool.toolIcon} alt={tool.toolName} />
            ))}
            </div>
          </div>
          <div className="CardProjects-Back">
            <div className="Back-Description">
              <p>{cardInfo.description}</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>
          </div>
        </div>
      <div className="CardProjects-Footer">
        <a href={cardInfo.projectLink}><i className="CardProjects-FooterIcon fas fa-link"/></a>
        <a href={cardInfo.gitHubLink}><i className="CardProjects-FooterIcon fab fa-github-alt"/></a>
        <a href="#bottom" onClick={flipCard}>
          <i className="CardProjects-FooterIcon fas fa-sync-alt" />
        </a>
      </div>
    </div>
  )
}

export default CardProjects;