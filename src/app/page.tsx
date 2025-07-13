import Link from 'next/link';

export default function Home() {
  return (
    <div id="homePageContainer">
      <header>
        <nav className="navbar">
            <div className="navbar-container">
              <div className="navbar-logo">
                <Link href="/">
                  <img src="../StreetKnitsLogo.png" alt="Streetknits Logo" className="navbar-logo-image" />
                </Link>
                <Link href="/">
                  <span id="homePageNavbarLogoText" className="navbar-logo-text">StreetKnits</span>
                </Link>
              </div>
                <div className="navbar-links">
                <Link href="/donate">Donate</Link>
                <Link href="/contact">Contact</Link>
              </div>
            </div>
        </nav>
      </header>
      

      <main id="homePageBackgroundContainer">
        <article>
          <section>
            <h1>About Us</h1>
            <p>
                StreetKnits is a humanitarian knitting charity dedicated to warming bodies and hearts.
                Since 2013, StreetKnits is the passion and perpetual project of founder Silke Feltz,
                who aims not only to keep her neighbors warm, but also to help students, teachers, 
                and members of the community to find their knitting zen.
                Currently, StreetKnits operates from Norman, Oklahoma.
            </p>
          </section>
        </article>
      </main>

      <footer>
            <p> A website redesign by Nicholas Immenschuh</p>
      </footer>
      
    </div>
  );
}