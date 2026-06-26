import { useEffect, useState, useRef, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
    ExternalLink, Building2, Calendar,
    CheckCircle, Layers, Smartphone, Clock,
} from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { PROJECTS, STATUS_STYLES } from "../data/projects";
import { PhoneFrame } from "../components/PhoneCarousel";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

/* ══════════════════════════════════════════
   SWIPEABLE CAROUSEL — pointer events on the phone itself
══════════════════════════════════════════ */
function ScreenshotCarousel({ screenshots, accent, t, isDark }) {
    const [idx, setIdx]           = useState(0);
    const [animKey, setAnimKey]   = useState(0);
    const [dragDelta, setDragDelta] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const dragging    = useRef(false);
    const startX      = useRef(0);
    const deltaRef    = useRef(0);
    const timerRef    = useRef(null);
    const thumbsRef   = useRef(null);
    const total       = screenshots.length;

    const go = useCallback((next) => {
        const n = ((next % total) + total) % total;
        setIdx(n);
        setAnimKey(k => k + 1);
    }, [total]);

    const goNext = useCallback(() => go(idx + 1), [go, idx]);
    const goPrev = useCallback(() => go(idx - 1), [go, idx]);

    /* ── auto-advance ── */
    useEffect(() => {
        if (isPaused || total <= 1) {
            clearInterval(timerRef.current);
            return;
        }
        timerRef.current = setInterval(() => {
            setIdx(p => (p + 1) % total);
            setAnimKey(k => k + 1);
        }, 4500);
        return () => clearInterval(timerRef.current);
    }, [isPaused, total]);

    /* ── thumbnail auto-scroll ── */
    useEffect(() => {
        const c = thumbsRef.current;
        if (!c || !c.children[idx]) return;
        c.children[idx].scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
    }, [idx]);

    /* ── pointer events — works for mouse drag AND touch ── */
    const onPointerDown = (e) => {
        dragging.current = true;
        startX.current = e.clientX;
        deltaRef.current = 0;
        setDragDelta(0);
        setIsPaused(true);
        try { e.currentTarget.setPointerCapture(e.pointerId); } catch {}
    };
    const onPointerMove = (e) => {
        if (!dragging.current) return;
        const d = e.clientX - startX.current;
        deltaRef.current = d;
        setDragDelta(d);
    };
    const onPointerUp = () => {
        if (!dragging.current) return;
        dragging.current = false;
        const d = deltaRef.current;
        setDragDelta(0);
        deltaRef.current = 0;
        setIsPaused(false);
        if (Math.abs(d) > 48) d < 0 ? goNext() : goPrev();
    };

    if (total === 0) return null;

    const BG = isDark
        ? "linear-gradient(180deg,#080808 0%,#0d0d0d 50%,#080808 100%)"
        : "linear-gradient(180deg,#f9f9f9 0%,#f2f2f2 50%,#f9f9f9 100%)";

    return (
        <div
            style={{ background: BG, borderTop: `1px solid ${t.border}`, borderBottom: `1px solid ${t.border}` }}
            onMouseEnter={() => { if (!dragging.current) setIsPaused(true); }}
            onMouseLeave={() => { if (!dragging.current) setIsPaused(false); }}
        >
            {/* ── Phone + Arrows ── */}
            <div style={{
                display: "flex", alignItems: "center", justifyContent: "center",
                gap: "clamp(12px, 4vw, 56px)",
                padding: "44px 16px 56px",
            }}>
                {/* Prev */}
                <button
                    onClick={goPrev}
                    className="carousel-arrow-btn"
                    style={arrowStyle(false, accent)}
                    onMouseEnter={e => applyHover(e, accent)}
                    onMouseLeave={e => removeHover(e, accent)}
                >
                    ←
                </button>

                {/* Swipeable phone */}
                <div style={{ position: "relative" }}>
                    <div
                        onPointerDown={onPointerDown}
                        onPointerMove={onPointerMove}
                        onPointerUp={onPointerUp}
                        onPointerCancel={onPointerUp}
                        style={{
                            cursor: dragging.current ? "grabbing" : "grab",
                            touchAction: "pan-y",
                            transform: `translateX(${dragDelta * 0.2}px) rotate(${dragDelta * 0.01}deg)`,
                            transition: dragging.current ? "none" : "transform 0.4s cubic-bezier(0.16,1,0.3,1)",
                            willChange: "transform",
                            userSelect: "none",
                        }}
                    >
                        <div key={animKey} style={{ animation: "phoneFadeIn 0.38s cubic-bezier(0.16,1,0.3,1)" }}>
                            <PhoneFrame src={screenshots[idx]} large />
                        </div>
                    </div>

                    {/* glow */}
                    <div style={{
                        position: "absolute", bottom: -10, left: "8%", right: "8%", height: 28,
                        background: `radial-gradient(ellipse, ${accent}28 0%, transparent 75%)`,
                        filter: "blur(10px)", pointerEvents: "none",
                    }} />

                    {/* counter badge */}
                    <div style={{
                        position: "absolute", bottom: -36, left: "50%", transform: "translateX(-50%)",
                        background: accent, color: "#fff", borderRadius: 100,
                        padding: "4px 16px", fontSize: 11, fontWeight: 700,
                        whiteSpace: "nowrap", fontFamily: "'Syne', sans-serif",
                        boxShadow: `0 4px 16px ${accent}50`, pointerEvents: "none",
                    }}>
                        {idx + 1} / {total}
                    </div>
                </div>

                {/* Next */}
                <button
                    onClick={goNext}
                    className="carousel-arrow-btn"
                    style={arrowStyle(false, accent)}
                    onMouseEnter={e => applyHover(e, accent)}
                    onMouseLeave={e => removeHover(e, accent)}
                >
                    →
                </button>
            </div>

            {/* ── Dot indicators (if ≤ 14 screens) ── */}
            {total <= 14 && (
                <div style={{ display: "flex", justifyContent: "center", gap: 6, marginBottom: 22 }}>
                    {screenshots.map((_, i) => (
                        <button key={i} onClick={() => go(i)} style={{
                            width: i === idx ? 26 : 7, height: 7, borderRadius: 4,
                            border: "none", padding: 0, cursor: "pointer",
                            background: i === idx ? accent : "rgba(128,128,128,0.28)",
                            transition: "all 0.35s ease",
                            boxShadow: i === idx ? `0 0 10px ${accent}80` : "none",
                        }} />
                    ))}
                </div>
            )}

            {/* ── Thumbnail strip ── */}
            <div
                ref={thumbsRef}
                style={{
                    display: "flex", gap: 8,
                    overflowX: "auto", scrollbarWidth: "none",
                    padding: "6px 24px 28px",
                    maxWidth: "min(720px, 100vw)",
                    margin: "0 auto",
                    justifyContent: total <= 5 ? "center" : "flex-start",
                }}
            >
                {screenshots.map((src, i) => (
                    <button
                        key={i}
                        onClick={() => go(i)}
                        style={{
                            width: 50, minWidth: 50, height: 90, borderRadius: 10,
                            overflow: "hidden", cursor: "pointer", flexShrink: 0,
                            padding: 0, border: `2px solid ${i === idx ? accent : "transparent"}`,
                            opacity: i === idx ? 1 : 0.38,
                            transform: i === idx ? "scale(1.08)" : "scale(1)",
                            boxShadow: i === idx ? `0 6px 20px ${accent}44` : "none",
                            transition: "all 0.3s ease", background: "none",
                        }}
                    >
                        <img src={src} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", pointerEvents: "none" }} />
                    </button>
                ))}
            </div>

            {/* Swipe hint (mobile only) */}
            <p style={{
                textAlign: "center", fontSize: 11, color: isDark ? "rgba(255,255,255,0.25)" : "rgba(0,0,0,0.3)",
                marginBottom: 20, fontFamily: "'Syne', sans-serif", letterSpacing: 0.5,
            }} className="swipe-hint">
                ← swipe to browse →
            </p>
        </div>
    );
}

