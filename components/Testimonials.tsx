"use client";

import React, { useState } from "react";
import { motion, useMotionValue, useTransform, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

import {
    TextReveal,
    ScaleOnScroll,
} from "./ScrollEffects";

interface TestimonialData {
    avatar: string;
    userId: string;
    quote: string;
    accentColor: string;
    statusText: string;
    company: string;
}

const TESTIMONIALS: TestimonialData[] = [
    {
        avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80",
        userId: "1024",
        quote: "Triveda's AI architecture transformed our data pipeline. Reliability and speed are now our core strengths. System status: Optimized.",
        accentColor: "#06b6d4",
        statusText: "AI_READY",
        company: "Nexus FinTech",
    },
    {
        avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
        userId: "8841",
        quote: "The cloud migration was seamless. Zero downtime and a 40% reduction in infrastructure costs. System status: Scaled.",
        accentColor: "#6366f1",
        statusText: "CLOUD_SYNC",
        company: "Stellar Cloud Solutions",
    },
    {
        avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80",
        userId: "5629",
        quote: "Their digital transformation strategy gave us the edge in a competitive market. Top-tier engineering. System status: Active.",
        accentColor: "#3b82f6",
        statusText: "SYS_ACTIVE",
        company: "Legacy Retail Group",
    },
    {
        avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80",
        userId: "3145",
        quote: "Frontend excellence. The user experience is lightyears ahead of what we had. System status: Enhanced.",
        accentColor: "#8b5cf6",
        statusText: "UX_PERFECT",
        company: "Aurora MedTech",
    },
    {
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
        userId: "7721",
        quote: "Expert consulting. They understood our enterprise needs perfectly from day one. System status: Verified.",
        accentColor: "#ec4899",
        statusText: "SEC_AUTH",
        company: "Titan Security",
    },
];

const HolographicCard = ({ data }: { data: TestimonialData }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useTransform(y, [-100, 100], [10, -10]);
    const rotateY = useTransform(x, [-100, 100], [-10, 10]);

    const handleMouseMove = (event: React.MouseEvent) => {
        const rect = event.currentTarget.getBoundingClientRect();
        x.set(event.clientX - rect.left - rect.width / 2);
        y.set(event.clientY - rect.top - rect.height / 2);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative shrink-0 w-[350px] md:w-[450px] bg-card backdrop-blur-md border border-border p-6 md:p-8 rounded-2xl shadow-[0_0_50px_rgba(99,102,241,0.03)] transition-colors hover:border-indigo-500/20"
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
                borderColor: `${data.accentColor}33`
            }}
        >
            <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
                <motion.div
                    className="w-full h-px shadow-[0_0_10px_rgba(255,255,255,1)]"
                    style={{ backgroundColor: `${data.accentColor}40` }}
                    animate={{ top: ["0%", "100%"] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                />
            </div>

            <div className="flex flex-col items-center text-center translate-z-10">
                <div className="relative mb-6">
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-[-8px] rounded-full border border-dashed opacity-30"
                        style={{ borderColor: data.accentColor }}
                    />
                    <div className="relative w-16 h-16 rounded-full overflow-hidden p-1 bg-card border border-border">
                        <img src={data.avatar} alt={data.userId} className="w-full h-full rounded-full object-cover grayscale brightness-125" />
                        <div className="absolute inset-0 mix-blend-color opacity-60" style={{ backgroundColor: data.accentColor }} />
                    </div>
                </div>

                <div className="mb-4 space-y-1">
                    <h3 className="font-mono text-[10px] tracking-[0.3em] uppercase" style={{ color: data.accentColor }}>
                        &lt;USER_ID: {data.userId} /&gt;
                    </h3>
                    <p className="text-[8px] font-mono opacity-40 uppercase tracking-widest leading-none text-muted-foreground">{data.company}</p>
                </div>

                <div className="relative mb-6 min-h-[80px]">
                    <p className="text-foreground/80 text-sm md:text-base font-light italic leading-relaxed">
                        "{data.quote}"
                    </p>
                </div>

                <div className="flex gap-1.5 mt-auto">
                    <div className="h-1 w-8 rounded-full animate-pulse" style={{ backgroundColor: data.accentColor }} />
                    <div className="h-1 w-2 rounded-full opacity-30" style={{ backgroundColor: data.accentColor }} />
                </div>
            </div>

            <div className="absolute top-4 left-4 w-2 h-2 border-t border-l border-border" />
            <div className="absolute bottom-4 right-4 w-2 h-2 border-b border-r border-border" />
            <div className="absolute top-4 right-4 text-[8px] font-mono tracking-tighter opacity-70" style={{ color: data.accentColor }}>
                {data.statusText}
            </div>
        </motion.div>
    );
};

export default function Testimonials() {
    return (
        <section
            id="testimonials"
            className="relative z-10 overflow-hidden bg-background py-28 md:py-36 border-t border-border"
        >
            {/* Background Atmosphere */}
            <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_120%,rgba(99,102,241,0.05),transparent_50%)]" />

            <div className="relative z-10 max-w-7xl mx-auto px-6 mb-16 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/6 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-indigo-400"
                >
                    <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 animate-pulse" />
                    Success Stories
                </motion.div>

                <ScaleOnScroll>
                    <h2 className="text-4xl font-bold font-heading tracking-tight text-foreground md:text-5xl lg:text-6xl">
                        <TextReveal text="Our" />{" "}
                        <TextReveal text="Testimonials" gradient />
                    </h2>
                </ScaleOnScroll>
            </div>

            {/* Marquee Row */}
            <div className="relative z-10 flex overflow-hidden mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                <motion.div
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        duration: 40,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="flex gap-6 py-10 pr-6"
                >
                    {/* Duplicated for infinite effect */}
                    {[...TESTIMONIALS, ...TESTIMONIALS].map((testimonial, i) => (
                        <HolographicCard
                            key={`${testimonial.userId}-${i}`}
                            data={testimonial}
                        />
                    ))}
                </motion.div>
            </div>

            {/* Sub-divider */}
            <div className="mt-20 opacity-20">
                <div className="h-px w-full bg-linear-to-r from-transparent via-foreground/10 to-transparent" />
            </div>
        </section>
    );
}
