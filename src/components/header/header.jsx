import React from 'react'
import './header.css'
import Headerbutton from './Headerbutton'
import Myphoto from '../../assets/my_photo.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h3>Hello, I'm</h3>
        <h1>Remon Dey</h1>
        <h6 className="text-llight">    ENGINEER</h6>
        <Headerbutton />
        <HeaderSocials/>
        <div className="myphoto">
          <img src={Myphoto} alt="my_photo"></img>
        </div>

        <a href="#contact" className='scroll__down'>Scroll down</a>
        
      </div>

    </header>
  )
}

export default Header