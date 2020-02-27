// Dependencies
import React from 'react'
import { Link } from 'react-router-dom';
// CSS
import '../styles/NavbarStyles.css';

function Navbar(props) {
  const { activeLink, linkNames, changeActive } = props;
  
  const handleClick = idx => {
    changeActive(idx);
  }

  return (
    <nav className="Navbar">
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
    </nav>
  )
}

export default Navbar;