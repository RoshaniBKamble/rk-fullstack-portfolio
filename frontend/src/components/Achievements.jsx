import Section from "@/components/Section";
import { achievements } from "@/data/portfolio";
import { Trophy } from "lucide-react";

const Achievements = () => (
    <Section id="achievements" index="05" label="ACHIEVEMENTS" title="Recognition">
        <div className="max-w-3xl">
            {achievements.map((a) => (
                <div
                    key={a.title}
                    data-testid="achievement-edge"
                    className="relative border border-cy/30 bg-surface inner-glow p-8 sm:p-10 overflow-hidden"
                >
                    <div
                        className="absolute -right-16 -top-16 w-64 h-64 rounded-full bg-cy/10 blur-3xl"
                        aria-hidden="true"
                    />
                    <div className="relative">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="p-2.5 border border-cy/40 bg-cy/10 text-cy" aria-hidden="true">
                                <Trophy size={18} />
                            </span>
                            <span className="font-mono text-[10px] tracking-widest text-dim">{a.org}</span>
                        </div>
                        <h3 className="font-display text-2xl sm:text-3xl font-bold text-glow-cy text-cy mb-4">
                            {a.title}
                        </h3>
                        <p className="text-sm sm:text-base text-ink/85 leading-relaxed max-w-xl">{a.description}</p>
                    </div>
                </div>
            ))}
        </div>
    </Section>
);

export default Achievements;
