import { useState, useEffect, useRef, useCallback } from "react";
import { Mail, Github, Code2 } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform, animate } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import profileImg from "../assets/profile.png";

/* ─────────────────────────────────────────
   CONSTANTS
───────────────────────────────────────── */
const STATS = [
    { value: "3+", label: "Years Exp" },
    { value: "10+", label: "Projects" },
    { value: "3", label: "Live Apps" },
    { value: "100%", label: "Rated" },
];

const ROLES = [
    "Flutter Developer",
    "Mobile Engineer",
    "Firebase Expert",
    "UI/UX Craftsman",
];

/* ─────────────────────────────────────────
   TYPEWRITER ROLE
───────────────────────────────────────── */
function TypewriterRole({ t }) {
    const [roleIdx, setRoleIdx] = useState(0);
    const [displayed, setDisplayed] = useState("");
    const [phase, setPhase] = useState("typing"); // typing | pause | erasing

    useEffect(() => {
        const full = ROLES[roleIdx];
        let timeout;

        if (phase === "typing") {
            if (displayed.length < full.length) {
                timeout = setTimeout(() => setDisplayed(full.slice(0, displayed.length + 1)), 68);
            } else {
                timeout = setTimeout(() => setPhase("pause"), 1600);
            }
        } else if (phase === "pause") {
            timeout = setTimeout(() => setPhase("erasing"), 200);
        } else {
            if (displayed.length > 0) {
                timeout = setTimeout(() => setDisplayed(d => d.slice(0, -1)), 38);
            } else {
                setRoleIdx(i => (i + 1) % ROLES.length);
                setPhase("typing");
            }
        }
        return () => clearTimeout(timeout);
    }, [displayed, phase, roleIdx]);

    return (
        <div style={{ display: "flex", alignItems: "center", gap: 10, minHeight: 22 }}>
            <motion.span
                animate={{ scaleX: [1, 1.35, 1] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
                style={{ width: 28, height: 1.5, background: t.accent, display: "block", flexShrink: 0 }}
            />
            <Code2 size={14} color={t.accent} strokeWidth={2.5} />
            <span style={{
                fontFamily: "'Syne',sans-serif",
                fontSize: "clamp(11px,1.3vw,14.5px)",
                color: t.accent, fontWeight: 700,
                letterSpacing: ".16em", textTransform: "uppercase",
            }}>
                {displayed}
                {/* blinking cursor */}
                <motion.span
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 0.9, repeat: Infinity, ease: "steps(1)" }}
                    style={{ display: "inline-block", marginLeft: 2, color: t.accent }}
                >|</motion.span>
            </span>
        </div>
    );
}

/* ─────────────────────────────────────────
   COUNTER STAT
───────────────────────────────────────── */
function CounterStat({ value, label, t, delay }) {
    const num = parseInt(value);
    const suffix = value.replace(/[0-9]/g, "");
    const [disp, setDisp] = useState(0);
    const ran = useRef(false);

    useEffect(() => {
        if (ran.current) return;
        ran.current = true;
        const t2 = setTimeout(() => {
            const ctrl = animate(0, isNaN(num) ? 0 : num, {
                duration: 1.6,
                ease: [0.16, 1, 0.3, 1],
                onUpdate: v => setDisp(Math.round(v)),
            });
            return () => ctrl.stop();
        }, delay * 1000);
        return () => clearTimeout(t2);
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay }}
            whileHover={{ y: -5, transition: { duration: 0.22 } }}
            style={{ cursor: "default" }}
        >
            <div style={{
                fontFamily: "'Syne',sans-serif",
                fontSize: "clamp(24px,3.2vw,34px)",
                fontWeight: 800, letterSpacing: "-1.5px", lineHeight: 1,
                color: t.text,
                transition: "color .2s",
            }}>
                {isNaN(num) ? value : `${disp}${suffix}`}
            </div>
            <div style={{
                fontSize: 10.5, color: t.text3, fontWeight: 600,
                letterSpacing: 1.3, marginTop: 6, textTransform: "uppercase",
            }}>{label}</div>
        </motion.div>
    );
}

