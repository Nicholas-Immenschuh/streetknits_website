import Link from 'next/link';

export default function Home() {
  return (
    <>
      <header>
        <nav className="navbar">
          
            <div className="navbar-container">
              <div className="navbar-logo">
                <Link href="/">
                  <img src="../StreetKnitsLogo.png" alt="Streetknits Logo" className="navbar-logo-image" />
                </Link>
                <Link href="/">
                  <span className="navbar-logo-text" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>StreetKnits</span>
                </Link>
              </div>
              <div className="navbar-links">
                <Link href="/donate">Donate</Link>
                <Link href="/contact">Contact</Link>
              </div>
            </div>
        </nav>
      </header>

      <main
        style={{
          backgroundImage: 'url(/homePageBackground.svg)',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          paddingTop: '64px'
        }}
      >
        <section>
              <h1>About Us</h1>
              <p>
                StreetKnits is a humanitarian knitting charity dedicated to warming bodies and hearts.
                Since 2013, StreetKnits is the passion and perpetual project of founder Silke Feltz who aims not only to keep her neighbors warm,
                but also to help students, teachers, and members of the community to find their knitting zen.
                Currently, StreetKnits operates from Norman, Oklahoma.
              </p>
        </section>
      </main>

      <footer>
            <p> A website by: Nicholas Immenschuh, Timothy Judge, Nathan Moon, Matthew Wenzel, and Bryce Williams.</p>
      </footer>
      
    </>
  );
}