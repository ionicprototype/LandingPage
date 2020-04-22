// Dependencies
import React from 'react';
// Components
import Routes from './Routes';
// CSS
import '../styles/AppStyles.css';
import '../styles/ColorStyles.css';

function App(props) {
  const linkNames = [
    "home", "experience", "projects", "skills"
  ];

  return (
    <div className="App">
      <Routes linkNames={linkNames} />
    </div>
  );
}

export default App;