"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    Code2,
    Rocket,
    BrainCircuit,
    TrendingUp,
    HeartHandshake,
    Compass,
} from "lucide-react";
import { GlowCard } from "./GlowCard";
import {
    ScaleOnScroll,
    StaggerContainer,
    StaggerItem,
    TextReveal,
    FloatingCard,
    SlideReveal,
    SectionDivider,
} from "./ScrollEffects";

const SERVICES = [
    {
        icon: Code2,
        title: "Technology & Digital Solutions",
        description:
            "Custom software, web & mobile apps, cloud migration, and full-stack development for enterprise needs.",
        color: "text-indigo-400",
        bg: "bg-indigo-500/10",
    },
    {
        icon: Rocket,
        title: "End-to-End Project Implementation",
        description:
            "From requirement gathering to go-live — agile execution with transparent milestones.",
        color: "text-cyan-400",
        bg: "bg-cyan-500/10",
    },
    {
        icon: BrainCircuit,
        title: "AI, Data & Advanced Analytics",
        description:
            "Machine learning, predictive analytics, BI dashboards, and intelligent chatbots.",
        color: "text-blue-400",
        bg: "bg-blue-500/10",
    },
    {
        icon: TrendingUp,
        title: "Digital Marketing & Growth",
        description:
            "Performance marketing, SEO, social media strategy, and data-driven content.",
        color: "text-indigo-400",
        bg: "bg-indigo-500/10",
    },
    {
        icon: HeartHandshake,
        title: "Customer Experience Transformation",
        description:
            "Journey mapping, CX strategy, and omnichannel design for delightful user experiences.",
        color: "text-cyan-400",
        bg: "bg-cyan-500/10",
    },
    {
        icon: Compass,
        title: "Consulting & Strategy",
        description:
            "Strategic advisory for digital transformation, product strategy, and tech roadmaps.",
        color: "text-blue-400",
        bg: "bg-blue-500/10",
    },
];

export default function Services() {
    return (
        <section
            id="services"
            className="relative z-10 bg-background px-4 py-28 md:px-6 md:py-36"
        >
            {/* Background accent */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_50%,rgba(99,102,241,0.04),transparent)]" />

            <div className="relative mx-auto max-w-6xl">
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
                        Our Core Services
                    </motion.div>

                    <ScaleOnScroll>
                        <h2 className="text-4xl font-bold font-heading tracking-tight text-foreground md:text-5xl">
                            <TextReveal text="Comprehensive Solutions for" />{" "}
                            <TextReveal text="Every Challenge" gradient />
                        </h2>
                    </ScaleOnScroll>

                    <motion.p
                        initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
                        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground"
                    >
                        Full-spectrum technology services to help enterprises innovate, scale,
                        and stay ahead.
                    </motion.p>
                </div>

                {/* Bento Grid */}
                <StaggerContainer
                    className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3"
                    staggerDelay={0.1}
                >
                    {SERVICES.map((service, idx) => (
                        <StaggerItem key={service.title}>
                            <FloatingCard>
                                <GlowCard className="h-full p-7">
                                    <div
                                        className={`mb-5 inline-flex rounded-xl ${service.bg} p-3`}
                                    >
                                        <service.icon size={24} className={service.color} />
                                    </div>
                                    <h3 className="text-lg font-bold text-foreground mb-2.5">
                                        {service.title}
                                    </h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        {service.description}
                                    </p>

                                    {/* Decorative line */}
                                    <div className="mt-6 h-px w-full bg-linear-to-r from-transparent via-foreground/6 to-transparent" />

                                    <div className="mt-4 flex items-center gap-2 text-xs font-medium text-indigo-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                        <span>Learn more</span>
                                        <svg
                                            width="12"
                                            height="12"
                                            viewBox="0 0 12 12"
                                            fill="none"
                                            className="transition-transform group-hover:translate-x-0.5"
                                        >
                                            <path
                                                d="M4.5 3L7.5 6L4.5 9"
                                                stroke="currentColor"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>
                                </GlowCard>
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
