import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { useLanguage } from '../context/LanguageContext';
import { projects } from '../data/content';

export function Projects() {
  const { language, t } = useLanguage();

  return (
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
            {t.projects.title}
          </h2>
          <p className="text-[10px] md:text-xs text-[#e8d4a0] mt-4 opacity-80">
            {t.projects.subtitle}
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
                  alt={project.title[language]}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  style={{ imageRendering: 'auto' }}
                />
              </div>
              <div className="p-4 space-y-3">
                <div className="flex justify-between items-start gap-2">
                  <h3 className="text-[10px] md:text-xs text-[#e8d4a0] uppercase">{project.title[language]}</h3>
                  <span className={`text-[8px] px-2 py-1 border-2 whitespace-nowrap ${
                    project.difficulty[language] === 'Hard' || project.difficulty[language] === 'Difícil'
                      ? 'bg-[#8b0000] border-[#d4af37] text-[#d4af37]'
                      : project.difficulty[language] === 'Medium' || project.difficulty[language] === 'Médio'
                      ? 'bg-[#d4af37] border-[#1a1a1a] text-[#1a1a1a]'
                      : 'bg-[#4a4a4a] border-[#e8d4a0] text-[#e8d4a0]'
                  }`}>
                    {project.difficulty[language]}
                  </span>
                </div>
                <p className="text-[8px] md:text-[10px] text-[#e8d4a0] opacity-80 leading-relaxed">
                  {project.description[language]}
                </p>
                <div className="flex justify-between items-center pt-2 border-t-2 border-[#4a4a4a]">
                  <span className="text-[8px] text-[#d4af37]">⭐ {project.reward}</span>
                  <button className="px-4 py-2 bg-[#d4af37] text-[#1a1a1a] border-2 border-[#1a1a1a] hover:bg-[#e8d4a0] transition-all text-[8px] uppercase">
                    {t.projects.viewQuest}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
