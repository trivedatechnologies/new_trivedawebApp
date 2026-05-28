"use client";

import React from "react";

// Layout & Global Components
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import DigitalEcosystem from "@/components/DigitalEcosystem";
import { SectionDivider } from "@/components/ScrollEffects";
import { BreadcrumbSchema } from "@/components/JsonLd";

// Modular Sub-components
import { AboutHero } from "@/components/about/AboutHero";
import { AboutEdge } from "@/components/about/AboutEdge";
import { LeadershipSection } from "@/components/about/LeadershipSection";
import { PhilosophySection } from "@/components/about/PhilosophySection";
import { MissionVisionSection } from "@/components/about/MissionVisionSection";
import { TrustSection } from "@/components/about/TrustSection";

/**
 * AboutPage Component
 * 
 * This is the root page for the "/about" route. It follows a modular architecture 
 * to ensure scalability and ease of maintenance.
 * 
 * Architecture Principles followed:
 * - Separation of concerns: Data is moved to constants, UI is broken into sub-components.
 * - Responsive first Design.
 * - Smooth motion orchestration with GSAP & Framer Motion.
 */
export default function AboutPage() {
    /**
     * Handles scrolling to the contact section from sub-pages
     */
    const navigateToContact = () => {
        window.location.href = '/#contact';
    };

    return (
        <div className="min-h-screen bg-background text-foreground transition-colors duration-300 selection:bg-indigo-500/30 selection:text-indigo-200 overflow-x-hidden">
            {/* Global background effects */}
            <DigitalEcosystem />
            <BreadcrumbSchema
                items={[
                    { name: "Home", url: "https://trivedatechnologies.com" },
                    { name: "About Us", url: "https://trivedatechnologies.com/about" },
                ]}
            />
            
            <SmoothScroll>
                <Navbar />
                
                <main className="pt-20">
                    <AboutHero />
                    <SectionDivider />
                    <AboutEdge />
                    <LeadershipSection />
                    <PhilosophySection />
                    <MissionVisionSection />
                    <TrustSection />
                    
                    <SectionDivider />

                    {/* Content ends before Contact section which is on Home but usually accessible via CTA */}
                </main>
                
                <Footer />
            </SmoothScroll>
        </div>
    );
}
