function addKeyFrames(shapeObj) {

  // Check if animation keyframes exist in DOM
  const tagCheck = document.getElementById("keyframes-0") ? true : false;

  const contentStyle = counter => {
    const style = document.createElement("style");
    style.type = "text/css";
    style.id = `keyframes-${counter}`;
    document.head.appendChild(style);
    return style.sheet;
  };

  // if animations do not exist, create and append them
  if(tagCheck === false) {
  
    shapeObj.map((ellipse, idx) => {

      const customSheet = contentStyle(idx);
      const xDirec = ellipse.startValue[0] < 50 ? true : false;
      const framesHorz = `to { transform: translateX(${xDirec ? ellipse.lengthValue[0] * 2 : -ellipse.lengthValue[0] * 2}vw); };`;
      const framesVert = `0% { 
        transform: translateY(0px); 
        animation-timing-function: cubic-bezier(0,0,0,1); 
      } 
      25% { 
        transform: translateY(${xDirec ? -ellipse.lengthValue[1] : ellipse.lengthValue[1]}vh); 
        animation-timing-function: cubic-bezier(1,0,1,1); 
      } 
      50% { 
        transform: translateY(0px); 
        animation-timing-function: cubic-bezier(0,0,0,1); 
      } 
      75% { 
        transform: translateY(${xDirec ? ellipse.lengthValue[1] : -ellipse.lengthValue[0]}vh); 
        animation-timing-function: cubic-bezier(1,0,1,1); 
      } 
      100% { 
        transform: translateY(0px); 
        animation-timing-function: cubic-bezier(1,0,1,1); 
      }`;

      customSheet.insertRule(`@keyframes ${ellipse.animationName[0]} { ${framesHorz} }`, 0);
      customSheet.insertRule(`@keyframes ${ellipse.animationName[1]} { ${framesVert} }`, 0);
      return false;
    });
  } else {
    //if they exist, do nothing
  }
  
}

export default addKeyFrames;