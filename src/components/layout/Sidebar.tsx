import { Github, Linkedin, Mail, Smartphone, ArrowUpRight } from "lucide-react";

export const Sidebar = () => {
  const navLinks = [
    { name: "Sobre mí", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experiencia", href: "#experience" },
    { name: "Proyectos", href: "#projects" },
    
  ];

  return (
    // Añadimos 'h-full' para que ocupe toda la altura disponible y podamos usar 'mt-auto'
    <div className="flex flex-col h-full">
      
      {/* 1. ZONA SUPERIOR: IDENTIDAD */}
      <div className="flex flex-col gap-6 mb-12">
        {/* Foto */}
        <div className="h-28 w-28 rounded-full overflow-hidden border-2 border-white/10 bg-white/5 shadow-2xl shrink-0">
           <img 
             src="/images/tu-foto.jpg" 
             alt="Arturo Meave" 
             className="h-full w-full object-cover opacity-90 transition-opacity hover:opacity-100"
             onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
           />
        </div>
        
        {/* Textos */}
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl leading-tight">
            Arturo Meave
          </h1>
          <h2 className="text-lg font-medium tracking-tight text-white/80">
            Junior Full Stack Developer
          </h2>
          <p className="max-w-xs text-sm leading-relaxed text-gray-500 mt-2">
            Creo experiencias digitales con foco en diseño limpio y código eficiente.
          </p>
        </div>
      </div>

      {/* 2. ZONA CENTRAL: NAVEGACIÓN (El núcleo) */}
      {/* 'flex-1' hace que esto ocupe el espacio sobrante, empujando el contacto abajo */}
      <nav className="hidden lg:block flex-1">
        <ul className="flex flex-col gap-1 w-full">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href} className="group flex items-center py-3 w-full cursor-pointer">
                {/* Línea animada */}
                <span className="nav-indicator mr-4 h-px w-8 bg-gray-700 transition-all duration-300 group-hover:w-16 group-hover:bg-white"></span>
                {/* Texto */}
                <span className="nav-text text-xs font-bold uppercase tracking-widest text-gray-500 transition-colors group-hover:text-white">
                  {link.name}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* 3. ZONA INFERIOR: CONTACTO UNIFICADO (El Footer del Sidebar) */}
      {/* Aquí agrupamos email, teléfono y redes para que sea un bloque sólido y escalable */}
      <div className="mt-auto pt-10 border-t border-white/5 space-y-6">
        
        {/* Datos de contacto directos */}
        <div className="flex flex-col gap-3 text-sm">
          <a href="mailto:tu@email.com" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group">
            <Mail size={16} className="text-gray-600 group-hover:text-teal-400 transition-colors"/>
            <span>arturomeave.dev@gmail.com</span>
          </a>
          <div className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group">
            <Smartphone size={16} className="text-gray-600 group-hover:text-teal-400 transition-colors"/>
            <span>+34 664 539 243</span>
          </div>
        </div>

        {/* Redes Sociales (Iconos grandes) */}
        <div className="flex items-center gap-5">
          <a href="https://github.com/arturo54535345" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Github size={20} />
          </a>
          <a href="https://www.linkedin.com/in/arturo-meave/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin size={20} />
          </a>
          {/* Si el día de mañana añades Twitter o Instagram, pones el icono aquí y no rompe nada */}
        </div>

      </div>

    </div>
  );
};