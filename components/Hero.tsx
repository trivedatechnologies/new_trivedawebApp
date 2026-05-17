"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial } from "@react-three/drei";
import type { Mesh } from "three";
import { useAccentTheme, ACCENT_THEMES } from "./AccentThemeProvider";

// --- 3D Pulsing Core Orb ---
// Note: Canvas creates a separate React tree, so we pass colors as props
function PulsingCore({ colors }: { colors: { color400: string; color500: string; color600: string; colorSecondary: string } }) {
    const meshRef = useRef<Mesh>(null);
    const elapsedTimeRef = useRef(0);

    useFrame((state, delta) => {
        elapsedTimeRef.current += delta;
        const t = elapsedTimeRef.current;
        if (meshRef.current) {
            meshRef.current.rotation.x = t * 0.15;
            meshRef.current.rotation.y = t * 0.2;

            // Subtle floating animation instead of mouse tracking
            meshRef.current.position.y = Math.sin(t * 0.5) * 0.2;
            meshRef.current.position.x = Math.cos(t * 0.3) * 0.1;

            const material = meshRef.current.material as any;
            if (material) {
                material.distort = 0.45 + Math.sin(t * 0.8) * 0.1;
                material.speed = 2.5;
            }
        }
    });

    return (
        <group>
            <Sphere ref={meshRef} args={[1.5, 64, 64]}>
                <MeshDistortMaterial
                    color={colors.color600}
                    envMapIntensity={1}
                    clearcoat={1}
                    clearcoatRoughness={0}
                    metalness={0.1}
                    roughness={0.1}
                    distort={0.4}
                    speed={2}
                />
            </Sphere>
            <Sphere args={[2.5, 32, 32]}>
                <meshBasicMaterial
                    color={colors.color500}
                    transparent
                    opacity={0.05}
                    wireframe
                />
            </Sphere>
            <ambientLight intensity={1.5} />
            <directionalLight position={[10, 10, 10]} intensity={3} color={colors.color400} />
            <pointLight position={[-10, 5, -10]} intensity={4} color={colors.colorSecondary} />
            <pointLight position={[0, -10, 0]} intensity={2} color={colors.color500} />
        </group>
    );
}

// --- Glass Card ---
function GlassCard({
    children,
    className = "",
    delay = 0,
}: {
    children: React.ReactNode;
    className?: string;
    delay?: number;
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className={`p-5 sm:p-6 md:p-8 rounded-2xl md:rounded-3xl border border-border/80 bg-card/80 backdrop-blur-xl shadow-xl shadow-indigo-500/10 overflow-hidden relative group ${className}`}
        >
            <div className="absolute top-0 left-0 w-full h-full bg-linear-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            {children}
        </motion.div>
    );
}

// --- Hero Section ---
export default function Hero() {
    const { accent } = useAccentTheme();
    const currentTheme = ACCENT_THEMES.find(t => t.id === accent) || ACCENT_THEMES[0];

    return (
        <section className="relative min-h-[85vh] md:min-h-screen w-full bg-transparent overflow-hidden">
            {/* 3D Background Orb */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
                    <PulsingCore colors={currentTheme} />
                </Canvas>
            </div>

            {/* Content */}
            <main className="relative z-10 min-h-[85vh] md:min-h-screen w-full flex items-center justify-center p-6 md:p-12 font-sans text-foreground">
                <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-6">
                    {/* Hero Text Section */}
                    <div className="md:col-span-7 flex flex-col justify-center space-y-3 md:space-y-4 pt-20 md:pt-0">
                        {/* Badge */}


                        {/* Title */}
                        <motion.h1
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                            className="text-4xl sm:text-6xl md:text-6xl font-black font-heading tracking-tighter leading-tight md:leading-none overflow-visible"
                        >
                            <motion.span
                                className="inline-block text-foreground cursor-default py-0.5"
                            >
                                Build Scalable
                            </motion.span>
                            <br />
                            <motion.span
                                className="inline-block text-foreground cursor-default py-0.5"
                            >
                                Digital & AI
                            </motion.span>
                            <br />
                            <motion.span
                                className="inline-block bg-linear-to-r from-indigo-500 via-cyan-500 to-indigo-500 bg-clip-text text-transparent text-5xl sm:text-7xl md:text-7xl cursor-default py-2 font-black leading-[1.1]"
                            >
                                Solutions for <br /> Modern Businesses
                            </motion.span>
                        </motion.h1>

                        {/* Subtitle */}
                        <motion.div
                            initial={{ y: 30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="max-w-2xl rounded-xl bg-background/60 backdrop-blur-md px-4 py-3 border border-border/40"
                        >
                            <p className="text-base sm:text-lg text-foreground/80 leading-relaxed">
                                At Triveda Technologies, we help startups and enterprises design, build, and scale powerful technology solutions — from custom software to AI-driven transformation.
                            </p>
                        </motion.div>

                        {/* CTAs */}
                        <motion.div
                            initial={{ y: 30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-1 md:pt-2"
                        >
                            <button
                                onClick={() =>
                                    document
                                        .getElementById("services")
                                        ?.scrollIntoView({ behavior: "smooth" })
                                }
                                className="flex items-center justify-center gap-2 px-6 py-3 sm:px-8 sm:py-4 bg-indigo-500 hover:bg-indigo-600 rounded-xl font-bold transition-colors text-sm sm:text-base text-white"
                            >
                                Explore Services <ArrowRight size={18} />
                            </button>
                            <button
                                onClick={() =>
                                    document
                                        .getElementById("contact")
                                        ?.scrollIntoView({ behavior: "smooth" })
                                }
                                className="px-6 py-3 sm:px-8 sm:py-4 rounded-xl border border-border hover:bg-accent transition-colors text-sm sm:text-base"
                            >
                                Get Consultation
                            </button>
                        </motion.div>
                    </div>

                    {/* Spacer for 3D orb on mobile - reduced to fix blank gap */}
                    <div className="md:col-span-5 min-h-[80px] md:min-h-auto" />

                </div>
            </main>
        </section>
    );
}
