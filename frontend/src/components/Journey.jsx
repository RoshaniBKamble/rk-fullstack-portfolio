import Section from "@/components/Section";
import { experience, education, careerTarget } from "@/data/portfolio";
import { MapPin } from "lucide-react";

const Journey = () => (
    <Section id="experience" index="04" label="EXPERIENCE & EDUCATION" title="The path so far">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
            <div>
                <h3 className="font-mono text-xs tracking-widest text-dim mb-6">EXPERIENCE</h3>
                {experience.map((e) => (
                    <article key={e.role} className="border border-line bg-surface inner-glow" data-testid="experience-card">
                        <div className="border-b border-line px-6 py-3 flex items-center justify-between">
                            <span className="font-mono text-[10px] tracking-widest text-dim">{e.period}</span>
                            <span className="font-mono text-[10px] tracking-widest text-viol border border-viol/40 bg-viol/10 px-2 py-0.5">
                                {e.kind.toUpperCase()}
                            </span>
                        </div>
                        <div className="p-6">
                            <h4 className="font-display text-lg sm:text-xl font-semibold text-ink">{e.role}</h4>
                            <p className="text-sm text-cy mt-1">{e.org}</p>
                            <p className="font-mono text-[11px] text-dim mt-1">{e.location}</p>
                            <div className="flex flex-wrap gap-2 mt-5">
                                {e.areas.map((a) => (
                                    <span key={a} className="text-[11px] px-3 py-1.5 border border-line bg-elev text-dim">
                                        {a}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </article>
                ))}

                <h3 className="font-mono text-xs tracking-widest text-dim mt-12 mb-6">EDUCATION</h3>
                <div className="space-y-4">
                    {education.map((ed) => (
                        <article key={ed.degree} className="border border-line bg-surface inner-glow p-6" data-testid={`education-${ed.degree.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}>
                            <div className="flex flex-wrap items-baseline justify-between gap-2">
                                <h4 className="font-display text-base sm:text-lg font-semibold text-ink">{ed.degree}</h4>
                                <span className="font-mono text-[11px] text-dim">{ed.period}</span>
                            </div>
                            <p className="text-sm text-cy mt-1">{ed.institution}</p>
                            <p className="font-mono text-[11px] text-dim mt-1">{ed.place}</p>
                            {ed.detail && <p className="text-xs text-dim mt-3 border-t border-line pt-3">{ed.detail}</p>}
                        </article>
                    ))}
                </div>
            </div>

            {/* career target */}
            <div>
                <h3 className="font-mono text-xs tracking-widest text-dim mb-6">TARGET</h3>
                <div className="border border-cy/25 bg-surface inner-glow relative overflow-hidden" data-testid="career-target-panel">
                    <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-cy via-volt to-transparent" aria-hidden="true" />
                    <div className="border-b border-line px-6 py-3 font-mono text-[10px] tracking-widest text-dim">
                        CAREER.VECTOR
                    </div>
                    <div className="p-6 space-y-6">
                        <div>
                            <p className="font-mono text-[10px] tracking-widest text-cy mb-3">AREAS</p>
                            <ul className="space-y-2.5">
                                {careerTarget.areas.map((a) => (
                                    <li key={a} className="text-sm text-ink flex gap-3">
                                        <span className="text-cy" aria-hidden="true">▸</span>{a}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <p className="font-mono text-[10px] tracking-widest text-cy mb-2">LOCATION</p>
                            <p className="text-sm text-ink flex items-center gap-2">
                                <MapPin size={14} className="text-cy" aria-hidden="true" />
                                {careerTarget.location}
                            </p>
                        </div>
                        <div className="border-t border-line pt-5">
                            <p className="font-mono text-[10px] tracking-widest text-cy mb-2">STATUS</p>
                            <p className="text-sm text-dim leading-relaxed" data-testid="career-status">{careerTarget.status}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Section>
);

export default Journey;
