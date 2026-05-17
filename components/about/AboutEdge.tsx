"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Rocket, Users } from "lucide-react";
import { EDGE_POINTS } from "@/constants/aboutData";

export const AboutEdge = () => {
    return (
        <section className="px-4 py-24 md:py-36 bg-background/50 relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
                    <div className="lg:col-span-7">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400 mb-6"
                        >
                            <Rocket size={14} /> Our Edge
                        </motion.div>
                        <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold font-heading mb-6 md:mb-8 tracking-tight">
                            Backed by leadership with <span className="text-indigo-500">20+ years</span> of experience
                        </h2>
                        <p className="text-base md:text-xl text-muted-foreground leading-relaxed mb-10">
                            Our team brings together decades of hands-on experience working across complex systems, large-scale platforms, and high-growth environments.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {EDGE_POINTS.map((point, i) => (
                                <EdgePointItem key={i} point={point} index={i} />
                            ))}
                        </div>
                    </div>

                    <ExperienceCard />
                </div>
            </div>
        </section>
    );
};

const EdgePointItem = ({ point, index }: { point: string, index: number }) => (
    <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1 }}
        className="flex items-center gap-3 p-4 rounded-2xl bg-card border border-border group hover:border-indigo-500/30 transition-all"
    >
        <CheckCircle2 className="text-indigo-500 shrink-0" size={20} />
        <span className="text-sm font-medium">{point}</span>
    </motion.div>
);

const ExperienceCard = () => (
    <div className="lg:col-span-5 relative">
        <div className="aspect-square rounded-[3rem] bg-indigo-500/5 border border-indigo-500/10 flex items-center justify-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-linear-to-br from-indigo-500/10 via-transparent to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            <Users size={120} className="text-indigo-500/40" />
            <div className="absolute bottom-8 left-8 right-8 bg-card/80 backdrop-blur-xl border border-border p-6 rounded-2xl">
                <p className="text-xs font-mono text-indigo-400 mb-1 uppercase tracking-widest text-[10px]">Experience</p>
                <p className="text-2xl font-bold">Scaling Excellence</p>
            </div>
        </div>
    </div>
);
