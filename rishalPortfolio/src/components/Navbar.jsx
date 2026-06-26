import { useState, useEffect } from "react";
import { Moon, Sun, Menu, X, Mail, ArrowLeft } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

const LINKS = ["Home", "About", "Services", "Experience", "Works", "Contact"];

export default function Navbar() {
    const { t, toggle, isDark } = useTheme();
    const [scrolled, setScrolled] = useState(false);
    const [active, setActive] = useState("Home");
    const [open, setOpen] = useState(false);
    const [hoveredLink, setHoveredLink] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();
    const isProjectPage = location.pathname.startsWith("/project/");

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
            
            // Find active section
            for (let i = LINKS.length - 1; i >= 0; i--) {
                const id = LINKS[i].toLowerCase();
                const element = document.getElementById(id);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 100 && rect.bottom >= 50) {
                        setActive(LINKS[i]);
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll(); // Call once to set initial active
        
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (id) => {
        if (isProjectPage) {
            navigate("/");
            setOpen(false);
            return;
        }
        const element = document.getElementById(id.toLowerCase());
        if (element) {
            const offset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;
            window.scrollTo({ top: offsetPosition, behavior: "smooth" });
            setActive(id);
            setOpen(false);
        }
    };

    return (
        <>
            <nav style={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                zIndex: 999,
                height: scrolled ? 64 : 80,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "0 clamp(24px, 5vw, 120px)",
                background: scrolled ? t.navBg : "transparent",
                backdropFilter: scrolled ? "blur(12px)" : "none",
                WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
                borderBottom: scrolled ? `1px solid ${t.border}` : "none",
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                boxShadow: scrolled ? `0 4px 30px rgba(0, 0, 0, ${isDark ? 0.3 : 0.05})` : "none",
            }}>
                {/* Logo with hover effect */}
                <button
                    onClick={() => isProjectPage ? navigate("/") : scrollToSection("Home")}
                    onMouseEnter={() => setHoveredLink("logo")}
                    onMouseLeave={() => setHoveredLink(null)}
                    style={{
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        fontFamily: "'Syne', sans-serif",
                        fontSize: 28,
                        fontWeight: 800,
                        color: t.text,
                        letterSpacing: "-1px",
                        display: "flex",
                        alignItems: "center",
                        gap: 2,
                        transform: hoveredLink === "logo" ? "scale(1.05)" : "scale(1)",
                        transition: "transform 0.2s ease",
                    }}
                >
                    R
                    <span style={{ 
                        color: t.accent,
                        transform: hoveredLink === "logo" ? "rotate(15deg)" : "rotate(0)",
                        transition: "transform 0.3s ease",
                        display: "inline-block",
                    }}>
                        .
                    </span>
                </button>

                {/* Back to Portfolio — always visible on project pages (NOT inside nav-links) */}
                {isProjectPage && (
                    <button
                        onClick={() => navigate("/", { state: { scrollTo: "works" } })}
                        style={{
                            display: "inline-flex", alignItems: "center", gap: 7,
                            background: t.accentBg, border: `1px solid ${t.accentBorder}`,
                            borderRadius: 10, padding: "8px 16px",
                            color: t.accent, fontSize: 13, fontWeight: 600,
                            cursor: "pointer", fontFamily: "'Syne', sans-serif",
                            transition: "all 0.25s ease",
                            whiteSpace: "nowrap",
                        }}
                        onMouseEnter={e => { e.currentTarget.style.background = `${t.accentBg}cc`; e.currentTarget.style.transform = "translateX(-2px)"; }}
                        onMouseLeave={e => { e.currentTarget.style.background = t.accentBg; e.currentTarget.style.transform = "none"; }}
                    >
                        <ArrowLeft size={13} /> Back to Portfolio
                    </button>
                )}

                {/* Desktop nav links — hidden on mobile, hidden on project pages */}
                {!isProjectPage && (
                    <div style={{ display: "flex", gap: 8, alignItems: "center" }} className="nav-links">
                        {LINKS.map(link => (
                            <NavLink
                                key={link}
                                link={link}
                                active={active === link}
                                t={t}
                                onClick={() => scrollToSection(link)}
                            />
                        ))}
                    </div>
                )}

                {/* Right Section */}
                <div style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                }}>
                    {/* Theme Toggle */}
                    <button
                        onClick={toggle}
                        aria-label="Toggle theme"
                        style={{
                            width: 40,
                            height: 40,
                            borderRadius: "50%",
                            background: t.bg3,
                            border: `1px solid ${t.border2}`,
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            transition: "all 0.2s ease",
                            color: t.text3,
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.borderColor = t.accent;
                            e.currentTarget.style.transform = "scale(1.1)";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.borderColor = t.border2;
                            e.currentTarget.style.transform = "scale(1)";
                        }}
                    >
                        {isDark ? <Moon size={16} /> : <Sun size={16} />}
                    </button>

                    {/* Hire Me — hidden on project pages and on mobile */}
                    {!isProjectPage && (
                        <button
                            className="hire-btn"
                            onClick={() => window.location.href = "mailto:riishaltt@gmail.com"}
                            style={{
                                background: t.accent, color: "#fff", border: "none",
                                borderRadius: 8, padding: "10px 24px", fontSize: 14,
                                fontWeight: 600, cursor: "pointer",
                                fontFamily: "'Syne', sans-serif", letterSpacing: "0.5px",
                                transition: "all 0.2s ease", boxShadow: `0 4px 14px ${t.accent}40`,
                            }}
                            onMouseEnter={(e) => { e.currentTarget.style.background = t.accentHover; e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = `0 6px 20px ${t.accent}60`; }}
                            onMouseLeave={(e) => { e.currentTarget.style.background = t.accent; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = `0 4px 14px ${t.accent}40`; }}
                        >
                            Hire Me
                        </button>
                    )}

                    {/* Hamburger — only on portfolio page (mobile) */}
                    {!isProjectPage && (
                        <button
                            className="hamburger"
                            onClick={() => setOpen(!open)}
                            aria-label="Toggle menu"
                            style={{
                                display: "none", background: "none", border: "none",
                                cursor: "pointer", padding: 8, color: t.text,
                                borderRadius: 8, transition: "background 0.2s ease",
                            }}
                            onMouseEnter={(e) => { e.currentTarget.style.background = t.bg3; }}
                            onMouseLeave={(e) => { e.currentTarget.style.background = "none"; }}
                        >
                            {open ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    )}
                </div>
            </nav>

            {/* Mobile Menu — only on portfolio page */}
            {!isProjectPage && <div style={{
                position: "fixed",
                top: scrolled ? 64 : 80,
                left: 0,
                right: 0,
                zIndex: 998,
                background: t.bg2,
                borderBottom: `1px solid ${t.border}`,
                padding: "24px",
                display: open ? "flex" : "none",
                flexDirection: "column",
                gap: 8,
                transform: open ? "translateY(0)" : "translateY(-10px)",
                opacity: open ? 1 : 0,
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                pointerEvents: open ? "auto" : "none",
                boxShadow: `0 10px 30px rgba(0, 0, 0, ${isDark ? 0.3 : 0.1})`,
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
            }}>
                {LINKS.map(link => (
                    <button
                        key={link}
                        onClick={() => scrollToSection(link)}
                        style={{
                            background: active === link ? t.accentBg : "transparent",
                            border: `1px solid ${active === link ? t.accentBorder : "transparent"}`,
                            fontSize: 16,
                            fontWeight: active === link ? 600 : 500,
                            color: active === link ? t.accent : t.text2,
                            textAlign: "left",
                            padding: "16px 20px",
                            borderRadius: 12,
                            fontFamily: "'Syne', sans-serif",
                            transition: "all 0.2s ease",
                            cursor: "pointer",
                            width: "100%",
                        }}
                        onMouseEnter={(e) => {
                            if (active !== link) {
                                e.currentTarget.style.background = t.bg3;
                                e.currentTarget.style.color = t.text;
                            }
                        }}
                        onMouseLeave={(e) => {
                            if (active !== link) {
                                e.currentTarget.style.background = "transparent";
                                e.currentTarget.style.color = t.text2;
                            }
                        }}
                    >
                        {link}
                    </button>
                ))}
                
                <button
                    onClick={() => window.location.href = "mailto:riishaltt@gmail.com"}
                    style={{
                        background: t.accent,
                        color: "#fff",
                        border: "none",
                        borderRadius: 12,
                        padding: "16px 20px",
                        fontSize: 16,
                        fontWeight: 600,
                        marginTop: 16,
                        cursor: "pointer",
                        fontFamily: "'Syne', sans-serif",
                        letterSpacing: "0.5px",
                        transition: "all 0.2s ease",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 8,
                        width: "100%",
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.background = t.accentHover;
                        e.currentTarget.style.transform = "translateY(-2px)";
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.background = t.accent;
                        e.currentTarget.style.transform = "translateY(0)";
                    }}
                >
                    <Mail size={18} />
                    Hire Me
                </button>
            </div>}

            <style>{`
                @media (max-width: 768px) {
                    .nav-links { 
                        display: none !important; 
                    }
                    .hire-btn { 
                        display: none !important; 
                    }
                    .hamburger { 
                        display: flex !important; 
                    }
                }
                
                /* Smooth scroll behavior for the whole page */
                html {
                    scroll-behavior: smooth;
                }
            `}</style>
        </>
    );
}

function NavLink({ link, active, t, onClick }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <button
            onClick={onClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                fontSize: 15,
                fontWeight: 500,
                color: active ? t.accent : isHovered ? t.text : t.text2,
                fontFamily: "'Syne', sans-serif",
                padding: "8px 16px",
                borderRadius: 8,
                transition: "all 0.2s ease",
                position: "relative",
                letterSpacing: "0.3px",
            }}
        >
            {link}
            
            {/* Active indicator */}
            {active && (
                <span style={{
                    position: "absolute",
                    bottom: 4,
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: 4,
                    height: 4,
                    borderRadius: "50%",
                    background: t.accent,
                    transition: "all 0.2s ease",
                }} />
            )}
            
            {/* Hover indicator */}
            {isHovered && !active && (
                <span style={{
                    position: "absolute",
                    bottom: 4,
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: 4,
                    height: 4,
                    borderRadius: "50%",
                    background: t.text3,
                    opacity: 0.5,
                    transition: "all 0.2s ease",
                }} />
            )}
        </button>
    );
}