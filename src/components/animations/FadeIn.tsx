import {motion} from "framer-motion";
import React from "react";

interface Props{
    children: React.ReactNode;
    delay?: number; //retraso al empezar la animacion 
    className?: string; //etilos adicionales mas adelante
}
export const FadeIn = ({children, delay = 0, className = ""}: Props)=>{
    return(
        <motion.div
        //estilo inicial, invisible y desplazado 20px hacia abajo
        initial={{opacity: 0, y: 20}}
        //cuando entre en pantalla, se vuelve visible y subira a su sitio original
        whileInView={{opacity: 1, y: 0}}
        //la configuaracion de la transicion solo lo hara una vez y tarda 0.5s en completarse
        viewport={{once: true, margin: "-50px"}}
        transition={{duration: 0.5, delay: delay, ease: "easeOut"}}
        className={className}
        >
            {children}
        </motion.div>
    );
};
