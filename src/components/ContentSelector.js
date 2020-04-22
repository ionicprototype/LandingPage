// Dependencies
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
// Utilities
import addKeyFrames from '../utilities/addKeyFrame';
// CSS
import '../styles/ContentSelectorStyles.css';

function ContentSelector(props) {

  const [ isOrbit, setOrbit ] = useState(true);
  const ellipseValues = [
    { 
      animationName: ["ellipseHorz-0", "ellipseVer-0"], // [0] controls horizontal animation name, [1] sets vertical animation name
      cycleTime: ["3s", "6s"], // animation cycle times: [0] = horizontal motion, [1] = vertical motion
      startValue: [ 80, 43], // [0] absolute (x,y) position on page in left, top
      lengthValue: [ 40, 30], // lengthValue[0] = aValue of ellipse, [1] = bValue of ellipse
      text: "*"
    },
    { 
      animationName: ["ellipseHorz-1", "ellipseVer-1"], // [0] controls horizontal animation name, [1] sets vertical animation name
      cycleTime: ["3s", "6s"], // animation cycle times: [0] = horizontal motion, [1] = vertical motion
      startValue: [ 10, 43], // [0] absolute (x,y) position on page in left, top
      lengthValue: [ 40, 30], // lengthValue[0] = aValue of ellipse, [1] = bValue of ellipse
      text: "*"
    },
    { 
      animationName: ["ellipseHorz-2", "ellipseVer-2"], // [0] controls horizontal animation name, [1] sets vertical animation name
      cycleTime: ["1s", "2s"], // animation cycle times: [0] = horizontal motion, [1] = vertical motion
      startValue: [ 45, 43], // [0] absolute (x,y) position on page in left, top
      lengthValue: [ 4, 5], // lengthValue[0] = aValue of ellipse, [1] = bValue of ellipse
      text: "*"
    }
  ];

  const toggleOrbit = () => {
    addKeyFrames(ellipseValues);
    setOrbit(!isOrbit);
  }

  const ellipseMap = ellipseValues.map(ellipse => (
    <div key={uuidv4()}>            
      <div className="containerHorz" style={{ top: `${ellipse.startValue[1]}%`, left: `${ellipse.startValue[0]}%`, animation: `${isOrbit ? `${ellipse.cycleTime[0]} ${ellipse.animationName[0]} alternate linear infinite` : "none"}`}}>
        <h1 className="containerVert" style={{ animation: `${isOrbit ? `${ellipse.cycleTime[1]} ${ellipse.animationName[1]} infinite` : "none"}`}}>{ellipse.text}</h1>
      </div>
    </div>
  ));

  return (
      <div className="ContentSelector" onClick={toggleOrbit}>
        <div className="orbitWrapper">
          <h2 style={{ position: "absolute", top: "25vh", left: "30vw" }}>1/2 Chemist</h2>
          <h2 style={{ position: "absolute", top: "35vh", left: "55vw" }}>All Dad</h2>
          <h2 style={{ position: "absolute", top: "55vh", left: "35vw" }}>1/2 Dev</h2>
          <div style={{ position: "absolute", top: "43vh", left: "50vw" }}></div>
          {ellipseMap}
        </div>
      </div>
  )
}

export default ContentSelector;
