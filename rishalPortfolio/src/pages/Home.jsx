import { useState, useEffect, useRef, useCallback } from "react";
import { Mail, Github, Code2, Sparkles, ArrowRight, ChevronDown } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform, animate } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import profileImg from "../assets/profile.jpg";

/* ─────────────────────────────────────────
CONSTANTS
───────────────────────────────────────── */
const STATS = [
    { value: "3+", label: "Years Exp" },
    { value: "10+", label: "Projects" },
    { value: "3", label: "Live Apps" },
    { value: "100%", label: "Satisfaction" },
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
    const [phase, setPhase] = useState("typing");

    useEffect(() => {
        const full = ROLES[roleIdx];
        let timeout;

        if (phase === "typing") {
            if (displayed.length < full.length) {
                timeout = setTimeout(() => setDisplayed(full.slice(0, displayed.length + 1)), 80);
            } else {
                timeout = setTimeout(() => setPhase("pause"), 2000);
            }
        } else if (phase === "pause") {
            timeout = setTimeout(() => setPhase("erasing"), 200);
        } else {
            if (displayed.length > 0) {
                timeout = setTimeout(() => setDisplayed(d => d.slice(0, -1)), 40);
            } else {
                setRoleIdx(i => (i + 1) % ROLES.length);
                setPhase("typing");
            }
        }
        return () => clearTimeout(timeout);
    }, [displayed, phase, roleIdx]);

    return (
        <div style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            marginBottom: 16
        }}>
            <motion.span
                animate={{ scaleX: [1, 1.35, 1] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
                style={{
                    width: 28,
                    height: 1.5,
                    background: t.accent,
                    display: "block"
                }}
            />
            <Code2 size={14} color={t.accent} strokeWidth={2.5} />
            <span style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: "clamp(12px, 1.2vw, 13px)",
                color: t.accent,
                fontWeight: 500,
                letterSpacing: "0.3px"
            }}>
                {displayed}
                <span style={{ 
                    display: "inline-block", 
                    marginLeft: 2, 
                    color: t.accent,
                    animation: "blink 1s infinite"
                }}>|</span>
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
    const ref = useRef(null);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !ran.current) {
                    ran.current = true;
                    const ctrl = animate(0, isNaN(num) ? 0 : num, {
                        duration: 1.8,
                        ease: [0.16, 1, 0.3, 1],
                        onUpdate: v => setDisp(Math.round(v)),
                    });
                    return () => ctrl.stop();
                }
            },
            { threshold: 0.3 }
        );

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [num]);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            style={{ 
                textAlign: "center",
                transform: isHovered ? "translateY(-4px)" : "translateY(0)",
                transition: "transform 0.2s ease"
            }}
        >
            <motion.div
                animate={isHovered ? { scale: 1.1 } : { scale: 1 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
                style={{
                    fontFamily: "'Syne', sans-serif",
                    fontSize: "clamp(26px, 3vw, 32px)",
                    fontWeight: 700,
                    color: t.text,
                    lineHeight: 1.2,
                    marginBottom: 4
                }}
            >
                {isNaN(num) ? value : `${disp}${suffix}`}
            </motion.div>
            <div style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: "clamp(10px, 0.9vw, 11px)",
                color: isHovered ? t.accent : t.text3,
                fontWeight: 400,
                letterSpacing: "0.5px",
                textTransform: "uppercase",
                transition: "color 0.2s ease"
            }}>
                {label}
            </div>
        </motion.div>
    );
}

