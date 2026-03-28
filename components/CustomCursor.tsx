"use client";

import React, { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function CustomCursor() {
    const [isEnabled, setIsEnabled] = useState(true);
    const [isHovered, setIsHovered] = useState(false);
    const [isPressed, setIsPressed] = useState(false);
    const [mounted, setMounted] = useState(false);

    // Position of the actual mouse
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Spring configuration for smooth movement
    const stalkerX = useSpring(mouseX, { stiffness: 150, damping: 20 });
    const stalkerY = useSpring(mouseY, { stiffness: 150, damping: 20 });

    useEffect(() => {
        setMounted(true);
        const stored = localStorage.getItem("custom-cursor-enabled");
        if (stored !== null) {
            setIsEnabled(stored === "true");
        }

        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        const handleMouseDown = () => setIsPressed(true);
        const handleMouseUp = () => setIsPressed(false);

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (!target) return;
            if (
                target.tagName?.toLowerCase() === "button" ||
                target.tagName?.toLowerCase() === "a" ||
                target.closest("button") ||
                target.closest("a") ||
                target.getAttribute("role") === "button" ||
                window.getComputedStyle(target).cursor === "pointer"
            ) {
                setIsHovered(true);
            } else {
                setIsHovered(false);
            }
        };

        // Listen for custom event from toggle button
        const handleToggleChange = (e: any) => {
            setIsEnabled(e.detail.enabled);
        };

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mousedown", handleMouseDown);
        window.addEventListener("mouseup", handleMouseUp);
        window.addEventListener("mouseover", handleMouseOver);
        window.addEventListener("cursor-toggle", handleToggleChange);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mousedown", handleMouseDown);
            window.removeEventListener("mouseup", handleMouseUp);
            window.removeEventListener("mouseover", handleMouseOver);
            window.removeEventListener("cursor-toggle", handleToggleChange);
        };
    }, [mouseX, mouseY]);

    if (!mounted || !isEnabled) return null;

    return (
        <div className="fixed inset-0 z-9999 pointer-events-none overflow-hidden hidden md:block">
            {/* Main Dot - Follows mouse instantly */}
            <motion.div
                className="fixed left-0 top-0 h-1.5 w-1.5 rounded-full transition-opacity duration-300"
                style={{
                    x: mouseX,
                    y: mouseY,
                    translateX: "-50%",
                    translateY: "-50%",
                    backgroundColor: "var(--t-500)",
                }}
            />

            {/* Trailing Stalker - Smooth spring movement */}
            <motion.div
                className="fixed left-0 top-0 rounded-full transition-opacity duration-300"
                animate={{
                    width: isHovered ? 60 : 36,
                    height: isHovered ? 60 : 36,
                    scale: isPressed ? 0.8 : 1,
                    backgroundColor: isHovered ? "color-mix(in srgb, var(--t-500) 5%, transparent)" : "rgba(255, 255, 255, 0)",
                    borderWidth: 1,
                    borderColor: isHovered ? "color-mix(in srgb, var(--t-500) 60%, transparent)" : "color-mix(in srgb, var(--t-500) 30%, transparent)",
                }}
                style={{
                    x: stalkerX,
                    y: stalkerY,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
            />
        </div>
    );
}
