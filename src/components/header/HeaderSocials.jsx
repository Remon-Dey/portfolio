import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";




const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/remon-dey-89a082302/" target='main'><FaLinkedin/></a>
        <a href='https://github.com/Remon-Dey' target='main'><FaGithub/></a>
        <a href='https://www.facebook.com/remon.dey.923' target='main'><FaFacebook />
</a>

    </div>
  )
}

export default HeaderSocials