/* ─────────────────────────────────────────
BUTTON
───────────────────────────────────────── */
function Button({ label, icon, onClick, t, primary }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.button
            onClick={onClick}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.97 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            style={{
                padding: primary ? "12px 28px" : "10px 22px",
                background: primary 
                    ? (isHovered ? t.accent + "dd" : t.accent)
                    : "transparent",
                color: primary ? "#ffffff" : (isHovered ? t.accent : t.text2),
                border: primary 
                    ? "none" 
                    : `1px solid ${isHovered ? t.accent : t.border2}`,
                borderRadius: 6,
                fontSize: 13,
                fontWeight: 500,
                fontFamily: "'Syne', sans-serif",
                display: "flex",
                alignItems: "center",
                gap: 8,
                cursor: "pointer",
                transition: "all 0.2s ease",
                letterSpacing: "0.2px",
                position: "relative",
                overflow: "hidden"
            }}
        >
            {primary && (
                <motion.div
                    animate={isHovered ? { x: 3 } : { x: 0 }}
                    transition={{ type: "spring", stiffness: 400 }}
                >
                    {icon}
                </motion.div>
            )}
            {!primary && icon && (
                <motion.span
                    animate={isHovered ? { rotate: 15, scale: 1.2 } : { rotate: 0, scale: 1 }}
                    transition={{ type: "spring", stiffness: 400 }}
                >
                    {icon}
                </motion.span>
            )}
            {label}
            {primary && (
                <motion.span
                    animate={isHovered ? { x: 3 } : { x: 0 }}
                    transition={{ type: "spring", stiffness: 400 }}
                >
                    <ArrowRight size={13} />
                </motion.span>
            )}
        </motion.button>
    );
}

/* ─────────────────────────────────────────
PROFILE CARD
───────────────────────────────────────── */
function ProfileCard({ children, t, isDark }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            style={{
                width: "100%",
                height: "100%",
                borderRadius: 4,
                overflow: "hidden",
                position: "relative",
                border: `1px solid ${t.border2}`,
                background: t.bgCard,
                boxShadow: isHovered 
                    ? `0 20px 40px -20px ${t.accent}40, 0 0 0 1px ${t.accent}20` 
                    : "none",
                transition: "box-shadow 0.3s ease"
            }}
        >
            {children}
        </motion.div>
    );
}

