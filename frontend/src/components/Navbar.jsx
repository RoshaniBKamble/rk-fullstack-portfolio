import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Volume2, VolumeX } from "lucide-react";
import { navSections } from "@/data/portfolio";
import { scrollToSection } from "@/utils/scroll";
import { setSoundEnabled, playTick } from "@/audio/soundEngine";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [sound, setSound] = useState(false);
    const [active, setActive] = useState("home");

    useEffect(() => {
        const obs = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => {
                    if (e.isIntersecting) setActive(e.target.id);
                });
            },
            { rootMargin: "-40% 0px -55% 0px" }
        );
        navSections.forEach(({ id }) => {
            const el = document.getElementById(id);
            if (el) obs.observe(el);
        });
        return () => obs.disconnect();
    }, []);

    const go = (id) => {
        setOpen(false);
        playTick();
        scrollToSection(id);
    };

    const toggleSound = () => {
        const next = !sound;
        setSound(next);
        setSoundEnabled(next);
        if (next) setTimeout(playTick, 50);
    };

    return (
        <header className="fixed top-0 inset-x-0 z-[100]">
            <nav
                data-testid="main-nav"
                className="mx-auto max-w-7xl mt-4 px-4 sm:px-6"
                aria-label="Primary"
            >
                <div className="flex items-center justify-between border border-line bg-surface/80 backdrop-blur-md inner-glow px-4 sm:px-6 h-14">
                    <button
                        data-testid="nav-logo"
                        onClick={() => go("home")}
                        className="font-mono text-sm font-semibold tracking-widest text-ink hover:text-cy transition-colors duration-200"
                        aria-label="Roshani Kamble — back to top"
                    >
                        RK<span className="text-cy">://</span>WORKSPACE
                    </button>

                    <div className="hidden lg:flex items-center gap-1">
                        {navSections.map(({ id, label }) => (
                            <button
                                key={id}
                                data-testid={`nav-link-${id}`}
                                onClick={() => go(id)}
                                className={`px-3 py-1.5 font-mono text-[11px] tracking-widest transition-colors duration-200 ${
                                    active === id ? "text-cy bg-cy/10" : "text-dim hover:text-ink"
                                }`}
                                aria-current={active === id ? "true" : undefined}
                            >
                                {label}
                            </button>
                        ))}
                    </div>

                    <div className="flex items-center gap-2">
                        <button
                            data-testid="sound-toggle"
                            onClick={toggleSound}
                            className="p-2 text-dim hover:text-cy transition-colors duration-200"
                            aria-label={sound ? "Mute interface sounds" : "Enable interface sounds"}
                            aria-pressed={sound}
                        >
                            {sound ? <Volume2 size={16} /> : <VolumeX size={16} />}
                        </button>
                        <button
                            data-testid="mobile-menu-toggle"
                            onClick={() => setOpen((o) => !o)}
                            className="lg:hidden p-2 text-dim hover:text-ink transition-colors duration-200"
                            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
                            aria-expanded={open}
                        >
                            {open ? <X size={18} /> : <Menu size={18} />}
                        </button>
                    </div>
                </div>

                <AnimatePresence>
                    {open && (
                        <motion.div
                            initial={{ opacity: 0, y: -8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -8 }}
                            transition={{ duration: 0.2 }}
                            className="lg:hidden mt-2 border border-line bg-surface/95 backdrop-blur-md"
                            data-testid="mobile-nav-menu"
                        >
                            {navSections.map(({ id, label }, i) => (
                                <button
                                    key={id}
                                    data-testid={`mobile-nav-link-${id}`}
                                    onClick={() => go(id)}
                                    className="w-full text-left px-6 py-3.5 font-mono text-xs tracking-widest text-dim hover:text-cy hover:bg-cy/5 border-b border-line/50 last:border-0 transition-colors duration-150 flex items-center gap-4"
                                >
                                    <span className="text-cy/60">{String(i + 1).padStart(2, "0")}</span>
                                    {label}
                                </button>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </header>
    );
};

export default Navbar;
