import { useState } from "react";
import { Mail, Send, MapPin, Loader2, CheckCircle2 } from "lucide-react";
import { SectionWrapper } from "../../components/layout/SectionWrapper";
import { FadeIn } from "../../components/animations/FadeIn";
import { Button } from "../../components/ui/Button";
import { Card } from "../../components/ui/Card";
import { useTranslation } from "react-i18next";

export const Contact = () => {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("https://formspree.io/f/xvzbopoe", {
        method: "POST",
        body: new FormData(e.currentTarget),
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        setIsSent(true);
        e.currentTarget.reset();
      } else {
        alert("Error.");
      }
    } catch (error) {
      alert("Error.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SectionWrapper id="contact" className="mb-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
        
        <div className="space-y-8">
          <FadeIn>
            <h2 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-4">
              {t('contact.label')}
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {t('contact.title_1')} <br />
              <span className="text-orange-500">{t('contact.title_2')}</span>
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed max-w-md">
              {t('contact.desc')}
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="flex flex-col gap-6 mt-8">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-white/5 border border-white/10 text-orange-400">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-gray-500">{t('contact.form.email')}</p>
                  <a href="mailto:arturomeave.dev@gmail.com" className="text-white text-lg font-medium hover:text-orange-400 transition-colors">
                    arturomeave.dev@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-white/5 border border-white/10 text-orange-400">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-gray-500">Ubicación</p>
                  <p className="text-lg font-medium text-white">Madrid, España (Remoto)</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.2} className="w-full">
          <Card className="p-6 md:p-8 bg-white/[0.02] border-white/10 backdrop-blur-xl rounded-2xl">
            {isSent ? (
              <div className="flex flex-col items-center justify-center py-12 text-center space-y-4">
                <div className="h-16 w-16 bg-green-500/10 rounded-full flex items-center justify-center border border-green-500/20">
                  <CheckCircle2 size={32} className="text-green-500" />
                </div>
                <h4 className="text-2xl font-bold text-white">{t('contact.form.success_title')}</h4>
                <p className="text-gray-400">{t('contact.form.success_desc')}</p>
                <Button variant="outline" onClick={() => setIsSent(false)} className="mt-4">
                  {t('contact.form.retry')}
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-500">{t('contact.form.name')}</label>
                    <input type="text" name="name" required placeholder={t('contact.form.placeholder_name')} className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/50 transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-500">{t('contact.form.email')}</label>
                    <input type="email" name="email" required placeholder={t('contact.form.placeholder_email')} className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/50 transition-all" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-500">{t('contact.form.message')}</label>
                  <textarea name="message" required rows={4} placeholder={t('contact.form.placeholder_msg')} className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/50 transition-all resize-none" />
                </div>
                <Button type="submit" disabled={isLoading} className="w-full rounded-xl bg-white text-black hover:bg-orange-500 hover:text-white transition-all duration-300 font-bold py-4">
                  {isLoading ? (
                    <span className="flex items-center gap-2"><Loader2 size={18} className="animate-spin" /> {t('contact.form.sending')}</span>
                  ) : (
                    <span className="flex items-center gap-2">{t('contact.form.send')} <Send size={18} /></span>
                  )}
                </Button>
              </form>
            )}
          </Card>
        </FadeIn>
      </div>
    </SectionWrapper>
  );
};