/* ─────────────────────────────────────────
MAIN COMPONENT
───────────────────────────────────────── */
export default function Home() {
    const { t, isDark } = useTheme();
    const [windowWidth, setWindowWidth] = useState(1200);
    const sectionRef = useRef(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (sectionRef.current) {
                const rect = sectionRef.current.getBoundingClientRect();
                setMousePosition({
                    x: (e.clientX - rect.left) / rect.width,
                    y: (e.clientY - rect.top) / rect.height
                });
            }
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const isMobile = windowWidth <= 680;
    const isTablet = windowWidth > 680 && windowWidth <= 900;

    // Theme fallback
    const theme = {
        ...t,
        bg: t?.bg || (isDark ? "#0a0a0a" : "#ffffff"),
        text: t?.text || (isDark ? "#ffffff" : "#171717"),
        text2: t?.text2 || (isDark ? "#a3a3a3" : "#404040"),
        text3: t?.text3 || (isDark ? "#525252" : "#737373"),
        accent: t?.accent || "#22C55E",
        border2: t?.border2 || (isDark ? "#262626" : "#e5e5e5"),
        bgCard: t?.bgCard || (isDark ? "rgba(38,38,38,0.5)" : "rgba(255,255,255,0.8)")
    };

    // Parallax effect based on mouse position
    const x = mousePosition.x * 20 - 10;
    const y = mousePosition.y * 20 - 10;

    return (
        <motion.section
            ref={sectionRef}
            id="home"
            className="home-section"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            style={{
                minHeight: "100vh",
                height: "auto",
                background: theme.bg,
                display: "flex",
                alignItems: "center",
                fontFamily: "'Syne', sans-serif",
                position: "relative",
                WebkitFontSmoothing: "antialiased",
                MozOsxFontSmoothing: "grayscale"
            }}
        >
            {/* Subtle background grid with parallax */}
            <motion.div
                animate={{ 
                    x: x * 0.5,
                    y: y * 0.5
                }}
                transition={{ type: "spring", stiffness: 50, damping: 30 }}
                style={{
                    position: "absolute",
                    inset: -20,
                    backgroundImage: `
                        linear-gradient(${theme.border2}10 1px, transparent 1px),
                        linear-gradient(90deg, ${theme.border2}10 1px, transparent 1px)
                    `,
                    backgroundSize: "40px 40px",
                    pointerEvents: "none",
                    zIndex: 0,
                    opacity: 0.5
                }}
            />

            {/* Main container */}
            <motion.div
                className="home-desktop"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                style={{
                    display: "flex",
                    flexDirection: isMobile ? "column" : "row",
                    width: "100%",
                    maxWidth: 1300,
                    margin: "0 auto",
                    padding: isMobile ? "0" : isTablet ? "40px 32px" : "40px 60px",
                    gap: isMobile ? 0 : isTablet ? 40 : 60,
                    position: "relative",
                    zIndex: 1,
                    minHeight: isMobile ? "auto" : "100vh"
                }}
            >
                {/* Left Column - Content */}
                <motion.div
                    className="home-left"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    style={{
                        flex: isMobile ? "none" : "0 0 52%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        padding: isMobile ? "32px 20px 52px" : isTablet ? "100px 24px 60px" : "40px 0",
                        width: isMobile ? "100%" : "auto",
                        order: isMobile ? 1 : 0
                    }}
                >
                    {/* Status indicator */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        whileHover={{ scale: 1.05 }}
                        style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 8,
                            marginBottom: 20,
                            padding: "4px 0",
                            cursor: "default"
                        }}
                    >
                        <motion.div
                            animate={{ 
                                scale: [1, 1.5, 1],
                                opacity: [1, 0.5, 1]
                            }}
                            transition={{ 
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            style={{
                                width: 6,
                                height: 6,
                                borderRadius: "50%",
                                background: theme.accent,
                            }}
                        />
                        <span style={{
                            fontFamily: "'Syne', sans-serif",
                            fontSize: 12,
                            color: theme.text2,
                            fontWeight: 400,
                            letterSpacing: "0.2px"
                        }}>
                            Open to opportunities
                        </span>
                    </motion.div>

                    {/* Name */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        whileHover={{ 
                            scale: 1.02,
                            color: theme.accent,
                            transition: { duration: 0.2 }
                        }}
                        style={{
                            fontFamily: "'Syne', sans-serif",
                            fontSize: isMobile ? "clamp(52px, 15vw, 72px)" : "clamp(64px, 5.5vw, 82px)",
                            fontWeight: 700,
                            color: theme.text,
                            lineHeight: 0.9,
                            margin: 0,
                            marginBottom: 12,
                            letterSpacing: "-0.02em",
                            cursor: "default",
                            transition: "color 0.2s ease"
                        }}
                    >
                        Rishal
                    </motion.h1>

                    {/* Typewriter role */}
                    <TypewriterRole t={theme} />

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        style={{
                            fontFamily: "'Syne', sans-serif",
                            fontSize: "clamp(14px, 1.2vw, 15px)",
                            color: theme.text2,
                            lineHeight: 1.7,
                            marginBottom: 30,
                            maxWidth: 500,
                            fontWeight: 400,
                            letterSpacing: "0.2px"
                        }}
                    >
                        Building production-grade mobile & web apps with Flutter & Dart. 
                        3+ years delivering enterprise solutions – real-time logistics, 
                        CRM platforms – clean architecture & Firebase.
                    </motion.p>

                    {/* Buttons */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="home-ctas"
                        style={{
                            display: "flex",
                            gap: 10,
                            flexWrap: "wrap",
                            marginBottom: 40,
                            flexDirection: isMobile ? "column" : "row"
                        }}
                    >
                        <Button
                            primary
                            label="View Work"
                            t={theme}
                            onClick={() => document.getElementById("works")?.scrollIntoView({ behavior: "smooth" })}
                        />
                        <Button
                            icon={<Github size={13} />}
                            label="GitHub"
                            t={theme}
                            onClick={() => window.open("https://github.com/riishal")}
                        />
                        <Button
                            icon={<Mail size={13} />}
                            label="Contact"
                            t={theme}
                            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                        />
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ delay: 0.4 }}
                        className="stats-row"
                        style={{
                            display: "grid",
                            gridTemplateColumns: isMobile ? "1fr 1fr" : "repeat(4, 1fr)",
                            gap: isMobile ? 20 : 16,
                            background: theme.bgCard,
                            borderRadius: 8,
                            padding: isMobile ? "20px 16px" : "20px 16px",
                            border: `1px solid ${theme.border2}`,
                            backdropFilter: "blur(10px)"
                        }}
                    >
                        {STATS.map((stat, index) => (
                            <CounterStat
                                key={stat.label}
                                value={stat.value}
                                label={stat.label}
                                t={theme}
                                delay={0.5 + index * 0.1}
                            />
                        ))}
                    </motion.div>
                </motion.div>

                {/* Right Column - Profile */}
                <motion.div
                    className="home-portrait-desktop"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    animate={{ 
                        x: x * 0.3,
                        y: y * 0.3
                    }}
                    style={{
                        flex: isMobile ? "none" : "0 0 48%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: isMobile ? "100%" : "auto",
                        height: isMobile ? "95vw" : "auto",
                        minHeight: isMobile ? "300px" : "auto",
                        maxHeight: isMobile ? "480px" : "auto",
                        order: isMobile ? 0 : 1,
                        position: "relative"
                    }}
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        style={{
                            width: isMobile ? "100%" : "min(380px, 32vw)",
                            height: isMobile ? "100%" : "min(480px, 40vw)",
                            maxWidth: isMobile ? "280px" : "none"
                        }}
                    >
                        <ProfileCard t={theme} isDark={isDark}>
                            <motion.img
                                src={profileImg}
                                alt="Rishal"
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.4 }}
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                    objectPosition: isMobile ? "center 5%" : "50% 20%"
                                }}
                            />
                            
                            {/* Gradient overlay */}
                            <motion.div
                                whileHover={{ opacity: 0.7 }}
                                transition={{ duration: 0.3 }}
                                className="left-fade"
                                style={{
                                    position: "absolute",
                                    inset: 0,
                                    background: isMobile 
                                        ? "linear-gradient(to top, rgba(0,0,0,0.3) 0%, transparent 50%)"
                                        : "linear-gradient(to right, transparent 70%, rgba(0,0,0,0.2) 100%)",
                                    pointerEvents: "none"
                                }}
                            />

                            {/* Name tag */}
                            <motion.div
                                whileHover={{ y: -2 }}
                                transition={{ type: "spring", stiffness: 400 }}
                                style={{
                                    position: "absolute",
                                    bottom: 16,
                                    left: 16,
                                    right: 16,
                                    padding: 12,
                                    background: "rgba(0,0,0,0.6)",
                                    backdropFilter: "blur(10px)",
                                    borderRadius: 4,
                                    border: `1px solid ${theme.accent}30`
                                }}
                            >
                                <div style={{
                                    fontFamily: "'Syne', sans-serif",
                                    fontSize: 14,
                                    fontWeight: 500,
                                    color: "#ffffff",
                                    marginBottom: 2,
                                    letterSpacing: "0.2px"
                                }}>
                                    Rishal
                                </div>
                                <div style={{
                                    fontFamily: "'Syne', sans-serif",
                                    fontSize: 10,
                                    color: theme.accent,
                                    fontWeight: 400,
                                    letterSpacing: "0.3px"
                                }}>
                                    Flutter Developer
                                </div>
                            </motion.div>
                        </ProfileCard>
                    </motion.div>
                </motion.div>
            </motion.div>

            {/* Scroll indicator - hidden on mobile */}
            {!isMobile && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.5 }}
                    transition={{ delay: 1 }}
                    whileHover={{ opacity: 1, scale: 1.1 }}
                    style={{
                        position: "absolute",
                        bottom: 28,
                        left: "50%",
                        transform: "translateX(-50%)",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: 4,
                        zIndex: 2,
                        cursor: "pointer"
                    }}
                    onClick={() => window.scrollTo({
                        top: window.innerHeight,
                        behavior: "smooth"
                    })}
                >
                    <span style={{
                        fontFamily: "'Syne', sans-serif",
                        fontSize: 10,
                        color: theme.text3,
                        letterSpacing: 1.5,
                        fontWeight: 400
                    }}>
                        SCROLL
                    </span>
                    <motion.div
                        animate={{ y: [0, 4, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                    >
                        <ChevronDown size={12} color={theme.text3} />
                    </motion.div>
                </motion.div>
            )}

            {/* Animations */}
            <style>{`
                @keyframes pulse {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0.5; }
                }
                
                @keyframes blink {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0; }
                }
                
                @media (max-width: 680px) {
                    .home-section {
                        padding-top: 60px;
                    }
                    
                    .home-portrait-desktop {
                        margin-bottom: 20px;
                    }
                }
                
                @media (min-width: 681px) and (max-width: 900px) {
                    .home-left {
                        padding-right: 20px;
                    }
                }
            `}</style>
        </motion.section>
    );
}