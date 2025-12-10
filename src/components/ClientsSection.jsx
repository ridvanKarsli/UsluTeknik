import { useEffect, useRef, useState } from 'react';

const ClientsSection = () => {
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

  const clientPanels = [
    {
      category: 'PERAKENDE',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop',
      clients: ['KOTON', 'MANGO', 'US POLO'],
    },
    {
      category: 'FİNANS',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop',
      clients: ['ZİRAAT BANKASI', 'YAPIKREDİ BANKASI', 'VAKIFBANK'],
    },
    {
      category: 'SANAYİ',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop',
      clients: ['BSH', 'TRAKYA DÖKÜM', 'ARÇELİK'],
    },
    {
      category: 'GIDA',
      image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&h=600&fit=crop',
      clients: ['SHAYA GROUP', 'TAVUK DÜNYASI', 'DOMİNOS'],
    },
    {
      category: 'ENERJİ',
      image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=600&fit=crop',
      clients: ['OPET'],
      hasIcon: true,
    },
    {
      category: 'İŞLETME',
      image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&h=600&fit=crop',
      clients: ['BUSINESS İSTANBUL', 'GENERAL ELEKTRİK', 'DOĞUŞ CENTER'],
    },
    {
      category: 'ULAŞIM',
      image: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?w=800&h=600&fit=crop',
      clients: ['CEYNAK (LİMANLAR)'],
    },
    {
      category: 'ÜRETİM',
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop',
      clients: ['RENAULT', 'VAKKO', 'BSH'],
    },
  ];

  return (
    <>
      {/* Orange Bar with gradient */}
      <div className="relative h-20 md:h-24 bg-gradient-to-r from-orange-500 via-orange-400 to-orange-500 w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
      </div>

      {/* Main Content */}
      <section id="clients" ref={sectionRef} className="py-20 md:py-32 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse-slow"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className={`text-center mb-16 md:mb-20 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-8 leading-tight">
              Bazı işleri, ancak <span className="text-gradient-purple">yaşayan bilir…</span>
            </h2>
            <div className="max-w-5xl mx-auto space-y-6 text-lg md:text-xl text-gray-700 leading-relaxed text-left">
              <p className="relative pl-6 border-l-4 border-purple-500/30 hover:border-purple-500 transition-colors duration-300">
                <span className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 to-cyan-500 opacity-0 hover:opacity-100 transition-opacity"></span>
                Bazı işleri, ancak yaşayan bilir. Tıpkı, her gün yüzlerce, her yıl binlerce teknik işin altından kalkan teknik, operasyon, yapı işleri müdürlerinin işleri gibi. Kolay iş değildir büyük şirketleri teknik açıdan ayakta tutmak, sistemlerin aksamadan çalışmasını, üretimin devamını ve işin düzenli akışını sağlamak.
              </p>
              <p className="relative pl-6 border-l-4 border-purple-500/30 hover:border-purple-500 transition-colors duration-300">
                <span className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 to-cyan-500 opacity-0 hover:opacity-100 transition-opacity"></span>
                <strong className="text-gradient-purple font-bold">ProAsist</strong> olarak biz, müşterilerimizin sorunlarını, uykusuz gecelerini, endişelerini çok iyi biliyor, hissediyor ve anlıyoruz. Çünkü, her gün, tekrar tekrar, hem ofiste hem sahada, müşterilerimizin her türlü işlerini, sıkıntılarını, aksaklıklarını ve krizlerini, onlarla birlikte birebir yaşıyoruz.
              </p>
            </div>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl md:text-3xl font-display font-bold text-gray-900 mb-8 text-center">
              Hizmet verdiğimiz <span className="text-gradient-purple">Müşterilerimizden</span> bazıları:
            </h3>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full"></div>
          </div>

          {/* 8-Panel Image Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3 mb-12">
            {clientPanels.map((panel, index) => (
              <div
                key={index}
                className={`relative h-64 md:h-80 overflow-hidden group cursor-pointer rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transform group-hover:scale-125 transition-transform duration-1000"
                  style={{ backgroundImage: `url(${panel.image})` }}
                >
                  {/* Gradient Overlay - Enhanced */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:from-black/95 group-hover:via-black/70 group-hover:to-black/60 transition-all duration-500"></div>
                  
                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/0 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  
                  {/* Hover Overlay - Category and Clients */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4 z-10 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    <h4 className="text-2xl md:text-3xl font-display font-bold uppercase mb-4 text-center drop-shadow-lg">
                      {panel.category}
                    </h4>
                    {panel.clients.length > 0 && (
                      <>
                        <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-cyan-400 mb-4 rounded-full"></div>
                        <div className="text-sm md:text-base text-center space-y-2">
                          {panel.clients.map((client, idx) => (
                            <div key={idx} className="font-semibold drop-shadow-md transform group-hover:scale-105 transition-transform duration-300" style={{ transitionDelay: `${idx * 0.1}s` }}>
                              {client}
                            </div>
                          ))}
                        </div>
                      </>
                    )}
                  </div>

                  {/* Category label - always visible */}
                  <div className="absolute bottom-4 left-4 right-4 z-10 opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                    <div className="bg-black/60 backdrop-blur-sm rounded-lg px-3 py-2">
                      <h4 className="text-lg font-bold text-white uppercase">{panel.category}</h4>
                    </div>
                  </div>

                  {/* Icon for ENERJİ panel */}
                  {panel.hasIcon && (
                    <div className="absolute top-4 right-4 z-10 group-hover:scale-110 transition-transform duration-300">
                      <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-full flex items-center justify-center shadow-xl">
                        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ClientsSection;
