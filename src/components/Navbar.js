// Dependencies
import React from 'react'
import { Link } from 'react-router-dom';
// CSS
import '../styles/NavbarStyles.css';

function Navbar(props) {
  const { activeLink, linkNames, changeActive, toggleSidebar } = props;
  
  const handleClick = idx => {
    changeActive(idx);
  }

  return (
    <nav className="Navbar">
      <div className="Navbar-ControlBox">
        {/* `${toggleNavbar ? "toggleNavbar" : "toggleMenu"} Navbar-ControlButton` */}
        <button className="toggleNavbar Navbar-ControlButton" onClick={toggleSidebar}>{ false ? "MENU" : <i className="fas fa-bars"></i>}</button>
      </div>
      <div className="Navbar-LinkContainer">
        {linkNames.map( (linkTag, index) => (
          <Link className={`Navbar-Link ${activeLink === index ? 'Navbar-ActiveLink' : 'Navbar-InactiveLink'}`}
          to={linkTag}
          key={linkTag}
          onClick={() => handleClick(index)}
          >
            {linkTag.toUpperCase()}
            <hr className={`${activeLink === index ? 'Navbar-ActiveBlock' : 'Navbar-InactiveBlock'}`} />
          </Link>
        ))}
      </div>
    </nav>
  )
}

export default Navbar;