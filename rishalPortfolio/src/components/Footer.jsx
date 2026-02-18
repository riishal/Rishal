import { useState } from "react";
import { Github, Linkedin, Globe } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const LINKS = [
    { Icon: Github, label: "GitHub", url: "https://github.com/riishal" },
    { Icon: Linkedin, label: "LinkedIn", url: "https://www.linkedin.com/in/rishal-muhammed-9bb017262" },
    { Icon: Globe, label: "Portfolio", url: "https://rishal-51207.web.app/" },
];

export default function Footer() {
    const { t } = useTheme();
    return (
        <footer style={{
            borderTop: `1px solid ${t.border}`,
            padding: "20px clamp(20px, 6vw, 96px)",
            background: t.bg,
            display: "flex", justifyContent: "space-between",
            alignItems: "center", flexWrap: "wrap", gap: 12,
        }}>
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <span style={{
                    width: 26, height: 26, borderRadius: 7,
                    background: t.accent, display: "inline-flex", alignItems: "center", justifyContent: "center",
                    fontSize: 12, fontWeight: 800, color: "#fff", fontFamily: "'Outfit', sans-serif",
                }}>R</span>
                <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: 15, fontWeight: 700, color: t.text }}>
                    ishal
                </span>
            </div>

            <div style={{ fontSize: 11.5, color: t.text3, fontFamily: "'Outfit', sans-serif" }}>
                © 2025 Rishal · Flutter Developer · Kerala, India
            </div>

            <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
                {LINKS.map(({ Icon, label, url }) => (
                    <FootLink key={label} Icon={Icon} label={label} url={url} t={t} />
                ))}
            </div>
        </footer>
    );
}

function FootLink({ Icon, label, url, t }) {
    const [h, setH] = useState(false);
    return (
        <a href={url} target="_blank" rel="noreferrer"
            onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
            style={{
                display: "flex", alignItems: "center", gap: 5,
                fontSize: 12, color: h ? t.accent : t.text3,
                transition: "color 0.18s", textDecoration: "none",
                fontFamily: "'Outfit', sans-serif",
            }}>
            <Icon size={13} strokeWidth={2} color={h ? t.accent : t.text3} style={{ transition: "color 0.18s" }} />
            {label}
        </a>
    );
}