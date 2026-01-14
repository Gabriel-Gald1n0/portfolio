import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useLanguage } from "../context/LanguageContext";
import { skills } from "../data/content";
import avatarPixelArt from "../assets/avatarPixelArt.webp";

export function Skills() {
  const { t } = useLanguage();

  return (
    <section
      id="about"
      className="py-20 px-4 bg-[#2a2a2a] border-y-4 border-[#d4af37]"
    >
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-xl md:text-2xl text-[#d4af37] mb-4 inline-block px-6 py-3 bg-[#1a1a1a] border-4 border-[#d4af37]">
            {t.skills.title}
          </h2>
          <p className="text-[10px] md:text-xs text-[#e8d4a0] mt-4 opacity-80">
            {t.skills.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Skills Grid - Left Side */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-[#1a1a1a] border-4 border-[#4a4a4a] p-4 hover:border-[#d4af37] transition-all group"
                  style={{ boxShadow: "4px 4px 0 #000" }}
                >
                  <div className="text-center space-y-2">
                    <div className="text-3xl mb-2">{skill.icon}</div>
                    <div className="text-[8px] text-[#e8d4a0] uppercase break-words">
                      {skill.name}
                    </div>
                    <div className="flex items-center justify-center gap-1 mt-2">
                      <div className="text-[8px] text-[#d4af37]">
                        LVL {skill.level}
                      </div>
                    </div>
                    <div className="w-full bg-[#4a4a4a] h-2 border border-[#d4af37]">
                      <div
                        className="h-full bg-[#d4af37]"
                        style={{ width: `${(skill.level / 20) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 bg-[#1a1a1a] border-4 border-[#8b0000] p-6">
              <h3 className="text-xs md:text-sm text-[#d4af37] mb-4">
                {t.skills.characterSheet}
              </h3>
              <div className="space-y-3 text-[8px] md:text-[10px] text-[#e8d4a0]">
                <div className="flex justify-between border-b border-[#4a4a4a] pb-2">
                  <span>{t.skills.class}</span>
                  <span className="text-[#d4af37]">{t.skills.classValue}</span>
                </div>
                <div className="flex justify-between border-b border-[#4a4a4a] pb-2">
                  <span>{t.skills.specialization}</span>
                  <span className="text-[#d4af37]">
                    {t.skills.specializationValue}
                  </span>
                </div>
                <div className="flex justify-between border-b border-[#4a4a4a] pb-2">
                  <span>{t.skills.experience}</span>
                  <span className="text-[#d4af37]">
                    {t.skills.experienceValue}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>{t.skills.alignment}</span>
                  <span className="text-[#d4af37]">
                    {t.skills.alignmentValue}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* About Me Panel - Right Side */}
          <div className="lg:col-span-1">
            <div
              className="bg-[#1a1a1a] border-4 border-[#d4af37] p-6 h-full"
              style={{ boxShadow: "6px 6px 0 #000" }}
            >
              <h3 className="text-xs md:text-sm text-[#d4af37] mb-6 text-center border-b-2 border-[#d4af37] pb-3">
                {t.about.title}
              </h3>

              {/* RPG Avatar */}
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <div className="absolute -inset-2 bg-[#d4af37] opacity-30 blur-md"></div>
                  <ImageWithFallback
                    src={avatarPixelArt}
                    alt="RPG Character Avatar"
                    className="w-48 h-49 border-4 border-[#d4af37] relative z-10 object-cover"
                    style={{
                      imageRendering: "pixelated",
                      boxShadow: "0 0 20px rgba(212, 175, 55, 0.5)",
                    }}
                  />
                </div>
              </div>

              {/* About Me Text */}
              <div className="space-y-4">
                <div className="bg-[#2a2a2a] border-2 border-[#8b0000] p-4">
                  <p className="text-[8px] md:text-[10px] text-[#e8d4a0] leading-relaxed">
                    {t.about.text1}
                  </p>
                </div>

                <div className="bg-[#2a2a2a] border-2 border-[#8b0000] p-4">
                  <p className="text-[8px] md:text-[10px] text-[#e8d4a0] leading-relaxed">
                    {t.about.text2}
                  </p>
                </div>

                <div className="bg-[#2a2a2a] border-2 border-[#8b0000] p-4">
                  <p className="text-[8px] md:text-[10px] text-[#e8d4a0] leading-relaxed">
                    {t.about.text3}
                  </p>
                </div>

                {/* Stats Badge */}
                <div className="mt-4 flex items-center justify-center gap-3">
                  <div className="bg-[#8b0000] border-2 border-[#d4af37] px-3 py-2 text-center">
                    <div className="text-[8px] text-[#d4af37]">HP</div>
                    <div className="text-xs text-[#e8d4a0]">999</div>
                  </div>
                  <div className="bg-[#8b0000] border-2 border-[#d4af37] px-3 py-2 text-center">
                    <div className="text-[8px] text-[#d4af37]">MP</div>
                    <div className="text-xs text-[#e8d4a0]">999</div>
                  </div>
                  <div className="bg-[#8b0000] border-2 border-[#d4af37] px-3 py-2 text-center">
                    <div className="text-[8px] text-[#d4af37]">STR</div>
                    <div className="text-xs text-[#e8d4a0]">99</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
