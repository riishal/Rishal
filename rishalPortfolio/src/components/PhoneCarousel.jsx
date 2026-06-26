import { useState, useEffect, useRef, useCallback } from "react";
import { Smartphone } from "lucide-react";

export function PhoneFrame({ src, large = false, fading = false }) {
    const w   = large ? 232  : 156;
    const h   = large ? 500  : 338;
    const r   = large ? 40   : 27;
    const pad = large ? 7    : 5;

    return (
        <div style={{
            width: w, height: h, flexShrink: 0, position: "relative",
            filter: `drop-shadow(0 ${large ? 44 : 16}px ${large ? 80 : 32}px rgba(0,0,0,${large ? 0.72 : 0.48}))`,
        }}>
            {large && (
                <>
                    <div style={{ position: "absolute", inset: -10, borderRadius: r + 12, border: "1px solid rgba(255,255,255,0.045)", pointerEvents: "none" }} />
                    <div style={{ position: "absolute", inset: -4,  borderRadius: r + 5,  border: "1px solid rgba(255,255,255,0.065)", pointerEvents: "none" }} />
                </>
            )}
            <div style={{
                width: "100%", height: "100%", borderRadius: r,
                position: "relative", overflow: "hidden",
                background: "linear-gradient(155deg, #3a3a3a 0%, #1c1c1c 25%, #0f0f0f 60%, #090909 100%)",
                boxShadow: large
                    ? `0 0 0 1px rgba(255,255,255,0.12), inset 0 1px 0 rgba(255,255,255,0.10), inset 1px 0 0 rgba(255,255,255,0.04), 0 55px 110px rgba(0,0,0,0.82)`
                    : `0 0 0 1px rgba(255,255,255,0.10), inset 0 1px 0 rgba(255,255,255,0.08)`,
            }}>
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "38%", background: "linear-gradient(180deg, rgba(255,255,255,0.055) 0%, transparent 100%)", borderRadius: `${r}px ${r}px 0 0`, pointerEvents: "none", zIndex: 26 }} />
                <div style={{ position: "absolute", top: "6%", left: 0, width: "1px", bottom: "6%", background: "linear-gradient(180deg, transparent, rgba(255,255,255,0.12) 35%, rgba(255,255,255,0.05) 68%, transparent)", pointerEvents: "none", zIndex: 26 }} />
                {/* Power */}
                <div style={{ position: "absolute", right: -2.5, top: large ? 125 : 82, width: 3, height: large ? 62 : 42, background: "linear-gradient(180deg, #2a2a2a, #333, #242424)", borderRadius: "0 3px 3px 0", boxShadow: "2px 0 5px rgba(0,0,0,0.55)" }} />
                {/* Mute */}
                <div style={{ position: "absolute", left: -2.5, top: large ? 62 : 40, width: 3, height: large ? 24 : 16, background: "linear-gradient(180deg, #2a2a2a, #2e2e2e, #222)", borderRadius: "3px 0 0 3px", boxShadow: "-2px 0 5px rgba(0,0,0,0.55)" }} />
                {/* Vol+ */}
                <div style={{ position: "absolute", left: -2.5, top: large ? 96 : 64, width: 3, height: large ? 38 : 25, background: "linear-gradient(180deg, #2a2a2a, #2e2e2e, #222)", borderRadius: "3px 0 0 3px", boxShadow: "-2px 0 5px rgba(0,0,0,0.55)" }} />
                {/* Vol- */}
                <div style={{ position: "absolute", left: -2.5, top: large ? 145 : 97, width: 3, height: large ? 38 : 25, background: "linear-gradient(180deg, #2a2a2a, #2e2e2e, #222)", borderRadius: "3px 0 0 3px", boxShadow: "-2px 0 5px rgba(0,0,0,0.55)" }} />

                <div style={{ position: "absolute", top: pad, left: pad, right: pad, bottom: pad, borderRadius: r - pad, overflow: "hidden", background: "#111" }}>
                    {src ? (
                        <img src={src} alt="screenshot" style={{
                            width: "100%", height: "100%",
                            objectFit: "contain", objectPosition: "center top",
                            opacity: fading ? 0 : 1,
                            transform: fading ? "scale(1.03)" : "scale(1)",
                            transition: "opacity 0.7s cubic-bezier(0.4,0,0.2,1), transform 0.7s cubic-bezier(0.4,0,0.2,1)",
                            display: "block",
                        }} />
                    ) : (
                        <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "#0e0e0e" }}>
                            <Smartphone size={large ? 40 : 26} color="#222" />
                        </div>
                    )}
                    <div style={{ position: "absolute", top: large ? 10 : 7, left: "50%", transform: "translateX(-50%)", width: large ? 50 : 33, height: large ? 5 : 4, background: "#000", borderRadius: 100, zIndex: 20, boxShadow: "inset 0 1px 2px rgba(0,0,0,0.9)" }} />
                    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(255,255,255,0.036) 0%, transparent 52%)", pointerEvents: "none", zIndex: 10 }} />
                </div>
                <div style={{ position: "absolute", bottom: large ? 5 : 3, left: "50%", transform: "translateX(-50%)", width: large ? 96 : 64, height: large ? 4 : 3, background: "rgba(255,255,255,0.18)", borderRadius: 100, zIndex: 27 }} />
            </div>
        </div>
    );
}

