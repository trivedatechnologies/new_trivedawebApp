"use client";

import React from "react";
import { Target, Compass } from "lucide-react";

/**
 * MissionVisionSection Component
 * Visualizing the core goals and long-term aspirations of the organization.
 */
export const MissionVisionSection = () => {
    return (
        <section className="px-4 py-24 md:py-36 bg-indigo-500/5 relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-center md:text-left">
                    <VisionCard 
                        icon={Target}
                        title="Our Mission"
                        desc="To empower businesses with scalable, intelligent, and future-ready technology solutions."
                        colorClass="text-indigo-500"
                    />
                    <VisionCard 
                        icon={Compass}
                        title="Our Vision"
                        desc="To become a trusted global partner for digital transformation, AI innovation, and growth acceleration."
                        colorClass="text-cyan-500"
                        showIconBg
                    />
                </div>
            </div>
        </section>
    );
};

interface VisionCardProps {
    icon: any;
    title: string;
    desc: string;
    colorClass: string;
    showIconBg?: boolean;
}

const VisionCard = ({ icon: Icon, title, desc, colorClass, showIconBg }: VisionCardProps) => (
    <div className="h-full p-8 md:p-12 rounded-[2.5rem] md:rounded-[3.5rem] bg-card/40 backdrop-blur-md border border-border/60 relative overflow-hidden group transition-all hover:border-indigo-500/20">
        {showIconBg && (
            <div className={`absolute -top-10 -right-10 p-8 opacity-[0.05] transition-transform duration-700 group-hover:scale-110 group-hover:rotate-12 ${colorClass}`}>
                <Icon size={240} />
            </div>
        )}
        <div className={`w-14 h-14 rounded-2xl bg-background border border-border flex items-center justify-center mb-8 shadow-sm ${colorClass}`}>
            <Icon size={28} />
        </div>
        <h3 className={`text-[10px] font-black tracking-[0.4em] ${colorClass} mb-4 uppercase opacity-80`}>
            {title}
        </h3>
        <p className="text-xl md:text-2xl font-bold leading-tight tracking-tight text-foreground/90">
            {desc}
        </p>
    </div>
);
