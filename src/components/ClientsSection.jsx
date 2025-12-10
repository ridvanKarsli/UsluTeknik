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
      {/* Orange Bar */}
      <div className="h-20 md:h-24 bg-orange-500 w-full"></div>

      {/* Main Content */}
      <section id="clients" ref={sectionRef} className="py-16 md:py-24 bg-white relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-12 md:mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Bazı işleri, ancak <span className="text-purple-600">yaşayan bilir…</span>
            </h2>
            <div className="max-w-4xl mx-auto space-y-4 text-lg md:text-xl text-gray-700 leading-relaxed text-left">
              <p>
                Bazı işleri, ancak yaşayan bilir. Tıpkı, her gün yüzlerce, her yıl binlerce teknik işin altından kalkan teknik, operasyon, yapı işleri müdürlerinin işleri gibi. Kolay iş değildir büyük şirketleri teknik açıdan ayakta tutmak, sistemlerin aksamadan çalışmasını, üretimin devamını ve işin düzenli akışını sağlamak.
              </p>
              <p>
                <strong className="text-purple-600">ProAsist</strong> olarak biz, müşterilerimizin sorunlarını, uykusuz gecelerini, endişelerini çok iyi biliyor, hissediyor ve anlıyoruz. Çünkü, her gün, tekrar tekrar, hem ofiste hem sahada, müşterilerimizin her türlü işlerini, sıkıntılarını, aksaklıklarını ve krizlerini, onlarla birlikte birebir yaşıyoruz.
              </p>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-6 text-center">
              Hizmet verdiğimiz Müşterilerimizden bazıları:
            </h3>
          </div>

          {/* 8-Panel Image Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0 mb-12">
            {clientPanels.map((panel, index) => (
              <div
                key={index}
                className={`relative h-64 md:h-80 overflow-hidden group cursor-pointer ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition-transform duration-700"
                  style={{ backgroundImage: `url(${panel.image})` }}
                >
                  {/* Gradient Overlay - Darker on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent group-hover:from-black/90 group-hover:via-black/70 group-hover:to-black/50 transition-all duration-300"></div>
                  
                  {/* Hover Overlay - Category and Clients */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h4 className="text-2xl md:text-3xl font-bold uppercase mb-3 text-center">
                      {panel.category}
                    </h4>
                    {panel.clients.length > 0 && (
                      <>
                        <div className="w-16 h-0.5 bg-white mb-3"></div>
                        <div className="text-sm md:text-base text-center space-y-1">
                          {panel.clients.map((client, idx) => (
                            <div key={idx} className="font-medium">{client}</div>
                          ))}
                        </div>
                      </>
                    )}
                  </div>

                  {/* Icon for ENERJİ panel */}
                  {panel.hasIcon && (
                    <div className="absolute bottom-4 left-4 z-10">
                      <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
