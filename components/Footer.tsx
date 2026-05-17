"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    const FOOTER_LINKS = {
        Services: [
            { name: "Product", path: "/services/product" },
            { name: "Technology Solutions", path: "/services/technology" },
            { name: "AI & Analytics", path: "/services/ai-analytics" },
            { name: "Cloud Services", path: "/services/cloud" },
            { name: "Digital Marketing", path: "/services/marketing" },
        ],
        Company: [
            { name: "About Us", path: "/about" },
            { name: "Case Studies", path: "/case-studies" },
            { name: "Contact", path: "/#contact" },
            { name: "Success Stories", path: "/case-studies" },
        ],

    };

    return (
        <footer className="relative z-50 mt-auto rounded-t-[2.5rem] md:rounded-t-[4rem] border-t border-border bg-card/50 backdrop-blur-3xl pb-8 pt-12 text-muted-foreground shadow-[0_-20px_80px_rgba(0,0,0,0.05)] dark:shadow-none">
            <div className="mx-auto max-w-6xl px-4 md:px-6">
                <div className="flex flex-col gap-12 lg:flex-row lg:justify-between lg:gap-20">
                    {/* Brand */}
                    <div className="max-w-sm">
                        <div className="mb-6">
                            <Link href="/" className="flex items-center gap-2 group">
                                <div className="relative h-12 w-12  overflow-hidden rounded-xl p-2 transition-colors">
                                    <Image
                                        src="/favicon.png"
                                        alt="Triveda"
                                        fill
                                        className="object-contain p-1"
                                    />
                                </div>
                                <div className="flex flex-col leading-none">
                                    <span className="text-xl font-black tracking-tighter text-foreground">
                                        TRIVEDA
                                    </span>
                                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-indigo-500/80">
                                        Technologies
                                    </span>
                                </div>
                            </Link>
                        </div>
                        <p className="text-sm leading-relaxed text-muted-foreground mb-6">
                            Engineering intelligent digital ecosystems for forward-thinking
                            organizations worldwide. We bridge the gap between vision and execution.
                        </p>
                        <div className="flex flex-col gap-1.5 text-xs font-medium text-muted-foreground/60 border-l-2 border-indigo-500/20 pl-4 py-1">
                            <span>3rd Floor, Plot 1A, Surat Nagar, Phase 1,</span>
                            <span>Gurugram (Haryana) – 122006</span>
                        </div>
                    </div>

                    {/* Links - Responsive flex */}
                    <div className="flex flex-row flex-wrap gap-12 sm:gap-24 lg:gap-32">
                        {Object.entries(FOOTER_LINKS).map(([col, links]) => (
                            <div key={col} className="min-w-[120px]">
                                <h4 className="mb-6 text-sm font-black uppercase tracking-widest text-foreground/90">{col}</h4>
                                <ul className="space-y-4 text-sm">
                                    {links.map((link) => (
                                        <li key={link.name}>
                                            <Link
                                                href={link.path}
                                                className="group flex items-center gap-1.5 text-muted-foreground transition-all duration-300 hover:text-indigo-500"
                                            >
                                                <span className="transition-all duration-300">
                                                    {link.name}
                                                </span>
                                                <ArrowUpRight
                                                    size={12}
                                                    className="opacity-0 -translate-y-1 -translate-x-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 text-indigo-400"
                                                />
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom */}
                <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-xs md:flex-row">
                    <span className="text-muted-foreground/70">
                        © 2026 Triveda Technologies. All rights reserved.
                    </span>
                    <div className="flex items-center gap-6 text-muted-foreground">

                        <a
                            href="mailto:care@trivedatechnologies.com"
                            className="group flex items-center gap-1 transition-all hover:text-indigo-400"
                        >
                            <span>Email</span>
                            <ArrowUpRight
                                size={10}
                                className="opacity-0 -translate-y-0.5 -translate-x-0.5 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0"
                            />
                        </a>

                        <a
                            href="https://wa.me/919973243422?text=Hi"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center gap-1 transition-all hover:text-emerald-400"
                        >
                            <span>WhatsApp</span>
                            <ArrowUpRight
                                size={10}
                                className="opacity-0 -translate-y-0.5 -translate-x-0.5 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0"
                            />
                        </a>

                    </div>
                </div>
            </div>
        </footer>
    );
}

