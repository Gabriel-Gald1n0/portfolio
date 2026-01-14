import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import type { Language } from "../data/translations";

interface HeaderProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export function Header({ activeSection, onNavigate }: HeaderProps) {
  const { language, setLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);

  const handleNavigate = (sectionId: string) => {
    onNavigate(sectionId);
    setMobileMenuOpen(false);
  };

  const handleLanguageSelect = (lang: Language) => {
    setLanguage(lang);
    setLanguageDropdownOpen(false);
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-[#2a2a2a] border-b-4 border-[#d4af37]"
      style={{ boxShadow: "0 4px 0 #1a1a1a, 0 8px 0 #d4af37" }}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div
              className="w-8 h-8 bg-[#8b0000] border-2 border-[#d4af37]"
              style={{ imageRendering: "pixelated" }}
            >
              <div className="w-full h-full flex items-center justify-center text-[#d4af37] text-sm">
                ⚔️
              </div>
            </div>
            <span className="text-[#d4af37] text-[10px] md:text-[12px]">{t.logo}</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <ul className="flex gap-6 text-xs">
              <li>
                <button
                  onClick={() => onNavigate("home")}
                  className={`hover:text-[#d4af37] transition-colors ${
                    activeSection === "home"
                      ? "text-[#d4af37]"
                      : "text-[#e8d4a0]"
                  }`}
                >
                  {t.nav.home}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("about")}
                  className={`hover:text-[#d4af37] transition-colors ${
                    activeSection === "about"
                      ? "text-[#d4af37]"
                      : "text-[#e8d4a0]"
                  }`}
                >
                  {t.nav.stats}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("projects")}
                  className={`hover:text-[#d4af37] transition-colors ${
                    activeSection === "projects"
                      ? "text-[#d4af37]"
                      : "text-[#e8d4a0]"
                  }`}
                >
                  {t.nav.quests}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("contact")}
                  className={`hover:text-[#d4af37] transition-colors ${
                    activeSection === "contact"
                      ? "text-[#d4af37]"
                      : "text-[#e8d4a0]"
                  }`}
                >
                  {t.nav.contact}
                </button>
              </li>
            </ul>

            {/* Desktop Language Dropdown */}
            <div className="relative border-l-2 border-[#4a4a4a] pl-4">
              <button
                onClick={() => setLanguageDropdownOpen(!languageDropdownOpen)}
                className="flex items-center gap-2 px-3 py-2 bg-[#1a1a1a] border-2 border-[#d4af37] text-[#e8d4a0] text-xs hover:bg-[#2a2a2a] transition-all"
                style={{ imageRendering: "pixelated" }}
              >
                <span>{language}</span>
                <span className="text-[8px]">▼</span>
              </button>
              {languageDropdownOpen && (
                <div
                  className="absolute top-full right-0 mt-2 bg-[#1a1a1a] border-4 border-[#d4af37] min-w-[80px]"
                  style={{ boxShadow: "4px 4px 0 #000" }}
                >
                  <button
                    onClick={() => handleLanguageSelect("PT")}
                    className={`w-full px-4 py-2 text-xs text-left hover:bg-[#d4af37] hover:text-[#1a1a1a] transition-colors ${
                      language === "PT"
                        ? "bg-[#8b0000] text-[#d4af37]"
                        : "text-[#e8d4a0]"
                    }`}
                  >
                    PT
                  </button>
                  <button
                    onClick={() => handleLanguageSelect("EN")}
                    className={`w-full px-4 py-2 text-xs text-left hover:bg-[#d4af37] hover:text-[#1a1a1a] transition-colors border-t-2 border-[#4a4a4a] ${
                      language === "EN"
                        ? "bg-[#8b0000] text-[#d4af37]"
                        : "text-[#e8d4a0]"
                    }`}
                  >
                    EN
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Controls */}
          <div className="flex md:hidden items-center gap-3">
            {/* Mobile Language Dropdown */}
            <div className="relative">
              <button
                onClick={() => setLanguageDropdownOpen(!languageDropdownOpen)}
                className="flex items-center gap-1 px-2 py-1 bg-[#1a1a1a] border-2 border-[#d4af37] text-[#e8d4a0] text-[8px]"
                style={{ imageRendering: "pixelated" }}
              >
                <span>{language}</span>
                <span className="text-[6px]">▼</span>
              </button>
              {languageDropdownOpen && (
                <div
                  className="absolute top-full right-0 mt-2 bg-[#1a1a1a] border-4 border-[#d4af37] min-w-[60px] z-50"
                  style={{ boxShadow: "4px 4px 0 #000" }}
                >
                  <button
                    onClick={() => handleLanguageSelect("PT")}
                    className={`w-full px-3 py-2 text-[8px] text-left hover:bg-[#d4af37] hover:text-[#1a1a1a] transition-colors ${
                      language === "PT"
                        ? "bg-[#8b0000] text-[#d4af37]"
                        : "text-[#e8d4a0]"
                    }`}
                  >
                    PT
                  </button>
                  <button
                    onClick={() => handleLanguageSelect("EN")}
                    className={`w-full px-3 py-2 text-[8px] text-left hover:bg-[#d4af37] hover:text-[#1a1a1a] transition-colors border-t-2 border-[#4a4a4a] ${
                      language === "EN"
                        ? "bg-[#8b0000] text-[#d4af37]"
                        : "text-[#e8d4a0]"
                    }`}
                  >
                    EN
                  </button>
                </div>
              )}
            </div>

            {/* Hamburger Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-10 h-10 bg-[#1a1a1a] border-2 border-[#d4af37] flex flex-col items-center justify-center gap-1 hover:bg-[#d4af37] group transition-all"
              style={{ imageRendering: "pixelated" }}
              aria-label="Toggle menu"
            >
              <div className="w-5 h-0.5 bg-[#d4af37] group-hover:bg-[#1a1a1a] transition-colors"></div>
              <div className="w-5 h-0.5 bg-[#d4af37] group-hover:bg-[#1a1a1a] transition-colors"></div>
              <div className="w-5 h-0.5 bg-[#d4af37] group-hover:bg-[#1a1a1a] transition-colors"></div>
            </button>
          </div>
        </div>

        {/* Mobile Menu - Expanded State */}
        {mobileMenuOpen && (
          <div
            className="md:hidden mt-4 bg-[#1a1a1a] border-4 border-[#d4af37] p-4"
            style={{ boxShadow: "6px 6px 0 #000" }}
          >
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => handleNavigate("home")}
                  className={`w-full text-left px-4 py-3 border-2 transition-all text-xs ${
                    activeSection === "home"
                      ? "bg-[#d4af37] text-[#1a1a1a] border-[#d4af37]"
                      : "bg-[#2a2a2a] text-[#e8d4a0] border-[#4a4a4a] hover:border-[#d4af37]"
                  }`}
                  style={{ boxShadow: "2px 2px 0 #000" }}
                >
                  ▶ {t.nav.home}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigate("about")}
                  className={`w-full text-left px-4 py-3 border-2 transition-all text-xs ${
                    activeSection === "about"
                      ? "bg-[#d4af37] text-[#1a1a1a] border-[#d4af37]"
                      : "bg-[#2a2a2a] text-[#e8d4a0] border-[#4a4a4a] hover:border-[#d4af37]"
                  }`}
                  style={{ boxShadow: "2px 2px 0 #000" }}
                >
                  ▶ {t.nav.stats}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigate("projects")}
                  className={`w-full text-left px-4 py-3 border-2 transition-all text-xs ${
                    activeSection === "projects"
                      ? "bg-[#d4af37] text-[#1a1a1a] border-[#d4af37]"
                      : "bg-[#2a2a2a] text-[#e8d4a0] border-[#4a4a4a] hover:border-[#d4af37]"
                  }`}
                  style={{ boxShadow: "2px 2px 0 #000" }}
                >
                  ▶ {t.nav.quests}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigate("contact")}
                  className={`w-full text-left px-4 py-3 border-2 transition-all text-xs ${
                    activeSection === "contact"
                      ? "bg-[#d4af37] text-[#1a1a1a] border-[#d4af37]"
                      : "bg-[#2a2a2a] text-[#e8d4a0] border-[#4a4a4a] hover:border-[#d4af37]"
                  }`}
                  style={{ boxShadow: "2px 2px 0 #000" }}
                >
                  ▶ {t.nav.contact}
                </button>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
