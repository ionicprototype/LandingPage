// Dependencies
import React from 'react'
// CSS
import '../styles/FooterStyles.css';

function Footer(props) {
  const { darkTheme } = props;

  return (
    <div className="Footer">
      {/* <h1 className="Footer-ContactHeader">Looking to collaborate? Curious about what I can do for you? Need to be in touch?</h1> */}
      <div className={`Footer-Contact ${darkTheme && 'dark'}`}>
        <div className="contactCard">
          <a href="mailto:eric.a.bauch@gmail.com" className={`contactIcon ${darkTheme && 'dark'}`}><i className="fas fa-mail-bulk" /></a>        
        </div>
        <div className="contactCard">
          <a href="https://www.github.com/ionicprototype" className={`contactIcon ${darkTheme && 'dark'}`}><i className="fab fa-github-alt" /></a>        
        </div>
        <div className="contactCard">
          <a href="https://www.linkedin.com/in/echem83/" className={`contactIcon ${darkTheme && 'dark'}`}><i className="fab fa-linkedin-in" /></a>      
        </div>
        <div className="contactCard">
          <a href="https://docs.google.com/document/d/1o4C8gH25m1lwA90vM1Lv90iY60hKs8HtZt_hwY8HSPg/edit" className={`contactIcon ${darkTheme && 'dark'}`}><i className="far fa-file" /></a>
        </div>
      </div>
    </div>
  )
}

export default Footer;