"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    Code2,
    Rocket,
    BrainCircuit,
    TrendingUp,
    Compass,
    Trophy,
    ChevronDown,
    ChevronUp,
} from "lucide-react";
import { GlowCard } from "./GlowCard";
import {
    ScaleOnScroll,
    StaggerContainer,
    StaggerItem,
    TextReveal,
    FloatingCard,
    SectionDivider,
} from "./ScrollEffects";
import { AnimatePresence } from "framer-motion";

const SERVICES = [
    {
        id: "tech",
        icon: Code2,
        title: "Technology & Digital Solutions",
        description: "Build scalable, secure, and high-performance applications tailored to your business needs.",
        color: "text-indigo-400",
        bg: "bg-indigo-500/10",
        details: [
            "Custom Software Development",
            "Web Application Development",
            "Mobile App Development",
            "Cloud Solutions & Migration",
            "API Development & Integration",
            "Enterprise Application Development",
            "SaaS Product Development"
        ],
        tags: ["Next.js", "React", "Cloud", "APIs"]
    },
    {
        id: "impl",
        icon: Rocket,
        title: "End-to-End Implementation",
        description: "From requirement gathering to go-live — agile execution, vendor management, and managed services.",
        color: "text-cyan-400",
        bg: "bg-cyan-500/10",
        details: [
            "Requirement Gathering & Solution Design",
            "Project Planning & Roadmapping",
            "Agile & Waterfall Execution",
            "Vendor & Stakeholder Management",
            "Go-Live & Post-Implementation Support",
            "Managed Services & AMC",
            "Digital Transformation Programs"
        ],
        tags: ["Agile", "DevOps", "CI/CD", "Managed"]
    },
    {
        id: "ai",
        icon: BrainCircuit,
        title: "AI & Data Solutions",
        description: "Leverage AI and analytics to automate workflows, uncover insights, and make smarter decisions.",
        color: "text-blue-400",
        bg: "bg-blue-500/10",
        details: [
            "AI & Machine Learning Solutions",
            "Predictive Analytics & Forecasting",
            "Business Intelligence Dashboards",
            "Data Engineering & Warehousing",
            "AI-Powered Automation (RPA)",
            "Chatbots & Conversational AI",
            "Recommendation Engines",
            "Computer Vision & NLP Solutions"
        ],
        tags: ["ML", "NLP", "Analytics", "AI"]
    },
    {
        id: "marketing",
        icon: TrendingUp,
        title: "Digital Marketing & Growth",
        description: "Accelerate customer acquisition and revenue with performance-driven marketing strategies.",
        color: "text-indigo-400",
        bg: "bg-indigo-500/10",
        details: [
            "Performance Marketing (Google, Meta)",
            "Search Engine Optimization (SEO)",
            "Social Media Marketing",
            "Marketing Automation",
            "Content Strategy & Branding",
            "Conversion Rate Optimization (CRO)",
            "Funnel & Growth Analytics"
        ],
        tags: ["SEO"]
    },
    {
        id: "cx",
        icon: Trophy,
        title: "CX & Loyalty Platforms",
        description: "Enhance customer engagement, retention, and lifetime value through personalized experiences.",
        color: "text-blue-400",
        bg: "bg-blue-500/10",
        details: [
            "Loyalty Program Design",
            "Rewards & Incentives Management",
            "Customer Data Platform (CDP)",
            "Omnichannel Engagement",
            "Retention Analytics",
            "Membership Management"
        ],
        tags: ["Loyalty", "CRM", "Retention"]
    },
    {
        id: "consulting",
        icon: Compass,
        title: "Consulting & Strategy",
        description: "Strategic advisory for digital transformation, product strategy, and tech roadmaps.",
        color: "text-blue-400",
        bg: "bg-blue-500/10",
        details: [
            "Digital & Technology Consulting",
            "Product Strategy & GTM Advisory",
            "Data & Analytics Consulting",
            "Martech & Adtech Consulting",
            "Process Optimization & Automation",
            "Startup & Enterprise Advisory"
        ],
        tags: ["Strategy", "Advisory", "Growth", "Digital"]
    }
];

function ServiceCard({ service }: { service: typeof SERVICES[0] }) {
    const [isExpanded, setIsExpanded] = React.useState(false);

    return (
        <StaggerItem>
            <FloatingCard>
                <GlowCard className={`h-full p-7 transition-all duration-500 ${isExpanded ? 'ring-1 ring-indigo-500/30' : ''}`}>
                    <div className={`mb-5 inline-flex rounded-xl ${service.bg} p-3`}>
                        <service.icon size={24} className={service.color} />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3 font-heading tracking-tight">
                        {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                        {service.description}
                    </p>

                    {/* Basic tags if not expanded */}
                    {!isExpanded && (
                        <div className="flex flex-wrap gap-2 mb-4">
                            {service.tags && service.tags.slice(0, 3).map(tag => (
                                <span key={tag} className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground/60 border border-border px-2 py-0.5 rounded-full">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    )}

                    <button 
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-indigo-400 hover:text-indigo-300 transition-colors"
                    >
                        {isExpanded ? (
                            <>Hide Details <ChevronUp size={14} /></>
                        ) : (
                            <>View Details <ChevronDown size={14} /></>
                        )}
                    </button>

                    <AnimatePresence>
                        {isExpanded && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.4, ease: "circOut" }}
                                className="overflow-hidden"
                            >
                                <div className="mt-8 pt-6 border-t border-border">
                                    <ul className="space-y-3 mb-8">
                                        {service.details.map((detail, i) => (
                                            <motion.li 
                                                key={detail}
                                                initial={{ x: -10, opacity: 0 }}
                                                animate={{ x: 0, opacity: 1 }}
                                                transition={{ delay: i * 0.05 }}
                                                className="flex items-start gap-2.5 text-sm text-muted-foreground"
                                            >
                                                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-indigo-500 flex-shrink-0" />
                                                {detail}
                                            </motion.li>
                                        ))}
                                    </ul>

                                    <div className="flex flex-wrap gap-2">
                                        {service.tags && service.tags.map(tag => (
                                            <span key={tag} className="text-[10px] font-mono uppercase tracking-widest text-indigo-400 bg-indigo-500/5 px-3 py-1 rounded-lg border border-indigo-500/10">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </GlowCard>
            </FloatingCard>
        </StaggerItem>
    );
}

export default function Services() {
    return (
        <section
            id="services"
            className="relative z-10 bg-background px-4 py-16 md:px-6 md:py-20"
        >
            {/* Background accent */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_50%,rgba(99,102,241,0.04),transparent)]" />

            <div className="relative mx-auto max-w-6xl">
                {/* Section Header */}
                <div className="mb-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-4 inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/6 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-indigo-400"
                    >
                        <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 animate-pulse" />
                        Our Core Services
                    </motion.div>

                    <ScaleOnScroll>
                        <h2 className="text-4xl font-bold font-heading tracking-tight text-foreground md:text-5xl">
                            <TextReveal text="End-to-End Technology &" />{" "}
                            <TextReveal text="Growth Solutions" gradient />
                        </h2>
                    </ScaleOnScroll>

                    <motion.p
                        initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
                        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground"
                    >
                        We combine technology, data, and strategy to solve complex business problems and drive measurable growth.
                    </motion.p>
                </div>

                {/* Bento Grid */}
                <StaggerContainer
                    className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3"
                    staggerDelay={0.1}
                >
                    {SERVICES.map((service) => (
                        <ServiceCard key={service.id} service={service} />
                    ))}
                </StaggerContainer>
            </div>

            <div className="mt-16">
                <SectionDivider />
            </div>
        </section>
    );
}

