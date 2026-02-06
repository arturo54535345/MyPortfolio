import { FadeIn } from "../../components/animations/FadeIn";
import { ArrowRight, Mail, Briefcase } from "lucide-react";
import { useTranslation } from "react-i18next"; // 👈 Importante

export const Intro = () => {
  const { t } = useTranslation(); // 👈 Activamos el traductor

  return (
    <div className="flex flex-col gap-6 pt-10 pb-4">
      
      <FadeIn delay={0.1}>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 w-fit mb-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
            </span>
            <span className="text-xs font-bold text-orange-600 dark:text-orange-500 tracking-wide uppercase">
                {t('intro.badge')} {/* 👈 TRADUCIDO */}
            </span>
        </div>

        <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-white md:text-6xl lg:text-7xl">
          {t('intro.title_1')} <br /> {/* 👈 TRADUCIDO */}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-800 dark:from-gray-200 dark:to-gray-500">
            {t('intro.title_2')} {/* 👈 TRADUCIDO */}
          </span>
        </h1>
      </FadeIn>

      <FadeIn delay={0.2}>
        <p className="max-w-2xl text-lg text-zinc-600 dark:text-gray-400 leading-relaxed">
          {t('intro.description')} {/* 👈 TRADUCIDO */}
        </p>
      </FadeIn>

      <FadeIn delay={0.3}>
        <div className="flex flex-wrap items-center gap-4 mt-4">
          
          <a 
            href="mailto:arturomeave.dev@gmail.com" 
            className="group relative flex items-center gap-3 rounded-full px-7 py-3.5 text-sm font-bold transition-all active:scale-95
              bg-zinc-900 text-white hover:bg-orange-600 hover:shadow-lg hover:shadow-orange-500/20 hover:scale-105
              dark:bg-white dark:text-black dark:hover:bg-orange-500"
          >
            <Mail size={18} />
            <span>{t('intro.cta_primary')}</span> {/* 👈 TRADUCIDO */}
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </a>

          <a 
            href="#projects" 
            className="group flex items-center gap-3 rounded-full border px-7 py-3.5 text-sm font-bold transition-all active:scale-95
              border-zinc-200 bg-white text-zinc-700 
              hover:border-orange-500 hover:text-orange-600 hover:bg-orange-50
              dark:border-white/10 dark:bg-white/[0.03] dark:text-white dark:hover:bg-white/10 dark:hover:border-white/30"
          >
            <Briefcase size={18} className="text-gray-500 dark:text-gray-400 group-hover:text-orange-600 dark:group-hover:text-white transition-colors" />
            <span>{t('intro.cta_secondary')}</span> {/* 👈 TRADUCIDO */}
          </a>

        </div>
      </FadeIn>
    </div>
  );
};