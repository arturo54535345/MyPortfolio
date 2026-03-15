import { User, Code2, Briefcase, Mail } from "lucide-react";
import { useEffect, useState } from "react";

export const MobileNav = () => {
  const [activeSection, setActiveSection] = useState("about");

  const navLinks = [
    { id: "about", icon: <User size={20} />, href: "#about" },
    { id: "skills", icon: <Code2 size={20} />, href: "#skills" },
    { id: "experience", icon: <Briefcase size={20} />, href: "#experience" },
    { id: "projects", icon: <Briefcase size={20} />, href: "#projects" },
    { id: "contact", icon: <Mail size={20} />, href: "#contact" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-30% 0px -70% 0px" }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 lg:hidden w-[90%] max-w-sm">
      <nav className="flex items-center justify-around bg-black/60 backdrop-blur-xl border border-white/10 rounded-full px-4 py-3 shadow-2xl">
        {navLinks.map((link) => {
          const isActive = activeSection === link.id;
          return (
            <a
              key={link.id}
              href={link.href}
              className={`relative flex flex-col items-center justify-center p-2 rounded-full transition-all duration-300 ${
                isActive ? "text-orange-500 scale-110" : "text-gray-400 hover:text-white"
              }`}
            >
              <div className="relative z-10 transition-transform duration-300">
                {link.icon}
              </div>
              
              {isActive && (
                <span className="absolute inset-0 bg-orange-500/10 rounded-full scale-125 transition-all duration-300" />
              )}
            </a>
          );
        })}
      </nav>
    </div>
  );
};
