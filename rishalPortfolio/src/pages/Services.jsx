import { useState } from "react";
import {
    Smartphone, Globe, Monitor, ShoppingCart,
    Palette, Cloud, Rocket, Wrench, ArrowRight, MessageSquare,
} from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { useInView } from "../hooks/useInView";

const SERVICES = [
    {
        title: "Mobile App Development",
        subtitle: "Android & iOS",
        description: "I build apps that work on both Android phones and iPhones — from the idea stage all the way to launch. Whether it's a customer-facing app or an internal business tool, I make it fast, smooth, and easy to use.",
        icon: Smartphone,
        tags: ["Android", "iOS", "Flutter", "Cross-Platform"],
        color: "#42A5F5",
    },
    {
        title: "Web App Development",
        subtitle: "Dashboards & Business Tools",
        description: "Need a management dashboard, admin panel, or a custom web tool for your business? I build powerful web applications that run in any browser and work seamlessly across devices.",
        icon: Monitor,
        tags: ["Web Dashboard", "Admin Panel", "Flutter Web", "React"],
        color: "#66BB6A",
    },
    {
        title: "Website Development",
        subtitle: "Business Sites & Landing Pages",
        description: "From elegant business websites to high-converting landing pages — I create websites that look professional, load fast, and help people find and trust your business online.",
        icon: Globe,
        tags: ["Business Website", "Landing Page", "Portfolio", "Responsive"],
        color: "#AB47BC",
    },
    {
        title: "POS & Billing Systems",
        subtitle: "For Shops & Small Businesses",
        description: "Custom billing and point-of-sale apps built for shops, restaurants, and small businesses. Print receipts, track daily sales, manage inventory, and accept payments — all from your phone or tablet.",
        icon: ShoppingCart,
        tags: ["POS", "Billing", "Receipt Printing", "Inventory"],
        color: "#FFA726",
    },
    {
        title: "UI/UX Design",
        subtitle: "Beautiful & Intuitive Interfaces",
        description: "Great software should look great too. I design clean, modern interfaces with smooth animations that feel natural to use — so your customers enjoy the experience from the first tap.",
        icon: Palette,
        tags: ["UI Design", "UX", "Animations", "Responsive Layouts"],
        color: "#EC407A",
    },
    {
        title: "Backend & Cloud Services",
        subtitle: "Firebase, Database & APIs",
        description: "Every app needs a reliable brain behind it. I set up real-time databases, user login systems, push notifications, and connect everything with secure APIs — so your app works reliably around the clock.",
        icon: Cloud,
        tags: ["Firebase", "REST API", "Authentication", "Push Notifications"],
        color: "#29B6F6",
    },
    {
        title: "App Store Publishing",
        subtitle: "Play Store & App Store",
        description: "Getting your app live can be tricky. I handle the entire publishing process — from setting up developer accounts to passing store review guidelines — so your app reaches users without the hassle.",
        icon: Rocket,
        tags: ["Play Store", "App Store", "App Review", "Release Management"],
        color: "#7E57C2",
    },
    {
        title: "Maintenance & Support",
        subtitle: "Ongoing Updates & Fixes",
        description: "Launching is just the beginning. I provide ongoing support to fix bugs, add new features, update your app for new devices, and keep everything running smoothly as your business grows.",
        icon: Wrench,
        tags: ["Bug Fixes", "Feature Updates", "Performance", "Version Support"],
        color: "#EF5350",
    },
];

