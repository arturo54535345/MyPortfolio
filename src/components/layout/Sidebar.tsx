import { Github, Linkedin, Mail, Smartphone, Globe, ArrowUpRight } from "lucide-react";

export const Sidebar = () => {
  // Datos de navegación para el menú
  const navLinks = [
    { name: "Sobre mí", href: "#about" },
    { name: "Proyectos", href: "#projects" },
    // { name: "Experiencia", href: "#experience" }, // Descomenta si la añades
    { name: "Skills", href: "#skills" },
  ];

  return (
    <div className="flex flex-col gap-8">
      
      {/* 1. CABECERA (Foto, Nombre, Bio) */}
      <div className="space-y-6">
        {/* Foto de perfil (he ajustado el tamaño y añadido el fix para que no se vea rota) */}
        <div className="h-28 w-28 rounded-full overflow-hidden border-2 border-white/10 bg-white/5 shadow-xl">
           <img 
             src="/images/tu-foto.jpg"  // AQUI DEBES PONER TU FOTO REAL en public/images/
             alt="Arturo Meave" 
             className="h-full w-full object-cover opacity-90 transition-opacity hover:opacity-100"
             onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} // Oculta si no hay foto
           />
        </div>
        
        <div className="space-y-3">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Arturo Meave
          </h1>
          <h2 className="text-lg font-medium tracking-tight text-white/80 sm:text-xl">
            Junior Full Stack Developer
          </h2>
          <p className="max-w-xs leading-relaxed text-gray-400">
            Desarrollo aplicaciones web completas con foco en frontend, experiencia de usuario y producto digital.
          </p>
        </div>
      </div>

      {/* 2. DATOS DE CONTACTO (Estilo lista pequeña) */}
      <div className="flex flex-col gap-3 text-sm text-gray-400/80 mt-2">
        <a href="mailto:tu@email.com" className="flex items-center gap-3 hover:text-white transition-colors w-max">
          <Mail size={16} />
          <span>tu-email@ejemplo.com</span>
        </a>
        <a href="#" className="flex items-center gap-3 hover:text-white transition-colors w-max">
          <Globe size={16} />
          <span>arturomeave.dev</span>
        </a>
        <div className="flex items-center gap-3 w-max">
          <Smartphone size={16} />
          <span>+34 664 539 243</span>
        </div>
      </div>

      {/* 3. NAVEGACIÓN (El estilo "Resumx" con líneas) */}
      {/* hidden lg:block -> Solo visible en escritorio */}
      <nav className="hidden lg:block mt-12">
        <ul className="flex flex-col w-max">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href} className="group flex items-center py-3 active">
                {/* La línea decorativa que crece al hacer hover */}
                <span className="nav-indicator mr-4 h-px w-8 bg-gray-600 transition-all group-hover:w-16 group-hover:bg-white motion-reduce:transition-none"></span>
                {/* El texto del enlace */}
                <span className="nav-text text-xs font-bold uppercase tracking-widest text-gray-500 group-hover:text-white">
                  {link.name}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* 4. REDES SOCIALES (Abajo del todo) */}
      <div className="flex items-center gap-5 mt-auto pt-8">
        <a href="https://github.com/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <Github size={22} />
        </a>
        <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <Linkedin size={22} />
        </a>
      </div>

    </div>
  );
};