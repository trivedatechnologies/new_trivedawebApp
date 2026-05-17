"use client";

import React from "react";
import { BrainCircuit } from "lucide-react";
import { PHILOSOPHY_PILLARS, WHO_WE_WORK_WITH } from "@/constants/aboutData";

/**
 * PhilosophySection Component
 * Outlines the core principles and business-centric thinking of Triveda.
 */
export const PhilosophySection = () => {
    return (
        <section className="px-4 py-24 md:py-36">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
                    {/* Core Philosophy */}
                    <div>
                        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold font-heading mb-12 tracking-tight flex items-center gap-4">
                            <BrainCircuit className="text-indigo-500" /> Our Philosophy
                        </h2>
                        <p className="text-lg md:text-xl text-muted-foreground mb-12 leading-relaxed">
                            We don’t just build technology — we build solutions that drive business outcomes. At Triveda Technologies, every project is approached with:
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {PHILOSOPHY_PILLARS.map((pillar, i) => (
                                <PhilosophyCard key={i} pillar={pillar} />
                            ))}
                        </div>
                        <p className="mt-12 text-2xl font-bold bg-linear-to-r from-indigo-500 to-cyan-500 bg-clip-text text-transparent italic">
                            "Technology should not just support your business — it should accelerate it."
                        </p>
                    </div>

                    {/* Who We Work With */}
                    <div>
                        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold font-heading mb-12 tracking-tight">Who We Work With</h2>
                        <div className="space-y-6">
                            {WHO_WE_WORK_WITH.map((item, i) => (
                                <ClientCategoryCard key={i} item={item} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const PhilosophyCard = ({ pillar }: { pillar: any }) => (
    <div className="p-6 rounded-2xl bg-card border border-border group hover:border-indigo-500/30 transition-all shadow-sm">
        <pillar.icon className="text-indigo-500 mb-4 transition-transform group-hover:scale-110" size={32} />
        <h4 className="font-bold text-lg">{pillar.title}</h4>
    </div>
);

const ClientCategoryCard = ({ item }: { item: any }) => (
    <div className="p-8 rounded-[2rem] bg-card/60 backdrop-blur-xl border border-border flex gap-6 items-center group shadow-md transition-all hover:scale-[1.02]">
        <div className="h-16 w-16 rounded-2xl bg-indigo-500/10 flex items-center justify-center shrink-0 group-hover:bg-indigo-500 text-indigo-500 group-hover:text-white transition-all shadow-inner">
            <item.icon size={28} />
        </div>
        <div>
            <h4 className="text-xl font-bold mb-1">{item.title}</h4>
            <p className="text-muted-foreground">{item.desc}</p>
        </div>
    </div>
);
