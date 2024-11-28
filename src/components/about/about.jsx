import React from 'react'
import './about.css'
import { FaAward } from "react-icons/fa6";
import { GoProjectSymlink } from "react-icons/go";
import Myphoto from '../../assets/my_photo2.png'

const About = () => {
  return (
    <section id='about'>
      <h5 className='about_h5'>Get to know</h5>
      <h2 className='about_h2'>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Myphoto} alt="my png" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
            <FaAward  className='about__icon'/>
              <h5>EDUCATION</h5>
              <small>B.Sc in EEE</small>
            </article>
            <article className='about__card'>
            <GoProjectSymlink className='about__icon'/>
              <h5>PROJECTS</h5>
              <small>2+ Completed</small>
            </article> 
            
          </div>
          <p>I’m a B.Sc. student in Electrical and Electronics Engineering (EEE) with foundational skills in frontend development and a strong passion for machine learning. My goal is to become a machine learning expert, combining my technical background with my enthusiasm for innovative, data-driven solutions.</p>
          <a href="#contact" className='btn btn-primary'>Let's Chat</a>
        </div>

      </div>

    </section>
  )
}

export default About