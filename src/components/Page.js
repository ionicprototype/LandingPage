// Dependencies
import React from 'react'
// CSS
import '../styles/PageStyles.css';

function Page(props) {
  const { pageName } = props;
  const pageTitle = pageName.charAt(0).toUpperCase() + pageName.slice(1);
  return (
    <div className="Page">
      <div className="Page-title">
        <h1>{pageTitle}</h1>
      </div>
      <div className="Page-body">
        <p>Page Body here</p>
      </div>
    </div>
  )
}

export default Page
