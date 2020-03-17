// Dependencies
import React from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
// CSS
import '../styles/SideBarStyles.css';


function SideBar(props) {
  const { combinedOptionsMenu, linkNames, optionsView, sideBarView, toggleSidebar, toggleOptionsMenu } = props;

  // @DESC constructs links for Sidebar
  const linkView = linkNames.map(linkTag => (
    <Link 
      className="SideBar-Link" 
      to={linkTag}
      key={linkTag}
      onClick={toggleSidebar}
    >
      {linkTag.toUpperCase()}
    </Link>
  ));

  // @DESC constructs toggle switch menu for Sidebar
  const menuView = combinedOptionsMenu.map(option => (
    <div className="SideBar-toggleSwitch" key={uuidv4()} >
      <label className="optionsLabel" htmlFor={option.id}>{option.name}</label>
      <input type="checkbox" className="checkbox" id={option.id} checked={option.controlValue} onChange={option.controlSwitch} />  
      <label className="switch" htmlFor={option.id} />
    </div>
  ));

  // @DESC determines which view is requested (site links or options) to display in the Sidebar
  const renderView = optionsView ? menuView : linkView;

  return (
    <div className="SideBar" style={{ left: `${sideBarView ? "0%" : "-100%"}`}}>
      <div className="SideBar-Container">
        <button className="Sidebar-Close" onClick={toggleSidebar}>X</button>
        <div className="SideBar-toggleSwitch">
          <label className="optionsLabel" htmlFor="toggle">Options</label>
          <input type="checkbox" className="checkbox" id="toggle" checked={optionsView} onChange={toggleOptionsMenu} />  
          <label className="switch" htmlFor="toggle" />
        </div>
        {renderView}
        <div className="SideBar-BG"></div>
      </div>
      <div className="SideBar-Clickable" onClick={toggleSidebar}></div>
    </div>
  );
}

export default SideBar
