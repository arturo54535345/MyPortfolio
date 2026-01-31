import { motion } from "framer-motion";
import { FadeIn } from "../../components/animations/FadeIn";

// 1. Datos: Si no estás seguro de si existe logo, deja el slug vacío ""
const row1 = [
  { name: "React", slug: "react" },
  { name: "TypeScript", slug: "typescript" },
  { name: "Tailwind CSS", slug: "tailwindcss" },
  { name: "Next.js", slug: "nextdotjs" },
  { name: "Framer Motion", slug: "framer" },
  { name: "UI/UX Design", slug: "" }, // Sin logo
  { name: "JavaScript", slug: "javascript" },
];

const row2 = [
  { name: "Node.js", slug: "nodedotjs" },
  { name: "Express", slug: "" }, // A veces el logo de Express no carga bien, mejor texto solo
  { name: "MongoDB", slug: "mongodb" },
  { name: "PostgreSQL", slug: "postgresql" },
  { name: "Git", slug: "git" },
  { name: "Docker", slug: "docker" },
  { name: "Clean Code", slug: "" }, // Concepto, sin logo
  { name: "Linux", slug: "linux" },
];

const MarqueeRow = ({ items, direction = "left" }: { items: {name: string, slug: string}[], direction?: "left" | "right" }) => {
  const moveX = direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"];

  return (
    <div className="relative flex overflow-hidden py-4">
      <motion.div
        animate={{ x: moveX }}
        transition={{
          duration: 35,
          ease: "linear",
          repeat: Infinity,
        }}
        className="flex whitespace-nowrap gap-6"
      >
        {[...items, ...items].map((item, index) => (
          <div
            key={index}
            className="group flex items-center gap-4 px-8 py-5 rounded-2xl border border-white/5 bg-white/[0.02] transition-all hover:border-white/20 hover:bg-white/[0.05]"
          >
            {/* 🧠 LÓGICA DE SENTIDO COMÚN:
               Solo renderizamos la imagen si existe un 'slug' definido.
            */}
            {item.slug && (
              <img 
                src={`https://cdn.simpleicons.org/${item.slug}`} 
                alt="" // Alt vacío porque es decorativo y ya tenemos el <span> al lado
                className="w-6 h-6 object-contain opacity-50 filter grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110"
                // Seguridad extra: si por lo que sea el CDN falla, ocultamos la imagen
                onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
              />
            )}
            
            <span className="text-sm font-bold uppercase tracking-widest text-gray-500 transition-colors group-hover:text-white">
              {item.name}
            </span>
          </div>
        ))}
      </motion.div>
      
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />
    </div>
  );
};

export const Skills = () => {
  return (
    <section className="space-y-6">
      <FadeIn>
        <div className="mb-4">
           <p className="text-gray-500 text-sm uppercase tracking-[0.2em] font-bold">Stack Tecnológico</p>
        </div>
      </FadeIn>

      <div className="flex flex-col gap-4">
        <MarqueeRow items={row1} direction="left" />
        <MarqueeRow items={row2} direction="right" />
      </div>
    </section>
  );
};