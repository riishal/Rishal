import { useState } from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Send, CheckCircle } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { useInView } from "../hooks/useInView";

const WhatsAppIcon = ({ size = 14, color = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
);

const SOCIALS = [
    { key: "github",   Icon: Github,   label: "GitHub",   handle: "@riishal",        url: "https://github.com/riishal" },
    { key: "linkedin", Icon: Linkedin, label: "LinkedIn", handle: "rishal-tt", url: "https://www.linkedin.com/in/rishal-tt-9bb017262" },
    { key: "whatsapp", IconCustom: WhatsAppIcon, label: "WhatsApp", handle: "+91 7592 895 143", url: "https://wa.me/917592895143", color: "#25D366" },
];

export default function Contact() {
    const { t, isDark } = useTheme();
    const [ref, vis] = useInView(0.07);
    const [form, setForm]       = useState({ name: "", email: "", subject: "", message: "" });
    const [focused, setFocused] = useState(null);
    const [sent, setSent]       = useState(false);

    const bg         = isDark ? t.contactBg : "#ffffff";
    const cardBg     = isDark ? t.bgCard    : "#ffffff";
    const cardBorder = isDark ? t.border2   : "rgba(0,0,0,0.09)";
    const inputBg    = isDark ? t.bgCard    : "#f9f9f9";
    const inputBgF   = isDark ? t.accentBg  : "rgba(34,197,94,0.06)";
    const rowBg      = isDark ? t.bgCard    : "#f5f5f5";
    const rowBgH     = isDark ? t.accentBg  : "rgba(34,197,94,0.07)";
    const rowBorder  = isDark ? t.border    : "rgba(0,0,0,0.08)";
    const rowBorderH = isDark ? t.accentBorder : "rgba(34,197,94,0.35)";
    const textMain   = isDark ? t.text      : "#0f0f0f";
    const textSub    = isDark ? t.text2     : "#444444";
    const textMuted  = isDark ? t.text3     : "#888888";
    const shadowCard = isDark ? t.shadowLg  : "0 4px 32px rgba(0,0,0,0.07)";

    const iStyle = (name) => ({
        width: "100%", padding: "12px 15px",
        background: focused === name ? inputBgF : inputBg,
        border: "1.5px solid " + (focused === name ? t.accent : (isDark ? t.border2 : "rgba(0,0,0,0.12)")),
        borderRadius: 10, color: textMain, fontSize: 13.5,
        fontFamily: "'Syne', sans-serif", outline: "none",
        transition: "all 0.22s", caretColor: t.accent,
        boxShadow: focused === name ? "0 0 0 3px rgba(34,197,94,0.10)" : "none",
    });

    const submit = () => {
        if (!form.name || !form.email || !form.message) return;
        const s = encodeURIComponent(form.subject || ("Inquiry from " + form.name));
        const b = encodeURIComponent("Name: " + form.name + "\nEmail: " + form.email + "\n\n" + form.message);
        window.open("mailto:riishaltt@gmail.com?subject=" + s + "&body=" + b);
        setSent(true);
        setForm({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setSent(false), 3500);
    };

    return (
        <section id="contact" ref={ref} style={{
            background: bg,
            borderTop: "1px solid " + (isDark ? t.border : "rgba(0,0,0,0.07)"),
            padding: "96px clamp(20px, 6vw, 96px)",
            position: "relative", overflow: "hidden",
        }}>
            <div style={{ position: "absolute", top: -100, right: -100, width: 420, height: 420, borderRadius: "50%", background: "radial-gradient(circle, " + t.accent + (isDark ? "08" : "07") + " 0%, transparent 70%)", pointerEvents: "none" }} />
            <div style={{ position: "absolute", bottom: -120, left: -80, width: 360, height: 360, borderRadius: "50%", border: "1px solid " + (isDark ? t.border : "rgba(0,0,0,0.06)"), opacity: 0.3, pointerEvents: "none" }} />

            <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative", zIndex: 1 }}>

                {/* Section Header — unified */}
                <div style={{ textAlign: "center", marginBottom: "clamp(36px, 5vw, 56px)", opacity: vis ? 1 : 0, transform: vis ? "none" : "translateY(16px)", transition: "all 0.75s cubic-bezier(0.16,1,0.3,1)" }}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginBottom: 14 }}>
                        <div style={{ width: 44, height: 1.5, background: "linear-gradient(90deg, transparent, " + t.accent + ")" }} />
                        <span style={{ fontFamily: "'Syne', sans-serif", fontSize: 10.5, color: t.accent, letterSpacing: 3.5, textTransform: "uppercase", fontWeight: 700 }}>Contact</span>
                        <div style={{ width: 44, height: 1.5, background: "linear-gradient(90deg, " + t.accent + ", transparent)" }} />
                    </div>
                    <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(32px, 5vw, 60px)", fontWeight: 800, color: textMain, letterSpacing: "-0.035em", lineHeight: 1.05, marginBottom: 14 }}>
                        Let's build{" "}
                        <span style={{ color: t.accent, textShadow: "0 0 50px " + t.accent + "44", position: "relative" }}>
                            together.
                            <span style={{ position: "absolute", bottom: -4, left: 0, right: 0, height: 3, background: "linear-gradient(90deg, " + t.accent + "cc, " + t.accent + "44)", borderRadius: 2, transform: vis ? "scaleX(1)" : "scaleX(0)", transformOrigin: "left", transition: "transform 0.8s cubic-bezier(0.16,1,0.3,1) 0.3s", display: "block" }} />
                        </span>
                    </h2>
                    <p style={{ color: textSub, fontSize: "clamp(13px, 1.4vw, 15px)", maxWidth: 420, margin: "0 auto", lineHeight: 1.75 }}>
                        Need a mobile app from scratch, want to scale an existing product, or looking for Firebase &amp; REST API expertise? Let's talk.
                    </p>
                </div>

                {/* Grid */}
                <div className="contact-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1.45fr", gap: "clamp(28px, 5vw, 72px)" }}>

                    {/* LEFT */}
                    <div style={{ opacity: vis ? 1 : 0, transform: vis ? "none" : "translateX(-24px)", transition: "opacity 0.65s ease 0.2s, transform 0.65s ease 0.2s" }}>
                        <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 24 }}>
                            {[
                                { Icon: Mail,   val: "riishaltt@gmail.com", href: "mailto:riishaltt@gmail.com" },
                                { Icon: Phone,  val: "+91 7592 895 143",    href: "tel:+917592895143" },
                                { Icon: MapPin, val: "Kerala, India",        href: null },
                            ].map(({ Icon, val, href }) => (
                                <ContactRow key={val} Icon={Icon} val={val} href={href} accent={t.accent} accentBg={rowBgH} accentBorder={rowBorderH} rowBg={rowBg} rowBorder={rowBorder} textSub={textSub} />
                            ))}
                        </div>
                        <div style={{ height: 1, background: isDark ? t.border : "rgba(0,0,0,0.07)", marginBottom: 20 }} />
                        <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
                            {SOCIALS.map(s => (
                                <SocialRow key={s.key} s={s} accent={t.accent} accentBg={rowBgH} accentBorder={rowBorderH} rowBg={rowBg} rowBorder={rowBorder} textMain={textMain} textMuted={textMuted} />
                            ))}
                        </div>
                    </div>

                    {/* RIGHT */}
                    <div style={{ opacity: vis ? 1 : 0, transform: vis ? "none" : "translateX(24px)", transition: "opacity 0.65s ease 0.25s, transform 0.65s ease 0.25s" }}>
                        <div style={{ background: cardBg, border: "1px solid " + cardBorder, borderRadius: 20, padding: "clamp(22px, 4vw, 36px)", boxShadow: shadowCard, position: "relative", overflow: "hidden" }}>
                            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2.5, background: "linear-gradient(90deg, transparent, " + t.accent + ", transparent)" }} />
                            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 26 }}>
                                <div style={{ width: 36, height: 36, borderRadius: 10, flexShrink: 0, background: "rgba(34,197,94,0.10)", border: "1px solid rgba(34,197,94,0.22)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                    <Send size={15} color={t.accent} strokeWidth={2} />
                                </div>
                                <div>
                                    <div style={{ fontFamily: "'Syne', sans-serif", fontSize: 14, fontWeight: 700, color: textMain }}>Send a message</div>
                                    <div style={{ fontSize: 11, color: textMuted, marginTop: 2 }}>I'll reply within 24 hours</div>
                                </div>
                            </div>

                            {sent && (
                                <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "11px 14px", marginBottom: 16, background: "rgba(34,197,94,0.10)", border: "1px solid rgba(34,197,94,0.28)", borderRadius: 10, animation: "fadeIn 0.3s ease" }}>
                                    <CheckCircle size={15} color="#22c55e" strokeWidth={2.5} />
                                    <span style={{ color: "#22c55e", fontSize: 13, fontWeight: 600, fontFamily: "'Syne', sans-serif" }}>Message sent! Fields cleared ✓</span>
                                </div>
                            )}

                            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                                <div className="form-row" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                                    {[
                                        { k: "name",  label: "Your Name", type: "text",  ph: "John Doe" },
                                        { k: "email", label: "Email",     type: "email", ph: "hello@example.com" },
                                    ].map(({ k, label, type, ph }) => (
                                        <div key={k}>
                                            <label style={labelStyle(textMuted)}>{label}</label>
                                            <input type={type} placeholder={ph} value={form[k]} onChange={e => setForm({ ...form, [k]: e.target.value })} onFocus={() => setFocused(k)} onBlur={() => setFocused(null)} style={iStyle(k)} />
                                        </div>
                                    ))}
                                </div>
                                <div>
                                    <label style={labelStyle(textMuted)}>Subject</label>
                                    <input type="text" placeholder="Project inquiry / Collaboration..." value={form.subject} onChange={e => setForm({ ...form, subject: e.target.value })} onFocus={() => setFocused("subject")} onBlur={() => setFocused(null)} style={iStyle("subject")} />
                                </div>
                                <div>
                                    <label style={labelStyle(textMuted)}>Message</label>
                                    <textarea rows={5} placeholder="Tell me about your project..." value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} onFocus={() => setFocused("message")} onBlur={() => setFocused(null)} style={{ ...iStyle("message"), resize: "vertical", minHeight: 120 }} />
                                </div>
                                <div style={{ display: "flex", gap: 10 }}>
                                    <button onClick={submit} style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 8, padding: "13px 16px", fontSize: 13.5, fontWeight: 700, cursor: "pointer", background: "linear-gradient(135deg, " + t.accent + " 0%, #16a34a 100%)", color: "#fff", border: "none", borderRadius: 11, fontFamily: "'Syne', sans-serif", letterSpacing: "0.3px", transition: "all 0.25s cubic-bezier(0.16,1,0.3,1)", boxShadow: "0 4px 18px rgba(34,197,94,0.35)" }}
                                        onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 28px rgba(34,197,94,0.50)"; }}
                                        onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "0 4px 18px rgba(34,197,94,0.35)"; }}>
                                        <Send size={15} strokeWidth={2} /> Send Message
                                    </button>
                                    <a href="https://wa.me/917592895143" target="_blank" rel="noreferrer" title="Chat on WhatsApp"
                                        style={{ flexShrink: 0, width: 48, height: 48, display: "flex", alignItems: "center", justifyContent: "center", background: "#25D366", border: "none", borderRadius: 11, textDecoration: "none", transition: "all 0.22s cubic-bezier(0.16,1,0.3,1)", boxShadow: "0 4px 14px rgba(37,211,102,0.35)" }}
                                        onMouseEnter={e => { e.currentTarget.style.background = "#1ab855"; e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 22px rgba(37,211,102,0.50)"; }}
                                        onMouseLeave={e => { e.currentTarget.style.background = "#25D366"; e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "0 4px 14px rgba(37,211,102,0.35)"; }}>
                                        <WhatsAppIcon size={20} color="#ffffff" />
                                    </a>
                                </div>
                                <p style={{ fontSize: 10.5, color: textMuted, textAlign: "center", marginTop: -4 }}>Name, email &amp; message are required</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style>{"\n@keyframes fadeIn { from { opacity:0; transform:translateY(-4px); } to { opacity:1; transform:none; } }\n@media (max-width: 768px) { .contact-grid { grid-template-columns: 1fr !important; } }\n@media (max-width: 480px) { .form-row { grid-template-columns: 1fr !important; } }\n"}</style>
        </section>
    );
}

