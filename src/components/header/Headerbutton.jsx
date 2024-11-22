import React from 'react'
import Remon_CV from '../../assets/Remon_CV.pdf'
const Headerbutton = () => {
  return (
    <div className="Headerbutton">
        <a href={Remon_CV} download className='btn'>Download CV </a>
        <a href="#contact" className='btn btn-primary'>Let's Chat </a>
    </div>
  )
}

export default Headerbutton