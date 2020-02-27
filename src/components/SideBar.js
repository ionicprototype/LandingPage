// Dependencies
import React from 'react';
import { Link } from 'react-router-dom';
// CSS
import '../styles/SideBarStyles.css';


function SideBar(props) {
  const { linkNames } = props;

  return (
    <div className="SideBar">
      <i className="fas fa-mug-hot SideBar-Link"></i>
      {linkNames.map(linkTag => (
        <Link className="SideBar-Link" 
          to={linkTag}
          key={linkTag}
        >
          {linkTag.toUpperCase()}
        </Link>
      ))}
    </div>
  )
}

export default SideBar
