import React from "react";
import { cn } from "../../utils/classNames";

// Defino las diferentes opciones que tendrá el botón
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    
    // Estilos base siempre se aplicaran
    const baseStyles = "inline-flex items-center justify-center rounded-xl font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent disabled:opacity-50 disabled:pointer-events-none";
    
    //  Variantes de color
    const variants = {
      primary: "bg-white text-black hover:bg-gray-200 shadow-lg shadow-white/10", 
      outline: "border border-white/10 bg-transparent hover:bg-white/5 text-white", 
      ghost: "hover:bg-white/10 text-white", 
    };

    // Variantes de tamaño
    const sizes = {
      sm: "h-9 px-4 text-sm",
      md: "h-11 px-8 text-base",
      lg: "h-14 px-10 text-lg",
    };

    return (
      <button
        ref={ref}
        className={cn(
          baseStyles, 
          variants[variant], 
          sizes[size], 
          className 
        )}
        {...props} 
      />
    );
  }
);

Button.displayName = "Button";