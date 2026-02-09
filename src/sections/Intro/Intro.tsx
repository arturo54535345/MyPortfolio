import { FadeIn } from "../../components/animations/FadeIn";
import { ArrowRight, Mail, Briefcase } from "lucide-react";
import { useTranslation } from "react-i18next";

export const Intro = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-6 pt-10 pb-4">
      
      <FadeIn delay={0.1}>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 w-fit mb-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
            </span>
            <span className="text-xs font-bold text-orange-500 tracking-wide uppercase">
                {t('intro.badge')}
            </span>
        </div>

        <h1 className="text-4xl font-bold tracking-tight text-white md:text-6xl lg:text-7xl">
          {t('intro.title_1')} <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500">
            {t('intro.title_2')}
          </span>
        </h1>
      </FadeIn>

      <FadeIn delay={0.2}>
        <p className="max-w-2xl text-lg text-gray-400 leading-relaxed">
          {t('intro.description')}
        </p>
      </FadeIn>

      <FadeIn delay={0.3}>
        <div className="flex flex-wrap items-center gap-4 mt-4">
          
          <a 
            href="mailto:arturomeave.dev@gmail.com" 
            className="group relative flex items-center gap-3 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-black transition-all hover:bg-orange-500 hover:text-white active:scale-95"
          >
            <Mail size={18} />
            <span>{t('intro.cta_primary')}</span>
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </a>

          <a 
            href="#projects" 
            className="group flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-7 py-3.5 text-sm font-bold text-white transition-all hover:bg-white/10 hover:border-white/30 active:scale-95"
          >
            <Briefcase size={18} className="text-gray-400 group-hover:text-white transition-colors" />
            <span>{t('intro.cta_secondary')}</span>
          </a>

        </div>
      </FadeIn>
    </div>
  );
};