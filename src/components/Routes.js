// Dependencies
import React, { useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
// Components
import Navbar from './Navbar';
import Page from './Page';
import SideBar from './SideBar';
// Hooks
import useToggle from '../hooks/useToggle';
// Utilities
import combinedLists from '../utilities/combinedLists';

function Routes(props) {
  const { linkNames } = props;
  const [ activeLink, setActiveLink ] = useState(0); 
  const [ sideBarView, toggleSidebar ] = useToggle(false);        // toggle whether sidebar is active or not
  const [ optionsView, toggleOptionsMenu ] = useToggle(false);       // display links or options
  const [ lightTheme, setLightTheme ] = useToggle(true);         // light/dark mode
  const [ colorBlindMode, setColorBlindMode ] = useToggle(false); // colorblind mode
  const [ viewMode, setViewMode ] = useToggle(true);             // chem OR dev mode toggles resume style and skill icons

  // @DESC sets activeLink in Navbar
  const changeActive = index => {
    setActiveLink(index);
  }

  const combinedOptionsMenu = [
    {name: "Light/Dark Theme", controlValue: lightTheme, controlSwitch: setLightTheme, id: "toggleLightDark"}, 
    {name: "Colorblind Mode", controlValue: colorBlindMode, controlSwitch: setColorBlindMode, id: "toggleColorblind"}, 
    {name: "Chem/Dev Mode", controlValue: viewMode, controlSwitch: setViewMode, id: "toggleChemDev"}
  ];

  // Loops through requested URL and Utilities to determine what was requested
  const getPage = props => {
    let tempIndex  = 0;
    let name = props.match.params.name;
    let currentPage = combinedLists.find(
      page => page.type.toLowerCase() === name.toLowerCase()
    );
    /** If requested name exists (currentPage), find the index in the list link to apply the ActiveLink className and formatting
     *  Else the link does not exist and should be set to 'home' or 0
     */
    tempIndex = currentPage ? linkNames.findIndex(item => item === name) : 0;
    setActiveLink(tempIndex);

    if(currentPage) {
      return <Page {...props} pageInfo={currentPage} pageName={name} toggleSidebar={toggleSidebar} />;
    } else {
      return <Redirect to="/home" />;
    }
  }

  return (
    <>
      <Navbar activeLink={activeLink} changeActive={changeActive} linkNames={linkNames} toggleSidebar={toggleSidebar} sideBarView={sideBarView} />
      <SideBar combinedOptionsMenu={combinedOptionsMenu} linkNames={linkNames} optionsView={optionsView} sideBarView={sideBarView} toggleSidebar={toggleSidebar} toggleOptionsMenu={toggleOptionsMenu} />
      <Switch>
        <Route 
          exact 
          path="/home" 
          render={routeProps => (
            <Page 
              {...props} 
              pageName="home" 
              toggleSidebar={toggleSidebar} 
              sideBarView={sideBarView} 
            />)} 
        />
        <Route exact path="/:name" component={getPage} />
        <Redirect to="/home" />
      </Switch>
    </>
  )
};

export default Routes;