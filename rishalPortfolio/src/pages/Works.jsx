import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowUpRight, Building2, Clock, Layers, Smartphone } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { useInView } from "../hooks/useInView";
import { PROJECTS, STATUS_STYLES } from "../data/projects";

/* ══════════════════════════════════════════
   CARD
══════════════════════════════════════════ */
function Card({ p, t, isDark, idx, vis, onOpen }) {
    const [h, setH] = useState(false);
    const [ripple, setRipple] = useState(null);
    const sc = STATUS_STYLES[p.status] || STATUS_STYLES.Delivered;

    const handleClick = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setRipple({ x: e.clientX - rect.left, y: e.clientY - rect.top });
        setTimeout(() => setRipple(null), 700);
        onOpen();
    };

    return (
        <div
            onClick={handleClick}
            onMouseEnter={() => setH(true)}
            onMouseLeave={() => setH(false)}
            style={{
                borderRadius: 20, overflow: "hidden",
                background: t.bgCard,
                border: `1px solid ${h ? t.accentBorder : t.border}`,
                cursor: "pointer",
                display: "flex", flexDirection: "column",
                position: "relative",
                transform: h ? "translateY(-9px) scale(1.012)" : "translateY(0) scale(1)",
                boxShadow: h
                    ? `0 36px 72px rgba(0,0,0,0.52), 0 0 0 1px ${t.accentBorder}, 0 0 60px ${t.accent}08`
                    : t.shadow,
                transition: "all 0.42s cubic-bezier(0.16,1,0.3,1)",
                opacity: vis ? 1 : 0,
                animation: vis ? `cardFadeUp 0.65s cubic-bezier(0.16,1,0.3,1) ${idx * 90}ms both` : "none",
                height: "100%",
            }}
        >
            {ripple && (
                <div style={{
                    position: "absolute", left: ripple.x - 120, top: ripple.y - 120,
                    width: 240, height: 240, borderRadius: "50%",
                    background: `${t.accent}14`, zIndex: 50,
                    animation: "rippleOut 0.7s ease-out forwards",
                    pointerEvents: "none",
                }} />
            )}

            {/* Top-edge hover glow */}
            <div style={{
                position: "absolute", top: 0, left: 0, right: 0, height: 1,
                background: h ? `linear-gradient(90deg, transparent, ${t.accent}88, transparent)` : "transparent",
                transition: "background 0.4s ease", zIndex: 5,
            }} />

            {/* Ambient hover radial */}
            <div style={{
                position: "absolute", inset: 0, borderRadius: 20,
                opacity: h ? 1 : 0,
                background: `radial-gradient(ellipse at 50% 0%, ${t.accent}0c 0%, transparent 65%)`,
                transition: "opacity 0.45s ease", pointerEvents: "none", zIndex: 1,
            }} />

            {/* Image */}
            <div style={{ position: "relative", height: 216, overflow: "hidden", background: isDark ? "#070707" : "#e4e4e4", flexShrink: 0 }}>
                {p.coverImg ? (
                    <img src={p.coverImg} alt={p.title} style={{
                        position: "absolute", inset: 0, width: "100%", height: "100%",
                        objectFit: "cover", objectPosition: "center",
                        transform: h ? "scale(1.09)" : "scale(1)",
                        transition: "transform 0.65s cubic-bezier(0.16,1,0.3,1)",
                    }} />
                ) : (
                    <div style={{ position: "absolute", inset: 0, background: `linear-gradient(135deg, ${t.accentBg}, transparent)`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <Layers size={40} color={t.accent} style={{ opacity: 0.18 }} />
                    </div>
                )}
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(0,0,0,0.08) 0%, transparent 30%, rgba(0,0,0,0.82) 100%)", pointerEvents: "none" }} />

                {/* Arrow button */}
                <div style={{
                    position: "absolute", top: 12, right: 12, zIndex: 5,
                    width: 34, height: 34, borderRadius: "50%",
                    background: h ? t.accent : "rgba(0,0,0,0.52)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    backdropFilter: "blur(10px)",
                    transform: h ? "scale(1.12) rotate(0deg)" : "scale(1) rotate(-45deg)",
                    transition: "all 0.35s cubic-bezier(0.16,1,0.3,1)",
                    boxShadow: h ? `0 6px 20px ${t.accent}66` : "none",
                }}>
                    <ArrowUpRight size={15} color="#fff" />
                </div>

                {/* Title overlay */}
                <div style={{ position: "absolute", bottom: 13, left: 14, right: 52, zIndex: 3 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 4, marginBottom: 3 }}>
                        <Building2 size={10} color="rgba(255,255,255,0.55)" />
                        <span style={{ fontSize: 10.5, color: "rgba(255,255,255,0.55)", fontFamily: "'Syne', sans-serif" }}>{p.company}</span>
                    </div>
                    <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: 15.5, fontWeight: 700, color: "#fff", lineHeight: 1.3, margin: 0 }}>{p.title}</h3>
                </div>
            </div>

            {/* Body */}
            <div style={{ padding: "14px 16px 16px", display: "flex", flexDirection: "column", gap: 10, flex: 1, position: "relative", zIndex: 2 }}>
                <p style={{ color: t.text2, fontSize: 12.5, lineHeight: 1.66, margin: 0, display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                    {p.desc}
                </p>

                <div style={{ display: "flex", alignItems: "center", gap: 7, flexWrap: "wrap", marginTop: "auto", paddingTop: 12, borderTop: `1px solid ${t.border}` }}>
                    <span style={{
                        display: "inline-flex", alignItems: "center", gap: 5,
                        padding: "5px 11px", borderRadius: 100,
                        background: sc.bg, border: `1px solid ${sc.border}`,
                        color: sc.color, fontSize: 11, fontWeight: 700, fontFamily: "'Syne', sans-serif",
                    }}>
                        {sc.dot && <span style={{ width: 6, height: 6, borderRadius: "50%", background: sc.color, display: "inline-block", boxShadow: `0 0 7px ${sc.color}`, animation: "pulse-dot 2s ease-in-out infinite" }} />}
                        {p.statusLabel}
                    </span>
                    <span style={{ padding: "5px 11px", borderRadius: 100, background: t.accentBg, border: `1px solid ${t.accentBorder}`, color: t.accent, fontSize: 11, fontWeight: 600, fontFamily: "'Syne', sans-serif" }}>
                        {p.category}
                    </span>
                    {p.screenshots.length > 0 && (
                        <div style={{ display: "flex", alignItems: "center", gap: 4, color: t.text3, fontSize: 11, marginLeft: "auto" }}>
                            <Smartphone size={11} /><span>{p.screenshots.length} screens</span>
                        </div>
                    )}
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
                    <Clock size={10} color={t.text3} />
                    <span style={{ fontSize: 10.5, color: t.text3 }}>{p.period}</span>
                </div>
            </div>
        </div>
    );
}

