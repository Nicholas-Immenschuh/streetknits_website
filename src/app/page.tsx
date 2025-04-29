export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <nav className="fixed w-full z-50 navbar">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="navbar-container">
            <div className="navbar-logo">
              <a href="#">
                <img src="../StreetKnitsLogo7.png" alt="Streetknits Logo" className="navbar-logo-image" />
              </a>
              <a href="#">
              <span className="navbar-logo-text" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>StreetKnits</span>
              </a>
            </div>
            <div className="navbar-links">
              <a href="#" className="hover:text-gray-600">About</a>
              <a href="#" className="hover:text-gray-600">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      <main
        className="flex-grow"
        style={{
          backgroundImage: 'url(/homeScreenBackground10.svg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center 1%',
          backgroundRepeat: 'no-repeat',
          paddingTop: '64px'
        }}
      >
        <div className="relative" style={{ height: '100vh' }}>
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-4xl sm:text-6xl font-bold mb-4">About Us</h1>
              <p className="text-lg sm:text-xl mb-8 px-4 sm:px-0">
                StreetKnits is a humanitarian knitting charity dedicated to warming bodies and hearts. Since 2013, StreetKnits is the passion and perpetual project of founder Silke Feltz who aims not only to keep her neighbors warm, but also to help students, teachers, and members of the community to find their knitting zen. Currently, StreetKnits operates from Norman, Oklahoma.
              </p>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-gray-900 text-white z-10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="text-sm"> A website by: Nicholas Immenschuh, Timothy Judge, Nathan Moon,  Matthew Wenzel, and Bryce Williams.</div>
            <div className="flex space-x-6 mt-4 sm:mt-0">
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}