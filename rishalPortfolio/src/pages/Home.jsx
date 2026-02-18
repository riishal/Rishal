import { useState, useEffect } from "react";
import { Mail, Github, Code2, ArrowDownRight } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import profileImg from "../assets/profile.png";

const STATS = [
    { value: "3+", label: "Years Exp" },
    { value: "10+", label: "Projects" },
    { value: "3", label: "Live Apps" },
    { value: "100%", label: "Rated" },
];

export default function Home() {
    const { t, isDark } = useTheme();
    const [on, setOn] = useState(false);

    useEffect(() => {
        const id = setTimeout(() => setOn(true), 60);
        return () => clearTimeout(id);
    }, []);

    const show = (delay, axis = "Y", dist = 20) => ({
        opacity: on ? 1 : 0,
        transform: on ? "none" : `translate${axis}(${dist}px)`,
        transition: `opacity .7s ease ${delay}s, transform .75s cubic-bezier(.16,1,.3,1) ${delay}s`,
    });

    return (
        <section
            id="home"
            style={{
                /* fixed full-viewport height — no scrolling within hero */
                height: "100vh",
                minHeight: 580,
                maxHeight: 1080,
                background: t.bg,
                position: "relative",
                overflow: "hidden",
                display: "flex",
            }}
        >
            {/* grid lines */}
            <div style={{
                position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0,
                backgroundImage: `
          linear-gradient(${t.gridLine} 1px, transparent 1px),
          linear-gradient(90deg, ${t.gridLine} 1px, transparent 1px)`,
                backgroundSize: "56px 56px",
            }} />

            {/* ════════ MAIN FLEX ROW ════════ */}
            <div
                className="hw"   /* home-wrapper */
                style={{
                    display: "flex",
                    width: "100%",
                    height: "100%",
                    position: "relative",
                    zIndex: 1,
                }}
            >

                {/* ━━━━ LEFT: text ━━━━ */}
                <div
                    className="hl"   /* home-left */
                    style={{
                        flex: "0 0 48%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        /* nav is 60px — offset center slightly */
                        paddingTop: 30,
                        paddingBottom: 24,
                        paddingLeft: "clamp(28px, 6vw, 90px)",
                        paddingRight: "clamp(20px, 3vw, 48px)",
                        gap: 0,
                    }}
                >

                    {/* available pill */}
                    <div style={{
                        ...show(.04),
                        display: "inline-flex", alignItems: "center", gap: 8,
                        padding: "6px 16px",
                        background: t.accentBg,
                        border: `1px solid ${t.accentBorder}`,
                        borderRadius: 100,
                        marginBottom: "clamp(22px, 3vh, 36px)",
                        width: "fit-content",
                    }}>
                        <span style={{
                            width: 7, height: 7, borderRadius: "50%", background: t.accent,
                            flexShrink: 0, animation: "pdot 2.4s ease-in-out infinite",
                        }} />
                        <span style={{ fontSize: 12.5, color: t.accent, fontWeight: 500 }}>
                            Open to opportunities
                        </span>
                    </div>

                    {/* ── BIG NAME ── */}
                    <h1
                        className="hero-name"
                        style={{
                            fontFamily: "'Syne', sans-serif",
                            /* fluid: 72px on small → 124px on large */
                            fontSize: "clamp(72px, 9.8vw, 128px)",
                            fontWeight: 800,
                            lineHeight: .85,
                            letterSpacing: "-0.045em",
                            color: t.text,
                            marginBottom: "clamp(18px, 2.5vh, 28px)",
                            opacity: on ? 1 : 0,
                            transform: on ? "none" : "translateY(48px)",
                            transition: "opacity .85s cubic-bezier(.16,1,.3,1) .08s, transform .85s cubic-bezier(.16,1,.3,1) .08s",
                        }}
                    >
                        Rishal
                    </h1>

                    {/* role */}
                    <div style={{
                        ...show(.22, "X", -16),
                        display: "flex", alignItems: "center", gap: 10,
                        marginBottom: "clamp(14px, 2vh, 22px)",
                    }}>
                        <span style={{ width: 28, height: 1.5, background: t.accent, display: "block", flexShrink: 0 }} />
                        <Code2 size={14} color={t.accent} strokeWidth={2.5} />
                        <span style={{
                            fontFamily: "'Syne',sans-serif",
                            fontSize: "clamp(11px, 1.3vw, 14.5px)",
                            color: t.accent, fontWeight: 700,
                            letterSpacing: ".16em", textTransform: "uppercase",
                        }}>Flutter Developer</span>
                    </div>

                    {/* bio */}
                    <p style={{
                        ...show(.32),
                        color: t.text2,
                        fontSize: "clamp(13px, 1.15vw, 15px)",
                        lineHeight: 1.8,
                        marginBottom: "clamp(24px, 3.5vh, 40px)",
                        maxWidth: 440,
                    }}>
                        Building{" "}
                        <strong style={{ color: t.text, fontWeight: 600 }}>
                            production-grade mobile & web apps
                        </strong>{" "}
                        with Flutter & Dart. 3+ years delivering enterprise solutions —
                        real-time logistics, CRM platforms — clean architecture & Firebase.
                    </p>

                    {/* CTAs */}
                    <div
                        className="hc"   /* home-ctas */
                        style={{
                            ...show(.41),
                            display: "flex", gap: 10, flexWrap: "wrap",
                            marginBottom: "clamp(28px, 4vh, 52px)",
                        }}
                    >
                        <Btn primary t={t} label="View Work"
                            onClick={() => document.getElementById("works")?.scrollIntoView({ behavior: "smooth" })} />
                        <Btn t={t} icon={<Github size={14} />} label="GitHub"
                            onClick={() => window.open("https://github.com/riishal")} />
                        <Btn t={t} icon={<Mail size={14} />} label="Contact"
                            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })} />
                    </div>

                    {/* stats */}
                    <div
                        className="hs"   /* home-stats */
                        style={{
                            ...show(.5),
                            display: "flex",
                            gap: "clamp(22px, 3.5vw, 52px)",
                        }}
                    >
                        {STATS.map(s => <Stat key={s.label} {...s} t={t} />)}
                    </div>
                </div>

                {/* ━━━━ RIGHT: portrait ━━━━ */}
                <div
                    className="hr"   /* home-right */
                    style={{
                        flex: "0 0 52%",
                        position: "relative",
                        overflow: "hidden",
                        height: "100%",
                    }}
                >
                    {/* ── the photo itself ── */}
                    <img
                        src={profileImg}
                        alt="Rishal"
                        className="himg"
                        style={{
                            position: "absolute",
                            /* bleed to all 4 edges of its container */
                            top: 0, left: 0, right: 0, bottom: 0,
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            /* show forehead → knees; lower values = higher crop */
                            objectPosition: "50% 12%",
                            display: "block",
                            filter: isDark
                                ? "grayscale(12%) contrast(1.14) brightness(.86)"
                                : "grayscale(18%) contrast(1.08) brightness(1.04)",
                            opacity: on ? 1 : 0,
                            transform: on ? "scale(1)" : "scale(1.06)",
                            transition: "opacity 1s ease .15s, transform 1.4s cubic-bezier(.16,1,.3,1) .15s",
                        }}
                    />

                    {/* ── blend gradients ── */}
                    {/* left — blends into bg so no hard edge */}
                    <div style={{
                        position: "absolute", inset: 0, pointerEvents: "none", zIndex: 2,
                        background: `linear-gradient(to right,
              ${t.bg} 0%,
              ${isDark ? "rgba(8,8,8,.5)" : "rgba(245,245,240,.38)"} 6%,
              transparent 24%)`,
                    }} />
                    {/* bottom */}
                    <div style={{
                        position: "absolute", inset: 0, pointerEvents: "none", zIndex: 2,
                        background: `linear-gradient(to top,
              ${t.bg} 0%,
              ${isDark ? "rgba(8,8,8,.35)" : "rgba(245,245,240,.22)"} 7%,
              transparent 22%)`,
                    }} />

                    {/* green glow — top right corner */}
                    <div style={{
                        position: "absolute", top: "-15%", right: "-10%",
                        width: "70%", height: "70%",
                        background: `radial-gradient(ellipse at top right,
              ${isDark ? "rgba(34,197,94,.16)" : "rgba(22,163,74,.1)"} 0%,
              transparent 60%)`,
                        filter: "blur(52px)", pointerEvents: "none", zIndex: 1,
                    }} />

                    {/* status pill — top right */}
                    <div style={{
                        position: "absolute", top: 76, right: 22, zIndex: 5,
                        padding: "9px 16px",
                        background: isDark ? "rgba(6,6,6,.84)" : "rgba(250,250,248,.9)",
                        backdropFilter: "blur(18px)", WebkitBackdropFilter: "blur(18px)",
                        border: `1px solid ${t.accentBorder}`,
                        borderRadius: 10,
                        opacity: on ? 1 : 0,
                        transform: on ? "none" : "translateY(-10px)",
                        transition: "opacity .7s ease .88s, transform .7s ease .88s",
                    }}>
                        <div style={{
                            fontSize: 8.5, color: t.text3, letterSpacing: 1.6,
                            textTransform: "uppercase", marginBottom: 3,
                            fontFamily: "'Syne',sans-serif",
                        }}>Status</div>
                        <div style={{
                            fontSize: 13, color: t.accent, fontWeight: 700,
                            fontFamily: "'Syne',sans-serif",
                        }}>Open to Work</div>
                    </div>

                    {/* location — bottom right */}
                    <div style={{
                        position: "absolute", bottom: 28, right: 20, zIndex: 5,
                        fontSize: 9.5, color: t.text3,
                        letterSpacing: 2.5, textTransform: "uppercase",
                        fontFamily: "'Syne',sans-serif",
                        opacity: on ? .55 : 0,
                        transition: "opacity .7s ease 1.1s",
                    }}>Kerala · India</div>
                </div>
            </div>

            {/* scroll cue */}
            <div style={{
                position: "absolute", bottom: 24,
                left: "clamp(28px,6vw,90px)",
                display: "flex", alignItems: "center", gap: 8, zIndex: 3,
                opacity: on ? .38 : 0,
                transition: "opacity .7s ease 1.25s",
            }}>
                <div style={{
                    width: 1, height: 40,
                    background: `linear-gradient(to bottom,${t.accent},transparent)`,
                }} />
                <span style={{
                    fontSize: 8.5, color: t.text3, letterSpacing: 2.5,
                    fontFamily: "'Syne',sans-serif", textTransform: "uppercase",
                }}>Scroll</span>
            </div>

            {/* ───────── responsive ───────── */}
            <style>{`
        @keyframes pdot {
          0%,100%{ box-shadow:0 0 0 0 rgba(34,197,94,.6); }
          50%    { box-shadow:0 0 0 6px rgba(34,197,94,0); }
        }

        /* Large desktop: give image slightly more room */
        @media(min-width:1280px){
          .hl{ flex:0 0 46% !important; }
          .hr{ flex:0 0 54% !important; }
        }

        /* Tablet landscape (768-1024px) */
        @media(max-width:1024px) and (min-width:681px){
          .hl{
            flex:0 0 50% !important;
            padding-left:32px !important;
            padding-right:20px !important;
          }
          .hr{ flex:0 0 50% !important; }
          .hero-name{ font-size:clamp(60px,9vw,100px) !important; }
        }

        /* Tablet portrait (481-680px): still side-by-side but narrower */
        @media(max-width:680px) and (min-width:481px){
          #home{ height:auto !important; min-height:100vh !important; }
          .hw{ flex-direction:column !important; height:auto !important; }

          /* portrait takes 55vh so face+body is clearly visible */
          .hr{
            order:0 !important; flex:none !important;
            width:100% !important;
            height:62vw !important;
            min-height:280px !important;
            max-height:400px !important;
          }
          .himg{ object-position:50% 8% !important; }

          .hl{
            order:1 !important; flex:none !important;
            width:100% !important;
            padding:28px 24px 48px !important;
          }
          .hero-name{ font-size:clamp(56px,13vw,88px) !important; }
        }

        /* Mobile (≤480px) */
        @media(max-width:480px){
          #home{ height:auto !important; min-height:100vh !important; }
          .hw{ flex-direction:column !important; height:auto !important; }

          /* portrait: square-ish ratio shows face & torso */
          .hr{
            order:0 !important; flex:none !important;
            width:100% !important;
            height:96vw !important;
            min-height:280px !important;
            max-height:420px !important;
          }
          .himg{ object-position:50% 5% !important; }

          .hl{
            order:1 !important; flex:none !important;
            width:100% !important;
            padding:28px 20px 52px !important;
          }
          .hero-name{ font-size:clamp(52px,15.5vw,76px) !important; }

          /* stack buttons */
          .hc{ flex-direction:column !important; gap:9px !important; }
          .hc button{ width:100% !important; justify-content:center !important; }

          /* 2-col stats */
          .hs{
            display:grid !important;
            grid-template-columns:1fr 1fr !important;
            gap:18px !important;
          }
        }

        /* tiny phones */
        @media(max-width:360px){
          .hr{ height:108vw !important; }
        }
      `}</style>
        </section>
    );
}

