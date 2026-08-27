import { marqueeItems } from "@/data/portfolio";

const Marquee = () => (
    <div
        className="relative border-y border-line bg-surface/50 overflow-hidden py-5"
        aria-hidden="true"
        data-testid="editorial-marquee"
    >
        <div className="marquee-track flex whitespace-nowrap w-max">
            {[0, 1].map((dup) => (
                <div key={dup} className="flex items-center">
                    {marqueeItems.map((item) => (
                        <span key={`${dup}-${item}`} className="flex items-center">
                            <span className="font-display text-sm sm:text-base tracking-widest text-dim px-8">{item}</span>
                            <span className="w-1.5 h-1.5 bg-cy/60 rotate-45" />
                        </span>
                    ))}
                </div>
            ))}
        </div>
    </div>
);

export default Marquee;