export default function Services() {
    const { t } = useTheme();
    const [ref, vis] = useInView(0.1);

    return (
        <section id="services" ref={ref} style={{
            background: t.bg,
            padding: "80px 20px",
            borderTop: `1px solid ${t.border}`,
        }}>
            <div style={{ maxWidth: 1200, margin: "0 auto" }}>

                {/* Section Header */}
                <div style={{
                    textAlign: "center",
                    marginBottom: "clamp(36px, 5vw, 60px)",
                    opacity: vis ? 1 : 0,
                    transform: vis ? "none" : "translateY(30px)",
                    transition: "all 0.75s cubic-bezier(0.16,1,0.3,1)",
                }}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginBottom: 14 }}>
                        <div style={{ width: 44, height: 1.5, background: `linear-gradient(90deg, transparent, ${t.accent})` }} />
                        <span style={{ fontFamily: "'Syne', sans-serif", fontSize: 10.5, color: t.accent, letterSpacing: 3.5, textTransform: "uppercase", fontWeight: 700 }}>Services</span>
                        <div style={{ width: 44, height: 1.5, background: `linear-gradient(90deg, ${t.accent}, transparent)` }} />
                    </div>

                    <h2 style={{
                        fontFamily: "'Syne', sans-serif",
                        fontSize: "clamp(32px, 5vw, 60px)", fontWeight: 800,
                        color: t.text, letterSpacing: "-0.035em", lineHeight: 1.05, marginBottom: 14,
                    }}>
                        What I can{" "}
                        <span style={{ color: t.accent, textShadow: `0 0 50px ${t.accent}44`, position: "relative" }}>
                            build for you
                            <span style={{
                                position: "absolute", bottom: -4, left: 0, right: 0, height: 3,
                                background: `linear-gradient(90deg, ${t.accent}cc, ${t.accent}44)`,
                                borderRadius: 2,
                                transform: vis ? "scaleX(1)" : "scaleX(0)",
                                transformOrigin: "left",
                                transition: "transform 0.8s cubic-bezier(0.16,1,0.3,1) 0.3s",
                                display: "block",
                            }} />
                        </span>
                    </h2>

                    <p style={{
                        color: t.text2, fontSize: "clamp(13px, 1.4vw, 15px)",
                        maxWidth: 480, margin: "0 auto", lineHeight: 1.75,
                    }}>
                        From mobile apps to full websites — I turn your ideas into real, working products that your customers will love.
                    </p>
                </div>

                {/* Services Grid */}
                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                    gap: "clamp(14px, 2.5vw, 22px)",
                    marginBottom: 40,
                }}>
                    {SERVICES.map((service, index) => (
                        <ServiceCard key={service.title} service={service} t={t} index={index} vis={vis} />
                    ))}
                </div>

                {/* CTA */}
                <div style={{
                    background: t.bgCard,
                    border: `1px solid ${t.border}`,
                    borderRadius: 20,
                    padding: "clamp(24px, 5vw, 40px)",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: 20,
                    flexWrap: "wrap",
                    opacity: vis ? 1 : 0,
                    transform: vis ? "translateY(0)" : "translateY(30px)",
                    transition: "all 0.8s ease 0.4s",
                }}>
                    <div>
                        <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(18px, 4vw, 24px)", fontWeight: 700, color: t.text, marginBottom: 8 }}>
                            Have a project in mind?
                        </h3>
                        <p style={{ color: t.text2, fontSize: "clamp(13px, 2vw, 15px)", lineHeight: 1.6 }}>
                            Let's talk about what you need — I'll help figure out the best way to build it.
                        </p>
                    </div>

                    <button
                        onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                        style={{
                            background: t.accent, color: "#fff", border: "none", borderRadius: 12,
                            padding: "13px 26px", fontSize: 14, fontWeight: 600, cursor: "pointer",
                            display: "flex", alignItems: "center", gap: 8,
                            fontFamily: "'Syne', sans-serif",
                            transition: "all 0.3s ease", whiteSpace: "nowrap",
                            boxShadow: `0 6px 24px ${t.accent}40`,
                        }}
                        onMouseEnter={e => { e.currentTarget.style.background = t.accentHover; e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = `0 12px 32px ${t.accent}50`; }}
                        onMouseLeave={e => { e.currentTarget.style.background = t.accent; e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = `0 6px 24px ${t.accent}40`; }}
                    >
                        <MessageSquare size={16} />
                        Let's Talk
                        <ArrowRight size={16} />
                    </button>
                </div>
            </div>
        </section>
    );
}

function ServiceCard({ service, t, index, vis }) {
    const [h, setH] = useState(false);
    const { icon: Icon, title, subtitle, description, tags, color } = service;

    return (
        <div
            onMouseEnter={() => setH(true)}
            onMouseLeave={() => setH(false)}
            style={{
                background: t.bgCard,
                border: `1px solid ${h ? color + "44" : t.border}`,
                borderRadius: 20,
                padding: "clamp(20px, 3.5vw, 28px)",
                transition: "all 0.35s cubic-bezier(0.16,1,0.3,1)",
                transform: vis ? (h ? "translateY(-7px)" : "none") : "translateY(30px)",
                boxShadow: h ? `0 20px 44px rgba(0,0,0,0.18), 0 0 0 1px ${color}22` : "none",
                opacity: vis ? 1 : 0,
                transitionDelay: `${index * 0.07}s`,
                position: "relative",
                overflow: "hidden",
                height: "100%",
                display: "flex",
                flexDirection: "column",
            }}
        >
            {/* Hover accent corner glow */}
            <div style={{
                position: "absolute", top: 0, right: 0,
                width: 80, height: 80,
                background: `radial-gradient(circle at top right, ${color}18 0%, transparent 70%)`,
                opacity: h ? 1 : 0,
                transition: "opacity 0.4s ease",
                pointerEvents: "none",
            }} />

            {/* Icon */}
            <div style={{
                width: 52, height: 52, borderRadius: 14,
                background: `${color}15`, border: `1.5px solid ${color}30`,
                display: "flex", alignItems: "center", justifyContent: "center",
                marginBottom: 16, color: color,
                transform: h ? "scale(1.1) rotate(-4deg)" : "none",
                transition: "all 0.35s cubic-bezier(0.16,1,0.3,1)",
                boxShadow: h ? `0 6px 20px ${color}30` : "none",
            }}>
                <Icon size={24} />
            </div>

            {/* Title */}
            <h3 style={{ fontSize: "clamp(15px, 3vw, 17px)", fontWeight: 700, color: t.text, marginBottom: 3, fontFamily: "'Syne', sans-serif", lineHeight: 1.25 }}>
                {title}
            </h3>
            <div style={{ fontSize: 11.5, color: color, fontWeight: 600, fontFamily: "'Syne', sans-serif", marginBottom: 10, opacity: 0.85 }}>
                {subtitle}
            </div>

            <p style={{ color: t.text2, fontSize: "clamp(12.5px, 2vw, 13.5px)", lineHeight: 1.65, marginBottom: 16, flex: 1 }}>
                {description}
            </p>

            {/* Tags */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {tags.map(tag => (
                    <span key={tag} style={{
                        padding: "4px 10px", background: t.bg,
                        border: `1px solid ${h ? color + "33" : t.border}`,
                        borderRadius: 6, fontSize: 11.5, color: h ? color : t.text2,
                        transition: "all 0.3s ease",
                    }}>
                        {tag}
                    </span>
                ))}
            </div>

            {/* Bottom accent line */}
            <div style={{
                position: "absolute", bottom: 0, left: 0, right: 0, height: 2.5,
                background: `linear-gradient(90deg, transparent, ${color}, transparent)`,
                opacity: h ? 1 : 0,
                transition: "opacity 0.35s ease",
                borderBottomLeftRadius: 20, borderBottomRightRadius: 20,
            }} />
        </div>
    );
}
