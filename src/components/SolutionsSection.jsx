const SolutionsSection = () => {
  const solutions = [
    {
      title: 'Uzman Ekip',
      description: 'Alanında uzmanlaşmış, sertifikalı teknik ekibimizle en karmaşık sorunları bile çözüyoruz.',
    },
    {
      title: 'Hızlı Müdahale',
      description: 'Acil durumlarda 2 saat içinde sahada oluyoruz. Zaman kaybı yaşatmadan sorunlarınızı çözüyoruz.',
    },
    {
      title: 'Teknoloji Odaklı',
      description: 'En son teknoloji araçlar ve yazılımlarla hizmet veriyor, verimliliği artırıyoruz.',
    },
    {
      title: 'Maliyet Etkin',
      description: 'Önleyici bakım ve optimizasyon çözümlerimizle uzun vadede maliyetlerinizi düşürüyoruz.',
    },
  ];

  return (
      <section id="solutions" className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Neden ProAsist?
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Kurumsal teknik hizmetlerde öncü olmamızı sağlayan değerlerimiz ve çözüm yaklaşımımız, 
              müşterilerimize en yüksek kalitede hizmet sunmamızı sağlıyor.
            </p>
            <div className="space-y-6">
              {solutions.map((solution, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-blue-100 text-blue-600">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {solution.title}
                    </h3>
                    <p className="text-gray-600">
                      {solution.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Placeholder */}
          <div className="hidden md:block">
            <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl p-8 h-full min-h-[500px] flex items-center justify-center shadow-xl">
              <div className="text-center">
                <div className="w-40 h-40 bg-blue-300 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <svg className="w-20 h-20 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="text-blue-700 font-semibold text-lg">Güvenilir Çözümler</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;

