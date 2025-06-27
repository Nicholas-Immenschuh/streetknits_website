import Link from 'next/link';

export default function Contact() {
  return (
    
    <div
    style={{ 
        backgroundColor: '#DAF1F7'}}>
      <div id="fb-root"></div>
    <script async defer crossOrigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v23.0"></script>
      <header>
        <nav className="navbar">
            <div className="navbar-container">
              <div className="navbar-logo">
                <Link href="/">
                  <img src="../StreetKnitsLogo.png" alt="Streetknits Logo" className="navbar-logo-image" />
                </Link>
                <Link href="/">
                  <span className="navbar-logo-text">StreetKnits</span>
                </Link>
              </div>
              <div className="navbar-links">
                <Link href="/donate">Donate</Link>
                <Link href="/contact" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'}}>Contact</Link>
              </div>
            </div>
        </nav>

      </header>
      <main>

        <section>
          <div className="cloudScalableVectorGraphicContainer" style={{right: '10%'}}>
                <img className="cloudScalableVectorGraphic" src= "../donateCloud2.svg" alt="cloud"/>
                <p className="cloudScalableVectorGraphicText" style={{color: '#F1894C', top: '51%', left: '49%'}}>
                  Thank you for taking the time to visit our website, we really appreciate it. 
                  If you would like to contact StreetKnits, please email us and we will respond promptly.
                </p>
              </div>
        </section>
        
        <section> 
         <div className="cloudScalableVectorGraphicContainer" style={{left: '20%'}}>
                <img className="cloudScalableVectorGraphic" src= "cloud3.svg" alt="cloud"/>
                <h1 className="cloudScalableVectorGraphicText" style={{top: '20%', color:'#C691AA'}}>Email:</h1>
                <p className="cloudScalableVectorGraphicText" style={{color: '#89B7B7', top: '45%', left: '50%'}}>
                  streetknits2013@gmail.com
                </p>
          </div>

           <div className="cloudScalableVectorGraphicContainer" style={{right: '10%'}}>
                <img className="cloudScalableVectorGraphic" src= "../donateCloud1.svg" alt="cloud"/>
                <p className="cloudScalableVectorGraphicText" style={{color: '#F49BAD', top: '51%', left: '49%'}}>
                  Check out the feed from our Facebook page down below. Feel free to like, comment, and share!
                </p>
              </div>
          <div className="faceBookPageContainer">
          <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fwww.streetknits.org%2F&tabs=timeline&width=340&height=500&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=true&appId" 
          style={{paddingTop: '300px', width: '500px', height: '500px', paddingBottom: '100px', paddingLeft: '650px', border: 'none', overflow: 'hidden',}}></iframe>
          </div>
          </section>

      </main>

      <footer style={{backgroundColor: '#9BDEEF'}}>
        <p> A website by: Nicholas Immenschuh, Timothy Judge, Nathan Moon, Matthew Wenzel, and Bryce Williams.</p>
      </footer>
    </div>
  );
}