"use client";

import React from "react";
import {
    motion,
    useMotionValue,
    useTransform,
    useAnimationFrame,
} from "framer-motion";
import { ScrollOpacity } from "./ScrollEffects";

interface ParallaxProps {
    children: string;
    baseVelocity: number;
}

function ParallaxText({ children, baseVelocity = 100 }: ParallaxProps) {
    const baseX = useMotionValue(0);

    const x = useTransform(baseX, (v) => `${(v % 25) - 25}%`);

    useAnimationFrame((t, delta) => {
        let moveBy = baseVelocity * (delta / 1000);
        baseX.set(baseX.get() + moveBy);
    });

    return (
        <div className="flex flex-nowrap overflow-hidden whitespace-nowrap leading-[0.8] m-0">
            <motion.div
                className="flex flex-nowrap whitespace-nowrap text-4xl font-black uppercase tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl"
                style={{ x }}
            >
                <span className="mr-8 block text-foreground/90 sm:mr-12">
                    {children}{" "}
                </span>
                <span className="mr-8 block text-foreground/90 sm:mr-12">
                    {children}{" "}
                </span>
                <span className="mr-8 block text-foreground/90 sm:mr-12">
                    {children}{" "}
                </span>
                <span className="mr-8 block text-foreground/90 sm:mr-12">
                    {children}{" "}
                </span>
            </motion.div>
        </div>
    );
}

export default function VelocityScroll() {
    return (
        <section className="relative z-0 overflow-hidden bg-background py-20 md:py-32 border-y border-border">
            <ScrollOpacity className="flex flex-col gap-6 md:gap-10">
                <ParallaxText baseVelocity={-1.5}>TRIVEDA TECHNOLOGIES</ParallaxText>
                <ParallaxText baseVelocity={1.5}>
                    Technology • Digital Solutions • Project Implementation • AI • Data Analytics • Growth
                </ParallaxText>
            </ScrollOpacity>
        </section>
    );
}
