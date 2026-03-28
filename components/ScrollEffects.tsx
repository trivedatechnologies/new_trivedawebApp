"use client";

import React, { useRef } from "react";
import {
    motion,
    useScroll,
    useTransform,
    useSpring,
    MotionValue,
} from "framer-motion";

// ─── Parallax Section ─── Moves children at different speed than scroll
export function ParallaxSection({
    children,
    speed = 0.3,
    className = "",
}: {
    children: React.ReactNode;
    speed?: number;
    className?: string;
}) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [speed * 100, speed * -100]);
    const smoothY = useSpring(y, { stiffness: 100, damping: 30 });

    return (
        <div ref={ref} className={`relative overflow-hidden ${className}`}>
            <motion.div style={{ y: smoothY }}>{children}</motion.div>
        </div>
    );
}

// ─── Scale on Scroll ─── Elements scale up as they enter viewport
export function ScaleOnScroll({
    children,
    className = "",
}: {
    children: React.ReactNode;
    className?: string;
}) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.85, 1, 1, 0.95]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.3]);
    const smoothScale = useSpring(scale, { stiffness: 100, damping: 30 });

    return (
        <motion.div ref={ref} style={{ scale: smoothScale, opacity }} className={className}>
            {children}
        </motion.div>
    );
}

// ─── Horizontal Reveal ─── Cards slide in from left/right alternating
export function SlideReveal({
    children,
    direction = "left",
    delay = 0,
    className = "",
}: {
    children: React.ReactNode;
    direction?: "left" | "right" | "up" | "down";
    delay?: number;
    className?: string;
}) {
    const getInitialProps = () => {
        switch (direction) {
            case "left": return { x: -80, y: 0 };
            case "right": return { x: 80, y: 0 };
            case "up": return { x: 0, y: 80 };
            case "down": return { x: 0, y: -80 };
            default: return { x: -80, y: 0 };
        }
    };

    return (
        <motion.div
            initial={{ ...getInitialProps(), opacity: 0, filter: "blur(8px)" }}
            whileInView={{ x: 0, y: 0, opacity: 1, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

// ─── Stagger Children ─── Animates children one after another
export function StaggerContainer({
    children,
    className = "",
    staggerDelay = 0.08,
}: {
    children: React.ReactNode;
    className?: string;
    staggerDelay?: number;
}) {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={{
                hidden: {},
                visible: { transition: { staggerChildren: staggerDelay } },
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

export function StaggerItem({
    children,
    className = "",
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <motion.div
            variants={{
                hidden: { y: 40, opacity: 0, scale: 0.95 },
                visible: {
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
                },
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

// ─── Text Reveal ─── Characters or words appear one by one
export function TextReveal({
    text,
    className = "",
    gradient = false,
}: {
    text: string;
    className?: string;
    gradient?: boolean;
}) {
    const words = text.split(" ");
    const gradientClasses = "bg-linear-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent";

    return (
        <motion.span
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.04 } },
            }}
            className={className}
        >
            {words.map((word, i) => (
                <motion.span
                    key={i}
                    variants={{
                        hidden: { opacity: 0, y: 15, filter: "blur(4px)" },
                        visible: {
                            opacity: 1,
                            y: 0,
                            filter: "blur(0px)",
                            transition: { duration: 0.5, ease: "easeOut" },
                        },
                    }}
                    className={`inline-block mr-[0.3em] ${gradient ? gradientClasses : ""}`}
                >
                    {word}
                </motion.span>
            ))}
        </motion.span>
    );
}

// ─── Floating Card ─── 3D tilt on hover
export function FloatingCard({
    children,
    className = "",
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <motion.div
            whileHover={{
                y: -8,
                rotateX: 2,
                rotateY: -2,
                transition: { duration: 0.3 },
            }}
            className={`${className} transform-gpu`}
            style={{ perspective: 800 }}
        >
            {children}
        </motion.div>
    );
}

// ─── Progress Line ─── Vertical scroll progress indicator
export function ScrollProgress() {
    const { scrollYProgress } = useScroll();
    const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

    return (
        <motion.div
            className="fixed left-0 top-0 z-100 h-full w-[3px] origin-top bg-linear-to-b from-indigo-500 to-cyan-400 hidden md:block"
            style={{ scaleY }}
        />
    );
}

// ─── Section Divider ─── Animated gradient line between sections
export function SectionDivider() {
    return (
        <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mx-auto h-px w-full max-w-4xl bg-linear-to-r from-transparent via-indigo-500/30 to-transparent"
        />
    );
}

// ─── Text Fill Reveal ─── Text fills with color as user scrolls past (Refokus style)
export function TextFillReveal({
    text,
    className = "",
}: {
    text: string;
    className?: string;
}) {
    const ref = useRef<HTMLParagraphElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start 0.9", "end 0.4"],
    });

    const words = text.split(" ");
    
    return (
        <p ref={ref} className={`${className} flex flex-wrap justify-center`}>
            {words.map((word, i) => {
                const start = i / words.length;
                const end = (i + 1) / words.length;
                return (
                    <motion.span
                        key={i}
                        style={{
                            opacity: useTransform(scrollYProgress, [start, end], [0.15, 1]),
                        }}
                        className="mx-1.5 inline-block"
                    >
                        {word}
                    </motion.span>
                );
            })}
        </p>
    );
}

// ─── Simple Scroll Opacity ─── For large titles
export function ScrollOpacity({
    children,
    className = "",
}: {
    children: React.ReactNode;
    className?: string;
}) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start 0.9", "start 0.2"],
    });

    const opacity = useTransform(scrollYProgress, [0, 1], [0.1, 1]);

    return (
        <motion.div ref={ref} style={{ opacity }} className={className}>
            {children}
        </motion.div>
    );
}
