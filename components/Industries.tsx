"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import {
    Landmark,
    ShoppingCart,
    HeartPulse,
    GraduationCap,
    Factory,
    Plane,
    ChevronRight,
} from "lucide-react";
import {
    ScaleOnScroll,
    StaggerContainer,
    StaggerItem,
    TextReveal,
    FloatingCard,
} from "./ScrollEffects";

const INDUSTRIES = [
    {
        icon: Landmark,
        title: "Financial Services",
        description: "Digital banking, risk analytics, and fintech innovation.",
        color: "text-indigo-400",
        bg: "bg-indigo-500/10",
        gradient: "from-indigo-600/20",
        xDir: -1,
        yDir: -1,
    },
    {
        icon: ShoppingCart,
        title: "Retail & E-commerce",
        description: "Omnichannel commerce and inventory intelligence.",
        color: "text-cyan-400",
        bg: "bg-cyan-500/10",
        gradient: "from-cyan-600/20",
        xDir: 0,
        yDir: -1.5,
    },
    {
        icon: HeartPulse,
        title: "Healthcare & Life Sciences",
        description: "EHR systems, telemedicine, and HIPAA compliance.",
        color: "text-blue-400",
        bg: "bg-blue-500/10",
        gradient: "from-blue-600/20",
        xDir: 1,
        yDir: -1,
    },
    {
        icon: GraduationCap,
        title: "Education & EdTech",
        description: "LMS platforms and adaptive learning systems.",
        color: "text-indigo-400",
        bg: "bg-indigo-500/10",
        gradient: "from-indigo-600/20",
        xDir: -1,
        yDir: 1,
    },
    {
        icon: Factory,
        title: "Manufacturing & Logistics",
        description: "IoT-driven operations and supply chain optimization.",
        color: "text-cyan-400",
        bg: "bg-cyan-500/10",
        gradient: "from-cyan-600/20",
        xDir: 0,
        yDir: 1.5,
    },
    {
        icon: Plane,
        title: "Travel & Hospitality",
        description: "Booking engines and revenue management systems.",
        color: "text-blue-400",
        bg: "bg-blue-500/10",
        gradient: "from-blue-600/20",
        xDir: 1,
        yDir: 1,
    },
];

// Custom hook that tracks screen size with proper SSR handling
function useIsDesktop(breakpoint = 1024) {
    const [isDesktop, setIsDesktop] = useState<boolean | null>(null);

    useEffect(() => {
        const check = () => setIsDesktop(window.innerWidth >= breakpoint);
        check();
        window.addEventListener("resize", check);
        return () => window.removeEventListener("resize", check);
    }, [breakpoint]);

    return isDesktop;
}

// ─── SECTION HEADER (shared between both views) ───
function IndustriesHeader() {
    return (
        <div className="relative z-20 mb-12 text-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-4 inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/6 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-indigo-400"
            >
                <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 animate-pulse" />
                Industries We Serve
            </motion.div>

            <ScaleOnScroll>
                <h2 className="text-4xl font-bold font-heading tracking-tight text-foreground md:text-5xl leading-tight">
                    <TextReveal text="Industries" />{" "}
                    <TextReveal text="We Serve" gradient />
                </h2>
            </ScaleOnScroll>
        </div>
    );
}

