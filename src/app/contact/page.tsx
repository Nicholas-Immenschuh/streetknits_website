import Link from 'next/link';

export default function Contact() {
  return (
    <div
    style={{ 
        backgroundColor: '#DAF1F7'}}>
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
      <main
      style={{ 
        backgroundImage: 'url(/contactPageBackground4.svg)', 
        backgroundSize: 'cover', 
        backgroundRepeat: 'no-repeat',
        paddingTop: '64px'
        }}>
      
        <section>
          <p style={{color: '#F1894C', fontSize: '32pt', paddingTop: '300px', paddingLeft: '200px', paddingRight: '650px'}}>
            Thank you for taking the time to visit our website, we really appreciate it. 
            If you would like to contact StreetKnits, please email us and we will respond promptly.
          </p>
        </section>
        <section> 
          <h1 style={{fontFamily: "'Avenir', 'sans-serif', 'Georgia', 'Times New Roman', 'Times', serif", color: '#C691AA', paddingLeft: '1050px', paddingRight: '10000px', 
            paddingTop: '990px', paddingBottom: '-100px', fontSize: '32pt', fontWeight: 'normal'}}>Email:</h1>
          <p style={{ color: '#89B7B7', paddingLeft: '900px', 
            paddingRight: '391px', fontSize: '25pt',
             }}>
          streetknits2013@gmail.com</p>
          <section>
            <p>

            </p>
          </section>
          <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fwww.streetknits.org%2F&tabs=timeline&width=340&height=500&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=true&appId" 
          style={{width: '340px', height: '500px', paddingBottom: '100px', paddingLeft: '100px', border: 'none', overflow: 'hidden',}}></iframe>
          </section>

      </main>

      <footer style={{backgroundColor: '#9BDEEF'}}>
        <p> A website by: Nicholas Immenschuh, Timothy Judge, Nathan Moon, Matthew Wenzel, and Bryce Williams.</p>
      </footer>
    </div>
  );
}