function labelStyle(color) {
    return { display: "block", fontSize: 9.5, color, letterSpacing: 1.3, textTransform: "uppercase", marginBottom: 6, fontWeight: 700, fontFamily: "'Syne', sans-serif" };
}

function ContactRow({ Icon, val, href, accent, accentBg, accentBorder, rowBg, rowBorder, textSub }) {
    const [h, setH] = useState(false);
    return (
        <div onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)} style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 14px", background: h ? accentBg : rowBg, border: "1px solid " + (h ? accentBorder : rowBorder), borderRadius: 10, transition: "all 0.22s cubic-bezier(0.16,1,0.3,1)", transform: h ? "translateX(4px)" : "none", cursor: href ? "pointer" : "default" }}>
            <div style={{ width: 30, height: 30, borderRadius: 8, flexShrink: 0, background: "rgba(34,197,94,0.10)", border: "1px solid rgba(34,197,94,0.20)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Icon size={13} color={accent} strokeWidth={1.8} />
            </div>
            {href
                ? <a href={href} style={{ color: textSub, fontSize: 13, fontWeight: 500, textDecoration: "none" }} onMouseEnter={e => { e.currentTarget.style.color = accent; }} onMouseLeave={e => { e.currentTarget.style.color = textSub; }}>{val}</a>
                : <span style={{ color: textSub, fontSize: 13, fontWeight: 500 }}>{val}</span>
            }
        </div>
    );
}

