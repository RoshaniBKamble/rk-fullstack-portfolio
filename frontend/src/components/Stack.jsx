import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Section from "@/components/Section";
import { stackCategories } from "@/data/portfolio";
import { playTick } from "@/audio/soundEngine";

const Stack = () => {
    const [activeId, setActiveId] = useState(stackCategories[0].id);
    const reduced = useReducedMotion();
    const active = stackCategories.find((c) => c.id === activeId);

    return (
        <Section id="stack" index="02" label="ENGINEERING STACK" title="Tools of the trade">
            <div className="grid lg:grid-cols-3 gap-8 lg:gap-12" data-testid="stack-section">
                <div className="flex lg:flex-col flex-wrap gap-2" role="tablist" aria-label="Stack categories">
                    {stackCategories.map((c, i) => (
                        <button
                            key={c.id}
                            data-testid={`stack-tab-${c.id}`}
                            role="tab"
                            aria-selected={activeId === c.id}
                            onClick={() => { setActiveId(c.id); playTick(); }}
                            className={`text-left px-5 py-3.5 border font-mono text-xs tracking-widest transition-colors duration-200 flex items-center gap-4 ${
                                activeId === c.id
                                    ? "border-cy/60 bg-cy/10 text-cy"
                                    : "border-line bg-surface text-dim hover:text-ink hover:border-dim"
                            }`}
                        >
                            <span className={activeId === c.id ? "text-cy/70" : "text-line"}>
                                {String(i + 1).padStart(2, "0")}
                            </span>
                            {c.label}
                        </button>
                    ))}
                </div>

                <div className="lg:col-span-2 border border-line bg-surface inner-glow min-h-[320px]">
                    <div className="border-b border-line px-6 py-3 flex items-center justify-between">
                        <span className="font-mono text-[10px] tracking-widest text-dim">STACK://{active.label}</span>
                        <span className="font-mono text-[10px] tracking-widest text-cy">{active.items.length} MODULES</span>
                    </div>
                    <p className="px-6 pt-5 text-sm text-dim">{active.blurb}</p>
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={active.id}
                            initial={reduced ? false : { opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={reduced ? undefined : { opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className="flex flex-wrap gap-2.5 p-6"
                        >
                            {active.items.map((item, i) => (
                                <motion.span
                                    key={item}
                                    initial={reduced ? false : { opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.035, duration: 0.3 }}
                                    data-testid={`stack-item-${item.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                                    className="px-4 py-2 border border-line bg-elev text-sm text-ink/90 hover:border-cy/50 hover:text-cy transition-colors duration-150 cursor-default"
                                >
                                    {item}
                                </motion.span>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </Section>
    );
};

export default Stack;
