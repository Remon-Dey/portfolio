import React from 'react'
import './recent_work.css'
import Staybnb from '../../assets/staybnb.jpeg'
import Amazonclone from '../../assets/Amazon_clone.jpeg'
const Recentwork = () => {
  return (
    <section id='recent_work'>
        <h5 className='recent_work_h5'>My Recent Work</h5>
        <h2 className='recent_work_h2'>Projects</h2>
        <div className="container projects__container">
            <article className='project__item'>
                <div className="projecet_item-image">
                  <img src={Staybnb} alt='staybnb'/>
                </div>
                <h3>Staybnb</h3>
                <div className="project_item-cta">
                <a href='https://github.com/Remon-Dey/_staybnb_' className='btn' target='main'>Github</a>
                <a href='https://remon-dey.github.io/_staybnb_/' className='btn btn-primary' target='main'>Live Demo</a>
                </div>
            </article>
            <article className='project__item'>
                <div className="projecet_item-image">
                  <img src={Amazonclone} alt='Amazon_clone'/>
                </div>
                <h3>Amazon_clone</h3>
                <div className="project_item-cta">
                <a href='https://github.com/Remon-Dey/amazon_clone' className='btn' target='main'>Github</a>
                <a href='https://remon-dey.github.io/amazon_clone/' className='btn btn-primary' target='main'>Live Demo</a>
                </div>
            </article>
        </div>
    </section>
  )
}

export default Recentwork