/* ─────────────────────────────────────────
   MAGNETIC TILT CARD
───────────────────────────────────────── */
function TiltCard({ children, t, isDark, style }) {
    const ref = useRef(null);
    const rawX = useMotionValue(0);
    const rawY = useMotionValue(0);
    const rotX = useSpring(rawY, { stiffness: 200, damping: 28 });
    const rotY = useSpring(rawX, { stiffness: 200, damping: 28 });
    const glowX = useSpring(rawX, { stiffness: 120, damping: 20 });
    const glowY = useSpring(rawY, { stiffness: 120, damping: 20 });
    const [hovered, setHovered] = useState(false);

    const onMove = useCallback((e) => {
        const rect = ref.current?.getBoundingClientRect();
        if (!rect) return;
        const cx = e.clientX - rect.left - rect.width / 2;
        const cy = e.clientY - rect.top - rect.height / 2;
        rawX.set((cx / rect.width) * 18);
        rawY.set(-(cy / rect.height) * 18);
    }, []);

    const onLeave = useCallback(() => {
        rawX.set(0); rawY.set(0);
        setHovered(false);
    }, []);

    /* glare position */
    const glareX = useTransform(glowX, [-9, 9], ["20%", "80%"]);
    const glareY = useTransform(glowY, [-9, 9], ["20%", "80%"]);

    return (
        <motion.div
            ref={ref}
            className="profile-frame"
            onMouseMove={onMove}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={onLeave}
            style={{
                ...style,
                rotateX: rotX,
                rotateY: rotY,
                transformStyle: "preserve-3d",
                perspective: 800,
                position: "relative",
                zIndex: 2,
                flexShrink: 0,
                cursor: "default",
            }}
            initial={{ opacity: 0, y: 44, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            whileHover={{ scale: 1.025, transition: { duration: 0.35 } }}
        >
            {children}
            {/* glare overlay */}
            <motion.div
                style={{
                    position: "absolute", inset: 0, zIndex: 10,
                    borderRadius: "inherit",
                    background: `radial-gradient(circle at ${glareX.get()} ${glareY.get()}, rgba(255,255,255,0.07) 0%, transparent 60%)`,
                    pointerEvents: "none",
                    opacity: hovered ? 1 : 0,
                    transition: "opacity .3s",
                }}
            />
            {/* hover border */}
            <motion.div
                animate={{ opacity: hovered ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                style={{
                    position: "absolute", inset: 0,
                    borderRadius: "inherit",
                    border: `1.5px solid ${t.accent}`,
                    pointerEvents: "none", zIndex: 11,
                }}
            />
        </motion.div>
    );
}

/* ─────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────── */
export default function Home() {
    const { t, isDark } = useTheme();
    const sectionRef = useRef(null);

    /* mouse position for spotlight */
    const mouseX = useMotionValue(typeof window !== "undefined" ? window.innerWidth / 2 : 0);
    const mouseY = useMotionValue(typeof window !== "undefined" ? window.innerHeight / 2 : 0);
    const springX = useSpring(mouseX, { stiffness: 80, damping: 22 });
    const springY = useSpring(mouseY, { stiffness: 80, damping: 22 });

    /* parallax layers for right panel bg */
    const paraX = useTransform(springX, [0, typeof window !== "undefined" ? window.innerWidth : 1440], [-18, 18]);
    const paraY = useTransform(springY, [0, typeof window !== "undefined" ? window.innerHeight : 900], [-12, 12]);

    useEffect(() => {
        const el = sectionRef.current;
        if (!el) return;
        const onMove = (e) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };
        el.addEventListener("mousemove", onMove);
        return () => el.removeEventListener("mousemove", onMove);
    }, []);

    return (
        <section
            id="home"
            ref={sectionRef}
            style={{
                height: "100vh",
                minHeight: 580,
                maxHeight: 1080,
                background: t.bg,
                position: "relative",
                overflow: "hidden",
                display: "flex",
            }}
        >
            {/* ── MOUSE SPOTLIGHT ── */}
            <motion.div
                style={{
                    position: "absolute",
                    left: springX,
                    top: springY,
                    x: "-50%", y: "-50%",
                    width: 520, height: 520,
                    borderRadius: "50%",
                    background: isDark
                        ? `radial-gradient(circle, rgba(34,197,94,.10) 0%, transparent 65%)`
                        : `radial-gradient(circle, rgba(22,163,74,.07) 0%, transparent 65%)`,
                    filter: "blur(0px)",
                    pointerEvents: "none",
                    zIndex: 0,
                }}
            />

            {/* ── grid ── */}
            <div style={{
                position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0,
                backgroundImage: `
                    linear-gradient(${t.gridLine} 1px, transparent 1px),
                    linear-gradient(90deg, ${t.gridLine} 1px, transparent 1px)`,
                backgroundSize: "56px 56px",
            }} />

            {/* ── MAIN ROW ── */}
            <div className="hw" style={{
                display: "flex", width: "100%", height: "100%",
                position: "relative", zIndex: 1,
            }}>

                {/* ━━━━ LEFT ━━━━ */}
                <div className="hl" style={{
                    flex: "0 0 52%",
                    display: "flex", flexDirection: "column", justifyContent: "center",
                    paddingTop: 30, paddingBottom: 24,
                    paddingLeft: "clamp(28px,6vw,90px)",
                    paddingRight: "clamp(16px,2vw,36px)",
                }}>

                    {/* pill */}
                    <motion.div
                        initial={{ opacity: 0, y: 16, scale: 0.92 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.6, ease: [0.16, 1, .3, 1], delay: 0.04 }}
                        style={{
                            display: "inline-flex", alignItems: "center", gap: 8,
                            padding: "6px 16px",
                            background: t.accentBg,
                            border: `1px solid ${t.accentBorder}`,
                            borderRadius: 100,
                            marginBottom: "clamp(20px,3vh,34px)",
                            width: "fit-content",
                        }}
                    >
                        <span style={{
                            width: 7, height: 7, borderRadius: "50%",
                            background: t.accent, flexShrink: 0,
                            animation: "pdot 2.4s ease-in-out infinite",
                        }} />
                        <span style={{ fontSize: 12.5, color: t.accent, fontWeight: 500 }}>
                            Open to opportunities
                        </span>
                    </motion.div>

                    {/* ── NAME — clean slide-up, no loop weirdness ── */}
                    <div style={{ overflow: "hidden", marginBottom: "clamp(18px,2.5vh,28px)" }}>
                        <motion.h1
                            className="hero-name"
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            transition={{ duration: 0.9, ease: [0.16, 1, .3, 1], delay: 0.08 }}
                            style={{
                                fontFamily: "'Syne', sans-serif",
                                fontSize: "clamp(72px,9.8vw,128px)",
                                fontWeight: 800, lineHeight: .88,
                                letterSpacing: "-0.045em",
                                color: t.text,
                                margin: 0,
                            }}
                        >
                            Rishal
                        </motion.h1>
                    </div>

                    {/* ── TYPEWRITER ROLE ── */}
                    <motion.div
                        initial={{ opacity: 0, x: -18 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, ease: [0.16, 1, .3, 1], delay: 0.22 }}
                        style={{ marginBottom: "clamp(14px,2vh,22px)" }}
                    >
                        <TypewriterRole t={t} />
                    </motion.div>

                    {/* ── BIO — clean fade, no floating ── */}
                    <motion.p
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: [0.16, 1, .3, 1], delay: 0.32 }}
                        style={{
                            color: t.text2,
                            fontSize: "clamp(13px,1.15vw,15px)",
                            lineHeight: 1.8,
                            marginBottom: "clamp(24px,3.5vh,40px)",
                            maxWidth: 440,
                        }}
                    >
                        Building{" "}
                        <strong style={{ color: t.text, fontWeight: 600 }}>
                            production-grade mobile & web apps
                        </strong>{" "}
                        with Flutter & Dart. 3+ years delivering enterprise solutions —
                        real-time logistics, CRM platforms — clean architecture & Firebase.
                    </motion.p>

                    {/* ── CTAs ── */}
                    <motion.div
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: [0.16, 1, .3, 1], delay: 0.41 }}
                        className="hc"
                        style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: "clamp(28px,4vh,52px)" }}
                    >
                        <Btn primary t={t} label="View Work"
                            onClick={() => document.getElementById("works")?.scrollIntoView({ behavior: "smooth" })} />
                        <Btn t={t} icon={<Github size={14} />} label="GitHub"
                            onClick={() => window.open("https://github.com/riishal")} />
                        <Btn t={t} icon={<Mail size={14} />} label="Contact"
                            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })} />
                    </motion.div>

                    {/* ── STATS ── */}
                    <div className="hs" style={{ display: "flex", gap: "clamp(22px,3.5vw,52px)" }}>
                        {STATS.map((s, i) => (
                            <CounterStat key={s.label} {...s} t={t} delay={0.5 + i * 0.09} />
                        ))}
                    </div>
                </div>

                {/* ━━━━ RIGHT ━━━━ */}
                <div className="hr" style={{
                    flex: 1,
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    paddingLeft: "clamp(16px,3vw,48px)",
                    paddingRight: "clamp(16px,3vw,32px)",
                    overflow: "hidden",
                    height: "100%",
                }}>

                    {/* ── PARALLAX GLOW (follows mouse) ── */}
                    <motion.div
                        style={{
                            position: "absolute",
                            top: "50%", left: "50%",
                            x: useTransform(paraX, v => `calc(-50% + ${v * 0.6}px)`),
                            y: useTransform(paraY, v => `calc(-54% + ${v * 0.6}px)`),
                            width: 400, height: 400,
                            borderRadius: "50%",
                            background: isDark
                                ? `radial-gradient(circle, rgba(34,197,94,.22) 0%, transparent 65%)`
                                : `radial-gradient(circle, rgba(22,163,74,.14) 0%, transparent 65%)`,
                            filter: "blur(52px)",
                            pointerEvents: "none", zIndex: 0,
                        }}
                    />

                    {/* corner TL */}
                    <motion.div className="corner-tl"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 0.7, scale: 1 }}
                        transition={{ delay: 0.85, duration: 0.4 }}
                        style={{
                            position: "absolute",
                            top: "clamp(24px,5vh,52px)", left: "clamp(16px,3vw,40px)",
                            width: 26, height: 26,
                            borderTop: `2px solid ${t.accentBorder}`,
                            borderLeft: `2px solid ${t.accentBorder}`,
                            borderRadius: "4px 0 0 0", zIndex: 3,
                        }}
                    />
                    {/* corner BR */}
                    <motion.div className="corner-br"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 0.7, scale: 1 }}
                        transition={{ delay: 0.9, duration: 0.4 }}
                        style={{
                            position: "absolute",
                            bottom: "clamp(24px,5vh,52px)", right: "clamp(16px,3vw,40px)",
                            width: 26, height: 26,
                            borderBottom: `2px solid ${t.accentBorder}`,
                            borderRight: `2px solid ${t.accentBorder}`,
                            borderRadius: "0 0 4px 0", zIndex: 3,
                        }}
                    />

                    {/* ── PROFILE CARD with 3D tilt ── */}
                    <TiltCard t={t} isDark={isDark} style={{
                        width: "clamp(220px,26vw,340px)",
                        height: "clamp(300px,36vw,470px)",
                        borderRadius: 20,
                        overflow: "hidden",
                        border: `1.5px solid ${t.accentBorder}`,
                        boxShadow: isDark
                            ? `0 0 0 5px ${t.accentBg}, 0 28px 72px rgba(0,0,0,.6), 0 0 48px rgba(34,197,94,.12)`
                            : `0 0 0 5px ${t.accentBg}, 0 28px 72px rgba(0,0,0,.16), 0 0 48px rgba(22,163,74,.08)`,
                    }}>
                        {/* photo */}
                        <img
                            src={profileImg}
                            alt="Rishal"
                            style={{
                                width: "100%", height: "100%",
                                objectFit: "cover",
                                objectPosition: "50% 8%",
                                display: "block",
                                filter: isDark
                                    ? "grayscale(10%) contrast(1.14) brightness(.87)"
                                    : "grayscale(16%) contrast(1.08) brightness(1.04)",
                            }}
                        />
                        {/* bottom fade */}
                        <div style={{
                            position: "absolute", inset: 0, pointerEvents: "none",
                            background: `linear-gradient(to top, ${t.bg} 0%, rgba(0,0,0,0) 40%)`,
                        }} />
                        {/* name tag */}
                        <div style={{
                            position: "absolute", bottom: 0, left: 0, right: 0,
                            padding: "14px 18px", zIndex: 4,
                        }}>
                            <div style={{
                                fontFamily: "'Syne',sans-serif",
                                fontSize: 15, fontWeight: 700, color: t.text,
                            }}>Rishal</div>
                            <div style={{
                                fontSize: 10.5, color: t.accent,
                                letterSpacing: 1.5, textTransform: "uppercase",
                                fontFamily: "'Syne',sans-serif", marginTop: 2, fontWeight: 600,
                            }}>Flutter Developer</div>
                        </div>
                    </TiltCard>

                    {/* ── STATUS badge ── */}
                    <motion.div
                        className="badge-status"
                        initial={{ opacity: 0, y: -14 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: [0.16, 1, .3, 1], delay: 0.9 }}
                        whileHover={{ y: -5, scale: 1.06, transition: { duration: 0.22 } }}
                        style={{
                            position: "absolute",
                            top: "clamp(62px,10vh,118px)",
                            right: "clamp(12px,3vw,44px)",
                            zIndex: 5,
                            padding: "9px 14px",
                            background: isDark ? "rgba(6,6,6,.88)" : "rgba(250,250,248,.93)",
                            backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)",
                            border: `1px solid ${t.accentBorder}`,
                            borderRadius: 12,
                            boxShadow: "0 4px 16px rgba(0,0,0,.15)",
                            animation: "float-a 4s ease-in-out 1.5s infinite",
                            cursor: "default",
                        }}
                    >
                        <div style={{ fontSize: 8.5, color: t.text3, letterSpacing: 1.6, textTransform: "uppercase", marginBottom: 4, fontFamily: "'Syne',sans-serif" }}>Status</div>
                        <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
                            <span style={{ width: 6, height: 6, borderRadius: "50%", background: t.accent, animation: "pdot 2.4s ease-in-out infinite" }} />
                            <span style={{ fontSize: 13, color: t.accent, fontWeight: 700, fontFamily: "'Syne',sans-serif" }}>Open to Work</span>
                        </div>
                    </motion.div>

                    {/* ── EXPERIENCE badge ── */}
                    <motion.div
                        className="badge-exp"
                        initial={{ opacity: 0, y: 14 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: [0.16, 1, .3, 1], delay: 1.05 }}
                        whileHover={{ y: -5, scale: 1.06, transition: { duration: 0.22 } }}
                        style={{
                            position: "absolute",
                            bottom: "clamp(50px,8vh,96px)",
                            left: "clamp(8px,2.5vw,36px)",
                            zIndex: 5,
                            padding: "10px 14px",
                            background: isDark ? "rgba(6,6,6,.88)" : "rgba(250,250,248,.93)",
                            backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)",
                            border: `1px solid ${isDark ? "rgba(255,255,255,.08)" : "rgba(0,0,0,.08)"}`,
                            borderRadius: 12,
                            boxShadow: "0 4px 16px rgba(0,0,0,.15)",
                            display: "flex", alignItems: "center", gap: 10,
                            animation: "float-b 5s ease-in-out 1.8s infinite",
                            cursor: "default",
                        }}
                    >
                        <div style={{
                            width: 34, height: 34, borderRadius: 9,
                            background: t.accentBg, border: `1px solid ${t.accentBorder}`,
                            display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                        }}>
                            <Code2 size={15} color={t.accent} strokeWidth={2.5} />
                        </div>
                        <div>
                            <div style={{ fontSize: 13, color: t.text, fontWeight: 700, fontFamily: "'Syne',sans-serif", lineHeight: 1.2 }}>3+ Years</div>
                            <div style={{ fontSize: 9.5, color: t.text3, letterSpacing: 1.2, textTransform: "uppercase", marginTop: 2 }}>Experience</div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* ── SCROLL CUE ── */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.38 }}
                transition={{ delay: 1.3, duration: 0.7 }}
                style={{
                    position: "absolute", bottom: 24,
                    left: "clamp(28px,6vw,90px)",
                    display: "flex", alignItems: "center", gap: 8, zIndex: 3,
                }}
            >
                <motion.div
                    animate={{ scaleY: [1, 0.45, 1], opacity: [0.8, 0.25, 0.8] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1.8 }}
                    style={{
                        width: 1, height: 40,
                        background: `linear-gradient(to bottom,${t.accent},transparent)`,
                        transformOrigin: "top",
                    }}
                />
                <span style={{
                    fontSize: 8.5, color: t.text3, letterSpacing: 2.5,
                    fontFamily: "'Syne',sans-serif", textTransform: "uppercase",
                }}>Scroll</span>
            </motion.div>

            {/* ══ STYLES ══ */}
            <style>{`
                @keyframes pdot {
                    0%,100%{ box-shadow:0 0 0 0 rgba(34,197,94,.6); }
                    50%    { box-shadow:0 0 0 6px rgba(34,197,94,0); }
                }
                @keyframes float-a {
                    0%,100%{ transform:translateY(0px); }
                    50%    { transform:translateY(-7px); }
                }
                @keyframes float-b {
                    0%,100%{ transform:translateY(0px); }
                    50%    { transform:translateY(-5px); }
                }

                /* card inner bracket corners */
                .profile-frame::before,.profile-frame::after{
                    content:""; position:absolute;
                    width:20px; height:20px; z-index:12;
                    opacity:0; pointer-events:none;
                    transition:opacity .3s, width .3s, height .3s;
                }
                .profile-frame:hover::before,.profile-frame:hover::after{ opacity:1; width:28px; height:28px; }
                .profile-frame::before{
                    top:10px; left:10px;
                    border-top:2px solid rgba(34,197,94,.9);
                    border-left:2px solid rgba(34,197,94,.9);
                    border-radius:4px 0 0 0;
                }
                .profile-frame::after{
                    bottom:10px; right:10px;
                    border-bottom:2px solid rgba(34,197,94,.9);
                    border-right:2px solid rgba(34,197,94,.9);
                    border-radius:0 0 4px 0;
                }
                .hr:hover .corner-tl,.hr:hover .corner-br{
                    width:34px !important; height:34px !important;
                }

                /* ── RESPONSIVE ── */
                @media(min-width:1280px){
                    .hl{ flex:0 0 50% !important; }
                    .hr{ flex:1 !important; padding-left:clamp(32px,4vw,64px) !important; }
                }
                @media(max-width:1024px) and (min-width:769px){
                    .hl{ flex:0 0 52% !important; padding-left:32px !important; padding-right:18px !important; }
                    .hr{ flex:1 !important; padding-left:24px !important; padding-right:20px !important; }
                    .hero-name{ font-size:clamp(58px,8.5vw,96px) !important; }
                    .profile-frame{ width:clamp(190px,23vw,290px) !important; height:clamp(250px,31vw,390px) !important; }
                }
                @media(max-width:768px) and (min-width:601px){
                    #home{ height:auto !important; min-height:100vh !important; }
                    .hw{ flex-direction:column !important; height:auto !important; }
                    .hr{
                        order:0 !important; flex:none !important;
                        width:100% !important; height:62vw !important;
                        min-height:300px !important; max-height:420px !important;
                        justify-content:center !important; padding-left:0 !important;
                    }
                    .hl{ order:1 !important; flex:none !important; width:100% !important; padding:32px 28px 52px !important; }
                    .hero-name{ font-size:clamp(58px,10vw,92px) !important; }
                    .profile-frame{ width:clamp(165px,26vw,230px) !important; height:clamp(215px,35vw,310px) !important; }
                    .badge-status{ top:16px !important; right:clamp(20px,6vw,60px) !important; }
                    .badge-exp{ bottom:16px !important; left:clamp(20px,6vw,60px) !important; }
                    .corner-tl,.corner-br{ display:none !important; }
                }
                @media(max-width:600px) and (min-width:481px){
                    #home{ height:auto !important; min-height:100vh !important; }
                    .hw{ flex-direction:column !important; height:auto !important; }
                    .hr{
                        order:0 !important; flex:none !important;
                        width:100% !important; height:70vw !important;
                        min-height:260px !important; max-height:360px !important;
                        justify-content:center !important; padding-left:0 !important;
                    }
                    .hl{ order:1 !important; flex:none !important; width:100% !important; padding:26px 22px 48px !important; }
                    .hero-name{ font-size:clamp(52px,11.5vw,80px) !important; }
                    .profile-frame{ width:clamp(148px,28vw,200px) !important; height:clamp(192px,38vw,270px) !important; }
                    .badge-status{ top:12px !important; right:16px !important; }
                    .badge-exp{ bottom:12px !important; left:16px !important; }
                    .corner-tl,.corner-br{ display:none !important; }
                }
                @media(max-width:480px){
                    #home{ height:auto !important; min-height:100svh !important; }
                    .hw{ flex-direction:column !important; height:auto !important; }
                    .hr{
                        order:0 !important; flex:none !important;
                        width:100% !important; height:90vw !important;
                        min-height:260px !important; max-height:370px !important;
                        justify-content:center !important;
                        padding-left:0 !important; padding-right:0 !important;
                    }
                    .hl{ order:1 !important; flex:none !important; width:100% !important; padding:22px 18px 52px !important; }
                    .hero-name{ font-size:clamp(48px,14vw,70px) !important; }
                    .hc{ flex-direction:column !important; gap:9px !important; }
                    .hc button{ width:100% !important; justify-content:center !important; }
                    .hs{ display:grid !important; grid-template-columns:1fr 1fr !important; gap:16px 24px !important; }
                    .profile-frame{ width:clamp(136px,42vw,190px) !important; height:clamp(175px,56vw,252px) !important; border-radius:14px !important; }
                    .badge-status{ top:10px !important; right:10px !important; }
                    .badge-exp{ bottom:10px !important; left:10px !important; }
                    .corner-tl,.corner-br{ display:none !important; }
                }
                @media(max-width:360px){
                    .profile-frame{ width:128px !important; height:168px !important; border-radius:12px !important; }
                    .hero-name{ font-size:clamp(42px,12.5vw,60px) !important; }
                }
            `}</style>
        </section>
    );
}

