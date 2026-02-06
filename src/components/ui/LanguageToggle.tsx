import { Languages } from "lucide-react";
import { useTranslation } from "react-i18next";

export const LanguageToggle = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language.startsWith('es') ? 'en' : 'es';
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="p-3 rounded-full border shadow-lg transition-all duration-300 font-bold text-xs flex items-center gap-2
        
        /* ☀️ MODO CLARO (Estilos por defecto) */
        /* Fondo blanco, texto oscuro, borde gris */
        bg-white text-zinc-700 border-zinc-200 
        hover:bg-orange-500 hover:text-white hover:border-orange-500

        /* 🌙 MODO OSCURO (Overrides con dark:) */
        /* Fondo cristal, texto blanco, borde sutil */
        dark:bg-white/10 dark:backdrop-blur-md dark:border-white/10 dark:text-white 
        dark:hover:bg-orange-500 dark:hover:border-orange-500"
      
      title="Cambiar idioma / Change language"
    >
      <Languages size={18} />
      <span>{i18n.language.startsWith('es') ? 'ES' : 'EN'}</span>
    </button>
  );
};