function NavBtn({ onClick, accent, children }) {
    const [h, setH] = useState(false);
    return (
        <button onClick={onClick}
            onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
            style={{
                width: 36, height: 36, borderRadius: "50%",
                border: `1px solid ${h ? accent : "rgba(255,255,255,0.13)"}`,
                background: h ? `${accent}22` : "rgba(255,255,255,0.03)",
                color: h ? accent : "#888", fontSize: 15, fontWeight: 700,
                cursor: "pointer", transition: "all 0.25s",
                display: "flex", alignItems: "center", justifyContent: "center",
            }}
        >{children}</button>
    );
}

export function Carousel({ screenshots, accent }) {
    const [idx, setIdx] = useState(0);
    const [fading, setFading] = useState(false);
    const [paused, setPaused] = useState(false);
    const pendingIdx = useRef(null);
    const timerRef = useRef(null);
    const total = screenshots.length;
    const touchStart = useRef(0);

    const goTo = useCallback((next) => {
        if (fading || next === idx) return;
        pendingIdx.current = next;
        setFading(true);
        setTimeout(() => { setIdx(pendingIdx.current); setFading(false); }, 380);
    }, [fading, idx]);

    const next = useCallback(() => goTo((idx + 1) % total), [goTo, idx, total]);
    const prev = useCallback(() => goTo((idx - 1 + total) % total), [goTo, idx, total]);

    useEffect(() => {
        if (total <= 1 || paused) return;
        timerRef.current = setInterval(next, 4500);
        return () => clearInterval(timerRef.current);
    }, [total, paused, next]);

    const onTouchStart = (e) => { touchStart.current = e.touches[0].clientX; };
    const onTouchEnd = (e) => {
        const dx = e.changedTouches[0].clientX - touchStart.current;
        if (Math.abs(dx) > 50) dx < 0 ? next() : prev();
    };

    const prevIdx = (idx - 1 + total) % total;
    const nextIdx = (idx + 1) % total;

    if (total === 0) return (
        <div style={{ display: "flex", justifyContent: "center", padding: "40px 0" }}>
            <PhoneFrame large />
        </div>
    );

    return (
        <div
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
            style={{ userSelect: "none" }}
        >
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "clamp(10px, 3vw, 40px)", padding: "32px 0 50px" }}>
                <div
                    className="side-phone"
                    onClick={prev}
                    style={{ opacity: 0.26, transform: "scale(0.76) perspective(900px) rotateY(14deg)", transformOrigin: "right center", flexShrink: 0, cursor: "pointer", transition: "opacity 0.5s ease, transform 0.5s ease" }}
                    onMouseEnter={e => { e.currentTarget.style.opacity = "0.45"; }}
                    onMouseLeave={e => { e.currentTarget.style.opacity = "0.26"; }}
                >
                    <PhoneFrame src={screenshots[prevIdx]} />
                </div>

                <div style={{ position: "relative", zIndex: 2, flexShrink: 0 }}>
                    <PhoneFrame src={screenshots[idx]} large fading={fading} />
                    <div style={{ position: "absolute", bottom: -20, left: "10%", right: "10%", height: 30, background: `radial-gradient(ellipse, ${accent}30 0%, transparent 75%)`, filter: "blur(12px)", pointerEvents: "none" }} />
                    <div style={{ position: "absolute", bottom: -32, left: "50%", transform: "translateX(-50%)", background: accent, color: "#fff", borderRadius: 100, padding: "4px 14px", fontSize: 11, fontWeight: 700, whiteSpace: "nowrap", fontFamily: "'Syne', sans-serif", boxShadow: `0 4px 18px ${accent}55` }}>
                        {idx + 1} / {total}
                    </div>
                </div>

                <div
                    className="side-phone"
                    onClick={next}
                    style={{ opacity: 0.26, transform: "scale(0.76) perspective(900px) rotateY(-14deg)", transformOrigin: "left center", flexShrink: 0, cursor: "pointer", transition: "opacity 0.5s ease, transform 0.5s ease" }}
                    onMouseEnter={e => { e.currentTarget.style.opacity = "0.45"; }}
                    onMouseLeave={e => { e.currentTarget.style.opacity = "0.26"; }}
                >
                    <PhoneFrame src={screenshots[nextIdx]} />
                </div>
            </div>

            {total > 1 && (
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 14, marginBottom: 12 }}>
                    <NavBtn onClick={prev} accent={accent}>←</NavBtn>
                    <div style={{ display: "flex", gap: 6 }}>
                        {screenshots.map((_, i) => (
                            <button key={i} onClick={() => goTo(i)} style={{
                                width: i === idx ? 26 : 7, height: 7, borderRadius: 4,
                                border: "none", padding: 0, cursor: "pointer",
                                background: i === idx ? accent : "rgba(255,255,255,0.14)",
                                transition: "all 0.4s cubic-bezier(0.4,0,0.2,1)",
                                boxShadow: i === idx ? `0 0 10px ${accent}80` : "none",
                            }} />
                        ))}
                    </div>
                    <NavBtn onClick={next} accent={accent}>→</NavBtn>
                </div>
            )}

            <style>{`@media (max-width: 600px) { .side-phone { display: none !important; } }`}</style>
        </div>
    );
}
