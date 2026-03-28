'use client';

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { TextReveal, TextFillReveal } from "./ScrollEffects";

// Helper functions from the original script
const lerp = (a: number, b: number, n: number) => (1 - n) * a + n * b;
const getDistance = (x1: number, y1: number, x2: number, y2: number) =>
    Math.hypot(x2 - x1, y2 - y1);

// Curated professional team shots
const teamImages = [
    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
    "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400&q=80",
    "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&q=80",
    "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
    "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80",
    "https://images.unsplash.com/photo-1573497491208-6b1acb260507?w=400&q=80",
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
    "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
    "https://images.unsplash.com/photo-1558222218-b7b54eede3f3?w=400&q=80",
    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80",
    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80",
];

interface ImageTrailProps {
    images?: string[];
    trailDistance?: number;
    className?: string;
}

function ImageTrail({
    images = teamImages,
    trailDistance = 100,
    className = ""
}: ImageTrailProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const itemsRef = useRef<(HTMLImageElement | null)[]>([]);

    const state = useRef({
        mousePos: { x: 0, y: 0 },
        cacheMousePos: { x: 0, y: 0 },
        lastMousePos: { x: 0, y: 0 },
        imgPosition: 0,
        zIndexVal: 1,
    });

    useEffect(() => {
        const handleMouseMove = (ev: MouseEvent) => {
            state.current.mousePos = { x: ev.clientX, y: ev.clientY };
        };
        window.addEventListener('mousemove', handleMouseMove);

        let frameId: number;

        const render = () => {
            const { mousePos, cacheMousePos, lastMousePos } = state.current;

            const distance = getDistance(
                mousePos.x,
                mousePos.y,
                lastMousePos.x,
                lastMousePos.y
            );

            state.current.cacheMousePos.x = lerp(cacheMousePos.x, mousePos.x, 0.1);
            state.current.cacheMousePos.y = lerp(cacheMousePos.y, mousePos.y, 0.1);

            if (distance > trailDistance) {
                showNextImage();
                state.current.lastMousePos = { ...mousePos };
            }

            frameId = requestAnimationFrame(render);
        };

        const showNextImage = () => {
            const { imgPosition, zIndexVal, cacheMousePos, mousePos } = state.current;

            const img = itemsRef.current[imgPosition];
            if (!img) return;

            gsap.killTweensOf(img);

            const rect = img.getBoundingClientRect();
            const w = rect.width;
            const h = rect.height;

            const tl = gsap.timeline();

            tl.set(img, {
                opacity: 1,
                scale: 1,
                zIndex: zIndexVal,
                x: cacheMousePos.x - w / 2,
                y: cacheMousePos.y - h / 2,
            })
                .to(img, {
                    duration: 1,
                    ease: "expo.out",
                    x: mousePos.x - w / 2,
                    y: mousePos.y - h / 2,
                }, 0)
                .to(img, {
                    duration: 1.1,
                    ease: "power2.inOut",
                    opacity: 0,
                }, 0.8)
                .to(img, {
                    duration: 1.1,
                    ease: "expo.inOut",
                    scale: 0.4,
                }, 0.8);

            state.current.zIndexVal++;
            state.current.imgPosition =
                imgPosition < itemsRef.current.length - 1 ? imgPosition + 1 : 0;
        };

        render();

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(frameId);
        };
    }, [trailDistance]);

    return (
        <div
            ref={containerRef}
            className={`relative flex justify-center items-center h-[400px] md:h-screen w-full overflow-hidden cursor-none ${className}`}
        >
            {images.map((url, index) => (
                <img
                    key={index}
                    ref={(el) => {
                        if (itemsRef.current) {
                            itemsRef.current[index] = el;
                        }
                    }}
                    className="absolute top-0 left-0 opacity-0 w-[150px] md:w-[250px] aspect-4/5 object-cover block shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] rounded-2xl pointer-events-none"
                    src={url}
                    alt={`trail-image-${index}`}
                />
            ))}

            <div className="relative z-10 flex flex-col items-center pointer-events-none select-none">
                <span className="text-xs md:text-sm font-mono tracking-[0.5em] text-indigo-500 mb-4 bg-indigo-500/5 px-4 py-1.5 rounded-full border border-indigo-500/10">
                    OUR CORE ASSETS
                </span>
                <TextFillReveal
                    text="TEAM TRIVEDA"
                    className="text-[12vw] md:text-[8vw] font-black text-white mix-blend-difference leading-none tracking-tighter text-center italic"
                />
            </div>
        </div>
    );
}

export default function Team() {
    return (
        <section
            id="team"
            className="relative z-10 border-t border-border bg-background py-20 md:py-32"
        >
            <div className="mx-auto max-w-6xl px-4 md:px-6 mb-12">
                <div className="flex flex-col mb-10">
                    <h2 className="text-4xl md:text-5xl font-bold font-heading text-foreground tracking-tighter">
                        <TextReveal text="Creative" />{" "}
                        <TextReveal text="Engineers" gradient />
                    </h2>
                    <p className="mt-5 max-w-xl text-lg text-muted-foreground">
                        Behind every intelligent ecosystem is a team of visionary specialized
                        experts committed to engineering excellence.
                    </p>
                </div>
            </div>

            <ImageTrail trailDistance={140} />

            <div className="mt-16 text-center">
                <p className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground opacity-50">
                    MOVE YOUR CURSOR TO DISCOVER
                </p>
            </div>
        </section>
    );
}
