// Dependencies
import React from 'react';
import { Link } from 'react-router-dom';
// CSS
import '../styles/SideBarStyles.css';


function SideBar(props) {
  const { darkTheme, linkNames, screenSize, sideBarView, toggleSidebar, setDarkTheme } = props;

  // @DESC constructs links for Sidebar
  const linkView = linkNames.map(name => (
    <Link 
      className={`SideBar-Link ${darkTheme && 'dark'}`} 
      to={name}
      key={name}
      onClick={toggleSidebar}
    >
      {name.toUpperCase()}
    </Link>
  ));

  const viewWidth = (screenSize <= 992 ? 100 : 50);

  return (
    <div className="SideBar" style={{ left: `${sideBarView ? "0%" : "-100%"}`}}>
      <div className={`SideBar-Docked ${darkTheme && 'dark'}`} style={{ flex: `1 1 ${viewWidth}vw`}}>
        <div className="SideBar-Command">
          <button className="Sidebar-Close" onClick={toggleSidebar}><i class={`fas fa-times-circle ${darkTheme && 'dark'}`}></i></button>
          <div className={`SideBar-Settings SideBar-toggleSwitch ${darkTheme && 'dark'}`}>
            <input type="checkbox" className={`toggleSwitch ${darkTheme && 'dark'}`} id="toggle" checked={darkTheme} onChange={setDarkTheme} />  
            <label className={`switch ${darkTheme && 'dark'}`} htmlFor="toggle" />
          </div>
        </div>
        <div className="SideBar-Links">
          {linkView}
        </div>
        <div className={`SideBar-BG ${darkTheme && 'dark'}`}></div>
      </div>      
      <div className="SideBar-Scrim" onClick={toggleSidebar} style={{ flex: `1 1 ${100 - viewWidth}vw`}}></div>
    </div>
  );
}

export default SideBar