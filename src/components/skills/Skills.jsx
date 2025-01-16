import React from 'react'
import './skills.css'
import { BsShieldFillCheck } from "react-icons/bs";

const Skills = () => {
  return (
    <section id='skills'>
      <h5 className='skills_h5'>What Skills I Have</h5>
      <h2 className='skills_h2'>My Skills</h2>
      <div className="container skills__container">
        <div className="skills_languages">
          <h3>Languages</h3>
          <div className="skills_content">
          <article className='skills_details'>
            <BsShieldFillCheck className='skills_details-icon' />
            <div>
            <h4>Python</h4>
            <small className='text-light'>Basic</small>
            </div>
            </article>
            <article className='skills_details'>
            <BsShieldFillCheck className='skills_details-icon' />
            <div>
            <h4>C/C++</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </article>
            <article className='skills_details'>
            <BsShieldFillCheck className='skills_details-icon' />
            <div>
            <h4>HTML5 & CSS3</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </article>
            <article className='skills_details'>
            <BsShieldFillCheck className='skills_details-icon' />
            <div>
            <h4>JavaScript</h4>
            <small className='text-light'>Basic</small>
            </div>
            </article>
          </div>
        </div>
        <div className="skills_libraries_frameworks">
          <h3>Libraries & Frameworks</h3>
          <div className="skills_content">
            <article className='skills_details'>
            <BsShieldFillCheck className='skills_details-icon' />
            <div>
            <h4>React</h4>
            <small className='text-light'>Basic</small>
            </div>
            </article>
          </div>
        </div>
        <div className="skills_tools-technology">
        <h3>Tools & Technology</h3>
          <div className="skills_content">
            <article className='skills_details'>
            <BsShieldFillCheck className='skills_details-icon' />
            <div>
            <h4>Git</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </article>
            <article className='skills_details'>
            <BsShieldFillCheck className='skills_details-icon' />
            <div>
            <h4>VS Code</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </article>
          </div>
        </div>
        
      </div>
    </section>
  )
}

export default Skills