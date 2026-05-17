"use client";

import React from "react";
import { motion } from "framer-motion";
import { Compass, Target, ArrowRight } from "lucide-react";
import { TextReveal, SlideReveal } from "@/components/ScrollEffects";

/**
 * AboutHero Component
 * Displays the main focus and introductory value proposition of Triveda.
 */
export const AboutHero = () => {
    return (
        <section className="relative px-4 py-24 md:py-32 overflow-hidden bg-transparent">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-indigo-400"
                >
                    <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
                    About Triveda Technologies
                </motion.div>
                
                <h1 className="text-3xl sm:text-4xl md:text-7xl lg:text-8xl font-black font-heading tracking-tighter leading-none mb-8 md:mb-12">
                    <TextReveal text="Built on Experience." /> <br className="hidden md:block" />
                    <TextReveal text="Driven by Innovation." gradient />
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mt-16 md:mt-24">
                    <SlideReveal direction="left">
                        <div className="space-y-8">
                            <p className="text-lg md:text-2xl text-muted-foreground leading-relaxed font-medium">
                                At Triveda Technologies, we combine deep industry experience with modern technology to build solutions that truly move businesses forward.
                            </p>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                We are not just another tech services company — we are a strategic technology partner helping organizations design, build, and scale impactful digital products, AI solutions, and growth systems.
                            </p>
                        </div>
                    </SlideReveal>

                    <SlideReveal direction="right">
                        <div className="bg-card/40 backdrop-blur-2xl border border-border p-8 md:p-12 rounded-[2.5rem] shadow-sm relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-8 h-full flex items-center opacity-5">
                                <Target size={200} className="text-indigo-500" />
                            </div>
                            <h3 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 flex items-center gap-3">
                                <Compass className="text-indigo-500" /> Our Approach
                            </h3>
                            <ul className="space-y-6">
                                <ApproachItem label="Understand the business deeply" desc="Strategic alignment with your goals" />
                                <ApproachItem label="Build scalable and future-ready solutions" desc="Engineering for the next decade" />
                                <ApproachItem label="Deliver measurable outcomes" desc="Focus on ROI and impact" />
                            </ul>
                        </div>
                    </SlideReveal>
                </div>
            </div>
        </section>
    );
};

const ApproachItem = ({ label, desc }: { label: string; desc: string }) => (
    <li className="flex gap-4 items-start">
        <div className="p-1 rounded-md bg-indigo-500/10 text-indigo-500 mt-1">
            <ArrowRight size={14} />
        </div>
        <div>
            <p className="font-bold text-foreground">{label}</p>
            <p className="text-sm text-muted-foreground">{desc}</p>
        </div>
    </li>
);
