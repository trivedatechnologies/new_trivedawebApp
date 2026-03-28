"use client";

import React, { useEffect, useRef } from "react";

interface Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    life: number;
    color: string;
}

export default function MouseTrail() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const mouse = useRef({ x: 0, y: 0, active: false });
    const particles = useRef<Particle[]>([]);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        const handleMouseMove = (e: MouseEvent) => {
            mouse.current.x = e.clientX;
            mouse.current.y = e.clientY;
            mouse.current.active = true;

            // Spawn particles on move
            for (let i = 0; i < 3; i++) {
                particles.current.push({
                    x: e.clientX,
                    y: e.clientY,
                    vx: (Math.random() - 0.5) * 2,
                    vy: (Math.random() - 0.5) * 2,
                    life: 1,
                    color: i % 2 === 0 ? "#6366f1" : "#a855f7", // Indigo and Purple
                });
            }
        };

        const update = () => {
            if (!ctx) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Limited particle count for performance
            if (particles.current.length > 200) {
                particles.current.shift();
            }

            for (let i = 0; i < particles.current.length; i++) {
                const p = particles.current[i];
                p.x += p.vx;
                p.y += p.vy;
                p.life -= 0.012; // Controls how long they last

                if (p.life <= 0) {
                    particles.current.splice(i, 1);
                    i--;
                    continue;
                }

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.life * 3, 0, Math.PI * 2);
                ctx.fillStyle = p.color;
                ctx.globalAlpha = p.life * 0.6;
                ctx.fill();

                // Connect nearby particles with thin lines
                for (let j = i + 1; j < particles.current.length; j++) {
                    const p2 = particles.current[j];
                    const dx = p.x - p2.x;
                    const dy = p.y - p2.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < 60) {
                        ctx.beginPath();
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.strokeStyle = p.color;
                        ctx.lineWidth = 0.5;
                        ctx.globalAlpha = p.life * (1 - dist / 60) * 0.3;
                        ctx.stroke();
                    }
                }
            }

            requestAnimationFrame(update);
        };

        window.addEventListener("resize", resize);
        window.addEventListener("mousemove", handleMouseMove);
        resize();
        update();

        return () => {
            window.removeEventListener("resize", resize);
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="pointer-events-none fixed inset-0 z-[100] h-full w-full opacity-50 select-none"
        />
    );
}
