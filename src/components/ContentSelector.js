// Dependencies
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
// Utilities
import addKeyFrames from '../utilities/addKeyFrame';
import ellipseValues from '../utilities/electronSpheres';
// CSS
import '../styles/ContentSelectorStyles.css';

function ContentSelector(props) {

  const { darkTheme } = props;

  const [ isOrbit, setOrbit ] = useState(true);
  addKeyFrames(ellipseValues);

  const toggleOrbit = () => {

    setOrbit(!isOrbit);
  }

  const ellipseMap = ellipseValues.map(ellipse => (
    <div key={uuidv4()} >            
      <div className="containerHorz" style={{ top: `${ellipse.startValue[1]}%`, left: `${ellipse.startValue[0]}%`, animation: `${isOrbit ? `${ellipse.cycleTime[0]}s ${ellipse.animationName[0]} alternate linear infinite` : "none"}`}}>
        <div className="containerVert" style={{ animation: `${isOrbit ? `${ellipse.cycleTime[1]}s ${ellipse.animationName[1]} infinite` : "none"}`}}>
          <div className={`electron ${darkTheme && 'dark'}`} style={{ animation: `${isOrbit ? `elecOrbit ${ellipse.cycleTime[1]}s linear infinite` : "none"}` }}  ></div>
          {/* style={{ animation: `${isOrbit ? `linear ${ellipse.animationName[2]} 8s infinite` : "none"}` }} */}
          {ellipse.text}
        </div>
      </div>
    </div>
  ));

  return (
      <div className="ContentSelector" onClick={toggleOrbit}>
        <div className="orbitWrapper">
          <h2 style={{ position: "absolute", top: "25vh", left: "30vw", zIndex: "10" }}>1/2 Chemist</h2>
          <h2 style={{ position: "absolute", top: "35vh", left: "55vw", zIndex: "10" }}>All Dad</h2>
          <h2 style={{ position: "absolute", top: "55vh", left: "35vw", zIndex: "10" }}>1/2 Dev</h2>
          {ellipseMap}
        </div>
      </div>
  )
}

export default ContentSelector;
