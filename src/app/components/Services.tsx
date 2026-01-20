import { useLanguage } from "../context/LanguageContext";


export function Services() {
  const { t } = useLanguage();

  const servicesList = [
    {
      icon: "📱", // Mobile
      title: t.services.mobileTitle,
      description: t.services.mobileDesc,
      rpgClass: "Mobile Artificer", 
    },
    {
      icon: "💻", // Web
      title: t.services.webTitle,
      description: t.services.webDesc,
      rpgClass: "Web Weaver",
    },
    {
      icon: "⚙️", // Backend
      title: t.services.backendTitle,
      description: t.services.backendDesc,
      rpgClass: "Logic Sorcerer",
    },
  ];

  return (
    <section
      id="services"
      className="scroll-mt-4 py-20 px-4 bg-[#212121] border-b-4 border-[#d4af37]"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-sm sm:text-lg md:text-2xl text-[#d4af37] mb-4 inline-flex items-center justify-center gap-3 px-3 md:px-6 py-3 bg-[#1a1a1a] border-4 border-[#d4af37] max-w-full">
            <span className="text-base md:text-2xl transform -translate-y-0.5 select-none">
              ⚒️
            </span>
            <span className="text-center whitespace-normal md:whitespace-nowrap">
              {t.services.title}
            </span>
            <span className="text-base md:text-2xl transform -translate-y-0.5 select-none">
              ⚒️
            </span>
          </h2>
          <p className="text-[10px] md:text-xs text-[#e8d4a0] mt-4 opacity-80 uppercase tracking-widest">
            {t.services.subtitle}
          </p>
        </div>

        {/* Grid de Serviços */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 -mt-8">
          {servicesList.map((service, index) => (
            <div
              key={index}
              className="group relative bg-[#1a1a1a] border-4 border-[#4a4a4a] hover:border-[#d4af37] transition-all duration-300 p-8 flex flex-col h-full select-none"
              style={{ boxShadow: "8px 8px 0 #000" }}
            >
              <div className="absolute inset-0 bg-[#d4af37] opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>

              <div className="text-4xl md:text-5xl mb-6 text-center transform group-hover:scale-110 group-hover:-translate-y-2 transition-transform duration-300">
                {service.icon}
              </div>

              <h3 className="text-xs md:text-sm text-[#d4af37] font-bold text-center mb-2 uppercase tracking-wider relative z-10">
                {service.title}
              </h3>

              <div className="w-16 h-1 bg-[#8b0000] mx-auto mb-4 group-hover:w-24 transition-all duration-300"></div>

              <p className="text-[10px] md:text-xs text-[#e8d4a0] leading-relaxed text-center flex-grow relative z-10 opacity-90">
                {service.description}
              </p>

              <div className="mt-6 pt-4 border-t border-[#4a4a4a] text-center">
                <span className="text-[8px] text-[#888] uppercase tracking-widest group-hover:text-[#d4af37] transition-colors">
                  Class: {service.rpgClass}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-block px-8 py-4 bg-[#8b0000] text-[#e8d4a0] text-xs uppercase border-4 border-[#d4af37] hover:bg-[#a00000] hover:scale-105 transition-all cursor-pointer"
            style={{ boxShadow: "4px 4px 0 #000" }}
          >
            {t.services.contractMe}
          </a>
        </div>
      </div>
    </section>
  );
}