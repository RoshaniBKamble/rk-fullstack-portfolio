import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { playBoot } from "@/audio/soundEngine";

const LINES = [
    "ROSHANI.KAMBLE",
    "DEVELOPER SYSTEM",
    "INITIALIZING...",
    "LOADING ENVIRONMENT",
    "LOADING PROJECT LAB",
    "LOADING ENGINEERING STACK",
    "LOADING DIGITAL WORKSPACE",
    "SYSTEM READY",
];

const BootSequence = ({ onDone }) => {
    const reduced = useReducedMotion();
    const [step, setStep] = useState(0);
    const [leaving, setLeaving] = useState(false);

    const finish = () => {
        setLeaving(true);
        setTimeout(onDone, reduced ? 50 : 500);
    };

    useEffect(() => {
        playBoot();
        if (reduced) {
            const t = setTimeout(finish, 400);
            return () => clearTimeout(t);
        }
        const interval = setInterval(() => {
            setStep((s) => {
                if (s >= LINES.length - 1) {
                    clearInterval(interval);
                    setTimeout(finish, 700);
                    return s;
                }
                return s + 1;
            });
        }, 300);
        return () => clearInterval(interval);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <AnimatePresence>
            {!leaving && (
                <motion.div
                    data-testid="boot-sequence"
                    className="fixed inset-0 z-[200] bg-void flex items-center justify-center"
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="w-full max-w-xl px-8 font-mono text-sm sm:text-base">
                        <div className="flex items-center gap-2 mb-8 text-dim text-xs tracking-widest">
                            <span className="w-2 h-2 rounded-full bg-cy" aria-hidden="true" />
                            RK://BOOT
                        </div>
                        {LINES.slice(0, step + 1).map((line, i) => (
                            <motion.p
                                key={line}
                                initial={{ opacity: 0, x: -8 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.2 }}
                                className={`mb-2 ${
                                    i === LINES.length - 1
                                        ? "text-cy text-glow-cy font-semibold"
                                        : i === 0
                                          ? "text-ink font-semibold tracking-wider"
                                          : "text-dim"
                                }`}
                            >
                                <span className="text-line mr-3 select-none">{String(i).padStart(2, "0")}</span>
                                {line}
                            </motion.p>
                        ))}
                        <span className="inline-block w-2.5 h-5 bg-cy caret-blink mt-1" aria-hidden="true" />
                        <div className="mt-8 h-px bg-line relative overflow-hidden" aria-hidden="true">
                            <motion.div
                                className="absolute inset-y-0 left-0 bg-cy"
                                initial={{ width: "0%" }}
                                animate={{ width: `${((step + 1) / LINES.length) * 100}%` }}
                                transition={{ ease: "easeOut", duration: 0.25 }}
                            />
                        </div>
                        <button
                            data-testid="boot-skip-button"
                            onClick={finish}
                            className="mt-8 font-mono text-xs tracking-widest text-dim border border-line px-4 py-2 hover:text-cy hover:border-cy/50 transition-colors duration-200"
                        >
                            SKIP →
                        </button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default BootSequence;
