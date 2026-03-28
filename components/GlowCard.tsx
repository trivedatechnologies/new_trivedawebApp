"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useMotionTemplate } from "framer-motion";
import { cn } from "@/lib/utils";

export function GlowCard({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) {
    const ref = useRef<HTMLDivElement>(null);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const handleMouseMove = ({
        currentTarget,
        clientX,
        clientY,
    }: React.MouseEvent) => {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    };

    const background = useMotionTemplate`radial-gradient(650px circle at ${mouseX}px ${mouseY}px, var(--t-glow), transparent 80%)`;
    const borderGlow = useMotionTemplate`radial-gradient(400px circle at ${mouseX}px ${mouseY}px, var(--t-glow-strong), transparent 80%)`;

    return (
        <div
            ref={ref}
            onMouseMove={handleMouseMove}
            className={cn(
                "group relative overflow-hidden rounded-2xl border border-border bg-card backdrop-blur-xl transition-all duration-500 hover:border-indigo-500/20",
                className
            )}
        >
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-500 group-hover:opacity-100"
                style={{ background }}
            />
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-500 group-hover:opacity-100"
                style={{ background: borderGlow }}
            />
            <div className="relative h-full">{children}</div>
        </div>
    );
}
