const AboutSection = () => {
  return (
    <>
      {/* Main Content Section */}
      <section id="about" className="py-16 md:py-24 bg-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-8 leading-tight">
              ProAsist Demek "<strong>Yaşayan Şirket</strong>" Demektir
            </h2>
            
            <div className="space-y-6 text-lg md:text-xl text-gray-700 leading-relaxed text-left">
              <p>
                Biz, sıradan bir teknik hizmet firması değiliz.<br />
                Müşterilerimizin elektrikle ilgili sorunlarına çözüm getirmek için yola çıktık, elektrik uzmanlığımıza, mekanik yetkinliğimizi ve empati yeteneğimizi de ekleyerek, yüzlerce firmanın, her gün, yaşamını mümkün kılan kesintisiz bir güç kaynağına dönüştük.
              </p>
              
              <p>
                ProAsist'te biz…<br />
                Şirketlerin de insanlar gibi 'yaşayan organizmalar' olduğuna inanırız.<br />
                Tıpkı insanlar gibi, yaşadıkça ürettiklerini, katkı sağladıklarını, zamanla yorgun düşüp yıprandıklarında ise yaşamlarını sürdürebilmeleri için, bağışıklık sistemlerinin güçlendirilmeleri gerektiğini iyi biliriz.
              </p>
              
              <p>
                Çünkü, "Yaşayan Şirket" demek… iş demek, üretim demek, istihdam, inovasyon, verimlilik, enerji, gelişim ve dinamizm demek…
              </p>
              
              <p>
                "Yaşayan Şirket" demek… emek demek, kazanç demek, gelecek demek, gelişen bir sektör ve büyüyen bir ekonomi demek…
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Orange Bar Separator */}
      <div className="h-20 md:h-24 bg-orange-500 w-full"></div>
    </>
  );
};

export default AboutSection;
