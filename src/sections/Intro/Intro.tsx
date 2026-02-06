import { FadeIn } from "../../components/animations/FadeIn";
import { ArrowRight, Mail, Briefcase } from "lucide-react";

export const Intro = () => {
  return (
    <div className="flex flex-col gap-6 pt-10 pb-4">
      
      <FadeIn delay={0.1}>
        {/* 🔥 CAMBIO: Etiqueta en Naranja para que pegue con el magma */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 w-fit mb-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
            </span>
            <span className="text-xs font-bold text-orange-500 tracking-wide uppercase">
                Disponible para proyectos
            </span>
        </div>

        <h1 className="text-4xl font-bold tracking-tight text-white md:text-6xl lg:text-7xl">
          Creo soluciones digitales <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500">
            con código y diseño.
          </span>
        </h1>
      </FadeIn>

      <FadeIn delay={0.2}>
        <p className="max-w-2xl text-lg text-gray-400 leading-relaxed">
          Desarrollador full stack especializado en construir aplicaciones web rápidas, 
          escalables y visualmente atractivas. Transformo ideas complejas en interfaces 
          simples que funcionan.
        </p>
      </FadeIn>

      {/* ZONA DE CTA */}
      <FadeIn delay={0.3}>
        <div className="flex flex-wrap items-center gap-4 mt-4">
          
          {/* 🔥 CAMBIO: El botón principal ahora se vuelve naranja al pasar el ratón */}
          <a 
            href="mailto:tu-email@ejemplo.com?subject=Propuesta de Proyecto" 
            className="group relative flex items-center gap-3 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-black transition-all hover:bg-orange-500 hover:scale-105 active:scale-95"
          >
            <Mail size={18} />
            <span>Hablemos ahora</span>
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </a>

          {/* BOTÓN SECUNDARIO */}
          <a 
            href="#projects" 
            className="group flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-7 py-3.5 text-sm font-bold text-white transition-all hover:bg-white/10 hover:border-white/30 active:scale-95"
          >
            <Briefcase size={18} className="text-gray-400 group-hover:text-white transition-colors" />
            <span>Ver mis trabajos</span>
          </a>

        </div>
      </FadeIn>
    </div>
  );
};