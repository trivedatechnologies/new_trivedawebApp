"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    GraduationCap,
    Layers,
    Bot,
    Zap,
    ShieldCheck,
    TrendingUp,
} from "lucide-react";
import {
    ScaleOnScroll,
    StaggerContainer,
    StaggerItem,
    TextReveal,
    FloatingCard,
    SlideReveal,
    SectionDivider,
} from "./ScrollEffects";

const ADVANTAGES = [
    {
        icon: GraduationCap,
        title: "IIM & IIT alumni leadership",
        description:
            "Guided by leaders from India's most prestigious institutions with decades of industry expertise.",
        color: "from-indigo-500 to-blue-500",
    },
    {
        icon: Layers,
        title: "End-to-End Ownership",
        description:
            "From ideation to execution and scaling — we handle everything.",
        color: "from-cyan-500 to-blue-500",
    },
    {
        icon: Bot,
        title: "AI-First Approach",
        description:
            "We embed intelligence into every solution we build.",
        color: "from-blue-500 to-indigo-500",
    },
    {
        icon: Zap,
        title: "Faster Time-to-Market",
        description:
            "Agile execution ensures rapid delivery without compromising quality.",
        color: "from-indigo-500 to-cyan-500",
    },
    {
        icon: ShieldCheck,
        title: "Enterprise-Grade Execution",
        description:
            "Scalable, secure, and robust solutions designed for long-term growth.",
        color: "from-cyan-500 to-indigo-500",
    },
    {
        icon: TrendingUp,
        title: "Growth-Focused Thinking",
        description:
            "Every solution is aligned with business outcomes and ROI.",
        color: "from-blue-500 to-cyan-500",
    },
];

export default function Advantages() {
    return (
        <section
            id="advantages"
            className="relative z-10 bg-background px-4 py-16 md:px-6 md:py-20 border-t border-border"
        >
            <div className="mx-auto max-w-6xl">
                {/* Section Header */}
                <div className="mb-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-4 inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/6 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-indigo-400"
                    >
                        <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 animate-pulse" />
                        Why Choose Us
                    </motion.div>

                    <ScaleOnScroll>
                        <h2 className="text-4xl font-bold font-heading tracking-tight text-foreground md:text-5xl">
                            <TextReveal text="Why Choose" />{" "}
                            <TextReveal text="Triveda?" gradient />
                        </h2>
                    </ScaleOnScroll>

                    <motion.p
                        initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
                        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground"
                    >
                        We combine institutional excellence with a commitment to delivery and growth.
                    </motion.p>
                </div>

                {/* Grid — Alternating slide-in from left and right */}
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                    {ADVANTAGES.map((adv, idx) => (
                        <SlideReveal
                            key={adv.title}
                            direction="up"
                            delay={idx * 0.08}
                        >
                            <FloatingCard className="h-full">
                                <div className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 backdrop-blur-xl transition-all duration-500 hover:border-indigo-500/20 h-full">
                                    {/* Number */}
                                    <div className="absolute top-6 right-6 text-5xl font-black text-foreground/5 select-none">
                                        0{idx + 1}
                                    </div>

                                    <div
                                        className={`mb-5 inline-flex rounded-2xl bg-linear-to-br ${adv.color} p-3 text-white shadow-lg`}
                                    >
                                        <adv.icon size={22} />
                                    </div>

                                    <h3 className="text-lg font-bold text-foreground mb-2.5">
                                        {adv.title}
                                    </h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        {adv.description}
                                    </p>
                                </div>
                            </FloatingCard>
                        </SlideReveal>
                    ))}
                </div>
            </div>

            <div className="mt-16">
                <SectionDivider />
            </div>
        </section>
    );
}
