import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { X, Award } from "lucide-react";
import Section from "@/components/Section";
import { certificates } from "@/data/portfolio";
import { playOpen, playClose } from "@/audio/soundEngine";

const CertModal = ({ cert, onClose }) => {
    const reduced = useReducedMotion();
    const closeRef = useRef(null);

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
            className="fixed inset-0 z-[150] flex items-center justify-center p-6"
            initial={reduced ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduced ? undefined : { opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-label={`${cert.title} certificate details`}
            data-testid={`certificate-modal-${cert.id}`}
        >
            <div className="absolute inset-0 bg-void/80 backdrop-blur-sm" onClick={handleClose} aria-hidden="true" />
            <motion.div
                initial={reduced ? false : { opacity: 0, scale: 0.96, y: 24 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={reduced ? undefined : { opacity: 0, scale: 0.97, y: 12 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="relative w-full max-w-lg border border-line bg-surface inner-glow"
            >
                <div className="flex items-center justify-between border-b border-line px-5 py-3 bg-elev/60">
                    <span className="font-mono text-xs text-ink">VAULT://{cert.id.toUpperCase()}</span>
                    <button
                        ref={closeRef}
                        data-testid={`certificate-close-${cert.id}`}
                        onClick={handleClose}
                        aria-label="Close certificate view"
                        className="p-1.5 text-dim hover:text-ink transition-colors duration-150"
                    >
                        <X size={16} />
                    </button>
                </div>
                <div className="p-7">
                    <div className="flex items-center gap-3 mb-5">
                        <span className="p-2.5 border border-viol/40 bg-viol/10 text-viol" aria-hidden="true">
                            <Award size={18} />
                        </span>
                        <span className="font-mono text-[10px] tracking-widest text-dim">{cert.issuer}</span>
                    </div>
                    <h3 className="font-display text-xl font-semibold text-ink mb-2">{cert.title}</h3>
                    <p className="font-mono text-xs text-cy mb-6">{cert.date}</p>
                    <ul className="space-y-2 mb-6">
                        {cert.details.map((d) => (
                            <li key={d} className="text-sm text-ink/85 flex gap-3">
                                <span className="text-cy mt-0.5" aria-hidden="true">▸</span>{d}
                            </li>
                        ))}
                    </ul>
                    <p className="text-xs text-dim border-t border-line pt-4">
                        Original document available on request.
                    </p>
                </div>
            </motion.div>
        </motion.div>
    );
};

const Certificates = () => {
    const [openId, setOpenId] = useState(null);
    const reduced = useReducedMotion();
    const openCert = certificates.find((c) => c.id === openId);

    return (
        <Section id="certificates" index="06" label="CERTIFICATE VAULT" title="Verified credentials">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4" data-testid="certificate-grid">
                {certificates.map((c, i) => (
                    <motion.button
                        key={c.id}
                        data-testid={`certificate-card-${c.id}`}
                        onClick={() => { playOpen(); setOpenId(c.id); }}
                        initial={reduced ? false : { opacity: 0, y: 24 }}
                        whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-40px" }}
                        transition={{ delay: i * 0.08, duration: 0.5 }}
                        className="group text-left border border-line bg-surface inner-glow p-6 hover:border-viol/60 transition-colors duration-300 flex flex-col justify-between min-h-[190px]"
                        aria-label={`Open ${c.title} certificate details`}
                    >
                        <div>
                            <div className="flex items-center justify-between mb-5">
                                <Award size={18} className="text-viol" aria-hidden="true" />
                                <span className="font-mono text-[10px] tracking-widest text-dim">{c.date}</span>
                            </div>
                            <h3 className="font-display text-base font-semibold text-ink group-hover:text-cy transition-colors duration-200 mb-2">
                                {c.title}
                            </h3>
                            <p className="font-mono text-[11px] text-dim">{c.issuer}</p>
                        </div>
                        <span className="mt-5 font-mono text-[10px] tracking-widest text-dim group-hover:text-cy transition-colors duration-200">
                            INSPECT →
                        </span>
                    </motion.button>
                ))}
            </div>
            <AnimatePresence>
                {openCert && <CertModal cert={openCert} onClose={() => setOpenId(null)} />}
            </AnimatePresence>
        </Section>
    );
};

export default Certificates;