/* ══════════════════════════════════════════
   MAIN
══════════════════════════════════════════ */
export default function Works() {
    const { t, isDark } = useTheme();
    const [ref, inView] = useInView(0.08);
    const [companyFilter, setCompanyFilter] = useState("all");
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const sectionRef = useRef(null);
    const navigate = useNavigate();

    const companies = ["all", ...new Set(PROJECTS.map(p => p.company))];
    const filtered = companyFilter === "all" ? PROJECTS : PROJECTS.filter(p => p.company === companyFilter);

    useEffect(() => {
        const el = sectionRef.current;
        if (!el) return;
        const onMove = (e) => {
            const rect = el.getBoundingClientRect();
            setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
        };
        el.addEventListener("mousemove", onMove);
        return () => el.removeEventListener("mousemove", onMove);
    }, []);

    const setRefs = (node) => {
        sectionRef.current = node;
        if (typeof ref === "function") ref(node);
        else if (ref && typeof ref === "object") ref.current = node;
    };

    return (
        <section
            id="works"
            ref={setRefs}
            style={{
                background: t.bg, position: "relative", overflow: "hidden",
                padding: "96px clamp(24px, 6vw, 96px)",
                borderTop: `1px solid ${t.border}`,
            }}
        >
            {/* Mouse-follow spotlight */}
            <div style={{
                position: "absolute",
                left: mousePos.x - 350, top: mousePos.y - 350,
                width: 700, height: 700, borderRadius: "50%",
                background: `radial-gradient(circle, ${t.accent}07 0%, transparent 70%)`,
                pointerEvents: "none", zIndex: 0,
                transition: "left 1.2s cubic-bezier(0.25,0.46,0.45,0.94), top 1.2s cubic-bezier(0.25,0.46,0.45,0.94)",
            }} />

            {/* Decorative blobs */}
            <div style={{ position: "absolute", top: -160, right: -100, width: 560, height: 560, borderRadius: "50%", background: `radial-gradient(circle, ${t.accent}07 0%, transparent 68%)`, pointerEvents: "none", zIndex: 0, animation: "floatBlob 14s ease-in-out infinite" }} />
            <div style={{ position: "absolute", bottom: -100, left: -80, width: 440, height: 440, borderRadius: "50%", background: `radial-gradient(circle, ${t.accent}05 0%, transparent 68%)`, pointerEvents: "none", zIndex: 0, animation: "floatBlob 18s ease-in-out infinite reverse" }} />
            <div style={{ position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none", backgroundImage: `radial-gradient(${t.accent}10 1px, transparent 1px)`, backgroundSize: "40px 40px", maskImage: "radial-gradient(ellipse at center, rgba(0,0,0,0.15) 0%, transparent 75%)", WebkitMaskImage: "radial-gradient(ellipse at center, rgba(0,0,0,0.15) 0%, transparent 75%)" }} />

            <div style={{ maxWidth: 1300, margin: "0 auto", position: "relative", zIndex: 2 }}>

                {/* Header */}
                <div style={{
                    textAlign: "center", marginBottom: "clamp(36px, 5vw, 60px)",
                    opacity: inView ? 1 : 0, transform: inView ? "none" : "translateY(30px)",
                    transition: "all 0.75s cubic-bezier(0.16,1,0.3,1)",
                }}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginBottom: 14 }}>
                        <div style={{ width: 44, height: 1.5, background: `linear-gradient(90deg, transparent, ${t.accent})` }} />
                        <span style={{ fontFamily: "'Syne', sans-serif", fontSize: 10.5, color: t.accent, letterSpacing: 3.5, textTransform: "uppercase", fontWeight: 700 }}>Portfolio</span>
                        <div style={{ width: 44, height: 1.5, background: `linear-gradient(90deg, ${t.accent}, transparent)` }} />
                    </div>

                    <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(32px, 5vw, 60px)", fontWeight: 800, color: t.text, letterSpacing: "-0.035em", lineHeight: 1.05, marginBottom: 14 }}>
                        Featured{" "}
                        <span style={{ color: t.accent, textShadow: `0 0 50px ${t.accent}44`, position: "relative" }}>
                            Works
                            <span style={{ position: "absolute", bottom: -4, left: 0, right: 0, height: 3, background: `linear-gradient(90deg, ${t.accent}cc, ${t.accent}44)`, borderRadius: 2, transform: inView ? "scaleX(1)" : "scaleX(0)", transformOrigin: "left", transition: "transform 0.8s cubic-bezier(0.16,1,0.3,1) 0.3s", display: "block" }} />
                        </span>
                    </h2>

                    <p style={{ color: t.text2, fontSize: "clamp(13px, 1.4vw, 15px)", maxWidth: 390, margin: "0 auto 30px", lineHeight: 1.7 }}>
                        Click any card to explore the full project — screenshots, tech details & features
                    </p>

                    {/* Filter */}
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 8, justifyContent: "center" }}>
                        {companies.map((company, ci) => (
                            <button
                                key={company}
                                onClick={() => setCompanyFilter(company)}
                                style={{
                                    padding: "7px 20px", borderRadius: 100,
                                    border: `1px solid ${companyFilter === company ? t.accent : t.border}`,
                                    background: companyFilter === company ? t.accentBg : "transparent",
                                    color: companyFilter === company ? t.accent : t.text2,
                                    fontSize: 12.5, fontWeight: companyFilter === company ? 700 : 500,
                                    cursor: "pointer", fontFamily: "'Syne', sans-serif",
                                    transition: "all 0.25s cubic-bezier(0.16,1,0.3,1)",
                                    boxShadow: companyFilter === company ? `0 0 20px ${t.accent}28` : "none",
                                    opacity: inView ? 1 : 0,
                                    transform: inView ? "translateY(0)" : "translateY(14px)",
                                    transitionDelay: `${ci * 55 + 200}ms`,
                                }}
                                onMouseEnter={e => { if (companyFilter !== company) { e.currentTarget.style.borderColor = t.accentBorder; e.currentTarget.style.color = t.accent; e.currentTarget.style.background = `${t.accentBg}66`; } }}
                                onMouseLeave={e => { if (companyFilter !== company) { e.currentTarget.style.borderColor = t.border; e.currentTarget.style.color = t.text2; e.currentTarget.style.background = "transparent"; } }}
                            >
                                {company === "all" ? "All Projects" : company}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Grid */}
                <div className="works-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "clamp(12px, 2vw, 22px)" }}>
                    {filtered.map((project, index) => (
                        <Card
                            key={project.id}
                            p={project}
                            idx={index}
                            vis={inView}
                            t={t}
                            isDark={isDark}
                            onOpen={() => navigate(`/project/${project.id}`)}
                        />
                    ))}
                </div>
            </div>

            <style>{`
                @keyframes pulse-dot {
                    0%, 100% { opacity: 1; box-shadow: 0 0 5px currentColor; }
                    50%       { opacity: 0.45; box-shadow: 0 0 12px currentColor; }
                }
                @keyframes cardFadeUp {
                    from { opacity: 0; transform: translateY(36px) scale(0.96); }
                    to   { opacity: 1; transform: translateY(0) scale(1); }
                }
                @keyframes rippleOut {
                    from { transform: scale(0.1); opacity: 1; }
                    to   { transform: scale(3.5);  opacity: 0; }
                }
                @keyframes floatBlob {
                    0%,100% { transform: translate(0, 0) scale(1); }
                    33%     { transform: translate(28px, -22px) scale(1.06); }
                    66%     { transform: translate(-18px, 14px) scale(0.96); }
                }
                @media (max-width: 1000px) { .works-grid { grid-template-columns: repeat(2,1fr) !important; } }
                @media (max-width: 560px)  { .works-grid { grid-template-columns: 1fr !important; } }
            `}</style>
        </section>
    );
}
