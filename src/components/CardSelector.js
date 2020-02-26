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
  const { cardView, pageInfo } = props;

  const setCardView = (cardView) => {
    if( cardView === "education") {
      return pageInfo.map(info => (
        <div className="Card" style={{height: "20%", width: "80%" }}>
          <div className="Card-Container">
            <div className="Card-Title">{info.institution}</div>
            <CardEducation cardInfo={info} />
          </div>
        </div>
      ));
    } else if(cardView === "experience") {
      return pageInfo.map(info => (
        <div className="Card" style={{ width: "90%", height: "80%" }}>
          <div className="Card-Container">
            <div className="Card-Title">{info.title}</div>
            <CardExperience cardInfo={info} />
          </div>
        </div>
      ));
    } else if(cardView === "projects") {
      return pageInfo.map(info => (
        <div className="Card" style={{width: "80%", height: "80%" }}>
          <div className="Card-Container">
            <div className="Card-Title">{info.projectName}</div>
            <CardProjects cardInfo={info} />
          </div>
        </div>
      ));
    } else if(cardView === "skills") {
      return pageInfo.map(info => (
        <div className="Card" style={{ width: "80%", height: "75%" }}>
          <div className="Card-Container">
            <div className="Card-Title">{info.type}</div>
            <CardSkills cardInfo={info} />
          </div>
        </div>
      ));
    }
  }
  
  return (
    <div className="CardSelector">
        {setCardView(cardView)}
    </div>
  )
}

export default CardSelector;