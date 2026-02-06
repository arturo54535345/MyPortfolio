import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "es",
    interpolation: {
      escapeValue: false, // React ya protege contra XSS
    },
    resources: {
      es: {
        translation: {
          nav: {
            about: "Sobre mí",
            skills: "Skills",
            experience: "Experiencia",
            projects: "Proyectos",
            contact: "Contacto",
          },
          intro: {
            badge: "Disponible para proyectos",
            title_1: "Creo soluciones digitales",
            title_2: "con código y diseño.",
            description:
              "Desarrollador full stack especializado en construir aplicaciones web rápidas, escalables y visualmente atractivas. Transformo ideas complejas en interfaces simples que funcionan.",
            cta_primary: "Hablemos ahora",
            cta_secondary: "Ver mis trabajos",
          },
          sidebar: {
            role: "Junior Full Stack Developer",
            bio: "Creo experiencias digitales con foco en diseño limpio y código eficiente.",
          },
          skills: {
            label: "Habilidades Técnicas",
            title: "Mi Stack Tecnológico",
            categories: {
              languages: "Lenguajes y Programación",
              frameworks: "Frameworks y Librerías",
              cloud: "Cloud y DevOps",
              database: "Base de Datos",
              tools: "Herramientas",
              certifications: "Certificaciones",
            },
          },
          experience: {
            title: "Experiencia",
            jobs: {
              camino: {
                role: "Frontend Developer",
                desc: "Desarrollo de la mayor parte del frontend de una aplicación web full stack con marketplace y blog. Implementé interfaces y estructuras de navegación.",
              },
              personal: {
                role: "Full Stack Developer",
                desc: "Construcción de una aplicación web personal enfocada en mejorar experiencia de usuario y lógica de negocio real.",
              },
            },
          },
          projects: {
            dashboard: {
              desc: "Un panel de administración completo con gráficos en tiempo real y gestión de inventario.",
            },
            taskapp: {
              desc: "Aplicación de gestión de tareas con funcionalidad drag-and-drop y animaciones fluidas.",
            },
            weather: {
              desc: "Widget del tiempo que consume una API externa y muestra datos geolocalizados.",
            },
          },
          contact: {
            label: "Contacto",
            title_1: "Hablemos de tu",
            title_2: "próximo proyecto.",
            desc: "¿Tienes una idea en mente? Estoy disponible para trabajos freelance y colaboraciones. Cuéntame más y creemos algo increíble juntos.",
            form: {
              name: "Nombre",
              email: "Email",
              message: "Mensaje",
              placeholder_name: "Tu nombre",
              placeholder_email: "tu@email.com",
              placeholder_msg: "Cuéntame sobre tu proyecto...",
              send: "Enviar Mensaje",
              sending: "Enviando...",
              success_title: "¡Mensaje enviado!",
              success_desc: "Gracias por contactarme.",
              retry: "Enviar otro mensaje",
            },
          },
        },
      },
      en: {
        translation: {
          nav: {
            about: "About",
            skills: "Skills",
            experience: "Experience",
            projects: "Projects",
            contact: "Contact",
          },
          intro: {
            badge: "Available for projects",
            title_1: "Crafting digital solutions",
            title_2: "with code and design.",
            description:
              "Full stack developer specialized in building fast, scalable, and visually appealing web applications. I transform complex ideas into simple interfaces that work.",
            cta_primary: "Let's talk",
            cta_secondary: "View my work",
          },
          sidebar: {
            role: "Junior Full Stack Developer",
            bio: "Crafting digital experiences focused on clean design and efficient code.",
          },
          skills: {
            label: "Technical Skills",
            title: "My Tech Stack",
            categories: {
              languages: "Languages & Programming",
              frameworks: "Frameworks & Libraries",
              cloud: "Cloud & DevOps",
              database: "Databases",
              tools: "Tools",
              certifications: "Certifications",
            },
          },
          experience: {
            title: "Experience",
            jobs: {
              camino: {
                role: "Frontend Developer",
                desc: "Developed the majority of the frontend for a full stack web application with marketplace and blog features. Implemented interfaces and navigation structures.",
              },
              personal: {
                role: "Full Stack Developer",
                desc: "Built a personal web application focused on improving user experience and real-world business logic.",
              },
            },
          },
          projects: {
            dashboard: {
              desc: "A complete admin dashboard with real-time charts and inventory management.",
            },
            taskapp: {
              desc: "Task management app with drag-and-drop functionality and smooth animations.",
            },
            weather: {
              desc: "Weather widget consuming an external API and displaying geolocation data.",
            },
          },
          contact: {
            label: "Contact",
            title_1: "Let's talk about your",
            title_2: "next project.",
            desc: "Have an idea in mind? I'm available for freelance work and collaborations. Tell me more and let's create something amazing together.",
            form: {
              name: "Name",
              email: "Email",
              message: "Message",
              placeholder_name: "Your name",
              placeholder_email: "you@email.com",
              placeholder_msg: "Tell me about your project...",
              send: "Send Message",
              sending: "Sending...",
              success_title: "Message sent!",
              success_desc: "Thanks for contacting me.",
              retry: "Send another message",
            },
          },
        },
      },
    },
  });

export default i18n;
