"use client";

import React from "react";
import { LayoutGrid } from "lucide-react";

export default function Footer() {
    const FOOTER_LINKS = {
        Product: ["Technology Solutions", "AI & Analytics", "Cloud Services", "Digital Marketing"],
        Company: ["About Us", "Careers", "Blog", "Contact"],
        Resources: ["Documentation", "Case Studies", "Whitepapers", "FAQ"],
    };

    return (
        <footer className="relative z-50 mt-auto rounded-t-[2.5rem] md:rounded-t-[4rem] border-t border-border bg-card/50 backdrop-blur-3xl pb-10 pt-20 text-muted-foreground shadow-[0_-20px_80px_rgba(0,0,0,0.05)] dark:shadow-none">
            <div className="mx-auto max-w-6xl px-4 md:px-6">
                <div className="grid grid-cols-2 gap-10 md:grid-cols-5">
                    {/* Brand */}
                    <div className="col-span-2">
                        <div className="mb-4 flex items-center gap-2.5">
                            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-linear-to-br from-indigo-500 to-blue-600 text-white">
                                <LayoutGrid size={16} />
                            </div>
                            <span className="text-lg font-bold text-foreground">Triveda</span>
                        </div>
                        <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
                            Engineering intelligent digital ecosystems for forward-thinking
                            organizations worldwide.
                        </p>
                        <div className="mt-5 text-xs text-muted-foreground/70">
                            3rd Floor, Plot 1A, Surat Nagar, Phase 1,
                            <br />
                            Gurugram (Haryana) – 122006
                        </div>
                    </div>

                    {/* Links */}
                    {Object.entries(FOOTER_LINKS).map(([col, links]) => (
                        <div key={col}>
                            <h4 className="mb-4 text-sm font-bold text-foreground">{col}</h4>
                            <ul className="space-y-2.5 text-xs">
                                {links.map((link) => (
                                    <li key={link}>
                                        <a
                                            href="#"
                                            className="text-muted-foreground transition-colors duration-300 hover:text-indigo-500"
                                        >
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom */}
                <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-xs md:flex-row">
                    <span className="text-muted-foreground/70">
                        © 2026 Triveda Technologies. All rights reserved.
                    </span>
                    <div className="flex items-center gap-6 text-muted-foreground">
                        <a
                            href="https://www.linkedin.com/company/triveda-technologies"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition-colors hover:text-indigo-500"
                        >
                            LinkedIn
                        </a>
                        <a
                            href="mailto:sales@trivedatechnologies.in"
                            className="transition-colors hover:text-indigo-500"
                        >
                            Email
                        </a>
                        <a
                            href="tel:+919973243422"
                            className="transition-colors hover:text-indigo-500"
                        >
                            Phone
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
