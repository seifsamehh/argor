import React from 'react'
import HorizontalScroll from 'react-scroll-horizontal'
import fire from '../../images/fire.webp'
import gold from '../../images/gold.webp'
import lux from '../../images/lux.webp'
import services from '../../images/gold-metal-services-1.webp'
import './style/activities.css'

function Activities() {
  return (
    <>
    <section className='activities'>
      <HorizontalScroll    
        pageLock      = { true }
        reverseScroll = { true }
        config        = {{ stiffness: 3, damping: 2 }}
      >
        <div className="cards">
          {/* card one */}
          <div className="card-1">
            <h1>Refining<br/>Materials</h1>
            <div className="card-container">
              <div className="card">
                <img src={fire} alt="fire" className='card-image' />
                <img src={fire} alt="fire" className='card-image' />
              </div>
            </div>
            <span>1</span>
          </div>
          {/* card two */}
          <div className="card-2">
            <h1>Bars &<br/>Coins</h1>
            <div className="card-container">
              <div className="card">
                <img src={gold} alt="gold" className='card-image' />
                <img src={gold} alt="gold" className='card-image' />
              </div>
            </div>
            <span>2</span>
          </div>
          {/* card three */}
          <div className="card-3">
            <h1>Luxury<br/>Solutions</h1>
            <div className="card-container">
              <div className="card">
                <img src={lux} alt="lux" className='card-image' />
                <img src={lux} alt="lux" className='card-image' />
              </div>
            </div>
            <span>3</span>
          </div>
          {/* card four */}
          <div className="card-4">
            <h1>Precious Metal<br/>Services</h1>
            <div className="card-container">
              <div className="card">
                <img src={services} alt="services" className='card-image' />
                <img src={services} alt="services" className='card-image' />
              </div>
            </div>
            <span>4</span>
          </div>
        </div>
      </HorizontalScroll>
    </section>
    {/* media */}
    <section className='activities-media'>
      <div className="cards">
        {/* card one */}
        <div className="card-1">
          <h1>Refining<br/>Materials</h1>
          <div className="card-container">
            <div className="card">
              <img src={fire} alt="fire" className='card-image' />
              <img src={fire} alt="fire" className='card-image' />
            </div>
          </div>
          <span>1</span>
        </div>
        {/* card two */}
        <div className="card-2">
          <h1>Bars &<br/>Coins</h1>
          <div className="card-container">
            <div className="card">
              <img src={gold} alt="gold" className='card-image' />
              <img src={gold} alt="gold" className='card-image' />
            </div>
          </div>
          <span>2</span>
        </div>
        {/* card three */}
        <div className="card-3">
          <h1>Luxury<br/>Solutions</h1>
          <div className="card-container">
            <div className="card">
              <img src={lux} alt="lux" className='card-image' />
              <img src={lux} alt="lux" className='card-image' />
            </div>
          </div>
          <span>3</span>
        </div>
        {/* card four */}
        <div className="card-4">
          <h1>Precious Metal<br/>Services</h1>
          <div className="card-container">
            <div className="card">
              <img src={services} alt="services" className='card-image' />
              <img src={services} alt="services" className='card-image' />
            </div>
          </div>
          <span>4</span>
        </div>
      </div>
    </section>
    </>
  )
}

export default Activities