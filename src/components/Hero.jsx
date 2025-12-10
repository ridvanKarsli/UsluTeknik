import { useEffect, useState } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="home" className="pt-40 md:pt-44 relative overflow-hidden min-h-screen flex items-center">
      {/* Technical Background */}
      <div className="absolute inset-0 z-0">
        {/* Base gradient with enhanced colors */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/30 to-gray-900"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
        
        {/* Technical Circuit Panel Background */}
        <div className="absolute inset-0 opacity-40">
          <svg className="w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
            <defs>
              <pattern id="circuitPattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <rect width="100" height="100" fill="none"/>
                <path d="M50 0 L50 100 M0 50 L100 50" stroke="#3b82f6" strokeWidth="1" opacity="0.3"/>
                <circle cx="50" cy="50" r="3" fill="#3b82f6" opacity="0.5"/>
              </pattern>
              <linearGradient id="wireGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FF6B35" stopOpacity="0.6" />
                <stop offset="50%" stopColor="#F7931E" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.6" />
              </linearGradient>
            </defs>
            
            {/* Circuit board pattern */}
            <rect width="100%" height="100%" fill="url(#circuitPattern)"/>
            
            {/* Electrical wires */}
            {[...Array(25)].map((_, i) => {
              const x1 = Math.random() * 1200;
              const y1 = Math.random() * 800;
              const x2 = x1 + (Math.random() - 0.5) * 300;
              const y2 = y1 + (Math.random() - 0.5) * 300;
              const colors = ['#3b82f6', '#ffffff', '#fbbf24', '#ef4444', '#10b981'];
              return (
                <line
                  key={`wire-${i}`}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke={colors[Math.floor(Math.random() * colors.length)]}
                  strokeWidth="2"
                  opacity="0.4"
                >
                  <animate
                    attributeName="opacity"
                    values="0.2;0.6;0.2"
                    dur={`${2 + Math.random() * 2}s`}
                    repeatCount="indefinite"
                    begin={`${i * 0.1}s`}
                  />
                </line>
              );
            })}
            
            {/* Connection points */}
            {[...Array(40)].map((_, i) => {
              const cx = Math.random() * 1200;
              const cy = Math.random() * 800;
              return (
                <circle
                  key={`point-${i}`}
                  cx={cx}
                  cy={cy}
                  r="4"
                  fill="#3b82f6"
                  opacity="0.6"
                >
                  <animate
                    attributeName="r"
                    values="3;6;3"
                    dur={`${1.5 + Math.random() * 1}s`}
                    repeatCount="indefinite"
                    begin={`${i * 0.1}s`}
                  />
                  <animate
                    attributeName="opacity"
                    values="0.3;0.8;0.3"
                    dur={`${2 + Math.random() * 1}s`}
                    repeatCount="indefinite"
                    begin={`${i * 0.15}s`}
                  />
                </circle>
              );
            })}
            
            {/* Electrical panels */}
            {[...Array(8)].map((_, i) => {
              const x = (i % 4) * 300 + 50;
              const y = Math.floor(i / 4) * 300 + 100;
              return (
                <g key={`panel-${i}`} opacity="0.3">
                  <rect x={x} y={y} width="200" height="150" fill="none" stroke="#3b82f6" strokeWidth="2" rx="5"/>
                  <rect x={x + 10} y={y + 10} width="180" height="130" fill="#1e3a8a" opacity="0.2"/>
                  {/* Switches */}
                  {[...Array(6)].map((_, j) => (
                    <rect
                      key={`switch-${j}`}
                      x={x + 20 + (j % 3) * 50}
                      y={y + 30 + Math.floor(j / 3) * 40}
                      width="30"
                      height="15"
                      fill="#3b82f6"
                      opacity="0.5"
                    />
                  ))}
                </g>
              );
            })}
            
            {/* Mechanical gears */}
            {[...Array(6)].map((_, i) => {
              const cx = 200 + (i % 3) * 400;
              const cy = 150 + Math.floor(i / 3) * 300;
              return (
                <g key={`gear-${i}`} opacity="0.2">
                  <circle cx={cx} cy={cy} r="40" fill="none" stroke="#F7931E" strokeWidth="3">
                    <animateTransform
                      attributeName="transform"
                      type="rotate"
                      values={`0 ${cx} ${cy};360 ${cx} ${cy}`}
                      dur={`${10 + i * 2}s`}
                      repeatCount="indefinite"
                    />
                  </circle>
                  <circle cx={cx} cy={cy} r="15" fill="#F7931E" opacity="0.5"/>
                  {/* Gear teeth */}
                  {[...Array(8)].map((_, j) => {
                    const angle = (j * 45) * Math.PI / 180;
                    const x1 = cx + Math.cos(angle) * 35;
                    const y1 = cy + Math.sin(angle) * 35;
                    const x2 = cx + Math.cos(angle) * 45;
                    const y2 = cy + Math.sin(angle) * 45;
                    return (
                      <line
                        key={`tooth-${j}`}
                        x1={x1}
                        y1={y1}
                        x2={x2}
                        y2={y2}
                        stroke="#F7931E"
                        strokeWidth="2"
                      />
                    );
                  })}
                </g>
              );
            })}
          </svg>
        </div>

        {/* Animated Network Overlay */}
        <svg 
          className="absolute inset-0 w-full h-full opacity-30 animate-pulse-slow" 
          style={{ zIndex: 1 }}
        >
          <defs>
            <linearGradient id="networkGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF6B35" stopOpacity="0.8">
                <animate attributeName="stop-opacity" values="0.6;0.9;0.6" dur="3s" repeatCount="indefinite" />
              </stop>
              <stop offset="50%" stopColor="#F7931E" stopOpacity="0.6">
                <animate attributeName="stop-opacity" values="0.4;0.8;0.4" dur="3s" repeatCount="indefinite" />
              </stop>
              <stop offset="100%" stopColor="#FF6B35" stopOpacity="0.8">
                <animate attributeName="stop-opacity" values="0.6;0.9;0.6" dur="3s" repeatCount="indefinite" />
              </stop>
            </linearGradient>
          </defs>
          {/* Animated Network lines */}
          {[...Array(15)].map((_, i) => {
            const x1 = Math.random() * 100;
            const y1 = Math.random() * 100;
            const x2 = Math.random() * 100;
            const y2 = Math.random() * 100;
            return (
              <line
                key={i}
                x1={`${x1}%`}
                y1={`${y1}%`}
                x2={`${x2}%`}
                y2={`${y2}%`}
                stroke="url(#networkGradient)"
                strokeWidth="2"
                opacity="0.4"
              >
                <animate
                  attributeName="opacity"
                  values="0.2;0.6;0.2"
                  dur={`${2 + Math.random() * 2}s`}
                  repeatCount="indefinite"
                  begin={`${i * 0.1}s`}
                />
              </line>
            );
          })}
        </svg>

        {/* Floating technical particles */}
        <div className="absolute inset-0 overflow-hidden" style={{ zIndex: 1 }}>
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-blue-600 rounded-full opacity-30 animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.2}s`,
                animationDuration: `${3 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>

        {/* Overlay gradient for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" style={{ zIndex: 2 }}></div>
      </div>

      {/* Content - Parallax Effect */}
      <div 
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 lg:py-40 w-full transition-transform duration-300"
        style={{
          transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
        }}
      >
        <div className={`text-center ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          {/* Subheading - Slide in from left */}
          <div 
            className={`mb-6 ${isVisible ? 'animate-slide-in-left' : 'opacity-0 translate-x-[-50px]'}`} 
            style={{ animationDelay: '0.2s', animationDuration: '0.8s' }}
          >
            <p className="text-xl md:text-2xl lg:text-3xl text-white font-light italic drop-shadow-lg">
              Elektrik ve mekanik alanında<br />
              güvenilir teknik çözüm ortağınız
            </p>
          </div>

          {/* Main Heading - Scale and fade */}
          <div 
            className={`mb-10 ${isVisible ? 'animate-scale-in' : 'opacity-0 scale-90'}`} 
            style={{ animationDelay: '0.4s', animationDuration: '1s' }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-extrabold text-white leading-tight mb-6 drop-shadow-2xl relative">
              <span className="relative z-10 bg-gradient-to-r from-white via-blue-100 to-slate-100 bg-clip-text text-transparent animate-pulse-glow">
                Uslu Teknik
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-blue-800 via-blue-700 to-blue-800 bg-clip-text text-transparent blur-xl opacity-50 animate-pulse"></span>
            </h1>
          </div>

          {/* CTA Button - Slide in from bottom */}
          <div 
            className={`${isVisible ? 'animate-slide-in-bottom' : 'opacity-0 translate-y-[50px]'}`} 
            style={{ animationDelay: '0.6s', animationDuration: '0.8s' }}
          >
            <a
              href="#services"
              className="inline-block border-2 border-white/80 text-white px-10 py-5 rounded-xl font-display font-bold text-lg hover:bg-white hover:text-gray-900 transition-all duration-500 backdrop-blur-md bg-white/10 hover:scale-110 hover:shadow-2xl hover:shadow-blue-800/50 relative overflow-hidden group ripple"
            >
              <span className="relative z-10 flex items-center space-x-2">
                <span>Hizmetlerimizi Keşfedin</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-blue-800 via-blue-700 to-blue-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
              <span className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Animated */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex flex-col items-center space-y-2">
          <div className="scroll-indicator text-white/60"></div>
          <span className="text-xs text-white/60 uppercase tracking-wider font-medium animate-pulse">Kaydır</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
