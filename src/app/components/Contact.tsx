import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { useLanguage } from "../context/LanguageContext";

export function Contact() {
  const { t } = useLanguage();
  const formRef = useRef<HTMLFormElement>(null);

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    setSuccess(false);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current!,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then(
        () => {
          setLoading(false);
          setSuccess(true);
          formRef.current?.reset();

          // Remove a mensagem de sucesso após 5 segundos
          setTimeout(() => setSuccess(false), 5000);
        },
        (error) => {
          setLoading(false);
          setError(true);
          console.error("Erro no envio:", error.text);
        }
      );
  };

  return (
    <section
      id="contact"
      className="py-20 px-4 bg-[#2a2a2a] border-t-4 border-[#d4af37]"
    >
      <div className="container mx-auto max-w-2xl">
        <div className="text-center mb-12">
          <h2 className="text-xl md:text-2xl text-[#d4af37] mb-4 inline-block px-6 py-3 bg-[#1a1a1a] border-4 border-[#d4af37]">
            {t.contact.title}
          </h2>
          <p className="text-[10px] md:text-xs text-[#e8d4a0] mt-4 opacity-80">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="bg-[#1a1a1a] border-4 border-[#8b0000] p-8 relative">
          {/* MENSAGEM DE SUCESSO */}
          {success && (
            <div className="absolute inset-0 bg-[#1a1a1a]/95 z-20 flex flex-col items-center justify-center text-center p-4 border-4 border-green-600 animate-in fade-in duration-300">
              <span className="text-4xl mb-4">📜</span>
              <h3 className="text-green-500 font-bold text-lg uppercase mb-2">
                {t.contact.sucessMessage1}
              </h3>
              <p className="text-[#e8d4a0] text-xs">
                {t.contact.sucessMessage2}
              </p>
            </div>
          )}

          {/* MENSAGEM DE ERRO */}
          {error && (
            <div className="mb-6 p-3 bg-red-900/30 border-l-4 border-red-500 text-red-200 text-xs text-center">
              {t.contact.erroMessage}
            </div>
          )}

          <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
            {/* Campo NOME */}
            <div>
              <label className="block text-[10px] text-[#d4af37] mb-2 uppercase">
                {t.contact.nameLabel}
              </label>
              <input
                type="text"
                name="name" // {{name}}
                required
                className="w-full bg-[#2a2a2a] border-2 border-[#4a4a4a] text-[#e8d4a0] px-4 py-3 text-xs focus:border-[#d4af37] focus:outline-none placeholder-gray-600"
                placeholder={t.contact.namePlaceholder}
              />
            </div>

            {/* Campo EMAIL */}
            <div>
              <label className="block text-[10px] text-[#d4af37] mb-2 uppercase">
                {t.contact.emailLabel}
              </label>
              <input
                type="email"
                name="email" // {{email}}
                required
                className="w-full bg-[#2a2a2a] border-2 border-[#4a4a4a] text-[#e8d4a0] px-4 py-3 text-xs focus:border-[#d4af37] focus:outline-none placeholder-gray-600"
                placeholder={t.contact.emailPlaceholder}
              />
            </div>

            <div>
              <label className="block text-[10px] text-[#d4af37] mb-2 uppercase">
                {t.contact.subjectLabel}
              </label>
              <input
                type="text"
                name="subject" // {{subject}}
                required
                className="w-full bg-[#2a2a2a] border-2 border-[#4a4a4a] text-[#e8d4a0] px-4 py-3 text-xs focus:border-[#d4af37] focus:outline-none placeholder-gray-600"
                placeholder={t.contact.subjectPlaceholder}
              />
            </div>

            {/* Campo MENSAGEM */}
            <div>
              <label className="block text-[10px] text-[#d4af37] mb-2 uppercase">
                {t.contact.messageLabel}
              </label>
              <textarea
                rows={6}
                name="message" // {{message}}
                required
                className="w-full bg-[#2a2a2a] border-2 border-[#4a4a4a] text-[#e8d4a0] px-4 py-3 text-xs focus:border-[#d4af37] focus:outline-none resize-none placeholder-gray-600"
                placeholder={t.contact.messagePlaceholder}
              ></textarea>
            </div>

            {/* Botão de Submit */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full px-6 py-4 bg-[#d4af37] text-[#1a1a1a] border-4 border-[#1a1a1a] transition-all text-xs uppercase font-bold tracking-wider
                ${loading ? "opacity-70 cursor-not-allowed bg-[#b08d2b]" : "hover:bg-[#e8d4a0] hover:scale-[1.01] active:scale-[0.99]"}
              `}
              style={{ boxShadow: "6px 6px 0 #8b0000" }}
            >
              {loading ? t.contact.submitMessage : t.contact.submit}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
