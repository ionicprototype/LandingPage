// Dependencies
import React from 'react'
import { Link } from 'react-router-dom';
// CSS
import '../styles/NavbarStyles.css';

function Navbar(props) {
  const { activeLink, darkTheme, linkNames, screenSize, changeActive, toggleSidebar } = props;
  
  const handleClick = idx => {
    changeActive(idx);
  }

  const desktopView = linkNames.map( (linkTag, index) => (
    <Link className={`Navbar-Link ${darkTheme && 'dark'} ${activeLink === index ? `Navbar-ActiveLink ${darkTheme && 'dark'}` : `Navbar-InactiveLink ${darkTheme && 'dark'}`}`}
    to={linkTag}
    key={linkTag}
    onClick={() => handleClick(index)}
    >
      {linkTag.toUpperCase()}
      <hr className={`${activeLink === index ? `Navbar-ActiveBlock ${darkTheme && 'dark'}` : `Navbar-InactiveBlock ${darkTheme && 'dark'}`}`} />
    </Link>
  ));

  const mobileView = <div className={`Navbar-Link Navbar-ActiveLink ${darkTheme && 'dark'}`}>{linkNames[activeLink]}</div>;
  const viewMode = screenSize <= 576 ? mobileView : desktopView; 

  return (
    <nav className={`Navbar ${darkTheme && 'dark'}`}>
      <div className="Navbar-ControlBox">
        {/* `${toggleNavbar ? "toggleNavbar" : "toggleMenu"} Navbar-ControlButton` */}
        <button className="toggleNavbar Navbar-ControlButton" onClick={toggleSidebar}>{ false ? "MENU" : <i className={`fas fa-bars ${darkTheme && 'dark'}`}></i>}</button>
      </div>
      <div className="Navbar-LinkContainer">
        {viewMode}
      </div>
    </nav>
  )
}

export default Navbar;