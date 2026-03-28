"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Send, Mail, Phone } from "lucide-react";
import {
    ScaleOnScroll,
    StaggerContainer,
    StaggerItem,
    TextReveal,
    FloatingCard,
    SectionDivider,
} from "./ScrollEffects";

export default function Contact() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        mobile: "",
        email: "",
        message: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
    };

    return (
        <section
            id="contact"
            className="relative z-10 overflow-hidden bg-background px-4 py-28 md:px-6 md:py-36 border-t border-border"
        >
            {/* Background */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_100%,rgba(99,102,241,0.08),transparent)]" />

            <div className="relative mx-auto max-w-6xl">
                {/* CTA Banner */}
                <ScaleOnScroll>
                    <motion.div
                        className="mb-20 overflow-hidden rounded-3xl border border-indigo-500/20 bg-linear-to-br from-indigo-600/10 via-card to-blue-600/5 p-10 md:p-16 text-center backdrop-blur-xl"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold font-heading text-foreground mb-5 tracking-tighter">
                            <TextReveal text="Let's Build Something" />{" "}
                            <TextReveal text="Extraordinary" gradient />
                        </h2>
                        <p className="mx-auto max-w-xl text-lg text-muted-foreground mb-8 font-sans">
                            Ready to transform your business? Let&apos;s discuss how we can help you
                            achieve your digital goals.
                        </p>
                        <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
                            <a
                                href="mailto:sales@trivedatechnologies.in"
                                className="flex items-center gap-2 rounded-xl border border-border bg-card px-5 py-2.5 transition-all hover:bg-accent hover:border-indigo-500/30"
                            >
                                <Mail size={16} className="text-indigo-400" />
                                sales@trivedatechnologies.in
                            </a>
                            <a
                                href="tel:+919973243422"
                                className="flex items-center gap-2 rounded-xl border border-border bg-card px-5 py-2.5 transition-all hover:bg-accent hover:border-indigo-500/30"
                            >
                                <Phone size={16} className="text-indigo-400" />
                                +91 9973243422
                            </a>
                        </div>
                    </motion.div>
                </ScaleOnScroll>

                {/* Contact Form */}
                <div className="mx-auto max-w-2xl">
                    <div className="text-center mb-10">
                        <h3 className="text-3xl font-bold font-heading text-foreground tracking-tight">Get in Touch</h3>
                        <p className="mt-3 text-muted-foreground font-sans">
                            Fill out the form below and our team will get back to you within 24
                            hours.
                        </p>
                    </div>

                    <StaggerContainer className="space-y-5" staggerDelay={0.1}>
                        <form onSubmit={handleSubmit} className="space-y-5">
                            <StaggerItem className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                                <div>
                                    <label className="mb-2 block text-sm font-medium text-foreground/80">
                                        First Name
                                    </label>
                                    <input
                                        type="text"
                                        value={formData.firstName}
                                        onChange={(e) =>
                                            setFormData({ ...formData, firstName: e.target.value })
                                        }
                                        className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground placeholder-muted-foreground/50 backdrop-blur-sm transition-all focus:border-indigo-500/50 focus:outline-none focus:ring-1 focus:ring-indigo-500/30"
                                        placeholder="John"
                                    />
                                </div>
                                <div>
                                    <label className="mb-2 block text-sm font-medium text-foreground/80">
                                        Last Name
                                    </label>
                                    <input
                                        type="text"
                                        value={formData.lastName}
                                        onChange={(e) =>
                                            setFormData({ ...formData, lastName: e.target.value })
                                        }
                                        className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground placeholder-muted-foreground/50 backdrop-blur-sm transition-all focus:border-indigo-500/50 focus:outline-none focus:ring-1 focus:ring-indigo-500/30"
                                        placeholder="Doe"
                                    />
                                </div>
                            </StaggerItem>

                            <StaggerItem className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                                <div>
                                    <label className="mb-2 block text-sm font-medium text-foreground/80">
                                        Mobile Number
                                    </label>
                                    <input
                                        type="tel"
                                        value={formData.mobile}
                                        onChange={(e) =>
                                            setFormData({ ...formData, mobile: e.target.value })
                                        }
                                        className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground placeholder-muted-foreground/50 backdrop-blur-sm transition-all focus:border-indigo-500/50 focus:outline-none focus:ring-1 focus:ring-indigo-500/30"
                                        placeholder="+91 XXXXX XXXXX"
                                    />
                                </div>
                                <div>
                                    <label className="mb-2 block text-sm font-medium text-foreground/80">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        value={formData.email}
                                        onChange={(e) =>
                                            setFormData({ ...formData, email: e.target.value })
                                        }
                                        className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground placeholder-muted-foreground/50 backdrop-blur-sm transition-all focus:border-indigo-500/50 focus:outline-none focus:ring-1 focus:ring-indigo-500/30"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </StaggerItem>

                            <StaggerItem>
                                <div>
                                    <label className="mb-2 block text-sm font-medium text-foreground/80">
                                        How can we help?
                                    </label>
                                    <textarea
                                        value={formData.message}
                                        onChange={(e) =>
                                            setFormData({ ...formData, message: e.target.value })
                                        }
                                        rows={4}
                                        className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground placeholder-muted-foreground/50 backdrop-blur-sm transition-all focus:border-indigo-500/50 focus:outline-none focus:ring-1 focus:ring-indigo-500/30 resize-none"
                                        placeholder="Tell us about your project requirements..."
                                    />
                                </div>
                            </StaggerItem>

                            <StaggerItem>
                                <button
                                    type="submit"
                                    className="group flex w-full items-center justify-center gap-2.5 rounded-2xl bg-linear-to-r from-indigo-600 to-blue-600 px-8 py-4 text-base font-bold text-white shadow-xl shadow-indigo-500/20 transition-all duration-300 hover:shadow-indigo-500/30 hover:scale-[1.01] active:scale-[0.99]"
                                >
                                    <Send size={18} />
                                    Send Message
                                    <ArrowRight
                                        size={16}
                                        className="transition-transform group-hover:translate-x-1"
                                    />
                                </button>
                            </StaggerItem>
                        </form>
                    </StaggerContainer>
                </div>
            </div>
            
            <div className="mt-28">
                <SectionDivider />
            </div>
        </section>
    );
}
