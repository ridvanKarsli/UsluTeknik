import { useEffect, useRef, useState } from 'react';

const AboutSection = () => {
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
    <>
      {/* Main Content Section */}
      <section id="about" ref={sectionRef} className="py-20 md:py-32 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-slate-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h2 className={`text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-10 leading-tight transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <span className="bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 bg-clip-text text-transparent">
                Uslu Teknik
              </span>
              <strong className="text-gradient-purple"> Güvenilir Teknik Çözümler</strong>
            </h2>
            
            <div className={`space-y-8 text-lg md:text-xl text-gray-700 leading-relaxed text-left transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <p className="relative pl-6 border-l-4 border-blue-600/30 hover:border-blue-700 transition-colors duration-300">
                <span className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-700 to-blue-600 opacity-0 hover:opacity-100 transition-opacity"></span>
                Uslu Teknik olarak, elektrik ve mekanik alanında uzman kadromuzla, müşterilerimize kaliteli ve güvenilir teknik hizmetler sunuyoruz.<br />
                Yılların deneyimi ve sektördeki bilgi birikimimizle, her türlü teknik ihtiyaca profesyonel çözümler üretiyoruz.
              </p>
              
              <p className="relative pl-6 border-l-4 border-blue-600/30 hover:border-blue-700 transition-colors duration-300">
                <span className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-700 to-blue-600 opacity-0 hover:opacity-100 transition-opacity"></span>
                <strong className="text-blue-800 font-semibold">Uslu Teknik olarak…</strong><br />
                Müşteri memnuniyetini ön planda tutar, zamanında ve kaliteli hizmet anlayışımızla sektörde öncü olmayı hedefleriz.<br />
                Teknik altyapıların sorunsuz çalışması için gerekli tüm bakım, onarım ve danışmanlık hizmetlerini sunuyoruz.
              </p>
              
              <p className="relative pl-6 border-l-4 border-slate-500/30 hover:border-slate-600 transition-colors duration-300">
                <span className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-slate-600 to-blue-700 opacity-0 hover:opacity-100 transition-opacity"></span>
                Elektrik ve mekanik sistemlerinizin güvenli ve verimli çalışması için, <strong className="text-gradient-purple font-semibold">uzman ekibimiz</strong> ile yanınızdayız. İşletmelerinizin kesintisiz çalışması için gerekli tüm teknik desteği sağlıyoruz.
              </p>
              
              <p className="relative pl-6 border-l-4 border-blue-600/30 hover:border-blue-700 transition-colors duration-300">
                <span className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600 to-blue-700 opacity-0 hover:opacity-100 transition-opacity"></span>
                <strong className="text-gradient-purple font-semibold">7/24 destek</strong> hizmetimizle, acil durumlarınızda hızlı müdahale sağlıyoruz. Müşterilerimizin teknik ihtiyaçlarını karşılamak için her zaman hazırız.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Slate Bar Separator with gradient */}
      <div className="relative h-20 md:h-24 bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full h-1 bg-white/30"></div>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
