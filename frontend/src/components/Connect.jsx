import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Github, Linkedin, Mail, FileText, Trash2, X } from "lucide-react";
import { toast } from "sonner";
import Section from "@/components/Section";
import { socialLinks } from "@/data/portfolio";
import { playOpen, playClose, playTick } from "@/audio/soundEngine";

const RejectedConcepts = ({ onClose }) => {
    const reduced = useReducedMotion();
    const closeRef = useRef(null);

    useEffect(() => {
        closeRef.current?.focus();
        const onKey = (e) => e.key === "Escape" && handleClose();
        document.addEventListener("keydown", onKey);
        return () => document.removeEventListener("keydown", onKey);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleClose = () => {
        playClose();
        onClose();
    };

    return (
        <motion.div
            className="fixed inset-0 z-[150] flex items-center justify-center p-6"
            initial={reduced ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduced ? undefined : { opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-label="Rejected concepts archive"
            data-testid="rejected-concepts-modal"
        >
            <div className="absolute inset-0 bg-void/85 backdrop-blur-sm" onClick={handleClose} aria-hidden="true" />
            <motion.div
                initial={reduced ? false : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduced ? undefined : { opacity: 0, y: 12 }}
                className="relative w-full max-w-md border border-line bg-surface inner-glow"
            >
                <div className="flex items-center justify-between border-b border-line px-5 py-3 bg-elev/60">
                    <span className="font-mono text-xs text-ink">TRASH://REJECTED_CONCEPTS</span>
                    <button
                        ref={closeRef}
                        data-testid="rejected-concepts-close"
                        onClick={handleClose}
                        aria-label="Close rejected concepts archive"
                        className="p-1.5 text-dim hover:text-ink transition-colors duration-150"
                    >
                        <X size={16} />
                    </button>
                </div>
                <div className="p-7 font-mono text-sm">
                    <p className="text-dim leading-relaxed">
                        <span className="text-cy">$</span> ls ./rejected_concepts
                    </p>
                    <p className="text-dim mt-4 leading-relaxed">Archive empty.</p>
                    <p className="text-dim/70 text-xs mt-4 leading-relaxed">
                        Every concept that gets cut during the evolution of this workspace will be logged here —
                        nothing fabricated, only real rejects.
                    </p>
                </div>
            </motion.div>
        </motion.div>
    );
};

const channels = [
    { id: "email", label: "EMAIL", value: socialLinks.email, href: `mailto:${socialLinks.email}`, icon: Mail, external: false },
    { id: "github", label: "GITHUB", value: "RoshaniBKamble", href: socialLinks.github, icon: Github, external: true },
    { id: "linkedin", label: "LINKEDIN", value: "roshani-kamble", href: socialLinks.linkedin, icon: Linkedin, external: true },
];

const Connect = () => {
    const [showRejected, setShowRejected] = useState(false);

    const resumeClick = () => {
        playTick();
        toast.info("Resume PDF will be attached here once published.", {
            description: "The resume module is ready — the document link is being finalized.",
        });
    };

    return (
        <>
            <Section id="contact" index="08" label="CONNECT" title="Open a channel">
                <p className="text-sm sm:text-base text-dim max-w-2xl -mt-6 mb-12 leading-relaxed">
                    For internships, placements, entry-level engineering opportunities or technical conversations —
                    the fastest route is email.
                </p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4" data-testid="connect-channels">
                    {channels.map((c) => (
                        <a
                            key={c.id}
                            data-testid={`connect-${c.id}`}
                            href={c.href}
                            target={c.external ? "_blank" : undefined}
                            rel={c.external ? "noopener noreferrer" : undefined}
                            className="group border border-line bg-surface inner-glow p-6 hover:border-cy/60 transition-colors duration-300 flex flex-col justify-between min-h-[150px]"
                        >
                            <c.icon size={20} className="text-dim group-hover:text-cy transition-colors duration-200" aria-hidden="true" />
                            <div>
                                <p className="font-mono text-[10px] tracking-widest text-dim mb-1">{c.label}</p>
                                <p className="text-sm text-ink group-hover:text-cy transition-colors duration-200 break-all">{c.value}</p>
                            </div>
                        </a>
                    ))}
                    <button
                        data-testid="connect-resume"
                        onClick={resumeClick}
                        className="group text-left border border-line bg-surface inner-glow p-6 hover:border-cy/60 transition-colors duration-300 flex flex-col justify-between min-h-[150px]"
                        aria-label="View resume"
                    >
                        <FileText size={20} className="text-dim group-hover:text-cy transition-colors duration-200" aria-hidden="true" />
                        <div>
                            <p className="font-mono text-[10px] tracking-widest text-dim mb-1">RESUME</p>
                            <p className="text-sm text-ink group-hover:text-cy transition-colors duration-200">PDF — linking soon</p>
                        </div>
                    </button>
                </div>
            </Section>

            <footer className="border-t border-line px-6 sm:px-10 lg:px-16 py-10 max-w-7xl mx-auto">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                    <div>
                        <p className="font-mono text-sm font-semibold tracking-widest text-ink">
                            RK<span className="text-cy">://</span>WORKSPACE
                        </p>
                        <p className="font-mono text-[11px] text-dim mt-2">
                            Designed & engineered by Roshani Kamble · {new Date().getFullYear()}
                        </p>
                    </div>
                    <button
                        data-testid="rejected-concepts-trigger"
                        onClick={() => { playOpen(); setShowRejected(true); }}
                        className="inline-flex items-center gap-2 font-mono text-[10px] tracking-widest text-dim/60 hover:text-dim border border-line/60 hover:border-line px-4 py-2 transition-colors duration-200"
                        aria-label="Open rejected concepts archive"
                    >
                        <Trash2 size={12} aria-hidden="true" />
                        REJECTED CONCEPTS
                    </button>
                </div>
            </footer>

            <AnimatePresence>
                {showRejected && <RejectedConcepts onClose={() => setShowRejected(false)} />}
            </AnimatePresence>
        </>
    );
};

export default Connect;
