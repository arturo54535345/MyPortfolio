import React from "react";
import {cn} from "../../utils/classNames";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
    ({className, ...props}, ref) => {
        return(
            <div
            ref={ref}
            className={cn(
                //estilos base de la tarjeta 
                "bg-card",//color del fondo casi transparente
                "border border-card-border",//borde sutil
                "roundend-2xl",//bordes bastante redondeados
                "backdrop-blur-md",//desenfoque del fondo
                "overflow-hidden",//para que la imagen no se salga de los bordes redondeados 
                className//si mas adelante quiero añadir mas clases podre hacerlo 
            )}
            {...props}
            />
        );
    }
);

Card.displayName = "Card";