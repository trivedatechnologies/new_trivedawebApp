"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LayoutGrid, Menu, X, Moon, Sun, MousePointer2, Palette } from "lucide-react";
import { useTheme } from "next-themes";
import { useAccentTheme, ACCENT_THEMES } from "./AccentThemeProvider";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const NAV_ITEMS = [
    { name: "Home", path: "/", isSection: false },
    { name: "About", path: "/about", isSection: false },
    { name: "Services", path: "/#services", isSection: true },
    { name: "Case Studies", path: "/case-studies", isSection: false },
    { name: "Industries", path: "/#industries", isSection: true },
    { name: "Team", path: "/#team", isSection: true },
    { name: "Contact", path: "/#contact", isSection: true },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [cursorEnabled, setCursorEnabled] = useState(true);
    const [paletteOpen, setPaletteOpen] = useState(false);
    const { resolvedTheme, setTheme } = useTheme();
    const { accent, setAccent } = useAccentTheme();
    const [mounted, setMounted] = useState(false);
    const pathname = usePathname();
    const router = useRouter();

    useEffect(() => {
        setMounted(true);
        const handler = () => setScrolled(window.scrollY > 60);
        window.addEventListener("scroll", handler);

        const storedCursor = localStorage.getItem("custom-cursor-enabled");
        if (storedCursor !== null) {
            setCursorEnabled(storedCursor === "true");
        }

        return () => window.removeEventListener("scroll", handler);
    }, []);

    const toggleCursor = () => {
        const newState = !cursorEnabled;
        setCursorEnabled(newState);
        localStorage.setItem("custom-cursor-enabled", newState.toString());
        window.dispatchEvent(new CustomEvent("cursor-toggle", { detail: { enabled: newState } }));
    };

    const handleNavClick = (item: { name: string; path: string; isSection: boolean }) => {
        setMobileOpen(false);
        if (item.isSection) {
            if (pathname === "/") {
                const id = item.path.split("#")[1];
                const el = document.getElementById(id);
                if (el) el.scrollIntoView({ behavior: "smooth" });
            } else {
                router.push(item.path);
            }
        } else {
            router.push(item.path);
        }
    };

    if (!mounted) return null;

    return (
        <nav className="fixed left-0 right-0 top-0 z-50 px-4 py-3 md:px-6 md:py-4">
            <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "circOut" }}
                className={`mx-auto flex max-w-6xl items-center justify-between rounded-2xl border px-4 py-2 backdrop-blur-2xl transition-all duration-500 ${scrolled
                        ? "border-indigo-500/20 bg-background/80 shadow-2xl shadow-indigo-500/10"
                        : "border-border bg-background/40"
                    }`}
            >
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2.5 hover:scale-105 transition-transform active:scale-95">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-linear-to-br from-indigo-500 to-blue-600 text-white shadow-lg shadow-indigo-500/30">
                        <LayoutGrid size={18} />
                    </div>
                    <span className="text-xl font-bold tracking-tight text-foreground">
                        Triveda
                    </span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden items-center gap-1 lg:flex">
                    {NAV_ITEMS.map((item) => (
                        <button
                            key={item.name}
                            onClick={() => handleNavClick(item)}
                            className="rounded-lg px-4 py-2 text-sm font-medium text-muted-foreground transition-all duration-300 hover:bg-indigo-500/5 hover:text-indigo-400"
                        >
                            {item.name}
                        </button>
                    ))}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2">
                    {/* Accent Palette Picker */}
                    <div className="relative">
                        <button
                            onClick={() => setPaletteOpen(!paletteOpen)}
                            className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition-all hover:bg-white/10 hover:border-indigo-500/30 text-foreground"
                            title="Change Accent Color"
                        >
                            <Palette size={16} />
                        </button>

                        <AnimatePresence>
                            {paletteOpen && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9, y: -5 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.9, y: -5 }}
                                    transition={{ duration: 0.2 }}
                                    className="absolute right-0 top-12 z-50 rounded-2xl border border-border bg-card/95 backdrop-blur-2xl p-3 shadow-2xl min-w-[200px]"
                                >
                                    <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-2.5 px-1">
                                        Accent Color
                                    </p>
                                    <div className="flex flex-col gap-1">
                                        {ACCENT_THEMES.map((theme) => (
                                            <button
                                                key={theme.id}
                                                onClick={() => {
                                                    setAccent(theme.id);
                                                    setPaletteOpen(false);
                                                }}
                                                className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all ${
                                                    accent === theme.id
                                                        ? "bg-white/10 text-foreground"
                                                        : "text-muted-foreground hover:bg-white/5 hover:text-foreground"
                                                }`}
                                            >
                                                <div className="flex items-center gap-1">
                                                    <div
                                                        className="h-4 w-4 rounded-full shadow-inner"
                                                        style={{ background: theme.color500 }}
                                                    />
                                                    <div
                                                        className="h-4 w-4 rounded-full shadow-inner -ml-1.5"
                                                        style={{ background: theme.colorSecondary }}
                                                    />
                                                </div>
                                                <span>{theme.name}</span>
                                                {accent === theme.id && (
                                                    <span className="ml-auto text-[10px] font-mono opacity-50">✓</span>
                                                )}
                                            </button>
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Theme Toggle */}
                    <button
                        onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
                        className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition-all hover:bg-white/10 hover:border-indigo-500/30 text-foreground"
                    >
                        {resolvedTheme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
                    </button>

                    {/* Cursor Toggle */}
                    <button
                        onClick={toggleCursor}
                        className={`hidden min-[800px]:flex h-9 w-9 items-center justify-center rounded-xl border transition-all ${cursorEnabled
                                ? "border-indigo-500/40 bg-indigo-500/10 text-indigo-400"
                                : "border-white/10 bg-white/5 text-muted-foreground"
                            } hover:scale-105`}
                        title={cursorEnabled ? "Disable Custom Cursor" : "Enable Custom Cursor"}
                    >
                        <MousePointer2 size={16} />
                    </button>

                    <button
                        onClick={() => handleNavClick(NAV_ITEMS.find(n => n.name === 'Contact') || NAV_ITEMS[5])}
                        className="hidden rounded-xl bg-indigo-600 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition-all duration-300 hover:shadow-indigo-500/40 hover:bg-indigo-500 active:scale-[0.98] sm:block ml-2"
                    >
                        Contact
                    </button>

                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-foreground lg:hidden"
                    >
                        {mobileOpen ? <X size={18} /> : <Menu size={18} />}
                    </button>
                </div>
            </motion.div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="mx-auto mt-2 max-w-6xl overflow-hidden rounded-2xl border border-border bg-background/95 p-4 backdrop-blur-2xl lg:hidden shadow-2xl"
                    >
                        <div className="grid grid-cols-1 gap-1">
                            {NAV_ITEMS.map((item) => (
                                <button
                                    key={item.name}
                                    onClick={() => handleNavClick(item)}
                                    className="block w-full rounded-lg px-4 py-3 text-left text-sm font-medium text-muted-foreground transition-colors hover:bg-indigo-500/5 hover:text-indigo-400"
                                >
                                    {item.name}
                                </button>
                            ))}
                        </div>
                        <button
                            onClick={() => handleNavClick(NAV_ITEMS.find(n => n.name === 'Contact') || NAV_ITEMS[5])}
                            className="mt-3 w-full rounded-xl bg-indigo-600 py-3 text-sm font-semibold text-white"
                        >
                            Get in Touch
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
