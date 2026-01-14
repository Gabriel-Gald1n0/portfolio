import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useLanguage } from "../context/LanguageContext";
import perfilImg from "../assets/GabImg.webp";

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export function Hero({ onNavigate }: HeroProps) {
  const { t } = useLanguage();

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-28 md:pt-20 px-4 relative overflow-hidden bg-[#1a1a1a]"
    >
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1555952208-02e405109112?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdG9uZSUyMGZsb29yJTIwdGV4dHVyZSUyMGRhcmt8ZW58MXx8fHwxNzY4MTAwODI2fDA&ixlib=rb-4.1.0&q=80&w=1080)",
          backgroundSize: "400px 400px",
          backgroundRepeat: "repeat",
          imageRendering: "pixelated",
          filter: "contrast(0.8) brightness(0.6)",
        }}
      ></div>
      <div className="container mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-[#8b0000] border-2 border-[#d4af37] text-[#e8d4a0] text-[8px] mb-4">
              {t.hero.level}
            </div>
            <h1
              className="text-2xl md:text-4xl text-[#e8d4a0] leading-relaxed mb-4"
              style={{ lineHeight: "1.8" }}
            >
              {t.hero.title}
            </h1>
            <p className="text-[10px] md:text-xs text-[#e8d4a0] leading-loose opacity-90">
              {t.hero.description}
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <button
                onClick={() => onNavigate("projects")}
                className="px-6 py-3 bg-[#d4af37] text-[#1a1a1a] border-4 border-[#1a1a1a] hover:bg-[#e8d4a0] transition-all text-[9px] uppercase"
                style={{ boxShadow: "4px 4px 0 #852828" }}
              >
                {t.hero.viewQuests}
              </button>
              <button
                onClick={() => onNavigate("contact")}
                className="px-6 py-3 bg-[#8b0000] text-[#e8d4a0] border-4 border-[#d4af37] hover:bg-[#a00000] transition-all text-[9px] uppercase"
                style={{ boxShadow: "4px 4px 0 #af9644" }}
              >
                {t.hero.hireMe}
              </button>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-[#2a2a2a] text-[#d4af37] border-4 border-[#d4af37] hover:bg-[#3a3a3a] hover:text-[#e8d4a0] transition-all text-[9px] uppercase flex items-center justify-center"
                style={{ boxShadow: "4px 4px 0 #5e5d5d" }}
              >
                {t.hero.curriculum}
              </a>
            </div>
          </div>
          <div className="flex justify-center mt-12 mb-16 md:my-0">
            <div className="relative">
              <div className="absolute -inset-4 bg-[#d4af37] opacity-20 blur-xl animate-pulse"></div>
              <div
                className="absolute -inset-2 bg-[#8b0000] opacity-30 blur-lg animate-pulse"
                style={{ animationDelay: "0.5s" }}
              ></div>
              <ImageWithFallback
                src={perfilImg}
                alt="Developer Portrait"
                className="w-full max-w-md border-8 border-[#d4af37] relative z-10 aspect-square object-cover object-top"
                style={{
                  imageRendering: "auto",
                  objectPosition: "center 20%",
                  boxShadow:
                    "0 0 40px rgba(139, 0, 0, 0.8), 0 0 80px rgba(212, 175, 55, 0.4), inset 0 0 20px rgba(212, 175, 55, 0.2)",
                  filter:
                    "drop-shadow(0 0 10px rgba(139, 0, 0, 0.9)) contrast(1.1) saturate(0.9)",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}