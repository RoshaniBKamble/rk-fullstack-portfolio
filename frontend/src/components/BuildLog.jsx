import { motion, useReducedMotion } from "framer-motion";
import Section from "@/components/Section";
import { buildLog } from "@/data/portfolio";

const statusCls = {
    BUILDING: "text-cy border-cy/40 bg-cy/10",
    LEARNING: "text-volt border-volt/50 bg-volt/10",
    EXPERIMENTING: "text-viol border-viol/40 bg-viol/10",
    DEPLOYING: "text-ink border-line bg-elev",
    IMPROVING: "text-dim border-line bg-elev",
};

const BuildLog = () => {
    const reduced = useReducedMotion();
    return (
        <Section id="buildlog" index="07" label="BUILD LOG" title="Engineering in motion">
            <p className="text-sm text-dim max-w-2xl -mt-6 mb-12 leading-relaxed">
                A living record of what is being built, learned and explored. Entries are added as the work happens.
            </p>
            <div className="relative max-w-3xl" data-testid="build-log-timeline">
                <span className="absolute left-[5px] top-2 bottom-2 w-px bg-line" aria-hidden="true" />
                <div className="space-y-10">
                    {buildLog.map((entry, i) => (
                        <motion.article
                            key={entry.title}
                            initial={reduced ? false : { opacity: 0, x: -20 }}
                            whileInView={reduced ? undefined : { opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-40px" }}
                            transition={{ delay: i * 0.06, duration: 0.5 }}
                            className="relative pl-10"
                            data-testid={`build-log-entry-${i}`}
                        >
                            <span className="absolute left-0 top-1.5 w-[11px] h-[11px] rotate-45 border border-cy/60 bg-void" aria-hidden="true" />
                            <div className="flex flex-wrap items-center gap-3 mb-2">
                                <span className={`font-mono text-[10px] tracking-widest border px-2.5 py-1 ${statusCls[entry.status] || statusCls.IMPROVING}`}>
                                    {entry.status}
                                </span>
                                <span className="font-mono text-[11px] text-dim">{entry.date}</span>
                            </div>
                            <h3 className="font-display text-base sm:text-lg font-semibold text-ink mb-1.5">{entry.title}</h3>
                            <p className="text-sm text-dim leading-relaxed">{entry.note}</p>
                        </motion.article>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default BuildLog;
