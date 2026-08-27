import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useFinePointer, usePrefersReducedMotion } from "@/hooks/useMedia";

const CustomCursor = () => {
    const fine = useFinePointer();
    const reduced = usePrefersReducedMotion();
    const [hovering, setHovering] = useState(false);
    const x = useMotionValue(-100);
    const y = useMotionValue(-100);
    const rx = useSpring(x, { stiffness: 260, damping: 24, mass: 0.6 });
    const ry = useSpring(y, { stiffness: 260, damping: 24, mass: 0.6 });

    useEffect(() => {
        if (!fine || reduced) return;
        const move = (e) => {
            x.set(e.clientX);
            y.set(e.clientY);
        };
        const over = (e) => {
            setHovering(!!e.target.closest("a, button, [data-cursor]"));
        };
        window.addEventListener("mousemove", move, { passive: true });
        window.addEventListener("mouseover", over, { passive: true });
        return () => {
            window.removeEventListener("mousemove", move);
            window.removeEventListener("mouseover", over);
        };
    }, [fine, reduced, x, y]);

    if (!fine || reduced) return null;

    return (
        <>
            <motion.div
                data-testid="custom-cursor-dot"
                className="fixed top-0 left-0 z-[300] w-1.5 h-1.5 rounded-full bg-cy pointer-events-none"
                style={{ x, y, translateX: "-50%", translateY: "-50%" }}
                aria-hidden="true"
            />
            <motion.div
                className="fixed top-0 left-0 z-[300] rounded-full border border-cy/50 pointer-events-none"
                style={{ x: rx, y: ry, translateX: "-50%", translateY: "-50%" }}
                animate={{ width: hovering ? 44 : 28, height: hovering ? 44 : 28, opacity: hovering ? 1 : 0.55 }}
                transition={{ duration: 0.2 }}
                aria-hidden="true"
            />
        </>
    );
};

export default CustomCursor;
