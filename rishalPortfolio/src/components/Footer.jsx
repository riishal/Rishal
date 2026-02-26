import { useTheme } from "../context/ThemeContext";

export default function Footer() {
    const { t } = useTheme();
    const currentYear = new Date().getFullYear();

    return (
        <footer style={{
            borderTop: `1px solid ${t.border}`,
            padding: "32px clamp(24px, 6vw, 96px)",
            background: t.bg,
        }}>
            <div style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
                gap: 20,
                flexDirection: "row",
            }}>
                {/* Logo */}
                <div style={{
                    fontFamily: "'Syne', sans-serif",
                    fontSize: 24,
                    fontWeight: 800,
                    color: t.text,
                    letterSpacing: "-0.5px",
                    order: 1,
                    width: "auto",
                }}>
                    R<span style={{ color: t.accent }}>.</span>
                </div>

                {/* Copyright - Centered on mobile */}
                <div style={{ 
                    fontSize: 13, 
                    color: t.text3, 
                    fontFamily: "'Syne', sans-serif",
                    letterSpacing: "0.2px",
                    order: { xs: 3, sm: 2 },
                    width: { xs: "100%", sm: "auto" },
                    textAlign: { xs: "center", sm: "left" },
                }}>
                    © {currentYear} Rishal Muhammed · Flutter Developer
                </div>

                {/* Location */}
                <div style={{ 
                    fontSize: 13, 
                    color: t.text3, 
                    fontFamily: "'Syne', sans-serif",
                    order: { xs: 2, sm: 3 },
                    width: { xs: "100%", sm: "auto" },
                    textAlign: { xs: "center", sm: "right" },
                }}>
                    Kerala, India
                </div>
            </div>

            {/* Mobile Style Override */}
            <style>{`
                @media (max-width: 640px) {
                    footer > div {
                        flex-direction: column !important;
                        gap: 12px !important;
                    }
                    
                    footer > div > div {
                        width: 100% !important;
                        text-align: center !important;
                    }
                    
                    footer > div > div:first-child {
                        margin-bottom: 4px;
                    }
                }
            `}</style>
        </footer>
    );
}