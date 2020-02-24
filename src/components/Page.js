// Dependencies
import React from 'react';
// Components
import CardSelector from './CardSelector';
import ContentSelector from './ContentSelector';
// CSS
import '../styles/PageStyles.css';

function Page(props) {
  const { pageName, pageInfo } = props;
  const pageTitle = pageName.charAt(0).toUpperCase() + pageName.slice(1);

  const pageRender = (pageName) => {
    if(pageName === "education" || pageName === "experience" || pageName === "projects" || pageName === "skills") {
      return (<CardSelector pageTitle={pageTitle} cardView={pageInfo.type} pageInfo={pageInfo.list} />);
    } else {
      return (<ContentSelector />);
    } 
  }

  return (
    <div className="Page">
      <div className="Page-title">
        <h1>{pageTitle}</h1>
      </div>
      <div className="Page-body">
        {pageRender(pageName)}
      </div>
    </div>
  )
}

export default Page
