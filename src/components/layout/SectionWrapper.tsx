import React from 'react';
import {cn} from "../../utils/classNames";

interface Props {
    children: React.ReactNode;
    id: string; //identificador para la navegacion 
    className?: string;
}

export const SectionWrapper = ({children, id, className}:Props) => {
    return(
        <section
        id={id}
        className={cn(
            //estilo base
            "mx-auto w-full max-w-7xl px-6 py-20 md:px-12 md:py-32",
            className
        )}
        >
            {children}
        </section>
    );
};