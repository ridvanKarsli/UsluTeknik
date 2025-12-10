import { useEffect, useRef, useState } from 'react';

const ServicesSection = () => {
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
    <section id="services" ref={sectionRef} className="py-20 md:py-32 bg-gradient-to-br from-slate-700 via-slate-600 to-slate-800 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 items-start">
          {/* Left Column - Main Message */}
          <div className={`md:col-span-1 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-8 leading-tight drop-shadow-lg">
              İşimiz, <strong className="text-blue-300">Yaşam Mühendisliği</strong>
            </h2>
            <div className="space-y-5 text-white/95 text-base md:text-lg leading-relaxed">
              <p className="relative pl-4 border-l-2 border-white/30 hover:border-white/60 transition-colors duration-300">
                Bir şirketin teknik altyapısı, o şirketin bağışıklık sistemi gibidir. Ne kadar güçlüyse, bir o kadar şartlar karşısında dayanıklıdır.
              </p>
              <p className="relative pl-4 border-l-2 border-white/30 hover:border-white/60 transition-colors duration-300">
                Elektrik olmazsa, mekanik alt yapı teklerse, o şirkette tüm sistem ve yaşam durur. Ufak gibi görünen problemler, işleri ve yaşamı sekteye uğratabilir, büyük risklere yol açabilir, binlerce insanın hayatını olumsuz şekilde etkileyebilir.
              </p>
              <p className="relative pl-4 border-l-2 border-yellow-200/50 hover:border-yellow-200 transition-colors duration-300 font-medium">
                Uslu Teknik olarak görevimiz, müşterilerimizin teknik altyapılarını güvenli ve verimli şekilde çalışır durumda tutmak.
              </p>
              <p className="relative pl-4 border-l-2 border-white/30 hover:border-white/60 transition-colors duration-300">
                Biz, sadece teknik hizmet sunmuyor, aynı zamanda <strong className="text-blue-300">uzun vadeli çözümler</strong> üretiyoruz. Sadece acil müdahale yapmıyor, aynı zamanda önleyici bakım ve danışmanlık hizmetleriyle geleceği planlıyoruz.
              </p>
            </div>
          </div>

          {/* Middle Column - Mekanik Hizmetler */}
          <div className={`md:col-span-1 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 hover:bg-white/15 transition-all duration-300 hover-lift border border-white/20 shadow-xl">
              <div className="text-center mb-6">
                <div className="inline-block p-5 bg-gradient-to-br from-white/20 to-white/10 rounded-xl mb-4 shadow-lg hover:scale-110 transition-transform duration-300">
                  <svg className="w-20 h-20 text-white drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-5 text-center drop-shadow-md">
                Mekanik Hizmetler
              </h3>
              <p className="text-white/95 text-base md:text-lg leading-relaxed">
                Uslu Teknik olarak, içinde yaşadığımız çevrenin korunmasını, soluduğumuz havanın sağlıklı, çalıştığımız alanın güvenli ve konforlu olmasını esas alırız. Klima sistemlerinden yangın pompalarına, asansör ve yürüyen merdivenden drenaj ve ısı pompalarına kadar her türlü mekanik sistemin bakım ve onarımını yaparak müşterilerimizin enerjiden tasarruf etmelerini, verimli çalışmalarını ve sürdürülebilirliklerini sağlarız.
              </p>
            </div>
          </div>

          {/* Right Column - Elektrik Hizmetleri */}
          <div className={`md:col-span-1 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 hover:bg-white/15 transition-all duration-300 hover-lift border border-white/20 shadow-xl">
              <div className="text-center mb-6">
                <div className="inline-block p-5 bg-gradient-to-br from-white/20 to-white/10 rounded-xl mb-4 shadow-lg hover:scale-110 transition-transform duration-300">
                  <svg className="w-20 h-20 text-white drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-5 text-center drop-shadow-md">
                Elektrik Hizmetleri
              </h3>
              <p className="text-white/95 text-base md:text-lg leading-relaxed">
                Uslu Teknik olarak, sürdürülebilirlik ve verimliliği, çalışanların can ve mal güvenliğini esas alırız. Orta gerilim, alçak gerilim ve zayıf akım sistemlerinin bakım onarım hizmetlerinden yasal kontrollere, cihazların izlenebilirliklerinden ölçüm ve testlerine kadar her türlü elektrik ile ilgili teknik ihtiyaçlara çözüm getirerek müşterilerimizin kesintisiz çalışmalarına imkan sağlarız.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
