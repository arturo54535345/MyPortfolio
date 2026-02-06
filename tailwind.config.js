/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      // 🗑️ HEMOS BORRADO: Las secciones 'animation' y 'keyframes'.
      // Ya no hacen falta porque Grainient se encarga de todo el movimiento.

      // ✅ MANTENEMOS: Los colores, porque tu web los usa en textos, botones y bordes.
      colors: {
        background: "#050505", // Negro Fondo
        foreground: "#ffffff", // Blanco Texto
        card: {
          DEFAULT: "rgba(255,255,255,0.03)", // Cristal Oscuro
          border: "rgba(255,255,255,0.08)",   // Borde Sutil
        },
        accent: {
          DEFAULT: "#f97316", // Naranja (Vital para tus botones y textos destacados)
          muted: "#c2410c",   // Naranja oscuro
          glow: "#fbbf24",    // Dorado
        },
      },
      borderRadius: {
        "2xl": "1.5rem",
      },
    },
  },
  plugins: [],
};