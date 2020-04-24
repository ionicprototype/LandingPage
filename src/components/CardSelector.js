// Dependencies
import React from 'react';
import { v4 as uuidv4 } from 'uuid';
// Components
import CardEducation from './CardEducation';
import CardExperience from './CardExperience';
import CardProjects from './CardProjects';
import CardSkills from './CardSkills';
// CSS
import '../styles/CardStyles.css';
import '../styles/CardSelectorStyles.css';


function CardSelector(props) {
  const { cardView, darkTheme, pageInfo } = props;

  const setCardView = (cardView) => {
     if(cardView === "experience") {
      return (
        <>
          {pageInfo[0].map(info => (
          <div key={uuidv4()} className={`Card ${darkTheme && 'dark'}`}>
            <div className="Card-Title">{info.title}</div>
            <div className="Card-Container">
              <CardExperience cardInfo={info} />
            </div>
          </div>
          ))}
          {pageInfo[1].map(info => (
            <div key={uuidv4()} className={`Card ${darkTheme && 'dark'}`}>
              <div className="Card-Title">{info.institution}</div>
              <div className="Card-Container">
                <CardEducation cardInfo={info} />
              </div>
            </div>
          ))}
        </>
        );
    } else if(cardView === "projects") {
      return pageInfo.map(info => (
        <div key={uuidv4()} className={`Card ${darkTheme && 'dark'}`}>
          <div className="Card-Title">{info.projectName}</div>
          <div className="Card-Container">
            <CardProjects cardInfo={info} />
          </div>
        </div>
      ));
    } else if(cardView === "skills") {
      return pageInfo.map(info => (
        <div key={uuidv4()} className={`Card ${darkTheme && 'dark'}`}>
          <div className="Card-Title">{info.type}</div>
          <div className="Card-Container">
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