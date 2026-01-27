/** @type {import('tailwindcss').Config}*/
export default {
    content : [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend:{
            colors:{
                background: "#050505", //Negro Fondo
                foreground: "#ffffff", //Blanco Texto
                card:{
                    DEFAULT: "rgba(255,255,255,0.03)", //Cristal Oscuro
                    border: "rgba(255,255,255,0.08)", //Borde Sutil
                },
                accent:{
                    DEFAULT: "#3b82f6", //Azul
                    muted: "1d4ed8",
                }
            },
            borderRadius: {
                "2xl": "1.5rem",
        }
    },
},
    plugins: [],
}

