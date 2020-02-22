// Dependencies
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
// Components
import Page from './Page';
import SideBar from './SideBar';
// Utilities
import combinedLists from '../utilities/combinedLists';

function Routes() {
  // Loops through requested URL and Utilities to determine what was requested
  const getPage = props => {
    let name = props.match.params.name;
    let currentPage = combinedLists.find(
      page => page.type.toLowerCase() === name.toLowerCase()
    );
    return currentPage ? (
      <Page {...props} pageName={name} pageInfo={currentPage} />
    ) : (
      <Page pageName={name} />
    );
  }

  return (
    <div style={{ height: "80%", flex: "9 9 90%", display: "flex", flexFlow: "row wrap"}}>
      <SideBar />
      <Switch>
        <Route exact path="/:name" component={getPage} />
        <Redirect to="/home" />
      </Switch>
    </div>
  )
};

export default Routes;