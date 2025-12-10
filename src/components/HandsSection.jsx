import { useEffect, useRef, useState } from 'react';

const HandsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="hands" ref={sectionRef} className="relative overflow-hidden min-h-[600px] flex items-center">
      {/* Technical Background - Circuit Panel */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
          {/* Circuit Pattern */}
          <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 400 300">
            {/* Circuit lines */}
            <defs>
              <pattern id="circuit" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <rect width="40" height="40" fill="none"/>
                <path d="M20 0 L20 40 M0 20 L40 20" stroke="#3b82f6" strokeWidth="1" opacity="0.3"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#circuit)"/>
            
            {/* Wires */}
            {[...Array(30)].map((_, i) => {
              const x1 = Math.random() * 400;
              const y1 = Math.random() * 300;
              const x2 = x1 + (Math.random() - 0.5) * 100;
              const y2 = y1 + (Math.random() - 0.5) * 100;
              const colors = ['#3b82f6', '#ffffff', '#fbbf24', '#ef4444', '#10b981'];
              return (
                <line
                  key={i}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke={colors[Math.floor(Math.random() * colors.length)]}
                  strokeWidth="2"
                  opacity="0.4"
                />
              );
            })}
            
            {/* Connection points */}
            {[...Array(20)].map((_, i) => {
              const cx = Math.random() * 400;
              const cy = Math.random() * 300;
              return (
                <circle
                  key={i}
                  cx={cx}
                  cy={cy}
                  r="3"
                  fill="#3b82f6"
                  opacity="0.6"
                />
              );
            })}
          </svg>
        </div>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 w-full">
        <div className={`text-center ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <p className="text-xl md:text-2xl lg:text-3xl text-white font-light mb-6">
            El emeğinin önemine inanır, değerini bulması konusunda ön ayak oluruz.
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-10 leading-tight">
            Yaşam akışını mümkün kılan ellere sahip çıkıyoruz.
          </h2>
          
          {/* CTA Button */}
          <a
            href="#contact"
            className="inline-block border-2 border-white text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300 backdrop-blur-sm bg-white/10 uppercase"
          >
            Bizi Yakından Tanıyın
          </a>
        </div>
      </div>
    </section>
  );
};

export default HandsSection;
