import { Github, Linkedin, Mail, Smartphone } from "lucide-react";
import { useTranslation } from "react-i18next";

export const Sidebar = () => {
  const { t } = useTranslation();

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
        <div className="h-28 w-28 rounded-full overflow-hidden border-2 border-white/10 bg-white/5 shadow-2xl shrink-0">
           <img src="/images/tu-foto.jpg" alt="Arturo Meave" className="h-full w-full object-cover opacity-90 transition-opacity hover:opacity-100" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
        </div>
        
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl leading-tight">
            Arturo Meave
          </h1>
          <h2 className="text-lg font-medium tracking-tight text-white/80">
            {t('sidebar.role')}
          </h2>
          <p className="max-w-xs text-sm leading-relaxed text-gray-500 mt-2">
            {t('sidebar.bio')}
          </p>
        </div>
      </div>

      <nav className="hidden lg:block flex-1">
        <ul className="flex flex-col gap-1 w-full">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href} className="group flex items-center py-3 w-full cursor-pointer">
                <span className="nav-indicator mr-4 h-px w-8 bg-gray-700 transition-all duration-300 group-hover:w-16 group-hover:bg-white"></span>
                <span className="nav-text text-xs font-bold uppercase tracking-widest text-gray-500 transition-colors group-hover:text-white">
                  {link.name}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mt-auto pt-10 border-t border-white/5 space-y-6">
        <div className="flex flex-col gap-3 text-sm">
          <a href="mailto:arturomeave.dev@gmail.com" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group">
            <Mail size={16} className="text-gray-600 group-hover:text-orange-500 transition-colors"/>
            <span>arturomeave.dev@gmail.com</span>
          </a>
          <div className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group">
            <Smartphone size={16} className="text-gray-600 group-hover:text-orange-500 transition-colors"/>
            <span>+34 664 539 243</span>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <a href="https://github.com/arturo54535345" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors"><Github size={20} /></a>
          <a href="https://www.linkedin.com/in/arturo-meave/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors"><Linkedin size={20} /></a>
        </div>
      </div>
    </div>
  );
};