/* helpers for arrow hover (avoids inline state per arrow) */
function arrowStyle(hovered, accent) {
    return {
        width: 48, height: 48, borderRadius: "50%", flexShrink: 0,
        border: `1px solid rgba(128,128,128,0.22)`,
        background: "transparent", color: "#888", fontSize: 18,
        cursor: "pointer", transition: "all 0.25s ease",
        display: "flex", alignItems: "center", justifyContent: "center",
    };
}
function applyHover(e, accent) {
    e.currentTarget.style.borderColor = accent;
    e.currentTarget.style.background = `${accent}1a`;
    e.currentTarget.style.color = accent;
    e.currentTarget.style.transform = "scale(1.1)";
}
function removeHover(e) {
    e.currentTarget.style.borderColor = "rgba(128,128,128,0.22)";
    e.currentTarget.style.background = "transparent";
    e.currentTarget.style.color = "#888";
    e.currentTarget.style.transform = "scale(1)";
}

/* ══════════════════════════════════════════
   MAIN PAGE
══════════════════════════════════════════ */
export default function ProjectDetail() {
    const { id }     = useParams();
    const navigate   = useNavigate();
    const { t, isDark } = useTheme();
    const [mounted, setMounted] = useState(false);

    const project = PROJECTS.find(p => p.id === parseInt(id));

    useEffect(() => {
        window.scrollTo(0, 0);
        const timer = setTimeout(() => setMounted(true), 60);
        return () => clearTimeout(timer);
    }, [id]);

    if (!project) {
        return (
            <div style={{ background: t.bg, color: t.text, minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 20 }}>
                <Layers size={48} color={t.accent} style={{ opacity: 0.4 }} />
                <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: 24, fontWeight: 700 }}>Project not found</h2>
                <button onClick={() => navigate("/")} style={{ background: t.accent, color: "#fff", border: "none", borderRadius: 10, padding: "12px 24px", fontSize: 14, fontWeight: 600, cursor: "pointer", fontFamily: "'Syne', sans-serif" }}>
                    ← Back to Portfolio
                </button>
            </div>
        );
    }

    const sc = STATUS_STYLES[project.status] || STATUS_STYLES.Delivered;

    return (
        <div style={{ background: t.bg, color: t.text, minHeight: "100vh", transition: "background 0.3s, color 0.3s" }}>
            <Navbar />

            {/* ══ HERO ══ */}
            <section style={{ position: "relative", paddingTop: 88, overflow: "hidden" }}>
                {project.coverImg && (
                    <div style={{
                        position: "absolute", inset: 0,
                        backgroundImage: `url(${project.coverImg})`,
                        backgroundSize: "cover", backgroundPosition: "center",
                        filter: "blur(80px) saturate(0.35)",
                        opacity: isDark ? 0.20 : 0.10, transform: "scale(1.1)",
                        pointerEvents: "none",
                    }} />
                )}
                <div style={{
                    position: "absolute", inset: 0,
                    background: isDark
                        ? "linear-gradient(180deg,rgba(8,8,8,0.30) 0%,rgba(8,8,8,0.65) 60%,#080808 100%)"
                        : "linear-gradient(180deg,rgba(255,255,255,0.25) 0%,rgba(255,255,255,0.75) 60%,#fff 100%)",
                    pointerEvents: "none",
                }} />
                <div style={{
                    position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)",
                    width: 700, height: 350,
                    background: `radial-gradient(ellipse at top,${t.accent}12 0%,transparent 70%)`,
                    pointerEvents: "none",
                }} />

                {/* ── Hero Content ── */}
                <div
                    className="hero-layout"
                    style={{
                        maxWidth: 1060, margin: "0 auto",
                        padding: "44px clamp(20px,5vw,52px) 60px",
                        position: "relative", zIndex: 1,
                        display: "flex", alignItems: "center",
                        gap: "clamp(28px, 5vw, 64px)",
                        opacity: mounted ? 1 : 0,
                        transform: mounted ? "none" : "translateY(20px)",
                        transition: "opacity 0.55s ease, transform 0.55s cubic-bezier(0.16,1,0.3,1)",
                    }}
                >
                    {/* Left: text */}
                    <div style={{ flex: "1 1 0", minWidth: 0 }}>
                        {/* Meta chips */}
                        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 20, alignItems: "center" }}>
                            <span style={{
                                display: "inline-flex", alignItems: "center", gap: 6,
                                padding: "5px 14px", borderRadius: 100,
                                background: sc.bg, border: `1px solid ${sc.border}`,
                                color: sc.color, fontSize: 11.5, fontWeight: 700,
                                fontFamily: "'Syne', sans-serif",
                            }}>
                                {sc.dot && <span style={{ width: 6, height: 6, borderRadius: "50%", background: sc.color, display: "inline-block", animation: "pulseDot 2s infinite" }} />}
                                {project.statusLabel}
                            </span>
                            <MetaChip icon={<Building2 size={11} />} text={project.company} t={t} />
                            <MetaChip icon={<Calendar size={11} />} text={project.period} t={t} />
                            <MetaChip icon={<Smartphone size={11} />} text={`${project.screenshots.length} screens`} t={t} />
                        </div>

                        {/* Title */}
                        <h1 style={{
                            fontFamily: "'Syne', sans-serif",
                            fontSize: "clamp(26px,4.5vw,52px)", fontWeight: 800,
                            color: t.text, letterSpacing: "-0.03em", lineHeight: 1.06,
                            marginBottom: 18,
                        }}>
                            {project.title}
                        </h1>

                        {/* Description */}
                        <p style={{
                            color: t.text2, fontSize: "clamp(14px,1.5vw,17px)",
                            lineHeight: 1.75, marginBottom: 26, maxWidth: 560,
                        }}>
                            {project.desc}
                        </p>

                        {/* Tags */}
                        <div style={{ display: "flex", flexWrap: "wrap", gap: 7, marginBottom: project.link ? 28 : 4 }}>
                            {project.tags.map(tag => (
                                <span key={tag} style={{
                                    padding: "5px 13px", background: t.accentBg,
                                    border: `1px solid ${t.accentBorder}`, borderRadius: 100,
                                    fontSize: 12, color: t.accent, fontWeight: 600,
                                    fontFamily: "'Syne', sans-serif",
                                }}>{tag}</span>
                            ))}
                        </div>

                        {/* Play Store CTA */}
                        {project.link && (
                            <a
                                href={project.link} target="_blank" rel="noreferrer"
                                style={{
                                    display: "inline-flex", alignItems: "center", gap: 8,
                                    background: t.accent, color: "#fff", borderRadius: 12,
                                    padding: "13px 26px", fontSize: 14, fontWeight: 700,
                                    textDecoration: "none", fontFamily: "'Syne', sans-serif",
                                    boxShadow: `0 8px 28px ${t.accent}44`,
                                    transition: "all 0.25s ease",
                                }}
                                onMouseEnter={e => { e.currentTarget.style.background = t.accentHover; e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = `0 14px 36px ${t.accent}55`; }}
                                onMouseLeave={e => { e.currentTarget.style.background = t.accent; e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = `0 8px 28px ${t.accent}44`; }}
                            >
                                <ExternalLink size={15} /> View on Play Store
                            </a>
                        )}
                    </div>

                    {/* Right: cover image */}
                    {project.coverImg && (
                        <div
                            className="hero-cover"
                            style={{
                                flexShrink: 0, width: "clamp(180px,32%,340px)",
                                borderRadius: 24, overflow: "hidden",
                                border: `1px solid ${t.border2}`,
                                boxShadow: isDark
                                    ? "0 32px 80px rgba(0,0,0,0.7)"
                                    : "0 24px 60px rgba(0,0,0,0.12)",
                                aspectRatio: "9/16",
                            }}
                        >
                            <img src={project.coverImg} alt={project.title}
                                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                        </div>
                    )}
                </div>
            </section>

            {/* ══ CAROUSEL ══ */}
            <div style={{
                opacity: mounted ? 1 : 0,
                transform: mounted ? "none" : "translateY(16px)",
                transition: "opacity 0.6s ease 0.12s, transform 0.6s ease 0.12s",
            }}>
                <ScreenshotCarousel
                    screenshots={project.screenshots}
                    accent={t.accent}
                    t={t}
                    isDark={isDark}
                />
            </div>

            {/* ══ DETAILS ══ */}
            <section style={{
                maxWidth: 1060, margin: "0 auto",
                padding: "clamp(44px,6vw,88px) clamp(20px,5vw,52px)",
                opacity: mounted ? 1 : 0,
                transform: mounted ? "none" : "translateY(16px)",
                transition: "opacity 0.6s ease 0.22s, transform 0.6s ease 0.22s",
            }}>
                <div className="details-grid" style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "clamp(28px,5vw,60px)",
                }}>
                    {/* Left: About + Tech */}
                    <div>
                        <SectionLabel t={t}>About This Project</SectionLabel>
                        <p style={{
                            color: t.text2, fontSize: "clamp(13px,1.35vw,15.5px)",
                            lineHeight: 1.85, marginTop: 14, marginBottom: 40,
                        }}>
                            {project.longDesc}
                        </p>

                        <SectionLabel t={t}>Tech Stack</SectionLabel>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: 7, marginTop: 14 }}>
                            {project.tags.map(tag => (
                                <span key={tag} style={{
                                    padding: "6px 14px", background: t.accentBg,
                                    border: `1px solid ${t.accentBorder}`, borderRadius: 100,
                                    fontSize: 12, color: t.accent, fontWeight: 600,
                                    fontFamily: "'Syne', sans-serif",
                                }}>{tag}</span>
                            ))}
                        </div>

                        {project.link && (
                            <div style={{ marginTop: 36 }}>
                                <SectionLabel t={t}>Available On</SectionLabel>
                                <a href={project.link} target="_blank" rel="noreferrer" style={{
                                    display: "inline-flex", alignItems: "center", gap: 8,
                                    marginTop: 14, background: t.bgCard,
                                    border: `1px solid ${t.accentBorder}`, borderRadius: 12,
                                    padding: "12px 22px", fontSize: 13.5, fontWeight: 700,
                                    color: t.accent, textDecoration: "none",
                                    fontFamily: "'Syne', sans-serif", transition: "all 0.25s ease",
                                }}
                                    onMouseEnter={e => { e.currentTarget.style.background = t.accentBg; e.currentTarget.style.transform = "translateY(-2px)"; }}
                                    onMouseLeave={e => { e.currentTarget.style.background = t.bgCard; e.currentTarget.style.transform = "none"; }}
                                >
                                    <ExternalLink size={14} /> Google Play Store
                                </a>
                            </div>
                        )}
                    </div>

                    {/* Right: Key Features */}
                    <div>
                        <SectionLabel t={t}>Key Features</SectionLabel>
                        <div style={{ display: "flex", flexDirection: "column", gap: 9, marginTop: 14 }}>
                            {project.highlights.map((hl, i) => (
                                <div key={hl} style={{
                                    display: "flex", gap: 10, alignItems: "flex-start",
                                    padding: "11px 15px",
                                    background: t.accentBg, border: `1px solid ${t.accentBorder}`,
                                    borderRadius: 10,
                                    opacity: mounted ? 1 : 0,
                                    transform: mounted ? "none" : "translateX(12px)",
                                    transition: `opacity 0.45s ease ${0.3 + i * 0.04}s, transform 0.45s ease ${0.3 + i * 0.04}s`,
                                }}>
                                    <CheckCircle size={13} color={t.accent} style={{ flexShrink: 0, marginTop: 2 }} />
                                    <span style={{ color: t.text2, fontSize: 13, lineHeight: 1.55 }}>{hl}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ══ MORE PROJECTS ══ */}
            <section style={{
                borderTop: `1px solid ${t.border}`,
                background: isDark ? t.bg2 : "#f7f7f7",
                padding: "clamp(36px,5vw,64px) clamp(20px,5vw,52px)",
            }}>
                <div style={{ maxWidth: 1060, margin: "0 auto" }}>
                    <SectionLabel t={t}>More Projects</SectionLabel>
                    <div className="more-grid" style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(4, 1fr)",
                        gap: 14, marginTop: 22,
                    }}>
                        {PROJECTS.filter(p => p.id !== project.id).slice(0, 4).map(p => (
                            <MiniCard key={p.id} p={p} t={t} navigate={navigate} />
                        ))}
                    </div>
                </div>
            </section>

            <Footer />

            <style>{`
                @keyframes phoneFadeIn {
                    from { opacity: 0; transform: scale(0.96); }
                    to   { opacity: 1; transform: scale(1); }
                }
                @keyframes pulseDot {
                    0%,100% { opacity:1; box-shadow:0 0 5px currentColor; }
                    50%     { opacity:0.45; box-shadow:0 0 12px currentColor; }
                }

                /* Thumbnail scrollbar hide */
                .thumb-strip::-webkit-scrollbar { display: none; }

                /* Swipe hint: mobile only */
                .swipe-hint { display: none; }
                @media (max-width: 600px) { .swipe-hint { display: block !important; } }

                /* Carousel arrows: hide on very small screens */
                @media (max-width: 400px) { .carousel-arrow-btn { display: none !important; } }

                /* Hero: stack on mobile */
                @media (max-width: 700px) {
                    .hero-layout { flex-direction: column !important; }
                    .hero-cover { width: 100% !important; max-width: 260px !important; margin: 0 auto; aspect-ratio: 4/3 !important; }
                }

                /* Details: single col on mobile */
                @media (max-width: 680px) {
                    .details-grid { grid-template-columns: 1fr !important; }
                }

                /* More projects: 2-col on tablet, 1-col on phone */
                @media (max-width: 860px) {
                    .more-grid { grid-template-columns: repeat(2, 1fr) !important; }
                }
                @media (max-width: 480px) {
                    .more-grid { grid-template-columns: 1fr 1fr !important; }
                }
            `}</style>
        </div>
    );
}

