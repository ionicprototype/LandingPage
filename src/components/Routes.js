// Dependencies
import React from 'react';
import { Route, Switch } from 'react-router-dom';
// Components
import Page from './Page';
import SideBar from './SideBar';
// Utilities
import combinedLists from '../utilities/combinedLists';

function Routes(props) {
  // Loops through requested URL and Utilities to determine what was requested
  const getPage = props => {
    let name = props.match.params.name;
    let currentPage = combinedLists.find(
      page => page.type.toLowerCase() === name.toLowerCase()
    );
    if(currentPage) {
      return (<Page {...props} pageName={name} pageInfo={currentPage} />);
    } else if(name === "about" || name === "contact") { 
      return (<Page {...props} pageName={name} />);
    } else {
      return (<Page {...props} pageName="home" />);
    }
  }

  return (
    <div style={{ height: "80%", flex: "9 9 90%", display: "flex", flexFlow: "row wrap"}}>
      <SideBar />
      <Switch>
        <Route exact path="/home" render={() => <Page {...props} pageName="home" />} />
        <Route exact path="/:name" component={getPage} />
      </Switch>
    </div>
  )
};

export default Routes;