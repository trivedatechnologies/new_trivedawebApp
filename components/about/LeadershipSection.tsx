"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Sparkles } from "lucide-react";
import { LEADERSHIP_EXPERIENCE } from "@/constants/aboutData";

/**
 * LeadershipSection Component
 * Deep dive into the specific achievements and capabilities of the leadership team.
 */
export const LeadershipSection = () => {
    return (
        <section className="px-4 py-24 md:py-36 bg-card/30 border-y border-border overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6 tracking-tight">Leadership Experience</h2>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto italic">
                        Our leadership has been part of the journey of building and scaling products used by thousands — and in some cases, millions — of users.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <ul className="space-y-4">
                        {LEADERSHIP_EXPERIENCE.map((item, i) => (
                            <LeadershipListItem key={i} item={item} index={i} />
                        ))}
                    </ul>
                    
                    <AgilityCard />
                </div>
            </div>
        </section>
    );
};

const LeadershipListItem = ({ item, index }: { item: string, index: number }) => (
    <motion.li 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: index * 0.1 }}
        className="flex gap-4 p-6 rounded-2xl border border-border bg-background/50 hover:bg-card transition-colors group"
    >
        <CheckCircle2 size={24} className="text-indigo-500 shrink-0 group-hover:scale-110 transition-transform" />
        <span className="text-base md:text-lg font-medium">{item}</span>
    </motion.li>
);

const AgilityCard = () => (
    <div className="bg-indigo-500/5 rounded-3xl p-8 md:p-12 border border-indigo-500/10 h-full flex flex-col justify-center">
        <div className="h-14 w-14 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-500 mb-8">
            <Sparkles size={32} />
        </div>
        <p className="text-lg md:text-2xl lg:text-4xl font-bold leading-tight">
            This depth of experience allows us to bring <span className="text-indigo-500">enterprise thinking</span> with <span className="text-cyan-500">startup agility</span>.
        </p>
    </div>
);
