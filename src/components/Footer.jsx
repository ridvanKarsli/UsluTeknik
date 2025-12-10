const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'Links',
      links: [
        { name: 'Home', href: '#home' },
        { name: 'About Us', href: '#about' },
        { name: 'Our Vision and Mission', href: '#vision' },
        { name: 'Our Culture And Values', href: '#values' },
        { name: 'Our Promises', href: '#promises' },
        { name: 'Our Team', href: '#team' },
        { name: 'Contact', href: '#contact' },
      ],
    },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 relative overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-4">ProAsist</h3>
            <p className="text-gray-400 mb-6 leading-relaxed text-sm md:text-base">
              ProAsist Elektrik Mekanik Teknik Hizmetler San. ve Tic. A.Ş.<br />
              Sultan Selim Mah. Yunus Emre Caddesi Topçu İş Merkezi No:1 Kat:4 D:10<br />
              34415 4. Levent / Kağıthane / İSTANBUL
            </p>
            <div className="space-y-3 text-sm mb-6">
              <p className="text-gray-400">
                Email: <a href="mailto:info@proasist.com.tr" className="text-white hover:text-purple-400 transition-colors">info@proasist.com.tr</a>
              </p>
              <p className="text-gray-400">
                Phone: <a href="tel:4442890" className="text-white hover:text-purple-400 transition-colors">444 28 90</a>
              </p>
              <p className="text-gray-400">
                For Newsletter <a href="mailto:ebulten@proasist.com.tr" className="text-white hover:text-purple-400 transition-colors">ebulten@proasist.com.tr</a>
              </p>
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section, sectionIndex) => (
            <div key={sectionIndex}>
              <h4 className="text-white font-semibold mb-4 uppercase text-sm tracking-wide">
                {section.title}
              </h4>
              <ul className="space-y-2 text-sm">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} ProAsist - Tüm hakları saklıdır.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
