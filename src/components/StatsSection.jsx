import { useEffect, useRef, useState } from 'react';

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({
    0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0
  });
  const sectionRef = useRef(null);

  const stats = [
    { 
      number: 500, 
      label: 'ÇÖZÜM ORTAĞI',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    { 
      number: 2000, 
      label: 'TEKNİK PERSONEL',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    { 
      number: 300, 
      label: 'MÜŞTERİ',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      )
    },
    { 
      number: 105000, 
      label: 'HİZMET VERİLEN EKİPMAN',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    { 
      number: 135, 
      label: 'TEKNİK HİZMET TÜRÜ',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    { 
      number: 32000, 
      label: 'NOKTAYA HİZMET',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    stats.forEach((stat, index) => {
      let currentStep = 0;
      const increment = stat.number / steps;

      const timer = setInterval(() => {
        currentStep++;
        setCounts(prev => ({
          ...prev,
          [index]: Math.min(Math.floor(currentStep * increment), stat.number)
        }));

        if (currentStep >= steps) {
          clearInterval(timer);
          setCounts(prev => ({
            ...prev,
            [index]: stat.number
          }));
        }
      }, stepDuration);

      return () => clearInterval(timer);
    });
  }, [isVisible]);

  const formatNumber = (num) => {
    if (num >= 1000) {
      // Use dot as thousand separator for Turkish format
      return num.toLocaleString('tr-TR', { 
        minimumFractionDigits: 0,
        maximumFractionDigits: 0 
      });
    }
    return num.toString();
  };

  return (
    <section ref={sectionRef} className="py-20 md:py-32 bg-gradient-to-br from-orange-500 via-orange-400 to-orange-600 relative overflow-hidden">
      {/* Turkey Map Background with animation */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full animate-pulse-slow" viewBox="0 0 400 200" preserveAspectRatio="xMidYMid meet">
          {/* Simplified Turkey Map Outline */}
          <path
            d="M 50 80 Q 60 70 80 75 T 120 80 T 160 85 T 200 90 T 240 88 T 280 85 T 320 80 T 350 75 L 360 90 L 350 110 L 340 130 L 320 140 L 300 145 L 280 140 L 260 135 L 240 130 L 220 125 L 200 120 L 180 115 L 160 110 L 140 105 L 120 100 L 100 95 L 80 90 L 60 85 Z"
            fill="white"
            stroke="white"
            strokeWidth="2"
          />
        </svg>
      </div>
      
      {/* Decorative gradient circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className={`text-center mb-16 md:mb-20 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-4 drop-shadow-lg">
            Türkiye'nin <span className="text-yellow-200">81 İlinde</span>
          </h2>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-white mb-8 drop-shadow-md">
            İşinizi Yaşıyor ve Yaşatıyoruz
          </h3>
          <div className="w-24 h-1 bg-white/50 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {stats.map((stat, index) => {
            const number = counts[index] || 0;
            const formattedNumber = formatNumber(number);
            const isLargeNumber = number >= 10000;
            
            return (
              <div
                key={index}
                className={`group relative bg-white/15 backdrop-blur-md border-2 border-white/30 rounded-2xl p-6 md:p-8 hover:bg-white/25 hover:border-white/50 transition-all duration-500 overflow-hidden hover-lift shadow-xl ${
                  isVisible ? 'animate-scale-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/0 group-hover:from-white/10 group-hover:to-white/5 transition-all duration-500 rounded-2xl"></div>
                
                {/* Icon */}
                <div className="mb-4 flex justify-center text-white relative z-10">
                  <div className="w-12 h-12 md:w-16 md:h-16 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <div className="absolute inset-0 bg-white/20 rounded-full blur-md group-hover:bg-white/30 transition-all"></div>
                    <div className="relative">
                      {stat.icon}
                    </div>
                  </div>
                </div>

                {/* Number */}
                <div className={`font-sans font-extrabold text-white mb-3 text-center relative z-10 ${
                  isLargeNumber 
                    ? 'text-xl md:text-2xl lg:text-3xl xl:text-4xl' 
                    : 'text-2xl md:text-3xl lg:text-4xl xl:text-5xl'
                }`}>
                  <div className="w-full break-all leading-tight drop-shadow-lg" style={{ wordBreak: 'break-all' }}>
                    {formattedNumber}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-b from-white to-white/50 bg-clip-text text-transparent blur-sm opacity-50 -z-10">
                    {formattedNumber}
                  </div>
                </div>

                {/* Label */}
                <div className="text-[10px] md:text-xs lg:text-sm text-white/95 font-semibold uppercase tracking-wider text-center leading-tight min-h-[2.5rem] flex items-center justify-center relative z-10">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
