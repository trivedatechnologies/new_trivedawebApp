import { motion } from "framer-motion";
import { CheckCircle2, Target, ArrowDown, TrendingUp, Layers, Activity } from "lucide-react";
import { GlowCard } from "@/components/GlowCard";

/**
 * Alternative UI: Executive Narrative
 * This design focuses on a story-driven timeline and big metric headers.
 */
export const CaseStudyItem = ({ study, index }: { study: any; index: number }) => {
    return (
        <section className="relative py-12 px-4 overflow-hidden">
            <div className="max-w-6xl mx-auto">
                
                {/* 1. Metric-First Top Header */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col md:flex-row justify-between items-end gap-8 mb-8 border-b border-border/50 pb-8"
                >
                    <div className="max-w-2xl">
                        <Tag study={study} />
                        <h2 className="text-3xl md:text-6xl font-black font-heading tracking-tighter mt-6 leading-none italic uppercase">
                            {study.title.split(' ').slice(0, 4).join(' ')}
                            <br />
                            <span className="text-indigo-500">{study.title.split(' ').slice(4).join(' ')}</span>
                        </h2>
                    </div>
                    <div className="flex flex-col items-end">
                        <span className="text-6xl md:text-9xl font-black font-heading tracking-tighter text-foreground/10 select-none -mb-6 md:-mb-10">
                            IMPACT
                        </span>
                        <div className="relative z-10 flex items-center gap-4 bg-indigo-600 px-8 py-6 rounded-[2rem] shadow-2xl shadow-indigo-500/40">
                             <TrendingUp className="text-white w-10 h-10" />
                             <div>
                                <p className="text-2xl md:text-4xl font-black text-white leading-none">
                                    {study.results[0].value}
                                </p>
                                <p className="text-[10px] font-black uppercase tracking-widest text-indigo-100">
                                    Primary Growth Metric
                                </p>
                             </div>
                        </div>
                    </div>
                </motion.div>

                {/* 2. Three-Column Storyboard */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
                    
                    {/* Left: Context & The Problem (Sticky) */}
                    <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit">
                        <div className="space-y-12">
                            <div>
                                <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground mb-6 flex items-center gap-2">
                                    <Layers size={14} className="text-indigo-500" />
                                    The Challenge
                                </h4>
                                <p className="text-lg md:text-xl text-foreground font-serif italic leading-relaxed opacity-80 mb-8 underline decoration-indigo-500/30 underline-offset-8">
                                    "{study.context}"
                                </p>
                                <div className="space-y-4">
                                    {study.problem.map((p: string, i: number) => (
                                        <div key={i} className="flex gap-4 items-center bg-card/30 p-4 rounded-2xl border border-border/50">
                                            <div className="h-6 w-6 rounded-full border border-rose-500/50 flex items-center justify-center text-rose-500 text-[10px] font-bold">!</div>
                                            <p className="text-sm text-foreground/70 font-medium">{p}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: The Solution Timeline & Multi-Metrics */}
                    <div className="lg:col-span-8 flex flex-col gap-12">
                        
                        {/* Vertical Solution Flow */}
                        <div className="space-y-12">
                             <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-cyan-500 mb-6 flex items-center gap-2">
                                <Activity size={14} />
                                Technical Strategy & Execution
                            </h4>
                            <div className="relative pl-12 border-l-2 border-indigo-500/10 space-y-10">
                                {study.solutionSteps.map((step: any, i: number) => (
                                    <motion.div 
                                        key={i}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                        className="relative"
                                    >
                                        <div className="absolute -left-[61px] top-0 h-10 w-10 rounded-full bg-background border-4 border-indigo-500/20 flex items-center justify-center text-[11px] font-black text-indigo-400 z-10">
                                            {i + 1}
                                        </div>
                                        <h4 className="text-xl md:text-2xl font-bold text-foreground mb-3">{step.title}</h4>
                                        <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl">{step.desc}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Bento Results Summary */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {study.results.map((result: any, i: number) => (
                                <GlowCard key={i} className="p-8 bg-card/20 border-white/[0.03]">
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="p-3 bg-indigo-500/10 rounded-xl text-indigo-400">
                                            <result.icon size={20} />
                                        </div>
                                        <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">0{i+1} Result</span>
                                    </div>
                                    <h4 className="text-2xl md:text-4xl font-black text-foreground mb-1 tracking-tighter">{result.value}</h4>
                                    <p className="text-xs font-bold text-muted-foreground uppercase tracking-[0.22em]">{result.label}</p>
                                </GlowCard>
                            ))}
                        </div>

                        {/* Executive Takeaway */}
                        <div className="bg-linear-to-br from-indigo-500/10 via-card to-indigo-500/5 p-10 rounded-[3rem] border border-indigo-500/20 text-center relative overflow-hidden group">
                           <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--color-indigo-500)_0%,transparent_70%)] opacity-0 group-hover:opacity-5 transition-opacity duration-700" />
                           <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-indigo-400 mb-6 flex items-center justify-center gap-2">
                                <Target size={14} />
                                Strategic Takeaway
                            </h4>
                            <p className="text-lg md:text-3xl font-bold font-serif leading-tight">
                                "{study.takeaway}"
                            </p>
                            <ArrowDown size={30} className="mx-auto mt-8 text-indigo-500 animate-bounce" />
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
};

const Tag = ({ study }: { study: any }) => (
    <div className="flex items-center gap-3">
        <span className={`px-4 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest border ${
            study.color === 'indigo' ? 'border-indigo-500/30 bg-indigo-500/5 text-indigo-400' :
            study.color === 'cyan' ? 'border-cyan-500/30 bg-cyan-500/5 text-cyan-400' :
            'border-blue-500/30 bg-blue-500/5 text-blue-400'
        }`}>
            {study.tag}
        </span>
    </div>
);


