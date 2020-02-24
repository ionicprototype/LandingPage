// Dependencies
import React from 'react';
// Components
import CardEducation from './CardEducation';
import CardExperience from './CardExperience';
import CardProjects from './CardProjects';
import CardSkills from './CardSkills';
// CSS
import '../styles/CardStyles.css';
import '../styles/CardSelectorStyles.css';


function CardSelector(props) {
  const { cardView, pageInfo, pageTitle } = props;
  
  const setCardView = (cardView) => {
    if( cardView === "education") {
      return pageInfo.map(info => (
        <div className="Card">
          <div className="Card-Container">
            <div className="Card-Title">{pageTitle}</div>
            <CardEducation />
          </div>
        </div>
      ));
    } else if(cardView === "experience") {
      return pageInfo.map(info => (
        <div className="Card">
          <div className="Card-Container">
            <div className="Card-Title">{pageTitle}</div>
            <CardExperience />
          </div>
        </div>
      ));
    } else if(cardView === "projects") {
      return pageInfo.map(info => (
        <div className="Card">
          <div className="Card-Container">
            <div className="Card-Title">{pageTitle}</div>
            <CardProjects />
          </div>
        </div>
      ));
    } else if(cardView === "skills") {
      return pageInfo.map(info => (
        <div className="Card">
          <div className="Card-Container">
            <div className="Card-Title">{pageTitle}</div>
            <CardSkills />
          </div>
        </div>
      ));
    }
  }
  
  return (
    <span className="CardSelector">
      {setCardView(cardView)}
    </span>
  )
}

export default CardSelector;