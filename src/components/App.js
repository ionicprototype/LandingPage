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
      <SideBar />
      <Page />
      <Footer />
    </div>
  );
}

export default App;