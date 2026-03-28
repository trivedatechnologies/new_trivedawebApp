"use client";

import React, { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";
import { useTheme } from "next-themes";

export default function TechCompass() {
    const [coords, setCoords] = useState({ x: 0, y: 0 });
    const [mounted, setMounted] = useState(false);
    const [isEnabled, setIsEnabled] = useState(true);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const { resolvedTheme } = useTheme();
    
    // Smooth followers
    const springX = useSpring(mouseX, { stiffness: 100, damping: 20 });
    const springY = useSpring(mouseY, { stiffness: 100, damping: 20 });

    useEffect(() => {
        setMounted(true);

        // Sync with cursor toggle state from localStorage
        const stored = localStorage.getItem("custom-cursor-enabled");
        if (stored !== null) {
            setIsEnabled(stored === "true");
        }

        const handleMove = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
            setCoords({ x: e.clientX, y: e.clientY });
        };

        // Listen for cursor-toggle event (same event used by CustomCursor)
        const handleToggleChange = (e: any) => {
            setIsEnabled(e.detail.enabled);
        };

        window.addEventListener("mousemove", handleMove);
        window.addEventListener("cursor-toggle", handleToggleChange);
        return () => {
            window.removeEventListener("mousemove", handleMove);
            window.removeEventListener("cursor-toggle", handleToggleChange);
        };
    }, [mouseX, mouseY]);

    // Don't render if: not mounted, light mode, or cursor toggle is OFF
    if (!mounted || resolvedTheme === "light" || !isEnabled) {
        return null;
    }

    return (
        <div className="pointer-events-none fixed inset-0 z-50 hidden min-[800px]:block select-none overflow-hidden">
            {/* Horizontal Axis Line */}
            <motion.div 
                className="absolute left-0 w-full h-px bg-indigo-500/10"
                style={{ top: springY }}
            />
            {/* Vertical Axis Line */}
            <motion.div 
                className="absolute top-0 w-px h-full bg-indigo-500/10"
                style={{ left: springX }}
            />

            {/* Coordinate Tooltip */}
            <motion.div
                className="absolute flex flex-col gap-1 rounded-lg border border-white/10 bg-black/60 p-2 backdrop-blur-md"
                style={{ x: springX, y: springY, translateX: 20, translateY: 20 }}
            >
                <div className="flex items-center gap-2 font-mono text-[9px] font-bold text-indigo-400">
                    <span className="opacity-40">SYS_POS:</span>
                    <span>X: {coords.x.toString(16).toUpperCase()}</span>
                    <span>Y: {coords.y.toString(16).toUpperCase()}</span>
                </div>
                <div className="h-0.5 w-full bg-indigo-500/20" />
                <div className="font-mono text-[8px] text-white/40">
                    SCANNING_ENVIRONMENT...
                </div>
            </motion.div>

            {/* Geometric Centerpiece */}
            <motion.div
                className="absolute h-8 w-8 rounded-full border border-indigo-500/40"
                style={{ x: springX, y: springY, translateX: "-50%", translateY: "-50%" }}
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
                <div className="absolute left-1/2 top-0 h-1.5 w-px bg-indigo-400" />
                <div className="absolute left-1/2 bottom-0 h-1.5 w-px bg-indigo-400" />
                <div className="absolute left-0 top-1/2 h-px w-1.5 bg-indigo-400" />
                <div className="absolute right-0 top-1/2 h-px w-1.5 bg-indigo-400" />
            </motion.div>
        </div>
    );
}
