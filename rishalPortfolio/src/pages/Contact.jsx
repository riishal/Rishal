import { useState } from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Globe, Send, CheckCircle } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { useInView } from "../hooks/useInView";

const SOCIALS = [
    { Icon: Github, label: "GitHub", handle: "@riishal", url: "https://github.com/riishal" },
    { Icon: Linkedin, label: "LinkedIn", handle: "rishal-muhammed", url: "https://www.linkedin.com/in/rishal-muhammed-9bb017262" },
    { Icon: Globe, label: "Portfolio", handle: "rishal-51207.web.app", url: "https://rishal-51207.web.app/" },
];

export default function Contact() {
    const { t } = useTheme();
    const [ref, vis] = useInView(0.07);
    const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
    const [focused, setFocused] = useState(null);
    const [sent, setSent] = useState(false);

    const submit = () => {
        if (!form.name || !form.email || !form.message) return;
        const s = encodeURIComponent(form.subject || `Inquiry from ${form.name}`);
        const b = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
        window.open(`mailto:riishaltt@gmail.com?subject=${s}&body=${b}`);
        setSent(true);
        setTimeout(() => setSent(false), 3500);
    };

    const iStyle = (name) => ({
        width: "100%", padding: "11px 14px",
        background: focused === name ? t.accentBg : t.bgCard,
        border: `1.5px solid ${focused === name ? t.accent : t.border2}`,
        borderRadius: 8, color: t.text, fontSize: 13.5,
        fontFamily: "'Syne', sans-serif", outline: "none",
        transition: "all 0.22s", caretColor: t.accent,
        boxShadow: focused === name ? `0 0 0 3px ${t.accentBg}` : "none",
    });

    return (
        <section id="contact" ref={ref} style={{
            background: t.contactBg, borderTop: `1px solid ${t.border}`,
            padding: "96px clamp(24px, 6vw, 96px)",
            position: "relative", overflow: "hidden",
        }}>
            {/* Decorative circles */}
            <div style={{
                position: "absolute", top: -80, right: -80, width: 300, height: 300,
                borderRadius: "50%", border: `1px solid ${t.accentBorder}`, opacity: 0.2,
                pointerEvents: "none",
            }} />
            <div style={{
                position: "absolute", bottom: -100, left: -100, width: 380, height: 380,
                borderRadius: "50%", border: `1px solid ${t.border}`, opacity: 0.25,
                pointerEvents: "none",
            }} />

            <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative", zIndex: 1 }}>
                {/* Eyebrow */}
                <div style={{
                    display: "flex", alignItems: "center", gap: 10, marginBottom: 10,
                    opacity: vis ? 1 : 0, transition: "opacity 0.5s ease",
                }}>
                    <div style={{ width: 18, height: 1.5, background: t.accent }} />
                    <span style={{
                        fontFamily: "'Syne', sans-serif", fontSize: 10.5,
                        color: t.accent, letterSpacing: 2.5, textTransform: "uppercase", fontWeight: 700,
                    }}>Contact</span>
                </div>

                <div className="contact-layout" style={{ display: "flex", gap: "clamp(28px, 6vw, 72px)", flexWrap: "wrap" }}>
                    {/* Left */}
                    <div style={{
                        flex: "0 1 320px",
                        opacity: vis ? 1 : 0,
                        transform: vis ? "none" : "translateX(-20px)",
                        transition: "opacity 0.65s ease 0.1s, transform 0.65s ease 0.1s",
                    }}>
                        <h2 style={{
                            fontFamily: "'Syne', sans-serif",
                            fontSize: "clamp(26px, 4vw, 48px)", fontWeight: 800,
                            letterSpacing: "-0.03em", lineHeight: 1.0, marginBottom: 14, color: t.text,
                        }}>
                            Let's build<br />
                            <span style={{ color: t.accent }}>together.</span>
                        </h2>
                        <p style={{ color: t.text2, fontSize: 14, lineHeight: 1.82, marginBottom: 28 }}>
                            Need a mobile app from scratch, want to scale an existing product, or looking for Firebase & REST API expertise? Let's talk.
                        </p>

                        {/* Contact info */}
                        <div style={{ display: "flex", flexDirection: "column", gap: 7, marginBottom: 22 }}>
                            {[
                                { Icon: Mail, val: "riishaltt@gmail.com", href: "mailto:riishaltt@gmail.com" },
                                { Icon: Phone, val: "+91 7592 895 143", href: "tel:+917592895143" },
                                { Icon: MapPin, val: "Kerala, India", href: null },
                            ].map(({ Icon, val, href }) => (
                                <ContactRow key={val} Icon={Icon} val={val} href={href} t={t} />
                            ))}
                        </div>

                        {/* Socials */}
                        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                            {SOCIALS.map(s => (
                                <SocialRow key={s.label} s={s} t={t} />
                            ))}
                        </div>
                    </div>

                    {/* Right: Form */}
                    <div style={{
                        flex: 1, minWidth: "min(100%, 260px)",
                        opacity: vis ? 1 : 0,
                        transform: vis ? "none" : "translateX(20px)",
                        transition: "opacity 0.65s ease 0.16s, transform 0.65s ease 0.16s",
                    }}>
                        <div style={{
                            background: t.bgCard, border: `1px solid ${t.border2}`,
                            borderRadius: 16, padding: "clamp(20px, 4vw, 32px)",
                            boxShadow: t.shadowLg, position: "relative", overflow: "hidden",
                        }}>
                            {/* top accent bar */}
                            <div style={{
                                position: "absolute", top: 0, left: 0, right: 0, height: 2,
                                background: `linear-gradient(90deg, transparent, ${t.accent}, transparent)`,
                            }} />

                            <div style={{
                                fontSize: 10.5, color: t.accent, letterSpacing: 1.5,
                                textTransform: "uppercase", marginBottom: 20,
                                display: "flex", alignItems: "center", gap: 7,
                                fontFamily: "'Syne', sans-serif", fontWeight: 700,
                            }}>
                                <Send size={12} color={t.accent} strokeWidth={2} />
                                Send a message
                            </div>

                            <div style={{ display: "flex", flexDirection: "column", gap: 13 }}>
                                <div className="form-row" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                                    {[
                                        { k: "name", label: "Name", type: "text", ph: "John Doe" },
                                        { k: "email", label: "Email", type: "email", ph: "hello@example.com" },
                                    ].map(({ k, label, type, ph }) => (
                                        <div key={k}>
                                            <label style={{
                                                display: "block", fontSize: 9.5, color: t.text3,
                                                letterSpacing: 1.2, textTransform: "uppercase", marginBottom: 5, fontWeight: 700,
                                                fontFamily: "'Syne', sans-serif",
                                            }}>{label}</label>
                                            <input type={type} placeholder={ph} value={form[k]}
                                                onChange={e => setForm({ ...form, [k]: e.target.value })}
                                                onFocus={() => setFocused(k)} onBlur={() => setFocused(null)}
                                                style={iStyle(k)}
                                            />
                                        </div>
                                    ))}
                                </div>
                                <div>
                                    <label style={{
                                        display: "block", fontSize: 9.5, color: t.text3,
                                        letterSpacing: 1.2, textTransform: "uppercase", marginBottom: 5, fontWeight: 700,
                                        fontFamily: "'Syne', sans-serif",
                                    }}>Subject</label>
                                    <input type="text" placeholder="Project inquiry / Collaboration..."
                                        value={form.subject} onChange={e => setForm({ ...form, subject: e.target.value })}
                                        onFocus={() => setFocused("subject")} onBlur={() => setFocused(null)}
                                        style={iStyle("subject")}
                                    />
                                </div>
                                <div>
                                    <label style={{
                                        display: "block", fontSize: 9.5, color: t.text3,
                                        letterSpacing: 1.2, textTransform: "uppercase", marginBottom: 5, fontWeight: 700,
                                        fontFamily: "'Syne', sans-serif",
                                    }}>Message</label>
                                    <textarea rows={5} placeholder="Tell me about your project..."
                                        value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                                        onFocus={() => setFocused("message")} onBlur={() => setFocused(null)}
                                        style={{ ...iStyle("message"), resize: "vertical", minHeight: 110 }}
                                    />
                                </div>
                                <button onClick={submit} style={{
                                    width: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                                    padding: "13px", fontSize: 13.5, fontWeight: 700, cursor: "pointer",
                                    background: sent ? "#10b981" : t.accent,
                                    color: "#fff", border: "none", borderRadius: 9,
                                    transition: "all 0.2s", fontFamily: "'Syne', sans-serif",
                                    letterSpacing: "0.3px",
                                }}
                                    onMouseEnter={e => { if (!sent) { e.currentTarget.style.background = t.accentHover; e.currentTarget.style.transform = "translateY(-2px)"; } }}
                                    onMouseLeave={e => { e.currentTarget.style.background = sent ? "#10b981" : t.accent; e.currentTarget.style.transform = "none"; }}
                                >
                                    {sent
                                        ? <><CheckCircle size={16} strokeWidth={2.5} />Message Sent!</>
                                        : <><Send size={15} strokeWidth={2} />Send Message</>
                                    }
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
        @media (max-width: 560px) {
          .form-row { grid-template-columns: 1fr !important; }
          .contact-layout { flex-direction: column !important; }
        }
      `}</style>
        </section>
    );
}

function ContactRow({ Icon, val, href, t }) {
    const [h, setH] = useState(false);
    return (
        <div onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)} style={{
            display: "flex", alignItems: "center", gap: 11,
            padding: "9px 12px", background: h ? t.accentBg : t.bgCard,
            border: `1px solid ${h ? t.accentBorder : t.border}`,
            borderRadius: 8, transition: "all 0.2s",
            transform: h ? "translateX(3px)" : "none",
        }}>
            <Icon size={13} color={t.accent} strokeWidth={1.8} style={{ flexShrink: 0 }} />
            {href
                ? <a href={href} style={{ color: t.text2, fontSize: 13, fontWeight: 500, textDecoration: "none" }}
                    onMouseEnter={e => { e.currentTarget.style.color = t.accent; }}
                    onMouseLeave={e => { e.currentTarget.style.color = t.text2; }}
                >{val}</a>
                : <span style={{ color: t.text2, fontSize: 13, fontWeight: 500 }}>{val}</span>
            }
        </div>
    );
}

function SocialRow({ s, t }) {
    const [h, setH] = useState(false);
    const { Icon } = s;
    return (
        <a href={s.url} target="_blank" rel="noreferrer"
            onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
            style={{
                display: "flex", alignItems: "center", gap: 10,
                padding: "9px 12px", background: h ? t.accentBg : t.bgCard,
                border: `1px solid ${h ? t.accentBorder : t.border}`,
                borderRadius: 8, textDecoration: "none",
                transition: "all 0.2s",
                transform: h ? "translateX(3px)" : "none",
            }}
        >
            <div style={{
                width: 28, height: 28, borderRadius: 7,
                background: t.accentBg, border: `1px solid ${t.accentBorder}`,
                display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
            }}>
                <Icon size={13} color={t.accent} strokeWidth={2} />
            </div>
            <div>
                <div style={{ fontSize: 12.5, fontWeight: 600, color: t.text, fontFamily: "'Syne', sans-serif" }}>{s.label}</div>
                <div style={{ fontSize: 10.5, color: t.text3 }}>{s.handle}</div>
            </div>
        </a>
    );
}