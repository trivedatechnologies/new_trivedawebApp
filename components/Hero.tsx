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
    const mouse = useRef({ x: 0, y: 0 });

    // Handle mouse move to track position
    React.useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
            mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    const elapsedTimeRef = useRef(0);

    useFrame((state, delta) => {
        elapsedTimeRef.current += delta;
        const t = elapsedTimeRef.current;
        if (meshRef.current) {
            meshRef.current.rotation.x = t * 0.1;
            meshRef.current.rotation.y = t * 0.15;
            meshRef.current.position.x += (mouse.current.x * 2 - meshRef.current.position.x) * 0.05;
            meshRef.current.position.y += (mouse.current.y * 2 - meshRef.current.position.y) * 0.05;

            const distScale = 1 + Math.abs(mouse.current.x) + Math.abs(mouse.current.y);
            const material = meshRef.current.material as any;
            if (material) {
                material.distort = 0.4 + (distScale - 1) * 0.2;
                material.speed = 2 + (distScale - 1) * 2;
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
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={2} color={colors.color400} />
            <pointLight position={[-10, -10, -10]} intensity={5} color={colors.colorSecondary} />
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
            className={`p-5 sm:p-6 md:p-8 rounded-2xl md:rounded-3xl border border-border bg-card/80 backdrop-blur-xl shadow-2xl overflow-hidden relative group ${className}`}
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
        <section className="relative min-h-screen w-full bg-transparent overflow-hidden">
            {/* 3D Background Orb */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
                    <PulsingCore colors={currentTheme} />
                </Canvas>
            </div>

            {/* Content */}
            <main className="relative z-10 min-h-screen w-full flex items-center justify-center p-4 md:p-12 font-sans text-foreground">
                <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
                    {/* Hero Text Section */}
                    <div className="md:col-span-7 flex flex-col justify-center space-y-2 md:space-y-3 lg:space-y-4 pt-32 md:pt-20">
                        {/* Badge */}


                        {/* Title */}
                        <motion.h1
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                            className="text-3xl sm:text-5xl md:text-6xl font-black font-heading tracking-tighter leading-tight md:leading-none overflow-visible"
                        >
                            <motion.span
                                whileHover={{ scale: 1.02, x: 5 }}
                                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                className="inline-block text-foreground cursor-default py-0.5"
                            >
                                Build Scalable
                            </motion.span>
                            <br />
                            <motion.span
                                whileHover={{ scale: 1.02, x: 5 }}
                                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                className="inline-block text-foreground cursor-default py-0.5"
                            >
                                Digital & AI
                            </motion.span>
                            <br />
                            <motion.span
                                whileHover={{ scale: 1.02, x: 5 }}
                                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                className="inline-block bg-linear-to-r from-indigo-500 via-cyan-500 to-indigo-500 bg-clip-text text-transparent text-4xl sm:text-6xl md:text-7xl cursor-default py-1.5 font-black leading-[1.1]"
                            >
                                Solutions for Modern Businesses
                            </motion.span>
                        </motion.h1>

                        {/* Subtitle */}
                        <motion.p
                            initial={{ y: 30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed"
                        >
                            At Triveda Technologies, we help startups and enterprises design, build, and scale powerful technology solutions — from custom software to AI-driven transformation.
                        </motion.p>

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

                    {/* Empty space for 3D orb to show through */}
                    <div className="md:col-span-5 min-h-[300px] md:min-h-auto" />

                </div>
            </main>
        </section>
    );
}
