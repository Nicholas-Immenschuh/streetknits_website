import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="font-bold text-xl">Streetknits</div>
            <div className="hidden sm:flex space-x-8">
              <a href="#" className="hover:text-gray-600">About</a>
              <a href="#" className="hover:text-gray-600">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      <main className="flex-grow">
        <div className="relative">
          <Image
            className="object-cover object-center"
            src="/homeScreenBackground2.png"
            alt="Streetknits Background"
            fill
            priority
            sizes="1000vw"
            quality={100}
          />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-4xl sm:text-6xl font-bold mb-4">Streetknits</h1>
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