"use client";

import React from "react";
import { motion } from "framer-motion";
import { Target, Lightbulb, ShieldCheck } from "lucide-react";
import {
    ScaleOnScroll,
    StaggerContainer,
    StaggerItem,
    TextReveal,
    FloatingCard,
    SectionDivider,
} from "./ScrollEffects";

const PILLARS = [
    {
        icon: Target,
        title: "Precision",
        description: "Data-driven strategies and meticulous execution for measurable outcomes.",
        color: "from-indigo-500 to-blue-500",
        glow: "rgba(99,102,241,0.15)",
    },
    {
        icon: Lightbulb,
        title: "Innovation",
        description:
            "Creating transformative digital experiences with cutting-edge technology.",
        color: "from-cyan-500 to-blue-500",
        glow: "rgba(6,182,212,0.15)",
    },
    {
        icon: ShieldCheck,
        title: "Trust",
        description:
            "Lasting partnerships built on transparency, reliability, and enterprise-grade security.",
        color: "from-blue-500 to-indigo-500",
        glow: "rgba(59,130,246,0.15)",
    },
];

export default function About() {
    return (
        <section
            id="about"
            className="relative z-10 bg-background px-4 py-28 md:px-6 md:py-36"
        >
            <div className="mx-auto max-w-6xl">
                {/* Section Header */}
                <div className="mb-20 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-4 inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/6 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-indigo-400"
                    >
                        <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 animate-pulse" />
                        About Us
                    </motion.div>

                    <ScaleOnScroll className="mx-auto max-w-4xl">
                        <h2 className="text-3xl font-bold font-heading tracking-tight text-foreground md:text-5xl lg:text-[3.5rem] leading-[1.1]">
                            <TextReveal text="Transforming Businesses Through" />{" "}
                            <br className="hidden md:block" />

                            <TextReveal text="Digital Excellence" gradient />
                        </h2>
                    </ScaleOnScroll>

                    <motion.p
                        initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
                        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground leading-relaxed"
                    >
                        Triveda Technologies specializes in enterprise-grade software, AI-driven
                        automation, and scalable cloud infrastructures. We transform complex
                        business challenges into elegant, scalable digital solutions.
                    </motion.p>
                </div>

                {/* Pillars */}
                <StaggerContainer className="grid grid-cols-1 gap-6 md:grid-cols-3" staggerDelay={0.15}>
                    {PILLARS.map((pillar) => (
                        <StaggerItem key={pillar.title}>
                            <FloatingCard>
                                <div
                                    className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 backdrop-blur-xl transition-all duration-500 hover:border-indigo-500/20 h-full"
                                >
                                    {/* Background glow */}
                                    <div
                                        className="absolute -top-20 -right-20 h-40 w-40 rounded-full blur-3xl transition-opacity duration-500 opacity-0 group-hover:opacity-100"
                                        style={{ background: pillar.glow }}
                                    />

                                    <div
                                        className={`mb-6 inline-flex rounded-2xl bg-linear-to-br ${pillar.color} p-3.5 text-white shadow-lg`}
                                    >
                                        <pillar.icon size={24} />
                                    </div>
                                    <h3 className="text-xl font-bold text-foreground mb-3">{pillar.title}</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        {pillar.description}
                                    </p>
                                </div>
                            </FloatingCard>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </div>

            <div className="mt-28">
                <SectionDivider />
            </div>
        </section>
    );
}
