import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { useLanguage } from '../context/LanguageContext';
import { projects } from '../data/content';

export function Projects() {
  const { language, t } = useLanguage();
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(1);

  const updateItemsPerPage = () => {
    setItemsPerPage(window.innerWidth >= 768 ? 3 : 1);
  };

  const checkForScroll = () => {
    const { current } = scrollContainerRef;
    if (current) {
      const { scrollLeft, scrollWidth, clientWidth } = current;
      
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 1);

      const isAtEnd = scrollLeft + clientWidth >= scrollWidth - 2;
      
      if (isAtEnd) {
        const totalCurrentPages = Math.ceil(projects.length / itemsPerPage);
        setCurrentPage(totalCurrentPages - 1);
      } else {
        const newPage = Math.round(scrollLeft / clientWidth);
        setCurrentPage(newPage);
      }
    }
  };

  useEffect(() => {
    updateItemsPerPage();
    checkForScroll();
    
    window.addEventListener('resize', () => {
      checkForScroll();
      updateItemsPerPage();
    });
    return () => window.removeEventListener('resize', checkForScroll);
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.clientWidth; 
      const scrollLeft = scrollContainerRef.current.scrollLeft;
      const targetScroll = direction === 'left' 
        ? scrollLeft - scrollAmount 
        : scrollLeft + scrollAmount;
      
      scrollContainerRef.current.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
      });
    }
  };

  const scrollToPage = (pageIndex: number) => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.clientWidth;
      scrollContainerRef.current.scrollTo({
        left: pageIndex * scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const totalPages = Math.ceil(projects.length / itemsPerPage);

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

        <div className="relative max-w-6xl mx-auto">
          
          {/* Seta Esquerda */}
          {canScrollLeft && (
            <button
              onClick={() => scroll('left')}
              className="absolute left-0 top-[40%] md:top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-[55px] z-20 bg-[#d4af37] border-4 border-[#1a1a1a] p-2 md:p-3 hover:bg-[#e8d4a0] transition-all"
              style={{ boxShadow: '4px 4px 0 #000' }}
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-6 h-6 md:w-8 md:h-8 text-[#1a1a1a]" />
            </button>
          )}

          {/* Carousel Container */}
          <div 
            ref={scrollContainerRef}
            onScroll={checkForScroll} 
            className={`flex overflow-x-auto snap-x snap-mandatory gap-6 scrollbar-hide pb-4 ${
              projects.length < 3 ? 'md:justify-center' : ''
            }`}
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {projects.map((project) => (
              <div
                key={project.id}
                className="flex-none w-full md:w-[calc(33.333%-16px)] snap-start"
              >
                <div
                  className="bg-[#2a2a2a] border-4 border-[#4a4a4a] hover:border-[#d4af37] transition-all group h-full"
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
              </div>
            ))}
          </div>

          {/* Seta Direita */}
          {canScrollRight && (
            <button
              onClick={() => scroll('right')}
              className="absolute right-0 top-[40%] md:top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-[55px] z-20 bg-[#d4af37] border-4 border-[#1a1a1a] p-2 md:p-3 hover:bg-[#e8d4a0] transition-all"
              style={{ boxShadow: '4px 4px 0 #000' }}
              aria-label="Scroll right"
            >
              <ChevronRight className="w-6 h-6 md:w-8 md:h-8 text-[#1a1a1a]" />
            </button>
          )}

        </div>

        {/* Paginação (Botões em baixo) */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-3 mt-8">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToPage(index)}
                className={`w-3 h-3 md:w-4 md:h-4 border-2 transition-all duration-300 transform rotate-45 ${
                  currentPage === index 
                    ? 'bg-[#d4af37] border-[#d4af37] scale-125' 
                    : 'bg-[#1a1a1a] border-[#4a4a4a] hover:border-[#d4af37]'
                }`}
                aria-label={`Go to page ${index + 1}`}
                title={`Ir para seção ${index + 1}`}
              />
            ))}
          </div>
        )}

      </div>
    </section>
  );
}