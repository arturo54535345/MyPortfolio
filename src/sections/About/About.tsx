import { SectionWrapper } from "../../components/layout/SectionWrapper";
import { FadeIn } from "../../components/animations/FadeIn";
import { Card } from "../../components/ui/Card";
import { Code2, Globe, Laptop } from "lucide-react";

export const About =() => {
    const stats = [
        {icon: <Code2 className="text-blue-400" />, label: "Frontend", value: "React & TS"},
        {icon: <Laptop className="text-purple-400" />, label: "Idiomas", value: "Español & Inglés"},
        {icon: <Globe className="text-green-400" />, label: "Experiencia", value: "Coming Soon..."},
    ];
   return (
    <SectionWrapper id="about">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* COLUMNA IZQUIERDA: Texto */}
        <div className="space-y-6">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
              Más allá del código
            </h2>
          </FadeIn>
          
          <FadeIn delay={0.1}>
            <p className="text-gray-400 text-lg leading-relaxed">
              Soy un apasionado de la tecnología con un enfoque en el diseño limpio y la eficiencia. 
              No solo escribo código; construyo soluciones que funcionan.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed mt-4">
              Cuando no estoy delante de la pantalla, me encontrarás explorando nuevas herramientas, 
              mejorando mi setup o aprendiendo sobre diseño de interfaces.
            </p>
          </FadeIn>

          {/* Stats Grid */}
          <FadeIn delay={0.2}>
            <div className="grid grid-cols-3 gap-4 mt-8">
              {stats.map((stat, index) => (
                <Card key={index} className="p-4 flex flex-col items-center text-center gap-2 hover:bg-white/5 transition-colors">
                  {stat.icon}
                  <span className="text-2xl font-bold text-white">{stat.value}</span>
                  <span className="text-xs text-gray-500 uppercase tracking-wider">{stat.label}</span>
                </Card>
              ))}
            </div>
          </FadeIn>
        </div>

        {/* COLUMNA DERECHA: Imagen / Avatar */}
        <FadeIn delay={0.3}>
          <Card className="relative aspect-square md:aspect-[4/5] overflow-hidden group">
            {/* Si no tienes foto aún, este div gris hará de placeholder elegante */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-black" />
            
            {/* Aquí iría tu foto real:
               <img src="/assets/avatars/me.jpg" alt="Arturo" className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105" />
            */}
            
            {/* Texto sobre la imagen */}
            <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/90 to-transparent">
              <p className="font-mono text-sm text-accent">based in</p>
              <p className="text-white font-bold text-xl">Madrid, España</p>
            </div>
          </Card>
        </FadeIn>

      </div>
    </SectionWrapper>
   );

};