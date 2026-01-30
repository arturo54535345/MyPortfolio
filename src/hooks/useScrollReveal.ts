import { useEffect, useRef } from "react";
import { useAnimation, useInView, useReducedMotion } from "framer-motion";

// Opciones por defecto
interface Options {
  threshold?: number; // Cuánto se tiene que ver para disparar (0 a 1)
  delay?: number;     // Retraso opcional
}

export const useScrollReveal = ({ threshold = 0.1, delay = 0 }: Options = {}) => {
  // 1. Referencia flexible (acepta cualquier elemento HTML)
  const ref = useRef<any>(null);

  // 2. Detectamos si está en pantalla (solo 1 vez para no marear al subir y bajar)
  const isInView = useInView(ref, { 
    once: true, 
    amount: threshold 
  });

  // 3. Control de animación
  const controls = useAnimation();

  // 4. MEJORA PRO: Detectamos si el usuario prefiere "movimiento reducido" en su sistema
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    // Si el usuario tiene desactivadas las animaciones en su PC/Móvil
    if (shouldReduceMotion) {
      // Lo mostramos instantáneamente sin efectos ("set" en vez de "start")
      controls.set("visible");
    } 
    // Si el usuario acepta animaciones y el elemento es visible
    else if (isInView) {
      // Iniciamos la animación suave
      controls.start("visible");
    }
  }, [isInView, controls, shouldReduceMotion]);

  return { ref, controls, inView: isInView };
};