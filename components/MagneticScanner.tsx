"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useSpring, useMotionValue, useTransform } from "framer-motion";

export default function MagneticScanner() {
    const [targetLabel, setTargetLabel] = useState("");
    const [isActive, setIsActive] = useState(false);
    
    const mouseX = useMotionValue(-100);
    const mouseY = useMotionValue(-100);

    const springConfig = { stiffness: 250, damping: 30 };
    const scannerX = useSpring(mouseX, springConfig);
    const scannerY = useSpring(mouseY, springConfig);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);

            const target = e.target as HTMLElement;
            const interactive = target.closest("button, a, [role='button']") || 
                              (window.getComputedStyle(target).cursor === "pointer");

            if (interactive) {
                const label = target.textContent?.trim().slice(0, 15) || "INTERACTIVE";
                setTargetLabel(label.toUpperCase());
                setIsActive(true);
            } else {
                setTargetLabel("");
                setIsActive(false);
            }
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY]);

    return (
        <motion.div
            className="pointer-events-none fixed left-0 top-0 z-[9999] hidden md:block"
            style={{
                x: scannerX,
                y: scannerY,
                translateX: "-50%",
                translateY: "-50%",
            }}
        >
            {/* The Scanner Frame */}
            <motion.div
                animate={{
                    width: isActive ? 120 : 24,
                    height: isActive ? 40 : 24,
                    borderColor: isActive ? "rgba(99, 102, 241, 0.8)" : "rgba(255, 255, 255, 0.2)",
                    borderRadius: isActive ? "4px" : "50%",
                }}
                className="relative flex items-center justify-center border transition-colors duration-300"
            >
                {/* Corner Marks */}
                <span className="absolute -left-1 -top-1 h-2 w-2 border-l border-t border-indigo-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <span className="absolute -right-1 -bottom-1 h-2 w-2 border-r border-b border-indigo-500 opacity-0 transition-opacity duration-100" />

                {/* Status Text */}
                {isActive && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="flex flex-col items-center gap-0.5 font-mono text-[8px] font-bold text-white tracking-[0.2em]"
                    >
                        <span className="text-indigo-400">SCAN:ACTIVE</span>
                        <span className="truncate max-w-[100px]">{targetLabel}</span>
                    </motion.div>
                )}
            </motion.div>

            {/* Core Aiming Dot */}
            <div className="absolute left-1/2 top-1/2 h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white opacity-40" />
        </motion.div>
    );
}