/* ── Button ── */
function Btn({ label, icon, onClick, t, primary }) {
    const [h, setH] = useState(false);
    return (
        <button
            onClick={onClick}
            onMouseEnter={() => setH(true)}
            onMouseLeave={() => setH(false)}
            style={{
                padding: primary ? "12px 28px" : "11px 22px",
                background: primary ? (h ? t.accentHover : t.accent) : (h ? t.accentBg : "transparent"),
                color: primary ? "#fff" : (h ? t.accent : t.text2),
                border: primary ? "none" : `1.5px solid ${h ? t.accent : t.border2}`,
                borderRadius: 8, fontSize: 14, fontWeight: 600, cursor: "pointer",
                fontFamily: "'Syne',sans-serif",
                display: "flex", alignItems: "center", gap: 8,
                transform: h ? "translateY(-2px)" : "none",
                boxShadow: h && primary ? t.shadowAccent : "none",
                transition: "all .18s cubic-bezier(.16,1,.3,1)",
                whiteSpace: "nowrap", letterSpacing: ".1px",
            }}
        >{icon}{label}</button>
    );
}

/* ── Stat ── */
function Stat({ value, label, t }) {
    const [h, setH] = useState(false);
    return (
        <div
            onMouseEnter={() => setH(true)}
            onMouseLeave={() => setH(false)}
            style={{
                cursor: "default",
                transform: h ? "translateY(-3px)" : "none",
                transition: "transform .2s",
            }}
        >
            <div style={{
                fontFamily: "'Syne',sans-serif",
                fontSize: "clamp(24px, 3.2vw, 34px)",
                fontWeight: 800, letterSpacing: "-1.5px", lineHeight: 1,
                color: h ? t.accent : t.text,
                transition: "color .2s",
            }}>{value}</div>
            <div style={{
                fontSize: 10.5, color: t.text3, fontWeight: 600,
                letterSpacing: 1.3, marginTop: 6, textTransform: "uppercase",
            }}>{label}</div>
        </div>
    );
}