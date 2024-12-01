import React from 'react'
import './footer.css'
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer>
      <h2 className='footer__logo'>' ERROR! '</h2>
      <ul className='permalinks'>
        <li> <a href='#'>Home</a></li> 
        <li> <a href='#about'>About</a></li>
        <li> <a href='#skills'>Skills</a></li>
        <li> <a href='#recent_work'>Projects</a></li>
        <li> <a href='#contact'>Contact</a></li> 
      </ul>
      <div className="footer__socials">
      <a href="https://www.linkedin.com/in/remon-dey-89a082302/" target='main'><FaLinkedin/></a>
      <a href='https://www.facebook.com/remon.dey.923' target='main'><FaFacebook /></a>
      <a href='https://github.com/Remon-Dey' target='main'><FaGithub/></a> 
      </div>
      <div className="footer_copyright">
        <small>&copy; Remon Dey. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer