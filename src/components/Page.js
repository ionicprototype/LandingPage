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
  const { darkTheme, pageName, pageInfo  } = props;


  const pageRender = name => {
    const pageTitle = name.charAt(0).toUpperCase() + name.slice(1);
    if(name === "experience" || name === "projects" || name === "skills") {
      return (
        <CardSelector
          darkTheme={darkTheme} 
          pageTitle={pageTitle} 
          cardView={pageInfo.type} 
          pageInfo={pageInfo.list} 
        />);
    } else {
      return <ContentSelector darkTheme={darkTheme} pageTitle={pageTitle} />;
    } 
  }

  return (
    <>
      <div className={`Page ${darkTheme && 'dark'}`}>
        <div className="Page-body">
          {pageRender(pageName)}
        </div>
      </div>
      {pageName === "home" && <Footer darkTheme={darkTheme} />}
    </>
  )
}

export default Page
