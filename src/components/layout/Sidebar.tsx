import { Github, Linkedin, Mail, Smartphone } from "lucide-react";
import { useTranslation } from "react-i18next";

export const Sidebar = () => {
  const { t } = useTranslation();

  // Definimos los links DENTRO del componente para usar t()
  const navLinks = [
    { name: t('nav.about'), href: "#about" },
    { name: t('nav.skills'), href: "#skills" },
    { name: t('nav.experience'), href: "#experience" },
    { name: t('nav.projects'), href: "#projects" },
    { name: t('nav.contact'), href: "#contact" }, 
  ];

  return (
    <div className="flex flex-col h-full">
      
      <div className="flex flex-col gap-6 mb-12">
        <div className="h-28 w-28 rounded-full overflow-hidden border-2 shadow-2xl shrink-0 border-zinc-200 bg-white dark:border-white/10 dark:bg-white/5">
           <img src="/images/tu-foto.jpg" alt="Arturo Meave" className="h-full w-full object-cover opacity-90 transition-opacity hover:opacity-100" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
        </div>
        
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-5xl leading-tight">
            Arturo Meave
          </h1>
          <h2 className="text-lg font-medium tracking-tight text-zinc-600 dark:text-white/80">
            {t('sidebar.role')} {/* 👈 TRADUCIDO */}
          </h2>
          <p className="max-w-xs text-sm leading-relaxed text-zinc-500 dark:text-gray-500 mt-2">
            {t('sidebar.bio')} {/* 👈 TRADUCIDO */}
          </p>
        </div>
      </div>

      <nav className="hidden lg:block flex-1">
        <ul className="flex flex-col gap-1 w-full">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href} className="group flex items-center py-3 w-full cursor-pointer">
                <span className="nav-indicator mr-4 h-px w-8 transition-all duration-300 group-hover:w-16 bg-zinc-300 group-hover:bg-orange-600 dark:bg-gray-700 dark:group-hover:bg-white"></span>
                <span className="nav-text text-xs font-bold uppercase tracking-widest transition-colors text-zinc-500 group-hover:text-orange-600 dark:text-gray-500 dark:group-hover:text-white">
                  {link.name}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mt-auto pt-10 border-t space-y-6 border-zinc-200 dark:border-white/5">
        <div className="flex flex-col gap-3 text-sm">
          <a href="mailto:arturomeave.dev@gmail.com" className="flex items-center gap-3 transition-colors group text-zinc-600 hover:text-orange-600 dark:text-gray-400 dark:hover:text-white">
            <Mail size={16} className="transition-colors text-zinc-400 group-hover:text-orange-600 dark:text-gray-600 dark:group-hover:text-orange-500"/>
            <span>arturomeave.dev@gmail.com</span>
          </a>
          <div className="flex items-center gap-3 transition-colors group text-zinc-600 hover:text-orange-600 dark:text-gray-400 dark:hover:text-white">
            <Smartphone size={16} className="transition-colors text-zinc-400 group-hover:text-orange-600 dark:text-gray-600 dark:group-hover:text-orange-500"/>
            <span>+34 664 539 243</span>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <a href="#" className="transition-colors text-zinc-400 hover:text-orange-600 dark:text-gray-400 dark:hover:text-white"><Github size={20} /></a>
          <a href="#" className="transition-colors text-zinc-400 hover:text-orange-600 dark:text-gray-400 dark:hover:text-white"><Linkedin size={20} /></a>
        </div>
      </div>
    </div>
  );
};