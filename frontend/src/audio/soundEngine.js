let ctx = null;
let enabled = false;

const ensureCtx = () => {
    if (!ctx) {
        const AC = window.AudioContext || window.webkitAudioContext;
        if (!AC) return null;
        ctx = new AC();
    }
    if (ctx.state === "suspended") ctx.resume();
    return ctx;
};

export const setSoundEnabled = (v) => {
    enabled = v;
    if (v) ensureCtx();
};

export const isSoundEnabled = () => enabled;

const tone = (freq, dur, type = "sine", gain = 0.04, slideTo = null) => {
    if (!enabled) return;
    const c = ensureCtx();
    if (!c) return;
    const osc = c.createOscillator();
    const g = c.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, c.currentTime);
    if (slideTo) osc.frequency.exponentialRampToValueAtTime(slideTo, c.currentTime + dur);
    g.gain.setValueAtTime(gain, c.currentTime);
    g.gain.exponentialRampToValueAtTime(0.0001, c.currentTime + dur);
    osc.connect(g).connect(c.destination);
    osc.start();
    osc.stop(c.currentTime + dur);
};

export const playBoot = () => {
    if (!enabled) return;
    tone(110, 0.5, "sine", 0.03, 220);
    setTimeout(() => tone(440, 0.12, "triangle", 0.03), 420);
};

export const playOpen = () => tone(520, 0.09, "triangle", 0.035, 780);
export const playClose = () => tone(340, 0.12, "sine", 0.03, 170);
export const playTick = () => tone(880, 0.03, "square", 0.012);
