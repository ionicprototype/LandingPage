// Dependencies
import React, { useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
// Components
import Navbar from './Navbar';
import Page from './Page';
import SideBar from './SideBar';
// Hooks
import useMedia from '../hooks/useMedia';
import useToggle from '../hooks/useToggle';
// Utilities
import combinedLists from '../utilities/combinedLists';

function Routes(props) {
  const { linkNames } = props;
  const [ activeLink, setActiveLink ] = useState(0); 
  // sidebar visable hook
  const [ sideBarView, toggleSidebar ] = useToggle(false);                    
  // light/dark mode hook
  const [ darkTheme, setDarkTheme ] = useToggle(true);                  
  // screen size query hook
  const screenSize = useMedia(
    ['(max-width: 575.98px)','(max-width: 767.98px)','(max-width: 991.98px)','(max-width: 1199.98px)' ],
    [576,768,992,1200],
    '>1200px'
  );

  // @DESC sets activeLink in Navbar
  const changeActive = index => {
    setActiveLink(index);
  }

  // Loops through requested URL and Utilities to determine what was requested
  const getPage = props => {
    let tempIndex  = 0;
    let pageName = props.match.params.name;
    let currentPage = combinedLists.find(
      page => page.type.toLowerCase() === pageName.toLowerCase()
    );
    /** If requested name exists (currentPage), find the index in the list link to apply the ActiveLink className and formatting
     *  Else the link does not exist and should be set to 'home' or 0
     */
    tempIndex = currentPage ? linkNames.findIndex(item => item === pageName) : 0;
    setActiveLink(tempIndex);

    if(currentPage) {
      return <Page {...props} darkTheme={darkTheme} pageInfo={currentPage} pageName={pageName} />;
    } else if(pageName === 'home') {
        return <Page {...props} darkTheme={darkTheme} pageInfo={currentPage} pageName={pageName} />;
    } else {
      return <Redirect to="/home" />;
    }
  }

  return (
    <>
      <Navbar 
        activeLink={activeLink} 
        changeActive={changeActive} 
        darkTheme={darkTheme} 
        linkNames={linkNames} 
        toggleSidebar={toggleSidebar} 
        sideBarView={sideBarView}
        screenSize={screenSize} 
      />
      <SideBar 
        darkTheme={darkTheme} 
        linkNames={linkNames} 
        screenSize={screenSize} 
        sideBarView={sideBarView} 
        toggleSidebar={toggleSidebar} 
        setDarkTheme={setDarkTheme}
      />
      <Switch>
        <Route 
          exact 
          path="/:name" 
          component={getPage} 
        />
        <Redirect to="/home" />
      </Switch>
    </>
  )
};

export default Routes;