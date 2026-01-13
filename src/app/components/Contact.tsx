import { useLanguage } from '../context/LanguageContext';

export function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-20 px-4 bg-[#2a2a2a] border-t-4 border-[#d4af37]">
      <div className="container mx-auto max-w-2xl">
        <div className="text-center mb-12">
          <h2 className="text-xl md:text-2xl text-[#d4af37] mb-4 inline-block px-6 py-3 bg-[#1a1a1a] border-4 border-[#d4af37]">
            {t.contact.title}
          </h2>
          <p className="text-[10px] md:text-xs text-[#e8d4a0] mt-4 opacity-80">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="bg-[#1a1a1a] border-4 border-[#8b0000] p-8">
          <form className="space-y-6">
            <div>
              <label className="block text-[10px] text-[#d4af37] mb-2 uppercase">{t.contact.nameLabel}</label>
              <input
                type="text"
                className="w-full bg-[#2a2a2a] border-2 border-[#4a4a4a] text-[#e8d4a0] px-4 py-3 text-xs focus:border-[#d4af37] focus:outline-none"
                placeholder={t.contact.namePlaceholder}
              />
            </div>
            <div>
              <label className="block text-[10px] text-[#d4af37] mb-2 uppercase">{t.contact.emailLabel}</label>
              <input
                type="email"
                className="w-full bg-[#2a2a2a] border-2 border-[#4a4a4a] text-[#e8d4a0] px-4 py-3 text-xs focus:border-[#d4af37] focus:outline-none"
                placeholder={t.contact.emailPlaceholder}
              />
            </div>
            <div>
              <label className="block text-[10px] text-[#d4af37] mb-2 uppercase">{t.contact.messageLabel}</label>
              <textarea
                rows={6}
                className="w-full bg-[#2a2a2a] border-2 border-[#4a4a4a] text-[#e8d4a0] px-4 py-3 text-xs focus:border-[#d4af37] focus:outline-none resize-none"
                placeholder={t.contact.messagePlaceholder}
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full px-6 py-4 bg-[#d4af37] text-[#1a1a1a] border-4 border-[#1a1a1a] hover:bg-[#e8d4a0] transition-all text-xs uppercase"
              style={{ boxShadow: '6px 6px 0 #8b0000' }}
            >
              {t.contact.submit}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
