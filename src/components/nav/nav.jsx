import React from 'react'
import './nav.css'
import { HiOutlineHome } from "react-icons/hi2";
import { AiOutlineUser } from "react-icons/ai";
import { GiSkills } from "react-icons/gi";
import { PiSteps } from "react-icons/pi";
import { RiContactsBook3Line } from "react-icons/ri";
import { useState } from 'react';
const Nav = () => {
  const [activeNav, setActiveNav] =useState("#")
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><HiOutlineHome /></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
      <a href="#skills"onClick={() => setActiveNav('#skills')} className={activeNav === '#skills' ? 'active' : ''} ><GiSkills /></a>
      <a href="#career"onClick={() => setActiveNav('#career')} className={activeNav === '#career' ? 'active' : ''} ><PiSteps /></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><RiContactsBook3Line /></a>
    </nav>
  )
}

export default Nav
