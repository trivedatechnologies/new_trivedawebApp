"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, LayoutGrid } from "lucide-react";

// Layout Components
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import DigitalEcosystem from "@/components/DigitalEcosystem";
import { BreadcrumbSchema, ServiceSchema } from "@/components/JsonLd";

// Animation & Effects
import { 
    ScaleOnScroll, 
    TextReveal, 
    SlideReveal, 
    SectionDivider 
} from "@/components/ScrollEffects";

/**
 * ServicePageProps - Type definition for Service Details
 */
interface ServicePageProps {
    id: string;
    tag: string;
    title: string;
    description: string;
    whatWeDo: string[];
    businessImpact: string[];
    gradientText?: string;
}

/**
 * ServicePageTemplate Component
 * 
 * A high-performance, reusable template for detailed service views. 
 * Orchestrates hero, service depth, and conversion sections.
 * 
 * Features:
 * - Responsive typography (text-3xl to text-7xl).
 * - Shared design language with glassmorphic cards and motion effects.
 * - Dynamic data injection.
 */
export default function ServicePageTemplate({
    id,
    tag,
    title,
    description,
    whatWeDo,
    businessImpact,
    gradientText
}: ServicePageProps) {
    const handleNavigation = () => {
        window.location.href = '/#contact';
    };

    const serviceUrl = `https://trivedatechnologies.com/services/${id}`;

    return (
        <div className="min-h-screen bg-background text-foreground transition-colors duration-300 selection:bg-indigo-500/30 selection:text-indigo-200 overflow-x-hidden">
            <DigitalEcosystem />
            <BreadcrumbSchema
                items={[
                    { name: "Home", url: "https://trivedatechnologies.com" },
                    { name: tag, url: serviceUrl },
                ]}
            />
            <ServiceSchema
                name={`${tag} Solutions`}
                description={description}
                url={serviceUrl}
            />
            
            <SmoothScroll>
                <Navbar />
                
                <main className="pt-20">
                    {/* Hero Section - Capturing attention and defining the category */}
                    <section className="relative px-4 py-12 md:py-32 overflow-hidden bg-transparent">
                        <div className="max-w-7xl mx-auto">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="mb-4 md:mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/5 px-4 py-1.5 text-[10px] md:text-xs font-semibold uppercase tracking-[0.2em] text-indigo-400"
                            >
                                <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
                                Our Expertise
                            </motion.div>
                            
                            <h1 className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-black font-heading tracking-tighter leading-tight mb-6 md:mb-12 max-w-5xl">
                                <TextReveal text={title} />
                                {gradientText && <><br className="hidden md:block" /><TextReveal text={gradientText} gradient /></>}
                            </h1>

                            <div className="max-w-4xl">
                                <SlideReveal direction="up">
                                    <p className="text-lg md:text-2xl text-muted-foreground leading-relaxed font-medium">
                                        {description}
                                    </p>
                                </SlideReveal>
                            </div>
                        </div>
                    </section>

                    <SectionDivider />

                    {/* Operational Depth - Defining specific offerings and their value */}
                    <section className="px-4 py-12 md:py-36 bg-card/30 relative border-y border-border">
                        <div className="max-w-7xl mx-auto">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 lg:gap-32 items-start">
                                {/* Left Side: Deliverables */}
                                <div>
                                    <h2 className="text-2xl md:text-5xl font-bold font-heading mb-8 md:mb-12 tracking-tight">
                                        What We Do
                                    </h2>
                                    <div className="grid grid-cols-1 gap-3 md:gap-4">
                                        {whatWeDo.map((item, i) => (
                                            <motion.div 
                                                key={i}
                                                initial={{ opacity: 0, x: -20 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                transition={{ delay: i * 0.1 }}
                                                className="flex items-center gap-4 p-4 md:p-5 rounded-xl md:rounded-2xl bg-background border border-border group hover:border-indigo-500/30 transition-all shadow-sm"
                                            >
                                                <div className="h-2 w-2 rounded-full bg-indigo-500 shrink-0 group-hover:scale-150 transition-transform" />
                                                <span className="text-sm md:text-lg font-semibold text-foreground/90">{item}</span>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>

                                {/* Right Side: Outcome Mapping */}
                                <div className="space-y-8 md:space-y-12">
                                    <h2 className="text-2xl md:text-5xl font-bold font-heading mb-8 md:mb-12 tracking-tight text-indigo-500">
                                        Business Impact
                                    </h2>
                                    <div className="grid grid-cols-1 gap-4 md:gap-6">
                                        {businessImpact.map((impact, i) => (
                                            <motion.div 
                                                key={i}
                                                initial={{ opacity: 0, y: 10 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                transition={{ delay: i * 0.15 }}
                                                className="flex gap-4 md:gap-5 p-5 md:p-8 rounded-2xl md:rounded-[2.5rem] bg-indigo-500/5 border border-indigo-500/10 group hover:bg-indigo-500/10 transition-all shadow-md"
                                            >
                                                <CheckCircle2 size={20} className="text-indigo-500 shrink-0 mt-1" />
                                                <p className="text-base md:text-xl font-bold leading-tight group-hover:text-foreground transition-colors">
                                                    {impact}
                                                </p>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Final Conversion Stage */}
                    <section className="px-4 py-12 md:py-32 text-center bg-background">
                        <div className="max-w-4xl mx-auto">
                            <ScaleOnScroll>
                                <div className="p-8 md:p-20 rounded-[2.5rem] md:rounded-[4rem] bg-linear-to-br from-indigo-600/10 via-card to-blue-600/5 border border-indigo-500/20 backdrop-blur-3xl relative overflow-hidden group shadow-2xl">
                                    <div className="absolute top-0 right-0 p-10 opacity-[0.03]">
                                        <LayoutGrid size={240} />
                                    </div>
                                    <h2 className="text-xl md:text-4xl lg:text-5xl font-black font-heading tracking-tight mb-6 md:mb-8">
                                        Ready to scale your <span className="text-indigo-500">{tag}</span>?
                                    </h2>
                                    <button 
                                        onClick={handleNavigation}
                                        className="inline-flex items-center gap-3 px-6 py-3.5 md:px-10 md:py-5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl md:rounded-3xl font-bold text-sm md:text-lg transition-all shadow-2xl shadow-indigo-500/20 active:scale-95"
                                    >
                                        Let's Build Together <ArrowRight size={22} />
                                    </button>
                                </div>
                            </ScaleOnScroll>
                        </div>
                    </section>
                </main>
                
                <Footer />
            </SmoothScroll>
        </div>
    );
}

