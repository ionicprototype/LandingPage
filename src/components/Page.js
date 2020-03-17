// Dependencies
import React from 'react';
// Components
import CardSelector from './CardSelector';
import ContentSelector from './ContentSelector';
import Footer from './Footer';
// CSS
import '../styles/PageStyles.css';
import '../styles/FooterStyles.css';

function Page(props) {
  const { pageName, pageInfo, sideBarView, toggleSidebar  } = props;
  const pageTitle = pageName.charAt(0).toUpperCase() + pageName.slice(1);

  const pageRender = (pageName) => {
    if(pageName === "experience" || pageName === "projects" || pageName === "skills") {
      return (
        <CardSelector 
          pageTitle={pageTitle} 
          cardView={pageInfo.type} 
          pageInfo={pageInfo.list} 
          sideBarView={sideBarView}
          toggleSidebar={toggleSidebar}
        />);
    } else {
      return (<ContentSelector />);
    } 
  }

  const handleClick = () => {
    if(sideBarView === true) toggleSidebar();
  }

  return (
    <>
      <div className="Page" onClick={handleClick}>
        <div className="Page-title">
          <h1>{pageTitle}</h1>
        </div>
        <div className="Page-body">
          {pageRender(pageName)}
        </div>
      </div>
      {pageName === "home" ? <Footer /> : false}
    </>
  )
}

export default Page
