import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Section from "@/components/Section";
import ProjectWindow from "@/components/ProjectWindow";
import { projects, projectArchive, STATUS } from "@/data/portfolio";
import { playOpen } from "@/audio/soundEngine";

const accents = {
    cy: "hover:border-cy/60",
    volt: "hover:border-volt/60",
};

const ProjectLab = () => {
    const [openId, setOpenId] = useState(null);
    const reduced = useReducedMotion();
    const openProject = projects.find((p) => p.id === openId);

    return (
        <Section id="work" index="03" label="PROJECT LAB" title="Selected builds">
            {/* bento grid of primary projects */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-6 gap-4" data-testid="project-lab-grid">
                {projects.map((p, i) => {
                    const status = STATUS[p.status];
                    const span =
                        i === 0 ? "lg:col-span-4" : i === 1 ? "lg:col-span-2" : i === 2 ? "lg:col-span-2" : i === 3 ? "lg:col-span-2" : "lg:col-span-2";
                    return (
                        <motion.button
                            key={p.id}
                            data-testid={`project-card-${p.id}`}
                            onClick={() => { playOpen(); setOpenId(p.id); }}
                            initial={reduced ? false : { opacity: 0, y: 28 }}
                            whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-40px" }}
                            transition={{ delay: (i % 3) * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                            className={`group relative text-left border border-line bg-surface inner-glow p-6 sm:p-7 flex flex-col justify-between min-h-[220px] ${span} ${accents[p.accent] || "hover:border-cy/60"} transition-colors duration-300`}
                            aria-label={`Open ${p.name} project details`}
                        >
                            <div>
                                <div className="flex items-start justify-between gap-3 mb-5">
                                    <span className="font-display text-2xl sm:text-3xl font-bold text-line group-hover:text-cy/40 transition-colors duration-300 select-none" aria-hidden="true">
                                        {p.glyph}
                                    </span>
                                    <span className={`font-mono text-[9px] sm:text-[10px] tracking-widest border px-2 py-1 ${status.cls}`}>
                                        {status.label}
                                    </span>
                                </div>
                                <h3 className="font-display text-lg sm:text-xl font-semibold text-ink mb-1.5 group-hover:text-cy transition-colors duration-200">
                                    {p.name}
                                </h3>
                                <p className="font-mono text-[10px] tracking-widest text-viol mb-3">{p.category}</p>
                                <p className="text-xs sm:text-sm text-dim leading-relaxed line-clamp-3">{p.tagline}</p>
                            </div>
                            <div className="mt-5 flex items-center gap-2 font-mono text-[10px] tracking-widest text-dim group-hover:text-cy transition-colors duration-200">
                                OPEN PROJECT
                                <span className="group-hover:translate-x-1 transition-transform duration-200" aria-hidden="true">→</span>
                            </div>
                        </motion.button>
                    );
                })}
            </div>

            {/* archive */}
            <div className="mt-14">
                <div className="flex items-baseline gap-4 mb-6">
                    <h3 className="font-mono text-xs tracking-widest text-dim">PROJECT ARCHIVE</h3>
                    <span className="h-px flex-1 bg-line" aria-hidden="true" />
                    <span className="font-mono text-[10px] tracking-widest text-dim/70">{projectArchive.length} FULL-STACK BUILDS</span>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-line" data-testid="project-archive-grid">
                    {projectArchive.map((a) => (
                        <div
                            key={a.name}
                            data-testid={`archive-item-${a.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                            className="border-b border-r border-line px-5 py-4 hover:bg-surface transition-colors duration-150"
                        >
                            <div className="flex items-center justify-between gap-3 mb-1">
                                <span className="text-sm text-ink font-medium">{a.name}</span>
                                <span className="font-mono text-[10px] text-cy/80 whitespace-nowrap">{a.tech}</span>
                            </div>
                            <p className="text-xs text-dim">{a.note}</p>
                        </div>
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {openProject && <ProjectWindow project={openProject} onClose={() => setOpenId(null)} />}
            </AnimatePresence>
        </Section>
    );
};

export default ProjectLab;
