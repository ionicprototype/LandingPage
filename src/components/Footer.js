// Dependencies
import React from 'react'
// CSS
import '../styles/FooterStyles.css';

function Footer() {
  return (
    <div className="Footer">
      {/* <h1 className="Footer-ContactHeader">Looking to collaborate? Curious about what I can do for you? Need to be in touch?</h1> */}
      <div className="Footer-Contact">
        <div className="contactCard">
          <a href="/home" className="contactIcon"><i className="fas fa-mail-bulk" /></a>        
        </div>
        <div className="contactCard">
          <a href="https://www.github.com/ionicprototype" className="contactIcon"><i className="fab fa-github-alt" /></a>        
        </div>
        <div className="contactCard">
          <a href="https://www.linkedin.com/in/echem83/" className="contactIcon"><i className="fab fa-linkedin-in" /></a>      
        </div>
        <div className="contactCard">
          <a href="https://docs.google.com/document/d/1o4C8gH25m1lwA90vM1Lv90iY60hKs8HtZt_hwY8HSPg/edit" className="contactIcon"><i className="far fa-file" /></a>
        </div>
      </div>
    </div>
  )
}

export default Footer;