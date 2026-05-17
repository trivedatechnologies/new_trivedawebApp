"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Layers } from "lucide-react";
import { TextReveal } from "@/components/ScrollEffects";

/**
 * CaseStudyHero Component
 * Enhanced with a premium, multi-layered background and staggered reveal.
 */
export const CaseStudyHero = () => {
    return (
        <section className="relative px-4 py-24 md:py-40 text-center overflow-hidden">
            {/* Premium Background Elements */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] bg-indigo-500/5 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute top-[20%] -right-[10%] w-[50%] h-[50%] bg-blue-500/5 rounded-full blur-[100px]" />
                <div 
                    className="absolute inset-0 opacity-[0.03]" 
                    style={{ 
                        backgroundImage: "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 1px, transparent 0)",
                        backgroundSize: "40px 40px"
                    }}
                />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-indigo-500/20 bg-indigo-500/5 px-5 py-2 text-xs font-bold uppercase tracking-[0.3em] text-indigo-400 backdrop-blur-md shadow-lg shadow-indigo-500/5"
                >
                    <Sparkles size={14} className="animate-pulse" />
                    Our Success Stories
                </motion.div>
                
                <h1 className="text-3xl sm:text-4xl md:text-8xl lg:text-9xl font-black font-heading tracking-tighter leading-[0.9] mb-10">
                    <TextReveal text="Delivering Measurable" /> <br className="hidden md:block" />
                    <TextReveal text="Business Impact" gradient />
                </h1>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="relative inline-block"
                >
                    <p className="max-w-2xl mx-auto text-lg md:text-2xl text-muted-foreground leading-relaxed font-light">
                        Real stories of how we've helped businesses design, build, and scale world-class technology solutions.
                    </p>
                    <div className="mt-8 flex items-center justify-center gap-4 text-xs font-mono uppercase tracking-widest text-indigo-400/60">
                        <span className="h-px w-8 bg-indigo-400/20" />
                        <Layers size={14} />
                        Explore Our Portfolio
                        <span className="h-px w-8 bg-indigo-400/20" />
                    </div>
                </motion.div>
            </div>
            
            {/* Scroll Indicator or decorative line */}
            <motion.div 
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 100, opacity: 1 }}
                transition={{ duration: 1.5, delay: 1 }}
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px bg-linear-to-b from-transparent via-indigo-500/50 to-transparent hidden md:block"
            />
        </section>
    );
};

