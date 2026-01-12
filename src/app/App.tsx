import { useState } from 'react';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import { Scroll, Sword, Shield, Wand2, Beaker, Book, Github, Linkedin, Twitter, Mail, Globe } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [language, setLanguage] = useState<'EN' | 'PT'>('EN');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);

  const skills = [
    { name: 'React', icon: '⚔️', level: 18, type: 'weapon' },
    { name: 'JavaScript', icon: '📜', level: 20, type: 'scroll' },
    { name: 'TypeScript', icon: '🛡️', level: 16, type: 'armor' },
    { name: 'Node.js', icon: '🧪', level: 15, type: 'potion' },
    { name: 'CSS/Tailwind', icon: '✨', level: 17, type: 'spell' },
    { name: 'Git', icon: '🗡️', level: 19, type: 'weapon' },
    { name: 'Python', icon: '📖', level: 14, type: 'book' },
    { name: 'SQL', icon: '💎', level: 13, type: 'gem' },
  ];

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A fully functional shopping cart with payment integration. Built with React and Stripe API.',
      difficulty: 'Hard',
      reward: '500 XP',
      imageUrl: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=400',
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Kanban-style board with drag-and-drop. Real-time updates with WebSocket.',
      difficulty: 'Medium',
      reward: '300 XP',
      imageUrl: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=400',
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'Real-time weather data with interactive maps and forecasts. API integration practice.',
      difficulty: 'Easy',
      reward: '150 XP',
      imageUrl: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=400',
    },
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    setMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLanguageSelect = (lang: 'EN' | 'PT') => {
    setLanguage(lang);
    setLanguageDropdownOpen(false);
  };

  return (
    <div className="min-h-screen dark" style={{ fontFamily: "'Press Start 2P', cursive" }}>
      {/* Header - RPG HUD Style */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#2a2a2a] border-b-4 border-[#d4af37]" style={{ boxShadow: '0 4px 0 #1a1a1a, 0 8px 0 #d4af37' }}>
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#8b0000] border-2 border-[#d4af37]" style={{ imageRendering: 'pixelated' }}>
                <div className="w-full h-full flex items-center justify-center text-[#d4af37] text-xs">⚔️</div>
              </div>
              <span className="text-[#d4af37] text-xs md:text-sm">DEV.HERO</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              <ul className="flex gap-6 text-xs">
                <li>
                  <button
                    onClick={() => scrollToSection('home')}
                    className={`hover:text-[#d4af37] transition-colors ${activeSection === 'home' ? 'text-[#d4af37]' : 'text-[#e8d4a0]'}`}
                  >
                    HOME
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('about')}
                    className={`hover:text-[#d4af37] transition-colors ${activeSection === 'about' ? 'text-[#d4af37]' : 'text-[#e8d4a0]'}`}
                  >
                    STATS
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('projects')}
                    className={`hover:text-[#d4af37] transition-colors ${activeSection === 'projects' ? 'text-[#d4af37]' : 'text-[#e8d4a0]'}`}
                  >
                    QUESTS
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('contact')}
                    className={`hover:text-[#d4af37] transition-colors ${activeSection === 'contact' ? 'text-[#d4af37]' : 'text-[#e8d4a0]'}`}
                  >
                    CONTACT
                  </button>
                </li>
              </ul>

              {/* Desktop Language Dropdown */}
              <div className="relative border-l-2 border-[#4a4a4a] pl-4">
                <button
                  onClick={() => setLanguageDropdownOpen(!languageDropdownOpen)}
                  className="flex items-center gap-2 px-3 py-2 bg-[#1a1a1a] border-2 border-[#d4af37] text-[#e8d4a0] text-xs hover:bg-[#2a2a2a] transition-all"
                  style={{ imageRendering: 'pixelated' }}
                >
                  <span>{language}</span>
                  <span className="text-[8px]">▼</span>
                </button>
                {languageDropdownOpen && (
                  <div className="absolute top-full right-0 mt-2 bg-[#1a1a1a] border-4 border-[#d4af37] min-w-[80px]" style={{ boxShadow: '4px 4px 0 #000' }}>
                    <button
                      onClick={() => handleLanguageSelect('EN')}
                      className={`w-full px-4 py-2 text-xs text-left hover:bg-[#d4af37] hover:text-[#1a1a1a] transition-colors ${
                        language === 'EN' ? 'bg-[#8b0000] text-[#d4af37]' : 'text-[#e8d4a0]'
                      }`}
                    >
                      EN
                    </button>
                    <button
                      onClick={() => handleLanguageSelect('PT')}
                      className={`w-full px-4 py-2 text-xs text-left hover:bg-[#d4af37] hover:text-[#1a1a1a] transition-colors border-t-2 border-[#4a4a4a] ${
                        language === 'PT' ? 'bg-[#8b0000] text-[#d4af37]' : 'text-[#e8d4a0]'
                      }`}
                    >
                      PT
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
                  style={{ imageRendering: 'pixelated' }}
                >
                  <span>{language}</span>
                  <span className="text-[6px]">▼</span>
                </button>
                {languageDropdownOpen && (
                  <div className="absolute top-full right-0 mt-2 bg-[#1a1a1a] border-4 border-[#d4af37] min-w-[60px] z-50" style={{ boxShadow: '4px 4px 0 #000' }}>
                    <button
                      onClick={() => handleLanguageSelect('EN')}
                      className={`w-full px-3 py-2 text-[8px] text-left hover:bg-[#d4af37] hover:text-[#1a1a1a] transition-colors ${
                        language === 'EN' ? 'bg-[#8b0000] text-[#d4af37]' : 'text-[#e8d4a0]'
                      }`}
                    >
                      EN
                    </button>
                    <button
                      onClick={() => handleLanguageSelect('PT')}
                      className={`w-full px-3 py-2 text-[8px] text-left hover:bg-[#d4af37] hover:text-[#1a1a1a] transition-colors border-t-2 border-[#4a4a4a] ${
                        language === 'PT' ? 'bg-[#8b0000] text-[#d4af37]' : 'text-[#e8d4a0]'
                      }`}
                    >
                      PT
                    </button>
                  </div>
                )}
              </div>

              {/* Hamburger Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="w-10 h-10 bg-[#1a1a1a] border-2 border-[#d4af37] flex flex-col items-center justify-center gap-1 hover:bg-[#d4af37] group transition-all"
                style={{ imageRendering: 'pixelated' }}
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
            <div className="md:hidden mt-4 bg-[#1a1a1a] border-4 border-[#d4af37] p-4" style={{ boxShadow: '6px 6px 0 #000' }}>
              <ul className="space-y-3">
                <li>
                  <button
                    onClick={() => scrollToSection('home')}
                    className={`w-full text-left px-4 py-3 border-2 transition-all text-xs ${
                      activeSection === 'home'
                        ? 'bg-[#d4af37] text-[#1a1a1a] border-[#d4af37]'
                        : 'bg-[#2a2a2a] text-[#e8d4a0] border-[#4a4a4a] hover:border-[#d4af37]'
                    }`}
                    style={{ boxShadow: '2px 2px 0 #000' }}
                  >
                    ▶ HOME
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('about')}
                    className={`w-full text-left px-4 py-3 border-2 transition-all text-xs ${
                      activeSection === 'about'
                        ? 'bg-[#d4af37] text-[#1a1a1a] border-[#d4af37]'
                        : 'bg-[#2a2a2a] text-[#e8d4a0] border-[#4a4a4a] hover:border-[#d4af37]'
                    }`}
                    style={{ boxShadow: '2px 2px 0 #000' }}
                  >
                    ▶ STATS
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('projects')}
                    className={`w-full text-left px-4 py-3 border-2 transition-all text-xs ${
                      activeSection === 'projects'
                        ? 'bg-[#d4af37] text-[#1a1a1a] border-[#d4af37]'
                        : 'bg-[#2a2a2a] text-[#e8d4a0] border-[#4a4a4a] hover:border-[#d4af37]'
                    }`}
                    style={{ boxShadow: '2px 2px 0 #000' }}
                  >
                    ▶ QUESTS
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('contact')}
                    className={`w-full text-left px-4 py-3 border-2 transition-all text-xs ${
                      activeSection === 'contact'
                        ? 'bg-[#d4af37] text-[#1a1a1a] border-[#d4af37]'
                        : 'bg-[#2a2a2a] text-[#e8d4a0] border-[#4a4a4a] hover:border-[#d4af37]'
                    }`}
                    style={{ boxShadow: '2px 2px 0 #000' }}
                  >
                    ▶ CONTACT
                  </button>
                </li>
              </ul>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4 relative overflow-hidden bg-[#1a1a1a]">
        <div 
          className="absolute inset-0 opacity-20" 
          style={{ 
            backgroundImage: 'url(https://images.unsplash.com/photo-1555952208-02e405109112?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdG9uZSUyMGZsb29yJTIwdGV4dHVyZSUyMGRhcmt8ZW58MXx8fHwxNzY4MTAwODI2fDA&ixlib=rb-4.1.0&q=80&w=1080)',
            backgroundSize: '400px 400px',
            backgroundRepeat: 'repeat',
            imageRendering: 'pixelated',
            filter: 'contrast(0.8) brightness(0.6)'
          }}
        ></div>
        
        <div className="container mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-[#8b0000] border-2 border-[#d4af37] text-[#e8d4a0] text-[8px] mb-4">
                LVL 99 DEVELOPER
              </div>
              <h1 className="text-2xl md:text-4xl text-[#e8d4a0] leading-relaxed mb-4" style={{ lineHeight: '1.8' }}>
                WELCOME, ADVENTURER
              </h1>
              <p className="text-[10px] md:text-xs text-[#e8d4a0] leading-loose opacity-90">
                I am a full-stack developer specializing in creating epic web experiences. My quest is to build legendary applications that solve real-world problems.
              </p>
              <div className="flex gap-4 pt-4">
                <button 
                  onClick={() => scrollToSection('projects')}
                  className="px-6 py-3 bg-[#d4af37] text-[#1a1a1a] border-4 border-[#1a1a1a] hover:bg-[#e8d4a0] transition-all text-[10px] uppercase"
                  style={{ boxShadow: '4px 4px 0 #8b0000' }}
                >
                  View Quests
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="px-6 py-3 bg-[#8b0000] text-[#e8d4a0] border-4 border-[#d4af37] hover:bg-[#a00000] transition-all text-[10px] uppercase"
                  style={{ boxShadow: '4px 4px 0 #d4af37' }}
                >
                  Hire Me
                </button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-[#d4af37] opacity-20 blur-xl animate-pulse"></div>
                <div className="absolute -inset-2 bg-[#8b0000] opacity-30 blur-lg animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1737575655055-e3967cbefd03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZXZlbG9wZXIlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjgwODQ1NjJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Developer Portrait"
                  className="w-full max-w-md border-8 border-[#d4af37] relative z-10 aspect-square object-cover"
                  style={{ 
                    imageRendering: 'auto',
                    boxShadow: '0 0 40px rgba(139, 0, 0, 0.8), 0 0 80px rgba(212, 175, 55, 0.4), inset 0 0 20px rgba(212, 175, 55, 0.2)',
                    filter: 'drop-shadow(0 0 10px rgba(139, 0, 0, 0.9)) contrast(1.1) saturate(0.9)'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section - Inventory System */}
      <section id="about" className="py-20 px-4 bg-[#2a2a2a] border-y-4 border-[#d4af37]">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-xl md:text-2xl text-[#d4af37] mb-4 inline-block px-6 py-3 bg-[#1a1a1a] border-4 border-[#d4af37]">
              ⚔️ INVENTORY ⚔️
            </h2>
            <p className="text-[10px] md:text-xs text-[#e8d4a0] mt-4 opacity-80">
              My Arsenal of Skills & Technologies
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
                    style={{ boxShadow: '4px 4px 0 #000' }}
                  >
                    <div className="text-center space-y-2">
                      <div className="text-3xl mb-2">{skill.icon}</div>
                      <div className="text-[8px] text-[#e8d4a0] uppercase break-words">{skill.name}</div>
                      <div className="flex items-center justify-center gap-1 mt-2">
                        <div className="text-[8px] text-[#d4af37]">LVL {skill.level}</div>
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
                <h3 className="text-xs md:text-sm text-[#d4af37] mb-4">📜 CHARACTER SHEET</h3>
                <div className="space-y-3 text-[8px] md:text-[10px] text-[#e8d4a0]">
                  <div className="flex justify-between border-b border-[#4a4a4a] pb-2">
                    <span>CLASS:</span>
                    <span className="text-[#d4af37]">Full-Stack Developer</span>
                  </div>
                  <div className="flex justify-between border-b border-[#4a4a4a] pb-2">
                    <span>SPECIALIZATION:</span>
                    <span className="text-[#d4af37]">Frontend Magic</span>
                  </div>
                  <div className="flex justify-between border-b border-[#4a4a4a] pb-2">
                    <span>EXPERIENCE:</span>
                    <span className="text-[#d4af37]">5+ Years</span>
                  </div>
                  <div className="flex justify-between">
                    <span>ALIGNMENT:</span>
                    <span className="text-[#d4af37]">Chaotic Good</span>
                  </div>
                </div>
              </div>
            </div>

            {/* About Me Panel - Right Side */}
            <div className="lg:col-span-1">
              <div className="bg-[#1a1a1a] border-4 border-[#d4af37] p-6 h-full" style={{ boxShadow: '6px 6px 0 #000' }}>
                <h3 className="text-xs md:text-sm text-[#d4af37] mb-6 text-center border-b-2 border-[#d4af37] pb-3">
                  👤 ABOUT ME 👤
                </h3>
                
                {/* RPG Avatar */}
                <div className="flex justify-center mb-6">
                  <div className="relative">
                    <div className="absolute -inset-2 bg-[#d4af37] opacity-30 blur-md"></div>
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1635110002600-d4bc5138dfa8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaXhlbCUyMGFydCUyMGNoYXJhY3RlciUyMGF2YXRhcnxlbnwxfHx8fDE3NjgxMDIwNjV8MA&ixlib=rb-4.1.0&q=80&w=1080"
                      alt="RPG Character Avatar"
                      className="w-48 h-48 border-4 border-[#d4af37] relative z-10 object-cover"
                      style={{ 
                        imageRendering: 'pixelated',
                        boxShadow: '0 0 20px rgba(212, 175, 55, 0.5)'
                      }}
                    />
                  </div>
                </div>

                {/* About Me Text */}
                <div className="space-y-4">
                  <div className="bg-[#2a2a2a] border-2 border-[#8b0000] p-4">
                    <p className="text-[8px] md:text-[10px] text-[#e8d4a0] leading-relaxed">
                      A seasoned traveler of the code realms, seeking legendary bugs to vanquish and epic systems to build.
                    </p>
                  </div>
                  
                  <div className="bg-[#2a2a2a] border-2 border-[#8b0000] p-4">
                    <p className="text-[8px] md:text-[10px] text-[#e8d4a0] leading-relaxed">
                      Fluent in the ancient tongues of Java and Python, with a knack for weaving frontend magic that enchants users across the digital kingdoms.
                    </p>
                  </div>

                  <div className="bg-[#2a2a2a] border-2 border-[#8b0000] p-4">
                    <p className="text-[8px] md:text-[10px] text-[#e8d4a0] leading-relaxed">
                      Forged in the fires of countless deploys, wielding the sacred frameworks of React and Node.js to craft experiences worthy of legend.
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

      {/* Projects Section - Quest Board */}
      <section id="projects" className="py-20 px-4 bg-[#1a1a1a] relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-10" 
          style={{ 
            backgroundImage: 'url(https://images.unsplash.com/photo-1555952208-02e405109112?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdG9uZSUyMGZsb29yJTIwdGV4dHVyZSUyMGRhcmt8ZW58MXx8fHwxNzY4MTAwODI2fDA&ixlib=rb-4.1.0&q=80&w=1080)',
            backgroundSize: '300px 300px',
            backgroundRepeat: 'repeat',
            imageRendering: 'pixelated'
          }}
        ></div>
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-xl md:text-2xl text-[#d4af37] mb-4 inline-block px-6 py-3 bg-[#2a2a2a] border-4 border-[#d4af37]">
              📋 QUEST LOG 📋
            </h2>
            <p className="text-[10px] md:text-xs text-[#e8d4a0] mt-4 opacity-80">
              Completed Missions & Adventures
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-[#2a2a2a] border-4 border-[#4a4a4a] hover:border-[#d4af37] transition-all group"
                style={{ boxShadow: '6px 6px 0 #000' }}
              >
                <div className="aspect-video bg-[#1a1a1a] border-b-4 border-[#4a4a4a] overflow-hidden">
                  <ImageWithFallback
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    style={{ imageRendering: 'auto' }}
                  />
                </div>
                <div className="p-4 space-y-3">
                  <div className="flex justify-between items-start gap-2">
                    <h3 className="text-[10px] md:text-xs text-[#e8d4a0] uppercase">{project.title}</h3>
                    <span className={`text-[8px] px-2 py-1 border-2 whitespace-nowrap ${
                      project.difficulty === 'Hard' 
                        ? 'bg-[#8b0000] border-[#d4af37] text-[#d4af37]'
                        : project.difficulty === 'Medium'
                        ? 'bg-[#d4af37] border-[#1a1a1a] text-[#1a1a1a]'
                        : 'bg-[#4a4a4a] border-[#e8d4a0] text-[#e8d4a0]'
                    }`}>
                      {project.difficulty}
                    </span>
                  </div>
                  <p className="text-[8px] md:text-[10px] text-[#e8d4a0] opacity-80 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex justify-between items-center pt-2 border-t-2 border-[#4a4a4a]">
                    <span className="text-[8px] text-[#d4af37]">⭐ {project.reward}</span>
                    <button className="px-4 py-2 bg-[#d4af37] text-[#1a1a1a] border-2 border-[#1a1a1a] hover:bg-[#e8d4a0] transition-all text-[8px] uppercase">
                      View Quest
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-[#2a2a2a] border-t-4 border-[#d4af37]">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="text-xl md:text-2xl text-[#d4af37] mb-4 inline-block px-6 py-3 bg-[#1a1a1a] border-4 border-[#d4af37]">
              ✉️ SEND MESSAGE ✉️
            </h2>
            <p className="text-[10px] md:text-xs text-[#e8d4a0] mt-4 opacity-80">
              Summon me for your next quest
            </p>
          </div>

          <div className="bg-[#1a1a1a] border-4 border-[#8b0000] p-8">
            <form className="space-y-6">
              <div>
                <label className="block text-[10px] text-[#d4af37] mb-2 uppercase">Your Name:</label>
                <input
                  type="text"
                  className="w-full bg-[#2a2a2a] border-2 border-[#4a4a4a] text-[#e8d4a0] px-4 py-3 text-xs focus:border-[#d4af37] focus:outline-none"
                  placeholder="Enter your name..."
                />
              </div>
              <div>
                <label className="block text-[10px] text-[#d4af37] mb-2 uppercase">Your Email:</label>
                <input
                  type="email"
                  className="w-full bg-[#2a2a2a] border-2 border-[#4a4a4a] text-[#e8d4a0] px-4 py-3 text-xs focus:border-[#d4af37] focus:outline-none"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-[10px] text-[#d4af37] mb-2 uppercase">Quest Details:</label>
                <textarea
                  rows={6}
                  className="w-full bg-[#2a2a2a] border-2 border-[#4a4a4a] text-[#e8d4a0] px-4 py-3 text-xs focus:border-[#d4af37] focus:outline-none resize-none"
                  placeholder="Describe your project..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-6 py-4 bg-[#d4af37] text-[#1a1a1a] border-4 border-[#1a1a1a] hover:bg-[#e8d4a0] transition-all text-xs uppercase"
                style={{ boxShadow: '6px 6px 0 #8b0000' }}
              >
                Submit Quest
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a1a1a] border-t-4 border-[#d4af37] py-12 px-4 relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20" 
          style={{ 
            backgroundImage: 'url(https://images.unsplash.com/photo-1555952208-02e405109112?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdG9uZSUyMGZsb29yJTIwdGV4dHVyZSUyMGRhcmt8ZW58MXx8fHwxNzY4MTAwODI2fDA&ixlib=rb-4.1.0&q=80&w=1080)',
            backgroundSize: '250px 250px',
            backgroundRepeat: 'repeat',
            imageRendering: 'pixelated',
            filter: 'grayscale(0.3)'
          }}
        ></div>
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-8">
            <h3 className="text-xs md:text-sm text-[#d4af37] mb-6">⚔️ JOIN MY GUILD ⚔️</h3>
            <div className="flex justify-center gap-6">
              <a 
                href="#" 
                className="w-12 h-12 bg-[#2a2a2a] border-2 border-[#d4af37] flex items-center justify-center hover:bg-[#d4af37] hover:text-[#1a1a1a] transition-all group"
              >
                <Github className="w-5 h-5 text-[#d4af37] group-hover:text-[#1a1a1a]" />
              </a>
              <a 
                href="#" 
                className="w-12 h-12 bg-[#2a2a2a] border-2 border-[#d4af37] flex items-center justify-center hover:bg-[#d4af37] hover:text-[#1a1a1a] transition-all group"
              >
                <Linkedin className="w-5 h-5 text-[#d4af37] group-hover:text-[#1a1a1a]" />
              </a>
              <a 
                href="#" 
                className="w-12 h-12 bg-[#2a2a2a] border-2 border-[#d4af37] flex items-center justify-center hover:bg-[#d4af37] hover:text-[#1a1a1a] transition-all group"
              >
                <Twitter className="w-5 h-5 text-[#d4af37] group-hover:text-[#1a1a1a]" />
              </a>
              <a 
                href="#" 
                className="w-12 h-12 bg-[#2a2a2a] border-2 border-[#d4af37] flex items-center justify-center hover:bg-[#d4af37] hover:text-[#1a1a1a] transition-all group"
              >
                <Mail className="w-5 h-5 text-[#d4af37] group-hover:text-[#1a1a1a]" />
              </a>
              <a 
                href="#" 
                className="w-12 h-12 bg-[#2a2a2a] border-2 border-[#d4af37] flex items-center justify-center hover:bg-[#d4af37] hover:text-[#1a1a1a] transition-all group"
              >
                <Globe className="w-5 h-5 text-[#d4af37] group-hover:text-[#1a1a1a]" />
              </a>
            </div>
          </div>
          <div className="text-center border-t-2 border-[#4a4a4a] pt-6">
            <p className="text-[8px] md:text-[10px] text-[#e8d4a0] opacity-60">
              © 2026 DEV.HERO - All Rights Reserved | Built with ⚔️ and ✨
            </p>
            <p className="text-[8px] text-[#d4af37] mt-2">
              "May your code compile and your deploys succeed"
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}