import React from 'react'
import HorizontalScroll from 'react-scroll-horizontal'
import chart from '../../images/chart-bar.webp'
import jewelry from '../../images/argor-process-jewelry.webp'
import gold1 from '../../images/argor-process-minted.webp'
import gold2 from '../../images/argor-process-cast-2.webp'
import gold3 from '../../images/argor-process-industry.webp'
import './style/process.css'

function Process() {
  return (
    <>
    <section className='process'>
      <HorizontalScroll    
          pageLock      = { true }
          reverseScroll = { true }
          config        = {{ stiffness: 3, damping: 2 }}
          >
            {/* 1 cateogry */}
            <div className="first-cateogry">
              <div className="container">
                <div className="heading">
                  <p>1</p>
                  <h1>The<br/> Origin</h1>
                </div>
                <div className="content">
                  <div className="left-box">
                    <span>01</span>
                    <p>The<br/>Extraction</p>
                  </div>
                  <div className="right-box">
                    <h2>Gold, Silver, Platinum and Palladium obtained from<br/>traceable, legitimate sources, preserving human<br/>rights and biodiversity standards.</h2>
                    <p>Approximately half of the precious metals used by Argor-Heraeus are recycled; the<br/>rest is responsibly sourced from various parts of the world under Argor-Heraeus’<br/>strict control. It is paramount to us that all the material we process is traceable,<br/>obtained from legitimate sources and passed on to responsible partners.</p>
                    <p>That is why we employ a rigid Compliance Management System, based on the<br/>pillars of Corporate Governance, Social Responsibility and Environmental Impact.<br/>These three pillars are built on a strong and solid foundation – our company culture<br/>of Responsibility.</p>
                  </div>
                </div>
              </div>
              <div className="gallery">
                {/* chart 1 */}
                <div className="chart-1">
                  <div className="head">
                    <h5>North America</h5>
                    <h1>15%</h1>
                  </div>
                  <img src={chart} alt="chart" className='one' />
                </div>
                {/* chart 2 */}
                <div className="chart-2">
                  <div className="head">
                    <h5>Central & South America</h5>
                    <h1>18%</h1>
                  </div>
                  <img src={chart} alt="chart" className='two' />
                </div>
                {/* chart 3 */}
                <div className="chart-3">
                  <div className="head">
                    <h5>Europe</h5>
                    <h1>1%</h1>
                  </div>
                  <img src={chart} alt="chart" className='three' />
                </div>
                {/* chart 4 */}
                <div className="chart-4">
                  <div className="head">
                    <h5>Africa</h5>
                    <h1>21%</h1>
                  </div>
                  <img src={chart} alt="chart" className='four' />
                </div>
                {/* chart 5 */}
                <div className="chart-5">
                  <div className="head">
                    <h5>CSI</h5>
                    <h1>12%</h1>
                  </div>
                  <img src={chart} alt="chart" className='five' />
                </div>
              </div>
            </div>
            {/* 2 cateogry */}
            <div className="second-cateogry">
              <div className="container">
                <div className="heading">
                  <p>2</p>
                  <h1>Refin-<br/>ing</h1>
                </div>
                <div className="content">
                  <div className="left-box">
                    <span>02</span>
                    <p>The<br/>Refining</p>
                  </div>
                  <div className="right-box">
                    <h2>
                        Before being ready to be transformed,<br/>
                        precious metals in Argor-Heraeus are<br/>
                        processed in segregated production lines<br/>
                        to achieve a purity in perfect compliance<br/>
                        with worldwide regulations.
                    </h2>
                    <p>
                        To extract precious metal from doré bars and scrap, the raw material<br/>
                        undergoes a series of processes such as melting, gold parting and<br/>
                        electrolytic baths to achieve an exceptional purity level of up to 999.99 %
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* 3 cateogry */}
            <div className="third-cateogry">
              <div className="container">
                <div className="heading">
                  <p>3</p>
                  <h1>Appli-<br/>cations</h1>
                </div>
                <div className="content">
                  <div className="left-box">
                    <span>03</span>
                    <p>The<br/>Products</p>
                  </div>
                  <div className="right-box">
                    <h2>
                        Argor-Heraeus is part of HPM, the largest <br/>
                        service provider in the precious metals <br/>
                        industry.
                    </h2>
                    <p>
                        Thanks to our extensive experience, Argor-Heraeus is a global leader <br/>
                        in the transformation of precious metals for the Swiss watchmaking <br/>
                        industry and fine jewelry. We are one of the world’s largest 
                    </p>
                  </div>
                </div>
                <div className="gallery">
                  <img src={jewelry} alt="first image" />
                  <img src={gold1} alt="second image" />
                  <img src={gold2} alt="third image" />
                  <img src={gold3} alt="fourth image" />
                </div>
              </div>
            </div>
            {/* 4 cateogry */}
            <div className="fourth-cateogry">
              <div className="container">
                <div className="heading">
                  <p>4</p>
                  <h1>Recy-<br/>cling</h1>
                </div>
                <div className="content">
                  <div className="left-box">
                    <span>04</span>
                    <p>Recycled<br/>Gold</p>
                  </div>
                  <div className="right-box">
                    <h2>
                    Argor-Heraeus employs approximately<br/>
                    50% of recycled metals in its processes.
                    </h2>
                    <p>
                    Recycled material, obtained from secondary sources like industrial<br/>
                    scrap and old jewellery, is an important component of our production<br/>
                    processes.<br/>
                    </p>
                    <p>Argor-Heraeus holds accreditations and certifications from the most<br/>
                        important governmental and supranational authorities on subjects<br/>
                        such as product and process quality, environmental protection,<br/>
                        resources, training and safety. We operate in accordance with the<br/>
                        OECD guidelines for Due Diligence, are involved in various industry<br/>
                        associations and are one of five LBMA Referees.
                    </p>
                  </div>
                </div>
              </div>
            </div>
      </HorizontalScroll>
    </section>
    {/* media */}
    <section className='process-media'>
      {/* 1 cateogry */}
      <div className="first-cateogry">
        <div className="container">
          <div className="heading">
            <p>1</p>
            <h1>The<br/> Origin</h1>
          </div>
          <div className="content">
            <div className="left-box">
              <span>01</span>
              <p>The<br/>Extraction</p>
            </div>
            <div className="right-box">
              <h2>Gold, Silver, Platinum and Palladium obtained from<br/>traceable, legitimate sources, preserving human<br/>rights and biodiversity standards.</h2>
              <p>Approximately half of the precious metals used by Argor-Heraeus are recycled; the<br/>rest is responsibly sourced from various parts of the world under Argor-Heraeus’<br/>strict control. It is paramount to us that all the material we process is traceable,<br/>obtained from legitimate sources and passed on to responsible partners.</p>
              <p>That is why we employ a rigid Compliance Management System, based on the<br/>pillars of Corporate Governance, Social Responsibility and Environmental Impact.<br/>These three pillars are built on a strong and solid foundation – our company culture<br/>of Responsibility.</p>
            </div>
          </div>
        </div>
        <div className="gallery">
          {/* chart 1 */}
          <div className="chart-1">
            <div className="head">
              <h5>North America</h5>
              <h1>15%</h1>
            </div>
            <img src={chart} alt="chart" className='one' />
          </div>
          {/* chart 2 */}
          <div className="chart-2">
            <div className="head">
              <h5>Central & South America</h5>
              <h1>18%</h1>
            </div>
            <img src={chart} alt="chart" className='two' />
          </div>
          {/* chart 3 */}
          <div className="chart-3">
            <div className="head">
              <h5>Europe</h5>
              <h1>1%</h1>
            </div>
            <img src={chart} alt="chart" className='three' />
          </div>
          {/* chart 4 */}
          <div className="chart-4">
            <div className="head">
              <h5>Africa</h5>
              <h1>21%</h1>
            </div>
            <img src={chart} alt="chart" className='four' />
          </div>
          {/* chart 5 */}
          <div className="chart-5">
            <div className="head">
              <h5>CSI</h5>
              <h1>12%</h1>
            </div>
            <img src={chart} alt="chart" className='five' />
          </div>
        </div>
      </div>
      {/* 2 cateogry */}
      <div className="second-cateogry">
        <div className="container">
          <div className="heading">
            <p>2</p>
            <h1>Refin-<br/>ing</h1>
          </div>
          <div className="content">
            <div className="left-box">
              <span>02</span>
              <p>The<br/>Refining</p>
            </div>
            <div className="right-box">
              <h2>
                  Before being ready to be transformed,<br/>
                  precious metals in Argor-Heraeus are<br/>
                  processed in segregated production lines<br/>
                  to achieve a purity in perfect compliance<br/>
                  with worldwide regulations.
              </h2>
              <p>
                  To extract precious metal from doré bars and scrap, the raw material<br/>
                  undergoes a series of processes such as melting, gold parting and<br/>
                  electrolytic baths to achieve an exceptional purity level of up to 999.99 %
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* 3 cateogry */}
      <div className="third-cateogry">
        <div className="container">
          <div className="heading">
            <p>3</p>
            <h1>Appli-<br/>cations</h1>
          </div>
          <div className="content">
            <div className="left-box">
              <span>03</span>
              <p>The<br/>Products</p>
            </div>
            <div className="right-box">
              <h2>
                  Argor-Heraeus is part of HPM, the largest <br/>
                  service provider in the precious metals <br/>
                  industry.
              </h2>
              <p>
                  Thanks to our extensive experience, Argor-Heraeus is a global leader <br/>
                  in the transformation of precious metals for the Swiss watchmaking <br/>
                  industry and fine jewelry. We are one of the world’s largest 
              </p>
            </div>
          </div>
          <div className="gallery">
            <img src={jewelry} alt="first image" />
            <img src={gold1} alt="second image" />
            <img src={gold2} alt="third image" />
            <img src={gold3} alt="fourth image" />
          </div>
        </div>
      </div>
      {/* 4 cateogry */}
      <div className="fourth-cateogry">
        <div className="container">
          <div className="heading">
            <p>4</p>
            <h1>Recy-<br/>cling</h1>
          </div>
          <div className="content">
            <div className="left-box">
              <span>04</span>
              <p>Recycled<br/>Gold</p>
            </div>
            <div className="right-box">
              <h2>
              Argor-Heraeus employs approximately<br/>
              50% of recycled metals in its processes.
              </h2>
              <p>
              Recycled material, obtained from secondary sources like industrial<br/>
              scrap and old jewellery, is an important component of our production<br/>
              processes.<br/>
              </p>
              <p>Argor-Heraeus holds accreditations and certifications from the most<br/>
                  important governmental and supranational authorities on subjects<br/>
                  such as product and process quality, environmental protection,<br/>
                  resources, training and safety. We operate in accordance with the<br/>
                  OECD guidelines for Due Diligence, are involved in various industry<br/>
                  associations and are one of five LBMA Referees.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Process