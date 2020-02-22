// Dependencies
import React from 'react';
// Components
import Footer from './Footer';
import Navbar from './Navbar';
import Routes from './Routes';
// CSS
import '../styles/AppStyles.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes />
      <Footer />
    </div>
  );
}

export default App;