/* ── helpers ── */
function MetaChip({ icon, text, t }) {
    return (
        <span style={{
            display: "inline-flex", alignItems: "center", gap: 5,
            padding: "5px 12px", borderRadius: 100,
            background: t.bgCard, border: `1px solid ${t.border}`,
            color: t.text3, fontSize: 12, fontFamily: "'Syne', sans-serif",
        }}>
            {icon} {text}
        </span>
    );
}

function SectionLabel({ children, t }) {
    return (
        <div style={{
            fontFamily: "'Syne', sans-serif", fontSize: 10.5, color: t.accent,
            letterSpacing: 2.5, textTransform: "uppercase", fontWeight: 700,
            display: "flex", alignItems: "center", gap: 10,
        }}>
            <div style={{ width: 20, height: 1.5, background: t.accent, borderRadius: 2 }} />
            {children}
        </div>
    );
}

function MiniCard({ p, t, navigate }) {
    const [h, setH] = useState(false);
    const sc = STATUS_STYLES[p.status] || STATUS_STYLES.Delivered;
    return (
        <div
            onClick={() => { navigate(`/project/${p.id}`); window.scrollTo(0, 0); }}
            onMouseEnter={() => setH(true)}
            onMouseLeave={() => setH(false)}
            style={{
                borderRadius: 14, overflow: "hidden", cursor: "pointer",
                background: t.bgCard, border: `1px solid ${h ? t.accentBorder : t.border}`,
                transform: h ? "translateY(-4px)" : "none",
                boxShadow: h ? "0 16px 40px rgba(0,0,0,0.24)" : "none",
                transition: "all 0.3s cubic-bezier(0.16,1,0.3,1)",
            }}
        >
            <div style={{ height: 120, overflow: "hidden", background: t.bg3, position: "relative" }}>
                {p.coverImg && (
                    <img src={p.coverImg} alt={p.title} style={{
                        width: "100%", height: "100%", objectFit: "cover",
                        transform: h ? "scale(1.07)" : "scale(1)", transition: "transform 0.5s ease",
                    }} />
                )}
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg,transparent 40%,rgba(0,0,0,0.6) 100%)" }} />
                <span style={{
                    position: "absolute", top: 8, left: 8,
                    fontSize: 9.5, color: sc.color, background: sc.bg,
                    border: `1px solid ${sc.border}`, padding: "3px 8px",
                    borderRadius: 100, fontWeight: 700,
                }}>{p.statusLabel}</span>
            </div>
            <div style={{ padding: "10px 12px" }}>
                <div style={{ fontSize: 12.5, fontWeight: 700, color: t.text, fontFamily: "'Syne', sans-serif", lineHeight: 1.3, marginBottom: 4 }}>{p.title}</div>
                <div style={{ fontSize: 11, color: t.text3, display: "flex", alignItems: "center", gap: 4 }}>
                    <Clock size={9} /> {p.period}
                </div>
            </div>
        </div>
    );
}
