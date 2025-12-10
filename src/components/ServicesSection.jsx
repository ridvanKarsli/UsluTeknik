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
    <section id="services" ref={sectionRef} className="py-16 md:py-24 bg-orange-500 relative overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 items-start">
          {/* Left Column - Main Message */}
          <div className={`md:col-span-1 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-6 leading-tight">
              İşimiz, <strong>Yaşam Mühendisliği</strong>
            </h2>
            <div className="space-y-4 text-white text-base md:text-lg leading-relaxed">
              <p>
                Bir şirketin teknik altyapısı, o şirketin bağışıklık sistemi gibidir. Ne kadar güçlüyse, bir o kadar şartlar karşısında dayanıklıdır.
              </p>
              <p>
                Elektrik olmazsa, mekanik alt yapı teklerse, o şirkette tüm sistem ve yaşam durur. Ufak gibi görünen problemler, işleri ve yaşamı sekteye uğratabilir, büyük risklere yol açabilir, binlerce insanın hayatını olumsuz şekilde etkileyebilir.
              </p>
              <p>
                ProAsist olarak görevimiz, şirketlerin teknik alt yapılarını sürekli güçlendirerek, yaşamlarını kesintisiz sürdürmelerini sağlamak.
              </p>
              <p>
                Biz, sadece teknik hizmet işinde değil, aynı zamanda Yaşam Mühendisliği işindeyiz. Sadece, günü kurtarmıyor, aynı zamanda ihtiyaçları öngörerek geleceği de kurguluyoruz.
              </p>
            </div>
          </div>

          {/* Middle Column - Mekanik Hizmetler */}
          <div className={`md:col-span-1 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            <div className="text-center mb-6">
              <div className="inline-block p-4 bg-white/10 rounded-lg mb-4">
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 text-center">
              Mekanik Hizmetler
            </h3>
            <p className="text-white text-base md:text-lg leading-relaxed">
              ProAsist olarak, içinde yaşadığımız çevrenin korunmasını, soluduğumuz havanın sağlıklı, çalıştığımız alanın güvenli ve konforlu olmasını esas alır, klimadan yangın pompalarına, asansör ve yürüyen merdivenden drenaj ve ısı pompalarına kadar her türlü mekanik sistemin bakım onarımlarını yaparak şirketlerin, enerjiden tasarruf etmelerini, verimli çalışmalarını ve sürdürülebilirliklerini sağlarız.
            </p>
          </div>

          {/* Right Column - Elektrik Hizmetleri */}
          <div className={`md:col-span-1 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
            <div className="text-center mb-6">
              <div className="inline-block p-4 bg-white/10 rounded-lg mb-4">
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 text-center">
              Elektrik Hizmetleri
            </h3>
            <p className="text-white text-base md:text-lg leading-relaxed">
              ProAsist olarak, sürdürülebilirlik ve verimliliği, çalışanların can ve mal güvenliğini esas alır, orta, alçak gerilim ve zayıf akım sistemlerinin bakım onarım hizmetlerinden yasal kontrollere, cihazların izlenebilirliklerinden ölçüm ve testlerine kadar her türlü elektrik ile ilgili teknik ihtiyaçlara çözüm getirerek şirketlerin kesintisiz çalışmalarına imkan sağlarız.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
