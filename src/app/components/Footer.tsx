import { Github, Linkedin, Twitter, Mail, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function Footer() {
  const { t } = useLanguage();

  return (
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
          <h3 className="text-xs md:text-sm text-[#d4af37] mb-6">{t.footer.title}</h3>
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
            {t.footer.copyright}
          </p>
          <p className="text-[8px] text-[#d4af37] mt-2">
            {t.footer.quote}
          </p>
        </div>
      </div>
    </footer>
  );
}
