const ellipseValues = [
  { 
    animationName: ["ellipseHorz-0", "ellipseVer-0", "electronOrbit-0"], // [0] controls horizontal animation name, [1] sets vertical animation name
    cycleTime: [ 3, 6], // animation cycle times: [0] = horizontal motion, [1] = vertical motion
    startValue: [ 80, 43], // [0] absolute (x,y) position on page in left, top
    lengthValue: [ 40, 30], // lengthValue[0] = aValue of ellipse, [1] = bValue of ellipse
    text: " "
  },
  { 
    animationName: ["ellipseHorz-1", "ellipseVer-1", "electronOrbit-1"], // [0] controls horizontal animation name, [1] sets vertical animation name
    cycleTime: [ 3, 6], // animation cycle times: [0] = horizontal motion, [1] = vertical motion
    startValue: [ 10, 43], // [0] absolute (x,y) position on page in left, top
    lengthValue: [ 40, 30], // lengthValue[0] = aValue of ellipse, [1] = bValue of ellipse
    text: " "
  },
  { 
    animationName: ["ellipseHorz-2", "ellipseVer-2", "electronOrbit-2"], // [0] controls horizontal animation name, [1] sets vertical animation name
    cycleTime: [ 1, 2], // animation cycle times: [0] = horizontal motion, [1] = vertical motion
    startValue: [ 40, 43], // [0] absolute (x,y) position on page in left, top
    lengthValue: [ 4, 5], // lengthValue[0] = aValue of ellipse, [1] = bValue of ellipse
    text: " "
  },
  { 
    animationName: ["ellipseHorz-3", "ellipseVer-3", "electronOrbit-3"], // [0] controls horizontal animation name, [1] sets vertical animation name
    cycleTime: [ 1, 2], // animation cycle times: [0] = horizontal motion, [1] = vertical motion
    startValue: [ 50, 43], // [0] absolute (x,y) position on page in left, top
    lengthValue: [ 4, 5], // lengthValue[0] = aValue of ellipse, [1] = bValue of ellipse
    text: " "
  }
];

export default ellipseValues;