function SocialRow({ s, accent, accentBg, accentBorder, rowBg, rowBorder, textMain, textMuted }) {
    const [h, setH] = useState(false);
    const { Icon, IconCustom } = s;
    const isWa = s.key === "whatsapp";
    const iconColor   = isWa ? s.color : accent;
    const hoverBg     = isWa ? "rgba(37,211,102,0.10)" : accentBg;
    const hoverBorder = isWa ? "rgba(37,211,102,0.30)" : accentBorder;
    const iconBoxBg   = isWa ? "rgba(37,211,102,0.10)" : "rgba(34,197,94,0.10)";
    const iconBoxBord = isWa ? "rgba(37,211,102,0.22)" : "rgba(34,197,94,0.20)";
    return (
        <a href={s.url} target="_blank" rel="noreferrer" onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
            style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 14px", background: h ? hoverBg : rowBg, border: "1px solid " + (h ? hoverBorder : rowBorder), borderRadius: 10, textDecoration: "none", transition: "all 0.22s cubic-bezier(0.16,1,0.3,1)", transform: h ? "translateX(4px)" : "none" }}>
            <div style={{ width: 30, height: 30, borderRadius: 8, flexShrink: 0, background: iconBoxBg, border: "1px solid " + iconBoxBord, display: "flex", alignItems: "center", justifyContent: "center" }}>
                {IconCustom ? <IconCustom size={13} color={iconColor} /> : <Icon size={13} color={iconColor} strokeWidth={2} />}
            </div>
            <div style={{ flex: 1 }}>
                <div style={{ fontSize: 12.5, fontWeight: 600, color: textMain, fontFamily: "'Syne', sans-serif" }}>{s.label}</div>
                <div style={{ fontSize: 10.5, color: textMuted, marginTop: 1 }}>{s.handle}</div>
            </div>
            <span style={{ fontSize: 13, color: h ? (isWa ? s.color : accent) : textMuted, transition: "color 0.2s, transform 0.2s", transform: h ? "translate(2px,-2px)" : "none" }}>↗</span>
        </a>
    );
}