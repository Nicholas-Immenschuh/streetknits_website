import Link from 'next/link';

export default function Contact() {
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
          <h1>Contact Us</h1>
          <p>
            This is the contact page. Replace this with your contact information.
          </p>
        </section>
      </main>

      <footer>
        <p> A website by: Nicholas Immenschuh, Timothy Judge, Nathan Moon, Matthew Wenzel, and Bryce Williams.</p>
      </footer>
    </>
  );
}