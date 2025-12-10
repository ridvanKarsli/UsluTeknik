import { useEffect, useRef, useState, useMemo } from 'react';

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

  // Memoize SVG data to prevent re-renders
  const wireData = useMemo(() => {
    return Array.from({ length: 15 }, (_, i) => ({
      x1: Math.random() * 400,
      y1: Math.random() * 300,
      x2: Math.random() * 400,
      y2: Math.random() * 300,
      color: ['#3b82f6', '#ffffff', '#10b981'][i % 3],
    }));
  }, []);

  const pointData = useMemo(() => {
    return Array.from({ length: 10 }, (_, i) => ({
      cx: Math.random() * 400,
      cy: Math.random() * 300,
    }));
  }, []);

  return (
    <section id="hands" ref={sectionRef} className="relative overflow-hidden min-h-[600px] md:min-h-[700px] flex items-center">
      {/* Technical Background - Circuit Panel */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/40 to-gray-900">
          {/* Animated gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40"></div>
          
          {/* Circuit Pattern */}
          <svg className="absolute inset-0 w-full h-full opacity-40 animate-pulse-slow" viewBox="0 0 400 300">
            {/* Circuit lines */}
            <defs>
              <pattern id="circuit" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <rect width="40" height="40" fill="none"/>
                <path d="M20 0 L20 40 M0 20 L40 20" stroke="#3b82f6" strokeWidth="1" opacity="0.3"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#circuit)"/>
            
            {/* Wires - Optimized */}
            {wireData.map((wire, i) => (
              <line
                key={i}
                x1={wire.x1}
                y1={wire.y1}
                x2={wire.x2}
                y2={wire.y2}
                stroke={wire.color}
                strokeWidth="2"
                opacity="0.4"
              />
            ))}
            
            {/* Connection points - Optimized */}
            {pointData.map((point, i) => (
              <circle
                key={i}
                cx={point.cx}
                cy={point.cy}
                r="3"
                fill="#3b82f6"
                opacity="0.6"
              />
            ))}
          </svg>
        </div>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 w-full">
        <div className={`text-center ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <p className="text-xl md:text-2xl lg:text-3xl text-white/90 font-light mb-8 leading-relaxed drop-shadow-lg">
            El emeğinin önemine inanır, değerini bulması konusunda ön ayak oluruz.
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-extrabold text-white mb-12 leading-tight drop-shadow-2xl relative">
            <span className="relative z-10 bg-gradient-to-r from-white via-blue-100 to-slate-100 bg-clip-text text-transparent">
              Yaşam akışını mümkün kılan ellere sahip çıkıyoruz.
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-blue-800 via-blue-700 to-blue-800 bg-clip-text text-transparent blur-xl opacity-50 -z-10"></span>
          </h2>
          
          {/* CTA Button */}
          <a
            href="#contact"
            className="inline-block border-2 border-white/80 text-white px-10 py-5 rounded-xl font-display font-bold text-lg hover:bg-white hover:text-gray-900 transition-all duration-500 backdrop-blur-md bg-white/10 uppercase shadow-xl hover:shadow-2xl hover:scale-110 relative overflow-hidden group ripple"
          >
            <span className="relative z-10 flex items-center space-x-2">
              <span>Bizi Yakından Tanıyın</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-blue-800 via-blue-700 to-blue-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
            <span className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HandsSection;
