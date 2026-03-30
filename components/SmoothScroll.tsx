"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
    const lenisRef = useRef<Lenis | null>(null);

    useEffect(() => {
        // Smooth scroll (Lenis) removed as per request for natural scrolling
        return () => {};
    }, []);

    return <>{children}</>;
}