// ─── INDUSTRY CARD (shared card UI) ───
function IndustryCardContent({ industry }: { industry: (typeof INDUSTRIES)[0] }) {
    return (
        <div className="h-full p-6 md:p-8 rounded-3xl border border-border bg-card backdrop-blur-xl group-hover:border-indigo-500/20 transition-all duration-500 overflow-hidden relative">
            <div className={`absolute inset-0 bg-linear-to-br ${industry.gradient} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />

            <div className={`mb-5 md:mb-6 inline-flex rounded-xl ${industry.bg} p-3 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6 relative z-10`}>
                <industry.icon size={26} className={industry.color} />
            </div>

            <h3 className="text-lg md:text-xl font-bold text-foreground mb-2.5 md:mb-3 tracking-tight relative z-10">
                {industry.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4 md:mb-6 relative z-10">
                {industry.description}
            </p>

            <div className="mt-auto flex items-center text-[10px] font-bold tracking-widest text-muted-foreground/50 group-hover:text-foreground transition-colors uppercase relative z-10">
                View Details <ChevronRight size={14} className="ml-1" />
            </div>
        </div>
    );
}

// ─── DESKTOP: Sticky + Shutter fly-away animation ───
function DesktopIndustries() {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 80,
        damping: 25,
        restDelta: 0.001,
    });

    const contentScale = useTransform(smoothProgress, [0.3, 0.9], [0.9, 1]);
    const contentOpacity = useTransform(smoothProgress, [0.4, 0.8], [0, 1]);
    const sectionOpacity = useTransform(smoothProgress, [0.95, 1], [1, 0.8]);

    return (
        <section
            id="industries"
            ref={containerRef}
            className="relative z-10 h-[150vh] bg-background py-12"
        >
            <motion.div
                style={{ opacity: sectionOpacity }}
                className="sticky top-0 h-screen w-full overflow-hidden flex flex-col items-center justify-center px-4"
            >
                {/* Revealed CTA underneath */}
                <motion.div
                    style={{ scale: contentScale, opacity: contentOpacity }}
                    className="absolute z-0 text-center max-w-4xl px-6"
                >
                    <h2 className="bg-linear-to-b from-white/10 to-transparent bg-clip-text text-transparent text-9xl font-black tracking-tighter uppercase select-none leading-none mb-4">
                        TRIVEDA
                    </h2>
                    <div className="relative z-10">
                        <h3 className="text-foreground text-5xl font-bold mb-6 tracking-tight">
                            Ready to Lead Your Industry?
                        </h3>
                        <p className="text-muted-foreground text-xl font-light max-w-2xl mx-auto mb-10">
                            Our cross-domain expertise ensures your solution isn't just functional, but market-leading.
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <button className="bg-foreground text-background px-8 py-3 rounded-full font-bold hover:scale-105 transition-all">
                                Get Started
                            </button>
                            <button className="border border-border text-foreground px-8 py-3 rounded-full font-bold hover:bg-accent transition-colors">
                                Our Process
                            </button>
                        </div>
                    </div>
                </motion.div>

                <IndustriesHeader />

                {/* Grid with shutter animation */}
                <div className="relative z-10 grid grid-cols-3 gap-6 max-w-6xl w-full">
                    {INDUSTRIES.map((industry, i) => (
                        <DesktopShutterCard
                            key={industry.title}
                            industry={industry}
                            progress={smoothProgress}
                            index={i}
                        />
                    ))}
                </div>

                {/* Vignette */}
                <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,var(--background)_100%)] opacity-60 z-20 dark:block hidden" />
            </motion.div>
        </section>
    );
}

function DesktopShutterCard({ industry, progress, index }: { industry: (typeof INDUSTRIES)[0]; progress: any; index: number }) {
    const delay = index * 0.04;
    const startAt = 0.0 + delay;
    const endAt = 0.95 + delay;

    const x = useTransform(progress, [startAt, endAt], [0, industry.xDir * 1800]);
    const y = useTransform(progress, [startAt, endAt], [0, industry.yDir * 1800]);
    const rotate = useTransform(progress, [startAt, endAt], [0, industry.xDir * 45]);
    const opacity = useTransform(progress, [startAt, endAt - 0.25], [1, 0]);
    const scale = useTransform(progress, [startAt, endAt], [1, 2.5]);

    return (
        <motion.div style={{ x, y, rotate, opacity, scale }} className="h-full group">
            <IndustryCardContent industry={industry} />
        </motion.div>
    );
}

// ─── MOBILE/TABLET: Normal scroll, no sticky, all cards visible ───
function MobileIndustries() {
    return (
        <section
            id="industries"
            className="relative z-10 bg-background px-4 py-12 md:py-16"
        >
            <div className="mx-auto max-w-6xl">
                <IndustriesHeader />

                <StaggerContainer
                    className="grid grid-cols-1 md:grid-cols-2 gap-5"
                    staggerDelay={0.08}
                >
                    {INDUSTRIES.map((industry) => (
                        <StaggerItem key={industry.title}>
                            <FloatingCard className="h-full">
                                <div className="group">
                                    <IndustryCardContent industry={industry} />
                                </div>
                            </FloatingCard>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </div>
        </section>
    );
}

// ─── MAIN EXPORT: Renders desktop or mobile version ───
export default function Industries() {
    const isDesktop = useIsDesktop(1024);

    // Before mount (SSR / hydration), render a simple placeholder that matches both
    if (isDesktop === null) {
        return (
            <section id="industries" className="relative z-10 bg-background px-4 py-12 md:py-16">
                <div className="mx-auto max-w-6xl">
                    <IndustriesHeader />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {INDUSTRIES.map((industry) => (
                            <div key={industry.title} className="group">
                                <IndustryCardContent industry={industry} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    }

    return isDesktop ? <DesktopIndustries /> : <MobileIndustries />;
}
