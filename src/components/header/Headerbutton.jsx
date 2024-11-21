import React from 'react'
import Remon_CV from '../../assets/Remon_CV.pdf'
const Headerbutton = () => {
  return (
    <div classname="Headerbutton">
        <a href={Remon_CV} download className='btn'>Download </a>
        <a href="#contact" className='btn btn-primary'>Let's Talk </a>
    </div>
  )
}

export default Headerbutton