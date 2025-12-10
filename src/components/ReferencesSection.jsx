const ReferencesSection = () => {
  // Placeholder logos - gerçek projede buraya gerçek logo görselleri eklenir
  const references = Array.from({ length: 8 }, (_, i) => ({
    id: i + 1,
    name: `Müşteri ${i + 1}`,
  }));

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Referanslarımız
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Türkiye'nin önde gelen kurumlarına hizmet vermekten gurur duyuyoruz
          </p>
        </div>

        {/* Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {references.map((reference) => (
            <div
              key={reference.id}
              className="bg-gray-50 border border-gray-200 rounded-lg p-6 md:p-8 h-32 md:h-40 flex items-center justify-center hover:shadow-md transition-shadow duration-300"
            >
              <div className="text-center">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-blue-200 rounded-lg mx-auto mb-2 flex items-center justify-center">
                  <span className="text-blue-700 font-bold text-xl md:text-2xl">
                    {reference.name.charAt(reference.name.length - 1)}
                  </span>
                </div>
                <p className="text-xs md:text-sm text-gray-600 font-medium">
                  {reference.name}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonial */}
        <div className="mt-16 md:mt-20 bg-blue-50 rounded-2xl p-8 md:p-12">
          <div className="max-w-4xl mx-auto text-center">
            <svg className="w-12 h-12 text-blue-600 mx-auto mb-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <p className="text-lg md:text-xl text-gray-700 mb-6 italic leading-relaxed">
              "ProAsist ile çalışmaya başladığımızdan beri teknik sorunlarımız minimuma indi. 
              Profesyonel yaklaşımları ve hızlı müdahale yetenekleri sayesinde işletmemiz kesintisiz çalışıyor."
            </p>
            <div className="flex items-center justify-center">
              <div className="w-12 h-12 bg-blue-300 rounded-full mr-4 flex items-center justify-center">
                <span className="text-blue-700 font-bold">MK</span>
              </div>
              <div className="text-left">
                <p className="font-semibold text-gray-900">Mehmet Kaya</p>
                <p className="text-sm text-gray-600">Genel Müdür, Örnek Şirket A.Ş.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReferencesSection;

