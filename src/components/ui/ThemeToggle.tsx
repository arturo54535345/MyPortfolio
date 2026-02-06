import { Moon, Sun } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-3 rounded-full border shadow-lg transition-all duration-300
        bg-white/10 backdrop-blur-md border-white/10 text-orange-500 hover:bg-orange-500 hover:text-white
        dark:bg-white/5 dark:text-gray-200 dark:hover:bg-orange-500 dark:hover:text-white
        light:bg-white light:text-zinc-600 light:border-zinc-200 light:hover:text-white"
      title="Cambiar Tema"
    >
      {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
};