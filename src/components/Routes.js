// Dependencies
import React, { useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
// Components
import Navbar from './Navbar';
import Page from './Page';
import SideBar from './SideBar';
// Utilities
import combinedLists from '../utilities/combinedLists';

function Routes(props) {
  const { linkNames } = props;
  const [ activeLink, setActiveLink ] = useState(0);
  
  const changeActive = index => {
    setActiveLink(index);
  }
  // Loops through requested URL and Utilities to determine what was requested
  const getPage = props => {
    let tempIndex  = 0;
    let name = props.match.params.name;
    let currentPage = combinedLists.find(
      page => page.type.toLowerCase() === name.toLowerCase()
    );
    /** If queried name exists (currentPage), find the index in the list link to apply the ActiveLink class
     *  Else the link does not exist and should be set to 'home' or 0
     */
    tempIndex = currentPage ? linkNames.findIndex(item => item === name) : 0;
    setActiveLink(tempIndex);

    if(currentPage) {
      return (<Page {...props} pageName={name} pageInfo={currentPage} />);
    } else {
      return (<Redirect to="/home" />);
    }
  }

  return (
    <>
      <Navbar activeLink={activeLink} changeActive={changeActive} linkNames={linkNames} />
      <SideBar linkNames={linkNames} />
      <Switch>
        <Route exact path="/home" render={routeProps => <Page {...props} pageName="home" />} />
        <Route exact path="/:name" component={getPage} />
        <Redirect to="/home" />
      </Switch>
    </>
  )
};

export default Routes;