/* ── Button ── */
function Btn({ label, icon, onClick, t, primary }) {
    return (
        <motion.button
            onClick={onClick}
            whileHover={{ y: -2, scale: primary ? 1.04 : 1.02 }}
            whileTap={{ scale: 0.96 }}
            transition={{ duration: 0.18, ease: [0.16, 1, .3, 1] }}
            style={{
                padding: primary ? "12px 28px" : "11px 22px",
                background: primary ? t.accent : "transparent",
                color: primary ? "#fff" : t.text2,
                border: primary ? "none" : `1.5px solid ${t.border2}`,
                borderRadius: 8, fontSize: 14, fontWeight: 600, cursor: "pointer",
                fontFamily: "'Syne',sans-serif",
                display: "flex", alignItems: "center", gap: 8,
                whiteSpace: "nowrap", letterSpacing: ".1px",
                transition: "background .2s, color .2s, border-color .2s, box-shadow .2s",
            }}
            onMouseEnter={e => {
                if (primary) {
                    e.currentTarget.style.background = t.accentHover || t.accent;
                    e.currentTarget.style.boxShadow = `0 8px 28px rgba(34,197,94,.32)`;
                } else {
                    e.currentTarget.style.color = t.accent;
                    e.currentTarget.style.borderColor = t.accent;
                    e.currentTarget.style.background = t.accentBg;
                }
            }}
            onMouseLeave={e => {
                if (primary) {
                    e.currentTarget.style.background = t.accent;
                    e.currentTarget.style.boxShadow = "none";
                } else {
                    e.currentTarget.style.color = t.text2;
                    e.currentTarget.style.borderColor = t.border2;
                    e.currentTarget.style.background = "transparent";
                }
            }}
        >{icon}{label}</motion.button>
    );
}