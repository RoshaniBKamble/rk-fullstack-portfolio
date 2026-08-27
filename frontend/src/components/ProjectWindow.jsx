import { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { X } from "lucide-react";
import { STATUS } from "@/data/portfolio";
import { playClose } from "@/audio/soundEngine";

const Field = ({ label, children }) => (
    <div className="mb-8">
        <h4 className="font-mono text-[10px] tracking-widest text-cy mb-3">{label}</h4>
        {children}
    </div>
);

const ProjectWindow = ({ project, onClose }) => {
    const reduced = useReducedMotion();
    const closeRef = useRef(null);
    const status = STATUS[project.status];

    useEffect(() => {
        closeRef.current?.focus();
        const onKey = (e) => e.key === "Escape" && handleClose();
        document.addEventListener("keydown", onKey);
        document.body.style.overflow = "hidden";
        return () => {
            document.removeEventListener("keydown", onKey);
            document.body.style.overflow = "";
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleClose = () => {
        playClose();
        onClose();
    };

    return (
        <motion.div
            className="fixed inset-0 z-[150] flex items-end sm:items-center justify-center sm:p-6"
            initial={reduced ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduced ? undefined : { opacity: 0 }}
            transition={{ duration: 0.25 }}
            role="dialog"
            aria-modal="true"
            aria-label={`${project.name} project details`}
            data-testid={`project-window-${project.id}`}
        >
            <div className="absolute inset-0 bg-void/80 backdrop-blur-sm" onClick={handleClose} aria-hidden="true" />

            <motion.div
                initial={reduced ? false : { opacity: 0, y: 40, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={reduced ? undefined : { opacity: 0, y: 24, scale: 0.98 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="relative w-full max-w-3xl max-h-[92vh] sm:max-h-[85vh] flex flex-col border border-line bg-surface inner-glow"
            >
                {/* title bar */}
                <div className="flex items-center justify-between border-b border-line px-5 py-3 shrink-0 bg-elev/60">
                    <div className="flex items-center gap-3 min-w-0">
                        <span className="flex gap-1.5 shrink-0" aria-hidden="true">
                            <span className="w-2.5 h-2.5 rounded-full bg-line" />
                            <span className="w-2.5 h-2.5 rounded-full bg-line" />
                            <span className="w-2.5 h-2.5 rounded-full bg-cy/70" />
                        </span>
                        <span className="font-mono text-xs text-ink truncate">PROJECT://{project.name.toUpperCase().replace(/\s+/g, "_")}</span>
                    </div>
                    <div className="flex items-center gap-3 shrink-0">
                        <span className={`hidden sm:inline-block font-mono text-[10px] tracking-widest border px-2.5 py-1 ${status.cls}`}>
                            {status.label}
                        </span>
                        <button
                            ref={closeRef}
                            data-testid={`project-close-${project.id}`}
                            onClick={handleClose}
                            aria-label="Close project window"
                            className="p-1.5 text-dim hover:text-ink hover:bg-elev transition-colors duration-150"
                        >
                            <X size={16} />
                        </button>
                    </div>
                </div>

                {/* body */}
                <div className="overflow-y-auto px-6 sm:px-8 py-7">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                        <span className="font-mono text-[10px] tracking-widest text-viol">{project.category}</span>
                        <span className={`sm:hidden font-mono text-[10px] tracking-widest border px-2 py-0.5 ${status.cls}`}>{status.label}</span>
                    </div>
                    <h3 className="font-display text-2xl sm:text-3xl font-bold text-ink mb-4">{project.name}</h3>
                    <p className="text-sm sm:text-base text-dim leading-relaxed mb-8">{project.tagline}</p>

                    <Field label="PROBLEM">
                        <p className="text-sm text-ink/85 leading-relaxed">{project.problem}</p>
                    </Field>
                    <Field label="SOLUTION">
                        <p className="text-sm text-ink/85 leading-relaxed">{project.solution}</p>
                    </Field>
                    <Field label="KEY FEATURES">
                        <ul className="space-y-2">
                            {project.features.map((f) => (
                                <li key={f} className="text-sm text-ink/85 leading-relaxed flex gap-3">
                                    <span className="text-cy mt-0.5" aria-hidden="true">▸</span>{f}
                                </li>
                            ))}
                        </ul>
                    </Field>
                    <Field label="ARCHITECTURE / WORKFLOW">
                        <div className="flex flex-wrap items-center gap-2">
                            {project.architecture.map((step, i) => (
                                <span key={step} className="flex items-center gap-2">
                                    <span className="font-mono text-[11px] px-3 py-1.5 border border-line bg-elev text-ink/80">{step}</span>
                                    {i < project.architecture.length - 1 && <span className="text-cy/60 text-xs" aria-hidden="true">→</span>}
                                </span>
                            ))}
                        </div>
                    </Field>
                    <Field label="TECHNOLOGY">
                        <div className="flex flex-wrap gap-2">
                            {project.stack.map((t) => (
                                <span key={t} className="font-mono text-[11px] px-3 py-1.5 bg-cy/5 border border-cy/20 text-cy/90">{t}</span>
                            ))}
                        </div>
                    </Field>
                    <Field label="ENGINEERING DECISIONS">
                        <ul className="space-y-2">
                            {project.decisions.map((d) => (
                                <li key={d} className="text-sm text-ink/85 leading-relaxed flex gap-3">
                                    <span className="text-viol mt-0.5" aria-hidden="true">▸</span>{d}
                                </li>
                            ))}
                        </ul>
                    </Field>
                    <Field label="CURRENT STATUS">
                        <p className="text-sm text-ink/85">{project.currentStatus}</p>
                    </Field>
                    <div className="border border-line bg-elev/50 px-5 py-4">
                        <h4 className="font-mono text-[10px] tracking-widest text-dim mb-2">VERIFICATION</h4>
                        <p className="text-xs text-dim leading-relaxed">{project.verification}</p>
                        <p className="text-xs text-dim mt-2">Source code available via the GitHub profile where published.</p>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default ProjectWindow;
