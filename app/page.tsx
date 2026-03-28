"use client";

import React from "react";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Advantages from "@/components/Advantages";
import Stats from "@/components/Stats";
import Industries from "@/components/Industries";
import Testimonials from "@/components/Testimonials";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import VelocityScroll from "@/components/VelocityScroll";
import DigitalEcosystem from "@/components/DigitalEcosystem";
import TechCompass from "@/components/TechCompass";
import { ScrollProgress } from "@/components/ScrollEffects";

export default function Home() {
    return (
        <div className="min-h-screen bg-background text-foreground transition-colors duration-300 selection:bg-indigo-500/30 selection:text-indigo-200 overflow-x-hidden">
            <DigitalEcosystem />
            <TechCompass />
            <ScrollProgress />
            <SmoothScroll>
                <Navbar />
                <main>
                    <Hero />
                    <About />
                    <Services />
                    <VelocityScroll />
                    <Advantages />
                    <Stats />
                    <Industries />
                    <Testimonials />
                    <Team />
                    <Contact />
                </main>
                <Footer />
            </SmoothScroll>
        </div>
    );
}
