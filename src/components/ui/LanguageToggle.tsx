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
        bg-white/10 backdrop-blur-md border-white/10 text-white 
        hover:bg-orange-500 hover:border-orange-500"
      title="Cambiar idioma / Change language"
    >
      <Languages size={18} />
      <span>{i18n.language.startsWith('es') ? 'ES' : 'EN'}</span>
    </button>
  );
};