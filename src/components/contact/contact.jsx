import React from 'react'
import './contact.css'
import { HiOutlineMail } from "react-icons/hi";
import { RiMessengerFill } from "react-icons/ri";
import { IoLogoWhatsapp } from "react-icons/io";

const Contact = () => {
  return (
    <section id='contact'>
      <h5 className='contact_h5'>Get In Touch</h5>
      <h2 className='contact_h2'>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
          <HiOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>remon.2003.dey@gmail.com</h5>
            <a href="mailto:remon.2003.dey@gmail.com">Send a mail</a>
          </article>
          <article className="contact__option">
          <RiMessengerFill className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>remon.dey.923</h5>
            <a href="https://m.me/remon.dey.923">Knock me in Facebook</a>
          </article>
          <article className="contact__option">
          <IoLogoWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+8801856950093</h5>
            <a href="https://wa.me/1305968353"> Send me a message</a>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Contact