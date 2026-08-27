import { motion, useReducedMotion } from "framer-motion";
import Section from "@/components/Section";
import { profile } from "@/data/portfolio";

const facts = [
    { k: "CURRENT", v: "M.Sc. Blockchain Technology — MIT World Peace University" },
    { k: "FOCUS", v: "Modern frontend development, UI/UX and web engineering" },
    { k: "DIRECTION", v: "Frontend → Full Stack Engineering" },
    { k: "SPECIALIZATION", v: "Blockchain / Web3 — smart contracts, decentralized identity, verification" },
    { k: "DOMAIN", v: "AI / ML application development — NLP, RAG, computer vision" },
    { k: "APPROACH", v: "Engineering-oriented: learn by building real software" },
    { k: "BASE", v: profile.location },
];

const Identity = () => {
    const reduced = useReducedMotion();
    return (
        <Section id="about" index="01" label="IDENTITY" title="Who is building this">
            <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">
                <div className="lg:col-span-3 space-y-6">
                    <p className="text-base sm:text-lg text-ink leading-relaxed" data-testid="identity-lead">
                        Roshani Kamble is a frontend-focused developer progressing toward full-stack engineering,
                        specializing in Blockchain/Web3 and building AI/ML applications.
                    </p>
                    <p className="text-sm sm:text-base text-dim leading-relaxed">
                        Currently pursuing an M.Sc. in Blockchain Technology at MIT World Peace University, Pune,
                        she builds practical software — conversational AI applications, RAG systems, computer-vision
                        tools and full-stack web platforms — with an engineering-oriented approach that favors
                        working systems over slide decks.
                    </p>
                    <p className="text-sm sm:text-base text-dim leading-relaxed">
                        Her work sits at the intersection of modern frontend engineering, backend development,
                        intelligent systems and decentralized technologies — most recently on VeriTrust, a modular
                        trust-intelligence framework combining AI document analysis with blockchain verification.
                    </p>
                </div>
                <div className="lg:col-span-2">
                    <div className="border border-line bg-surface inner-glow" data-testid="identity-facts-panel">
                        <div className="border-b border-line px-5 py-3 font-mono text-[10px] tracking-widest text-dim">
                            IDENTITY.MANIFEST
                        </div>
                        <dl>
                            {facts.map((f, i) => (
                                <motion.div
                                    key={f.k}
                                    initial={reduced ? false : { opacity: 0, x: 16 }}
                                    whileInView={reduced ? undefined : { opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.06, duration: 0.4 }}
                                    className="px-5 py-4 border-b border-line/50 last:border-0"
                                >
                                    <dt className="font-mono text-[10px] tracking-widest text-cy mb-1">{f.k}</dt>
                                    <dd className="text-sm text-ink/90 leading-relaxed">{f.v}</dd>
                                </motion.div>
                            ))}
                        </dl>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Identity;
