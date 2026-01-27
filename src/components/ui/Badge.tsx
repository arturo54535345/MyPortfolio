import React from "react";
import { cn } from "../../utils/classNames";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
    variant?: "default" | "outline";
}
export const Badge = ({className, variant = "default", ...props}: BadgeProps) => {
    return (
        <span
        className={cn(
            //estilos base
            "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium transition-colors border",
            //variantes de color
            variant === "default" && "bg-white/10 text-white hover:bg-white/20 border-transparent",
            variant === "outline" && "text-white border-white/20",
            className
        )}
        {...props}
        />
    );
};