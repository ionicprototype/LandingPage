// Dependencies
import React from 'react';
// Components
import Footer from './Footer';
import Navbar from './Navbar';
import Page from './Page';
import SideBar from './SideBar';
// CSS
import '../styles/AppStyles.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div style={{ height: "80%", flex: "9 9 90%", display: "flex", flexFlow: "row wrap"}}>
        <SideBar />
        <Page />
      </div>
      
      <Footer />
    </div>
  );
}

export default App;