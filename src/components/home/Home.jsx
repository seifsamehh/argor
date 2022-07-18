import React from 'react'
import HorizontalScroll from 'react-scroll-horizontal'
import sphere from '../../videos/Argor-Sphere-2.webm'
import cone from '../../videos/Argor-Cone.webm'
import coin from '../../videos/Argor-Coin.webm'
import tube from '../../videos/Argor_tube.webm'
import first from '../../images/carousel-00-first-frame.webp'
import second from '../../images/hargor.webp'
import third from '../../images/gold-recycled.webp'
import fourth from '../../images/bg.webp'
import './style/home.css'

function Home() {
  return (
    <>
        <section className='home'>
          <HorizontalScroll    
          pageLock      = { true }
          reverseScroll = { true }
          config        = {{ stiffness: 3, damping: 2 }}
          >
          {/* first slide */}
          <div className="first">
            <div className="left">
              <h5>part of</h5>
              <p></p>
              <h5>Heraeus Group</h5>
            </div>
            <div className="middle">
              <div className="upper-content">
                <h3>1</h3>
                <p></p>
                <h3>4</h3>
              </div>
              <div className="middle-content">
                <h1>The<br/> Golden<br/> Link</h1>
              </div>
              <div className="footer-content">
                <div className="description">
                  <h3>Process</h3>
                  <p></p>
                  <h3>Extraction</h3>
                </div>
                <button type="button" className="btn cube cube-hover">
                  <div className="bg-top">
                  <div className="bg-inner"></div>
                  </div>
                  <div className="bg-right">
                  <div className="bg-inner"></div>
                  </div>
                  <div className="bg">
                  <div className="bg-inner"></div>
                  </div>
                  <div class="text">Explore</div>
                </button>
              </div>
            </div>
            <div className="right">
              <video muted loop autoPlay>
                <source src={sphere} type="video/webm"></source>
              </video>
              <img src={first} alt="first carousel" />
            </div>
          </div>
          {/* second slide */}
          <div className="second">
            <div className="left">
              <h5>part of</h5>
              <p></p>
              <h5>Heraeus Group</h5>
            </div>
            <div className="middle">
            <div className="upper-content">
                <h3>2</h3>
                <p></p>
                <h3>4</h3>
              </div>
              <div className="middle-content">
                <h1>The<br/> Golden<br/> Link</h1>
              </div>
              <div className="footer-content">
                <div className="description">
                  <h3>Process</h3>
                  <p></p>
                  <h3>Refining</h3>
                </div>
                <button type="button" class="btn cube cube-hover">
                  <div class="bg-top">
                  <div class="bg-inner"></div>
                  </div>
                  <div class="bg-right">
                  <div class="bg-inner"></div>
                  </div>
                  <div class="bg">
                  <div class="bg-inner"></div>
                  </div>
                  <div class="text">Explore</div>
                </button>
              </div>
            </div>
            <div className="right">
              <video muted loop autoPlay>
                <source src={cone} type="video/webm"></source>
              </video>
              <img src={second} alt="second carousel" />
            </div>
          </div>
          {/* third slide */}
          <div className="third">
            <div className="left">
              <h5>part of</h5>
              <p></p>
              <h5>Heraeus Group</h5>
            </div>
            <div className="middle">
            <div className="upper-content">
                <h3>3</h3>
                <p></p>
                <h3>4</h3>
              </div>
              <div className="middle-content">
                <h1>The<br/> Golden<br/> Link</h1>
              </div>
              <div className="footer-content">
                <div className="description">
                  <h3>Process</h3>
                  <p></p>
                  <h3>Applications</h3>
                </div>
                <button type="button" class="btn cube cube-hover">
                  <div class="bg-top">
                  <div class="bg-inner"></div>
                  </div>
                  <div class="bg-right">
                  <div class="bg-inner"></div>
                  </div>
                  <div class="bg">
                  <div class="bg-inner"></div>
                  </div>
                  <div class="text">Explore</div>
                </button>
              </div>
            </div>
            <div className="right">
              <video muted loop autoPlay>
                <source src={coin} type="video/webm"></source>
              </video>
              <img src={third} alt="third carousel" />
            </div>
          </div>
          {/* fourth slide */}
          <div className="fourth">
            <div className="left">
            <h5>part of</h5>
              <p></p>
              <h5>Heraeus Group</h5>
            </div>
            <div className="middle">
            <div className="upper-content">
                <h3>4</h3>
                <p></p>
                <h3>4</h3>
              </div>
              <div className="middle-content">
                <h1>The<br/> Golden<br/> Link</h1>
              </div>
              <div className="footer-content">
                <div className="description">
                  <h3>Process</h3>
                  <p></p>
                  <h3>Recycling</h3>
                </div>
                <button type="button" class="btn cube cube-hover">
                  <div class="bg-top">
                  <div class="bg-inner"></div>
                  </div>
                  <div class="bg-right">
                  <div class="bg-inner"></div>
                  </div>
                  <div class="bg">
                  <div class="bg-inner"></div>
                  </div>
                  <div class="text">Explore</div>
                </button>
              </div>
            </div>
            <div className="right">
              <video muted loop autoPlay>
                <source src={tube} type="video/webm"></source>
              </video>
              <img src={fourth} alt="fourth carousel" />
            </div>
          </div>
      </HorizontalScroll>
    </section>
    {/* media */}
    <section className='home-media'>
          {/* first slide */}
          <div className="first">
            <div className="left">
              <h5>part of</h5>
              <p></p>
              <h5>Heraeus Group</h5>
            </div>
            <div className="middle">
              <div className="upper-content">
                <h3>1</h3>
                <p></p>
                <h3>4</h3>
              </div>
              <div className="middle-content">
                <h1>The<br/> Golden<br/> Link</h1>
              </div>
              <div className="footer-content">
                <div className="description">
                  <h3>Process</h3>
                  <p></p>
                  <h3>Extraction</h3>
                </div>
                <button type="button" className="btn cube cube-hover">
                  <div className="bg-top">
                  <div className="bg-inner"></div>
                  </div>
                  <div className="bg-right">
                  <div className="bg-inner"></div>
                  </div>
                  <div className="bg">
                  <div className="bg-inner"></div>
                  </div>
                  <div class="text">Explore</div>
                </button>
              </div>
            </div>
            <div className="right">
              <video muted loop autoPlay>
                <source src={sphere} type="video/webm"></source>
              </video>
              <img src={first} alt="first carousel" />
            </div>
          </div>
          {/* second slide */}
          <div className="second">
            <div className="left">
              <h5>part of</h5>
              <p></p>
              <h5>Heraeus Group</h5>
            </div>
            <div className="middle">
            <div className="upper-content">
                <h3>2</h3>
                <p></p>
                <h3>4</h3>
              </div>
              <div className="middle-content">
                <h1>The<br/> Golden<br/> Link</h1>
              </div>
              <div className="footer-content">
                <div className="description">
                  <h3>Process</h3>
                  <p></p>
                  <h3>Refining</h3>
                </div>
                <button type="button" class="btn cube cube-hover">
                  <div class="bg-top">
                  <div class="bg-inner"></div>
                  </div>
                  <div class="bg-right">
                  <div class="bg-inner"></div>
                  </div>
                  <div class="bg">
                  <div class="bg-inner"></div>
                  </div>
                  <div class="text">Explore</div>
                </button>
              </div>
            </div>
            <div className="right">
              <video muted loop autoPlay>
                <source src={cone} type="video/webm"></source>
              </video>
              <img src={second} alt="second carousel" />
            </div>
          </div>
          {/* third slide */}
          <div className="third">
            <div className="left">
              <h5>part of</h5>
              <p></p>
              <h5>Heraeus Group</h5>
            </div>
            <div className="middle">
            <div className="upper-content">
                <h3>3</h3>
                <p></p>
                <h3>4</h3>
              </div>
              <div className="middle-content">
                <h1>The<br/> Golden<br/> Link</h1>
              </div>
              <div className="footer-content">
                <div className="description">
                  <h3>Process</h3>
                  <p></p>
                  <h3>Applications</h3>
                </div>
                <button type="button" class="btn cube cube-hover">
                  <div class="bg-top">
                  <div class="bg-inner"></div>
                  </div>
                  <div class="bg-right">
                  <div class="bg-inner"></div>
                  </div>
                  <div class="bg">
                  <div class="bg-inner"></div>
                  </div>
                  <div class="text">Explore</div>
                </button>
              </div>
            </div>
            <div className="right">
              <video muted loop autoPlay>
                <source src={coin} type="video/webm"></source>
              </video>
              <img src={third} alt="third carousel" />
            </div>
          </div>
          {/* fourth slide */}
          <div className="fourth">
            <div className="left">
            <h5>part of</h5>
              <p></p>
              <h5>Heraeus Group</h5>
            </div>
            <div className="middle">
            <div className="upper-content">
                <h3>4</h3>
                <p></p>
                <h3>4</h3>
              </div>
              <div className="middle-content">
                <h1>The<br/> Golden<br/> Link</h1>
              </div>
              <div className="footer-content">
                <div className="description">
                  <h3>Process</h3>
                  <p></p>
                  <h3>Recycling</h3>
                </div>
                <button type="button" class="btn cube cube-hover">
                  <div class="bg-top">
                  <div class="bg-inner"></div>
                  </div>
                  <div class="bg-right">
                  <div class="bg-inner"></div>
                  </div>
                  <div class="bg">
                  <div class="bg-inner"></div>
                  </div>
                  <div class="text">Explore</div>
                </button>
              </div>
            </div>
            <div className="right">
              <video muted loop autoPlay>
                <source src={tube} type="video/webm"></source>
              </video>
              <img src={fourth} alt="fourth carousel" />
            </div>
          </div>
    </section>
    </>
  )
}

export default Home