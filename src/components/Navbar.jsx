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
      <div className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 h-8 flex items-center justify-end px-4">
        <button className="text-gray-600 hover:text-gray-900">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
      </div>

      {/* Main Navigation */}
      <nav className={`fixed top-8 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center space-x-3">
              <div className="relative">
                <svg className="w-10 h-10 text-purple-600" viewBox="0 0 24 24" fill="currentColor">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <circle cx="12" cy="12" r="2" fill="currentColor"/>
                  <path d="M12 2 L12 6 M12 18 L12 22 M2 12 L6 12 M18 12 L22 12" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <div>
                <div className="text-xl font-bold text-purple-600">PROASİST</div>
                <div className="text-xs text-purple-500">TEKNİK HİZMETLER</div>
              </div>
            </div>

            {/* Language Selection & Navigation */}
            <div className="hidden lg:flex lg:items-center lg:space-x-6">
              {/* Language Flags */}
              <div className="flex items-center space-x-2">
                <button className="w-6 h-4 border-2 border-purple-600">
                  <svg viewBox="0 0 3 2" className="w-full h-full">
                    <rect width="3" height="2" fill="#E30A17"/>
                    <circle cx="1.5" cy="1" r="0.4" fill="white"/>
                    <path d="M1.5 0.6 L1.7 0.8 L1.5 1 L1.3 0.8 Z" fill="white"/>
                  </svg>
                </button>
                <button className="w-6 h-4 opacity-50">
                  <svg viewBox="0 0 3 2" className="w-full h-full">
                    <rect width="3" height="1" fill="#B22234"/>
                    <rect y="1" width="3" height="1" fill="#FFFFFF"/>
                    <rect width="1.5" height="1" fill="#3C3B6E"/>
                    <circle cx="0.75" cy="0.5" r="0.15" fill="white"/>
                  </svg>
                </button>
              </div>

              {/* Navigation Links */}
              <a href="#home" className="text-gray-800 hover:text-purple-600 font-medium text-sm uppercase transition-colors">
                PROASİST
              </a>
              <a href="#clients" className="text-gray-800 hover:text-purple-600 font-medium text-sm uppercase transition-colors">
                MÜŞTERİLERİMİZ
              </a>
              <a href="#partners" className="text-gray-800 hover:text-purple-600 font-medium text-sm uppercase transition-colors">
                ÇÖZÜM ORTAKLARI BAŞVURU FORMU
              </a>
            </div>

            {/* Right Side - Search & Omega Grup */}
            <div className="hidden lg:flex lg:items-center lg:space-x-4">
              <button className="text-gray-600 hover:text-gray-900">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
              
              {/* Omega Grup Logo */}
              <a href="#" className="flex items-center space-x-2 bg-blue-900 px-4 py-2 rounded">
                <div className="flex space-x-1">
                  <div className="w-3 h-3 bg-red-500"></div>
                  <div className="w-3 h-3 bg-orange-500"></div>
                  <div className="w-3 h-3 bg-blue-400"></div>
                  <div className="w-3 h-3 bg-blue-600"></div>
                </div>
                <div className="text-white">
                  <div className="text-xs font-bold">OMEGA GRUP</div>
                  <div className="text-[10px]">ÇÖZÜM PLATFORMU</div>
                </div>
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-all duration-300"
              >
                <span className="sr-only">Ana menüyü aç</span>
                {!isMenuOpen ? (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                ) : (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`lg:hidden bg-white border-t border-gray-200 transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a
              href="#home"
              className="block text-gray-800 hover:text-purple-600 hover:bg-gray-50 px-3 py-2 text-base font-medium rounded-md transition-all duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              PROASİST
            </a>
            <a
              href="#clients"
              className="block text-gray-800 hover:text-purple-600 hover:bg-gray-50 px-3 py-2 text-base font-medium rounded-md transition-all duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              MÜŞTERİLERİMİZ
            </a>
            <a
              href="#partners"
              className="block text-gray-800 hover:text-purple-600 hover:bg-gray-50 px-3 py-2 text-base font-medium rounded-md transition-all duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              ÇÖZÜM ORTAKLARI BAŞVURU FORMU
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
