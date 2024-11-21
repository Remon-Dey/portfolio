import React from 'react'
import './header.css'
import Headerbutton from './Headerbutton'
const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h3>Hello, I'm</h3>
        <h1>Remon Dey</h1>
        <h6 className="text-llight">    ENGINEER</h6>
        <Headerbutton />
      </div>

    </header>
  )
}

export default Header