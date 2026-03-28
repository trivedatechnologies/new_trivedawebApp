"use client";

import React, { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ParallaxSection, ScaleOnScroll } from "./ScrollEffects";

const STATS = [
    { value: 100, suffix: "+", label: "Projects Delivered" },
    { value: 50, suffix: "+", label: "Enterprise Clients" },
    { value: 98, suffix: "%", label: "Client Satisfaction" },
    { value: 24, suffix: "/7", label: "Support Availability" },
];

function AnimatedCounter({
    value,
    suffix,
}: {
    value: number;
    suffix: string;
}) {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });
    const hasAnimated = useRef(false);

    useEffect(() => {
        if (!isInView || hasAnimated.current || !ref.current) return;
        hasAnimated.current = true;

        let start = 0;
        const end = value;
        const duration = 2000;
        const startTime = performance.now();

        const animate = (time: number) => {
            const elapsed = time - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const easedProgress = 1 - Math.pow(1 - progress, 3);
            const current = Math.floor(easedProgress * end);

            if (ref.current) {
                ref.current.textContent = current.toString();
            }

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    }, [isInView, value]);

    return (
        <>
            <span ref={ref}>0</span>
            <span className="bg-linear-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                {suffix}
            </span>
        </>
    );
}

export default function Stats() {
    return (
        <section
            id="stats"
            className="relative z-10 overflow-hidden bg-background px-4 py-20 md:py-28 border-t border-border"
        >
            {/* Background effect */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_50%,rgba(99,102,241,0.08),transparent)]" />

            {/* Grid lines */}
            <div
                className="absolute inset-0 opacity-[0.02]"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
                    backgroundSize: "60px 60px",
                }}
            />

            <ParallaxSection speed={-0.15}>
                <div className="relative mx-auto max-w-6xl">
                    <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
                        {STATS.map((stat, i) => (
                            <motion.div
                                key={stat.label}
                                initial={{ y: 50, opacity: 0, scale: 0.9 }}
                                whileInView={{ y: 0, opacity: 1, scale: 1 }}
                                viewport={{ once: true, margin: "-30px" }}
                                transition={{
                                    duration: 0.6,
                                    delay: i * 0.12,
                                    ease: [0.25, 0.46, 0.45, 0.94],
                                }}
                                className="flex flex-col items-center text-center"
                            >
                                <div className="text-5xl md:text-6xl font-black text-foreground tracking-tight">
                                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                                </div>
                                <p className="mt-3 text-sm font-medium text-muted-foreground tracking-wide">
                                    {stat.label}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </ParallaxSection>
        </section>
    );
}
