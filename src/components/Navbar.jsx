import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Top Search Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 border-b border-gray-700/50 h-9 flex items-center justify-end px-4 md:px-8 shadow-lg">
        <button className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-110 group relative">
          <svg className="w-5 h-5 group-hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-blue-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity animate-pulse"></span>
        </button>
      </div>

      {/* Main Navigation */}
      <nav className={`fixed top-9 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        isScrolled 
          ? 'bg-white/98 backdrop-blur-xl shadow-xl border-b border-gray-200/50' 
          : 'bg-white/95 backdrop-blur-sm shadow-md'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center space-x-3 group cursor-pointer">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-800 to-blue-700 rounded-full blur-md opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                <svg className="w-12 h-12 text-blue-800 relative z-10 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" viewBox="0 0 24 24" fill="currentColor">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" className="animate-pulse-slow"/>
                  <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <circle cx="12" cy="12" r="2" fill="currentColor"/>
                  <path d="M12 2 L12 6 M12 18 L12 22 M2 12 L6 12 M18 12 L22 12" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <div>
                <div className="text-xl md:text-2xl font-display font-bold bg-gradient-to-r from-blue-800 via-blue-700 to-blue-600 bg-clip-text text-transparent group-hover:from-blue-900 group-hover:to-blue-800 transition-all duration-300">
                  USLU TEKNİK
                </div>
                <div className="text-[10px] md:text-xs font-medium text-gray-600 uppercase tracking-wider">ELEKTRİK & MEKANİK</div>
              </div>
            </div>

            {/* Language Selection & Navigation */}
            <div className="hidden lg:flex lg:items-center lg:space-x-8">
              {/* Language Flags */}
              <div className="flex items-center space-x-3 px-3 py-1.5 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-300">
                <button className="w-7 h-5 border-2 border-blue-800 rounded-sm shadow-sm hover:scale-110 transition-transform duration-300 relative overflow-hidden group">
                  <svg viewBox="0 0 3 2" className="w-full h-full">
                    <rect width="3" height="2" fill="#E30A17"/>
                    <circle cx="1.5" cy="1" r="0.4" fill="white"/>
                    <path d="M1.5 0.6 L1.7 0.8 L1.5 1 L1.3 0.8 Z" fill="white"/>
                  </svg>
                  <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </button>
                <button className="w-7 h-5 opacity-60 hover:opacity-100 rounded-sm shadow-sm hover:scale-110 transition-all duration-300">
                  <svg viewBox="0 0 3 2" className="w-full h-full">
                    <rect width="3" height="1" fill="#B22234"/>
                    <rect y="1" width="3" height="1" fill="#FFFFFF"/>
                    <rect width="1.5" height="1" fill="#3C3B6E"/>
                    <circle cx="0.75" cy="0.5" r="0.15" fill="white"/>
                  </svg>
                </button>
              </div>

              {/* Navigation Links */}
              <a href="#home" className="relative text-gray-800 hover:text-blue-800 font-semibold text-sm uppercase tracking-wide transition-all duration-300 group">
                <span className="relative z-10">ANA SAYFA</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-800 to-blue-700 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#clients" className="relative text-gray-800 hover:text-blue-800 font-semibold text-sm uppercase tracking-wide transition-all duration-300 group">
                <span className="relative z-10">MÜŞTERİLERİMİZ</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-800 to-blue-700 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#partners" className="relative text-gray-800 hover:text-blue-800 font-semibold text-sm uppercase tracking-wide transition-all duration-300 group">
                <span className="relative z-10">ÇÖZÜM ORTAKLARI</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-800 to-blue-700 group-hover:w-full transition-all duration-300"></span>
              </a>
            </div>

            {/* Right Side - Search & Omega Grup */}
            <div className="hidden lg:flex lg:items-center lg:space-x-4">
              <button className="relative text-gray-600 hover:text-blue-800 transition-all duration-300 p-2 rounded-lg hover:bg-blue-50 group">
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <span className="absolute top-1 right-1 w-2 h-2 bg-blue-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity animate-pulse"></span>
              </button>
              
              {/* İletişim Butonu */}
              <a href="#contact" className="group flex items-center space-x-2 bg-gradient-to-r from-blue-800 via-blue-700 to-blue-600 px-5 py-2.5 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <svg className="w-5 h-5 text-white relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div className="text-white relative z-10">
                  <div className="text-xs font-bold tracking-wide">İLETİŞİM</div>
                </div>
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={toggleMenu}
                className="relative inline-flex items-center justify-center p-2.5 rounded-lg text-gray-700 hover:text-blue-800 hover:bg-blue-50 transition-all duration-300 group"
                aria-label="Ana menüyü aç"
              >
                <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-800 to-blue-700 opacity-0 group-hover:opacity-10 transition-opacity"></span>
                {!isMenuOpen ? (
                  <svg className="block h-6 w-6 relative z-10 transform group-hover:rotate-90 transition-transform duration-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                ) : (
                  <svg className="block h-6 w-6 relative z-10 transform rotate-90 transition-transform duration-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`lg:hidden bg-white/98 backdrop-blur-xl border-t border-gray-200/50 shadow-lg transition-all duration-500 ease-out overflow-hidden ${
          isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="px-4 pt-4 pb-6 space-y-2">
            <a
              href="#home"
              className="block text-gray-800 hover:text-white hover:bg-gradient-to-r from-blue-800 to-blue-700 px-4 py-3 text-base font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              ANA SAYFA
            </a>
            <a
              href="#clients"
              className="block text-gray-800 hover:text-white hover:bg-gradient-to-r from-blue-800 to-blue-700 px-4 py-3 text-base font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              MÜŞTERİLERİMİZ
            </a>
            <a
              href="#partners"
              className="block text-gray-800 hover:text-white hover:bg-gradient-to-r from-blue-800 to-blue-700 px-4 py-3 text-base font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              ÇÖZÜM ORTAKLARI
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
