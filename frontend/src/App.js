import { useEffect, useState } from "react";
import Lenis from "lenis";
import { Toaster } from "sonner";
import "@/App.css";
import BootSequence from "@/components/BootSequence";
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Identity from "@/components/Identity";
import Stack from "@/components/Stack";
import ProjectLab from "@/components/ProjectLab";
import Journey from "@/components/Journey";
import Achievements from "@/components/Achievements";
import Certificates from "@/components/Certificates";
import BuildLog from "@/components/BuildLog";
import Connect from "@/components/Connect";
import { usePrefersReducedMotion } from "@/hooks/useMedia";

function App() {
    const [booted, setBooted] = useState(false);
    const reduced = usePrefersReducedMotion();

    useEffect(() => {
        if (!booted || reduced) return;
        const lenis = new Lenis({ lerp: 0.09 });
        window.__lenis = lenis;
        let raf;
        const loop = (t) => {
            lenis.raf(t);
            raf = requestAnimationFrame(loop);
        };
        raf = requestAnimationFrame(loop);
        return () => {
            cancelAnimationFrame(raf);
            lenis.destroy();
            window.__lenis = null;
        };
    }, [booted, reduced]);

    return (
        <div className="bg-void text-ink min-h-screen" data-testid="app-root">
            {!booted && <BootSequence onDone={() => setBooted(true)} />}
            <CustomCursor />
            <Navbar />
            <main>
                <Hero />
                <Marquee />
                <Identity />
                <Stack />
                <ProjectLab />
                <Journey />
                <Achievements />
                <Certificates />
                <BuildLog />
                <Connect />
            </main>
            <Toaster
                theme="dark"
                position="bottom-right"
                toastOptions={{
                    style: {
                        background: "#121212",
                        border: "1px solid #2A2A2A",
                        color: "#F8F9FA",
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: "12px",
                        borderRadius: "2px",
                    },
                }}
            />
        </div>
    );
}

export default App;
