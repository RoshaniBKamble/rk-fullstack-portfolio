import { motion, useReducedMotion } from "framer-motion";

const Section = ({ id, index, label, title, children, className = "" }) => {
    const reduced = useReducedMotion();
    return (
        <section id={id} className={`relative px-6 sm:px-10 lg:px-16 py-20 sm:py-28 max-w-7xl mx-auto ${className}`}>
            <motion.div
                initial={reduced ? false : { opacity: 0, y: 32 }}
                whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
                <div className="flex items-baseline gap-4 mb-3">
                    <span className="font-mono text-xs text-cy tracking-widest" data-testid={`section-${id}-index`}>
                        {index}
                    </span>
                    <span className="h-px flex-1 bg-line" aria-hidden="true" />
                    <span className="font-mono text-xs text-dim tracking-widest">{label}</span>
                </div>
                {title && (
                    <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl tracking-tight font-bold text-ink mb-10 sm:mb-14">
                        {title}
                    </h2>
                )}
                {children}
            </motion.div>
        </section>
    );
};

export default Section;
