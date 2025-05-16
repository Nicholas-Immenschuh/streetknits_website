import Link from 'next/link';

export default function Donate() {
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
                <Link href="/donate" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>Donate</Link>
                <Link href="/contact" className="hover:text-gray-600">Contact</Link>
              </div>
            </div>
        </nav>
      </header>

      <main
        style={{
          backgroundImage: 'url(/donatePageBackground2.svg)',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',

        }}
      >
      </main>

      <footer>
        <p> A website by: Nicholas Immenschuh, Timothy Judge, Nathan Moon, Matthew Wenzel, and Bryce Williams.</p>
      </footer>
    </>
  );
}