"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

const TECH_TERMS = [
    "AI_DRIVEN", "CLOUD_SYNC", "TRANSFORM", "SCALABLE",
    "ENTERPRISE", "AUTOMATION", "DATA_CORE", "SECURE",
    "v1.0.8", "NITRO_SYNC", "BLOCK_FLOW", "API_ACTIVE"
];

// Pre-compute deterministic values based on index using a simple seed
function seededRandom(seed: number) {
    const x = Math.sin(seed + 1) * 10000;
    return x - Math.floor(x);
}

interface FloatingTermData {
    term: string;
    initialX: number;
    initialY: number;
    duration: number;
    delay: number;
}

function generateTermData(index: number): FloatingTermData {
    const r1 = seededRandom(index * 4 + 1);
    const r2 = seededRandom(index * 4 + 2);
    const r3 = seededRandom(index * 4 + 3);
    const r4 = seededRandom(index * 4 + 4);
    const r5 = seededRandom(index * 4 + 5);

    return {
        term: TECH_TERMS[Math.floor(r1 * TECH_TERMS.length)],
        initialX: r2 * 100,
        initialY: r3 * 100,
        duration: 15 + r4 * 20,
        delay: r5 * -20
    };
}

export default function DigitalEcosystem() {
    const [mounted, setMounted] = useState(false);
    const { resolvedTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    // Don't render in light mode or before mount
    if (!mounted || resolvedTheme === "light") {
        return null;
    }

    return (
        <div 
            className="pointer-events-none fixed inset-0 z-0 overflow-hidden opacity-[0.12] select-none hidden min-[800px]:block"
        >
            {/* Ambient Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[100px_100px]" />

            {/* Random Floating Terms */}
            {Array.from({ length: 15 }).map((_, i) => {
                const data = generateTermData(i);
                return <FloatingTerm key={i} data={data} />;
            })}
        </div>
    );
}

function FloatingTerm({ data }: { data: FloatingTermData }) {
    const { term, initialX, initialY, duration, delay } = data;

    return (
        <motion.div
            initial={{ left: `${initialX}%`, top: `${initialY}%`, opacity: 0 }}
            animate={{
                left: [`${initialX}%`, `${(initialX + 10) % 100}%`, `${(initialX - 5 + 100) % 100}%`, `${initialX}%`],
                top: [`${initialY}%`, `${(initialY - 15 + 100) % 100}%`, `${(initialY + 10) % 100}%`, `${initialY}%`],
                opacity: [0, 0.5, 0.5, 0],
            }}
            transition={{
                duration,
                repeat: Infinity,
                delay,
                ease: "linear"
            }}
            className="absolute font-mono text-[10px] tracking-widest text-indigo-400/40"
        >
            [{term}]
        </motion.div>
    );
}
