"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

// Global Layout Components
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import DigitalEcosystem from "@/components/DigitalEcosystem";
import { SectionDivider } from "@/components/ScrollEffects";
import { BreadcrumbSchema } from "@/components/JsonLd";

// Shared Section Implementation
import { CASE_STUDIES } from "@/constants/caseStudiesData";
import { CaseStudyHero } from "@/components/case-studies/CaseStudyHero";
import { CaseStudyItem } from "@/components/case-studies/CaseStudyItem";

/**
 * CaseStudiesPage Component
 * 
 * Showcases high-impact success stories through a modular list architecture.
 * Designed for readability and easy expansion.
 * 
 * Highlights:
 * - Direct mapping from data constants to components.
 * - Optimized for both conversion (CTA) and search (Clear headers).
 */
export default function CaseStudiesPage() {
    const handleContactNavigation = () => {
        window.location.href = '/#contact';
    };

    return (
        <div className="min-h-screen bg-background text-foreground transition-colors duration-300 selection:bg-indigo-500/30 selection:text-indigo-200 overflow-x-hidden">
            <DigitalEcosystem />
            <BreadcrumbSchema
                items={[
                    { name: "Home", url: "https://trivedatechnologies.com" },
                    { name: "Case Studies", url: "https://trivedatechnologies.com/case-studies" },
                ]}
            />
            
            <SmoothScroll>
                <Navbar />
                
                <main className="pt-20">
                    <CaseStudyHero />
                    <SectionDivider />

                    {/* Sequential Case Study Sections */}
                    <div className="max-w-7xl mx-auto px-4 py-10 space-y-20 md:space-y-32">
                        {CASE_STUDIES.map((study, index) => (
                            <CaseStudyItem key={study.id} study={study} index={index} />
                        ))}
                    </div>

                    {/* Dynamic Conversion Section */}
                    <section className="px-4 py-20 text-center bg-card/20 border-y border-border">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-2xl md:text-4xl lg:text-5xl font-black font-heading tracking-tight mb-8">
                                Ready to write your <span className="text-indigo-500">Success Story</span>?
                            </h2>
                            <button 
                                onClick={handleContactNavigation}
                                className="inline-flex items-center gap-3 px-8 py-4 md:px-10 md:py-5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl md:rounded-3xl font-bold text-base md:text-lg transition-all shadow-2xl shadow-indigo-500/20 active:scale-95"
                            >
                                Let's Discuss Your Project <ArrowRight size={22} />
                            </button>
                        </div>
                    </section>
                </main>
                
                <Footer />
            </SmoothScroll>
        </div>
    );
}
