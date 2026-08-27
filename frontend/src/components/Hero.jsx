import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, FileText, Github, Linkedin, Mail } from "lucide-react";
import HeroScene from "@/components/HeroScene";
import { profile, socialLinks } from "@/data/portfolio";
import { scrollToSection } from "@/utils/scroll";
import { useIsMobile } from "@/hooks/useMedia";
import { playTick, playOpen } from "@/audio/soundEngine";

const lineVariants = {
    hidden: { y: "110%" },
    visible: (i) => ({
        y: "0%",
        transition: { delay: 0.15 + i * 0.12, duration: 0.85, ease: [0.22, 1, 0.36, 1] },
    }),
};

const MaskLine = ({ i, children, className = "" }) => (
    <span className={`block overflow-hidden ${className}`}>
        <motion.span custom={i} variants={lineVariants} initial="hidden" animate="visible" className="block">
            {children}
        </motion.span>
    </span>
);

const Hero = () => {
    const reduced = useReducedMotion();
    const mobile = useIsMobile();
    const staticEnv = reduced || mobile;

    return (
        <section id="home" className="relative min-h-screen flex items-center overflow-hidden" data-testid="hero-section">
            {/* environment layer */}
            <div className="absolute inset-0 grid-bg opacity-60" aria-hidden="true" />
            <div className="absolute inset-0" aria-hidden="true">
                {staticEnv ? (
                    <div className="absolute inset-0">
                        <div className="absolute right-[-10%] top-[15%] w-[70vw] h-[70vw] rounded-full bg-volt/10 blur-[120px]" />
                        <div className="absolute left-[-15%] bottom-[-20%] w-[60vw] h-[60vw] rounded-full bg-cy/10 blur-[120px]" />
                    </div>
                ) : (
                    <HeroScene />
                )}
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-void/60 via-transparent to-void" aria-hidden="true" />

            {/* corner system labels */}
            <div className="absolute top-24 left-6 sm:left-10 font-mono text-[10px] tracking-widest text-dim/70 hidden sm:block" aria-hidden="true">
                SYS.RK — ENVIRONMENT ACTIVE
            </div>
            <div className="absolute bottom-8 right-6 sm:right-10 font-mono text-[10px] tracking-widest text-dim/70 hidden sm:block" aria-hidden="true">
                18.5204° N / 73.8567° E — PUNE
            </div>

            <div className="relative z-10 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto w-full pt-28 pb-16">
                <MaskLine i={0}>
                    <span className="font-mono text-xs sm:text-sm tracking-[0.35em] text-cy" data-testid="hero-kicker">
                        DIGITAL DEVELOPER WORKSPACE
                    </span>
                </MaskLine>

                <h1 className="font-display font-black tracking-tighter mt-6" data-testid="hero-name">
                    <MaskLine i={1}>
                        <span className="text-4xl sm:text-5xl lg:text-6xl text-ink">ROSHANI</span>
                    </MaskLine>
                    <MaskLine i={2}>
                        <span className="text-4xl sm:text-5xl lg:text-6xl text-glow-cy text-cy">KAMBLE</span>
                    </MaskLine>
                </h1>

                <div className="mt-8 max-w-2xl">
                    <MaskLine i={3}>
                        <span className="font-mono text-sm sm:text-base text-ink" data-testid="hero-position">
                            {profile.position}
                        </span>
                    </MaskLine>
                    <MaskLine i={4}>
                        <span className="font-mono text-xs sm:text-sm text-dim mt-2 block" data-testid="hero-specializations">
                            {profile.specializations.join("  ·  ")}
                        </span>
                    </MaskLine>
                    <MaskLine i={5}>
                        <span className="text-sm sm:text-base text-dim leading-relaxed mt-5 block" data-testid="hero-statement">
                            {profile.statement}
                        </span>
                    </MaskLine>
                </div>

                <motion.div
                    initial={reduced ? false : { opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.6 }}
                    className="mt-10 flex flex-wrap items-center gap-4"
                >
                    <button
                        data-testid="hero-explore-work-btn"
                        onClick={() => { playOpen(); scrollToSection("work"); }}
                        className="group inline-flex items-center gap-3 bg-cy text-void font-mono text-xs font-semibold tracking-widest px-7 py-3.5 hover:bg-ink transition-colors duration-200"
                    >
                        EXPLORE WORK
                        <ArrowDown size={14} className="group-hover:translate-y-0.5 transition-transform duration-200" />
                    </button>
                    <a
                        data-testid="hero-view-resume-btn"
                        href={socialLinks.resume}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={playTick}
                        className="inline-flex items-center gap-3 border border-line text-ink font-mono text-xs tracking-widest px-7 py-3.5 hover:border-cy/60 hover:text-cy transition-colors duration-200"
                    >
                        <FileText size={14} />
                        VIEW RESUME
                    </a>
                    <div className="flex items-center gap-1 ml-1">
                        <a data-testid="hero-github-link" href={socialLinks.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile" className="p-3 text-dim hover:text-cy transition-colors duration-200">
                            <Github size={18} />
                        </a>
                        <a data-testid="hero-linkedin-link" href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile" className="p-3 text-dim hover:text-cy transition-colors duration-200">
                            <Linkedin size={18} />
                        </a>
                        <a data-testid="hero-email-link" href={`mailto:${socialLinks.email}`} aria-label="Send email" className="p-3 text-dim hover:text-cy transition-colors duration-200">
                            <Mail size={18} />
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
