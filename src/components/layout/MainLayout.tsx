import React from "react";
import { Sidebar } from "lucide-react";

interface Props {
    children: React.ReactNode;
}

export const MainLayout  = ({children}: Props) =>{
    return (
        <div className="min-h-screen bg-black text-white selection:bg-white/20">
            <div className="mx-auto max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
                <div className="lg:flex lg:justify-between lg:gap-4">
                    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
                    <Sidebar/>
                    </header>
                    <main className="pt-24 lg:w-1/2 lg:py-24">
                    {children}
                    </main>
                </div>
            </div>
        </div>
    );
};