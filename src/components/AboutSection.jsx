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
        <div className="absolute top-0 left-0 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h2 className={`text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-10 leading-tight transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <span className="bg-gradient-to-r from-gray-900 via-purple-600 to-gray-900 bg-clip-text text-transparent">
                ProAsist Demek "
              </span>
              <strong className="text-gradient-purple">Yaşayan Şirket</strong>
              <span className="bg-gradient-to-r from-gray-900 via-purple-600 to-gray-900 bg-clip-text text-transparent">
                " Demektir
              </span>
            </h2>
            
            <div className={`space-y-8 text-lg md:text-xl text-gray-700 leading-relaxed text-left transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <p className="relative pl-6 border-l-4 border-purple-500/30 hover:border-purple-500 transition-colors duration-300">
                <span className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 to-cyan-500 opacity-0 hover:opacity-100 transition-opacity"></span>
                Biz, sıradan bir teknik hizmet firması değiliz.<br />
                Müşterilerimizin elektrikle ilgili sorunlarına çözüm getirmek için yola çıktık, elektrik uzmanlığımıza, mekanik yetkinliğimizi ve empati yeteneğimizi de ekleyerek, yüzlerce firmanın, her gün, yaşamını mümkün kılan kesintisiz bir güç kaynağına dönüştük.
              </p>
              
              <p className="relative pl-6 border-l-4 border-purple-500/30 hover:border-purple-500 transition-colors duration-300">
                <span className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 to-cyan-500 opacity-0 hover:opacity-100 transition-opacity"></span>
                <strong className="text-purple-600 font-semibold">ProAsist'te biz…</strong><br />
                Şirketlerin de insanlar gibi 'yaşayan organizmalar' olduğuna inanırız.<br />
                Tıpkı insanlar gibi, yaşadıkça ürettiklerini, katkı sağladıklarını, zamanla yorgun düşüp yıprandıklarında ise yaşamlarını sürdürebilmeleri için, bağışıklık sistemlerinin güçlendirilmeleri gerektiğini iyi biliriz.
              </p>
              
              <p className="relative pl-6 border-l-4 border-orange-500/30 hover:border-orange-500 transition-colors duration-300">
                <span className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-500 to-purple-500 opacity-0 hover:opacity-100 transition-opacity"></span>
                Çünkü, <strong className="text-gradient-purple font-semibold">"Yaşayan Şirket"</strong> demek… iş demek, üretim demek, istihdam, inovasyon, verimlilik, enerji, gelişim ve dinamizm demek…
              </p>
              
              <p className="relative pl-6 border-l-4 border-cyan-500/30 hover:border-cyan-500 transition-colors duration-300">
                <span className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-500 to-purple-500 opacity-0 hover:opacity-100 transition-opacity"></span>
                <strong className="text-gradient-purple font-semibold">"Yaşayan Şirket"</strong> demek… emek demek, kazanç demek, gelecek demek, gelişen bir sektör ve büyüyen bir ekonomi demek…
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Orange Bar Separator with gradient */}
      <div className="relative h-20 md:h-24 bg-gradient-to-r from-orange-500 via-orange-400 to-orange-500 w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full h-1 bg-white/30"></div>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
