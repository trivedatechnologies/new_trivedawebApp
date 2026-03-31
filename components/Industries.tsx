"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
    Landmark,
    ShoppingCart,
    HeartPulse,
    GraduationCap,
    Factory,
    Plane,
    TrendingUp,
} from "lucide-react";
import { ScaleOnScroll, TextReveal } from "./ScrollEffects";

const INDUSTRIES = [
    {
        id: "finance",
        icon: Landmark,
        title: "Financial Services",
        description: "Modernizing banking, risk analytics, and fintech ecosystems with secure, scalable digital infrastructure.",
        color: "text-indigo-500",
        bg: "bg-indigo-500/10",
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&q=80",
        tags: ["Fintech", "Security", "Analytics"],
    },
    {
        id: "retail",
        icon: ShoppingCart,
        title: "Retail & E-commerce",
        description: "Transforming omnichannel retail with intelligent inventory management and personalized consumer experiences.",
        color: "text-indigo-500",
        bg: "bg-indigo-500/10",
        image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
        tags: ["D2C", "Inventory", "Omnichannel"],
    },
    {
        id: "healthcare",
        icon: HeartPulse,
        title: "Healthcare & Life Sciences",
        description: "Engineering secure EHR systems, telemedicine platforms, and AI-driven diagnostic tools for modern medicine.",
        color: "text-indigo-500",
        bg: "bg-indigo-500/10",
        image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=1200&q=80",
        tags: ["HIPAA", "EHR", "Telehealth"],
    },
    {
        id: "education",
        icon: GraduationCap,
        title: "Education & EdTech",
        description: "Reimagining learning with adaptive LMS platforms, interactive portals, and seamless institutional management.",
        color: "text-indigo-500",
        bg: "bg-indigo-500/10",
        image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&q=80",
        tags: ["LMS", "Adaptive", "Engagement"],
    },
    {
        id: "manufacturing",
        icon: Factory,
        title: "Manufacturing & Logistics",
        description: "Optimizing supply chains and industrial workflows through IoT integration and real-time operational intelligence.",
        color: "text-indigo-500",
        bg: "bg-indigo-500/10",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&q=80",
        tags: ["IoT", "Logistics", "SCM"],
    },
    {
        id: "travel",
        icon: Plane,
        title: "Travel & Hospitality",
        description: "Streamlining guest journeys with high-performance booking engines and automated revenue management systems.",
        color: "text-indigo-500",
        bg: "bg-indigo-500/10",
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=80",
        tags: ["Booking", "Revenue", "Platform"],
    },
];

function Card({ industry, index }: { industry: typeof INDUSTRIES[0]; index: number }) {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "start start"]
    });

    // Entrance animation: matures much earlier (halfway through the approach)
    const scale = useTransform(scrollYProgress, [0, 0.4], [0.95, 1]);
    const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
    const blur = useTransform(scrollYProgress, [0, 0.4], [10, 0]);
    
    // Fast & Smooth Side-Reveal: alternating between left and right
    const xOffset = useTransform(
        scrollYProgress, 
        [0, 0.5], 
        [index % 2 === 0 ? -150 : 150, 0]
    );

    // Each card sticks at a slightly lower position, creating the stacked deck effect
    const stickyTop = 80 + index * 20;

    return (
        <div
            ref={containerRef}
            className="sticky px-4 md:px-6"
            style={{
                top: `${stickyTop}px`,
                zIndex: 10 + index,
                paddingBottom: index === INDUSTRIES.length - 1 ? "5vh" : "6vh",
            }}
        >
            <motion.div
                style={{
                    scale,
                    opacity,
                    x: xOffset,
                    filter: useTransform(blur, (v: number) => `blur(${v}px)`),
                }}
                className={`relative w-full max-w-6xl mx-auto bg-card border border-border/80 rounded-[2rem] md:rounded-[3rem] overflow-hidden flex flex-col ${index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"} shadow-2xl shadow-indigo-500/10 group transform-gpu`}
            >
                {/* Left Side: Content */}
                <div className="flex-[1.2] p-6 md:p-10 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-5 md:mb-6">
                        <div className={`p-3 rounded-2xl ${industry.bg} group-hover:scale-110 transition-transform duration-300`}>
                            <industry.icon size={24} className={industry.color} />
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-indigo-500">
                            Target Sector
                        </span>
                    </div>

                    <h3 className="text-3xl md:text-5xl font-black font-heading tracking-tighter text-foreground mb-4 md:mb-5 leading-none">
                        {industry.title}
                    </h3>

                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-6 md:mb-8 max-w-xl font-medium">
                        {industry.description}
                    </p>

                    <div className="flex flex-wrap gap-2 md:gap-3">
                        {industry.tags.map((tag) => (
                            <span
                                key={tag}
                                className="px-3 py-1.5 rounded-xl border border-indigo-500/10 bg-indigo-500/5 text-[10px] font-bold uppercase tracking-wider text-indigo-400/80"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Right Side: Image */}
                <div className="flex-1 relative min-h-[250px] md:min-h-[400px] overflow-hidden">
                    <img
                        src={industry.image}
                        alt={industry.title}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className={`absolute inset-0 bg-linear-to-r ${index % 2 === 1 ? "from-transparent via-card/5 to-card" : "from-card via-card/5 to-transparent"}`} />

                    {/* Floating Badge */}
                    <div className={`absolute bottom-5 ${index % 2 === 1 ? "left-5" : "right-5"} p-4 bg-background/60 backdrop-blur-xl border border-white/10 rounded-xl flex items-center justify-between shadow-lg`}>
                        <div className={index % 2 === 1 ? "mr-4" : ""}>
                            <p className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground mb-0.5">
                                Impact Level
                            </p>
                            <p className="text-sm font-black text-foreground">Transformative</p>
                        </div>
                        <div className={`h-8 w-8 flex items-center justify-center bg-indigo-500 rounded-full ${index % 2 === 1 ? "order-first mr-4" : ""}`}>
                            <TrendingUp size={16} className="text-white" />
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

export default function Industries() {
    return (
        <section id="industries" className="relative bg-background border-t border-border/50">
            {/* Header */}
            <div className="max-w-7xl mx-auto px-4 pt-20 pb-12 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-4 inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/6 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.3em] text-indigo-400"
                >
                    <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 animate-pulse" />
                    Industries We Serve
                </motion.div>
                
                <ScaleOnScroll>
                    <h2 className="text-4xl md:text-6xl font-black font-heading tracking-tighter text-foreground mb-6 leading-tight">
                        <TextReveal text="Industries" />{" "}
                        <TextReveal text="We Serve" gradient />
                    </h2>
                </ScaleOnScroll>

                <div className="h-px w-24 bg-linear-to-r from-transparent via-indigo-500 to-transparent mx-auto" />
            </div>

            {/* Stacking Cards */}
            <div className="relative pb-20">
                {INDUSTRIES.map((industry, i) => (
                    <Card key={industry.id} industry={industry} index={i} />
                ))}
            </div>
        </section>
    );
}
