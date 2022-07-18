import React from 'react'
import sede from '../../images/Sede_Argor_Mendrisio_1.webp'
import './style/contact.css'

function Contact() {
  return (
    <section className='contact'>
      <div className="contact-heading">
        <div className="left-part">
          <h1>Contact</h1>
          <p>We look forward to helping you with all your precious metal<br/> needs.</p>
        </div>
        <div className="right-part">
          <img src={sede} alt="sede" />
        </div>
      </div>
      <div className="contact-content">
        <div className="left-part">
          <h1>Contact</h1>
          <p>ARGOR-HERAEUS SA<br/>
            Via Moree, 14<br/>
            6850, Mendrisio (CH)<br/>
            Switzerland</p>
        </div>
        <div className="right-part">
          <h1>Get in touch</h1>
          <div className="form">
            <input type="text" placeholder='Your Name' />
            <input type="text" placeholder='Your Company' />
            <input type="email" placeholder='Email Address' />
            <textarea cols="30" rows="10" placeholder='Message'></textarea>
            <button className="c-button c-button--gooey"> Submit
              <div className="c-button__blobs">
              <div></div>
              <div></div>
              <div></div>
              </div>
            </button>
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <filter id="goo">
                  <feGaussianBlur result="blur" stdDeviation="10" in="SourceGraphic"></feGaussianBlur>
                  <feColorMatrix result="goo" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" mode="matrix" in="blur"></feColorMatrix>
                  <feBlend in2="goo" in="SourceGraphic"></feBlend>
                </filter>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact