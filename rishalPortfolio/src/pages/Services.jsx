// Services.jsx
import { useState } from "react";
import { 
    Smartphone, Cloud, Zap, UploadCloud, 
    Palette, Puzzle, Shield, MessageSquare,
    ArrowRight
} from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { useInView } from "../hooks/useInView";

const SERVICES = [
    {
        title: "Flutter App Development",
        description: "End-to-end cross-platform apps with clean architecture and exceptional performance on Android & iOS.",
        icon: Smartphone,
        tags: ["Flutter", "Dart", "GetX", "BLoC"],
        color: "#42A5F5"
    },
    {
        title: "Firebase Integration",
        description: "Complete backend solutions with Authentication, Firestore, Cloud Functions, and push notifications.",
        icon: Cloud,
        tags: ["Firebase Auth", "Firestore", "FCM", "Functions"],
        color: "#FFA726"
    },
    {
        title: "API Development",
        description: "Seamless REST API integration with robust error handling, caching, and JWT authentication.",
        icon: Zap,
        tags: ["REST APIs", "Dio", "JWT", "GraphQL"],
        color: "#66BB6A"
    },
    {
        title: "App Deployment",
        description: "Complete Play Store & App Store release management with CI/CD pipeline setup.",
        icon: UploadCloud,
        tags: ["Play Store", "App Store", "CI/CD", "TestFlight"],
        color: "#AB47BC"
    },
    {
        title: "UI/UX Implementation",
        description: "Pixel-perfect implementation of designs with custom animations and responsive layouts.",
        icon: Palette,
        tags: ["Material 3", "Cupertino", "Animations", "Responsive"],
        color: "#EC407A"
    },
    {
        title: "Third-party Integration",
        description: "Integration of payment gateways, maps, local databases, and various SDKs.",
        icon: Puzzle,
        tags: ["Payments", "Maps", "Hive", "SQLite"],
        color: "#7E57C2"
    },
    {
        title: "Security & Performance",
        description: "Implementation of security best practices and performance optimization techniques.",
        icon: Shield,
        tags: ["SSL Pinning", "Optimization", "Testing", "Security"],
        color: "#EF5350"
    }
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
            <div style={{
                maxWidth: 1200,
                margin: "0 auto",
            }}>
                
                {/* Section Header - Responsive */}
                <div style={{
                    maxWidth: 600,
                    marginBottom: 40,
                    opacity: vis ? 1 : 0,
                    transform: vis ? "translateY(0)" : "translateY(30px)",
                    transition: "all 0.8s ease",
                }}>
                    <span style={{
                        color: t.accent,
                        fontSize: "clamp(12px, 3vw, 14px)",
                        fontWeight: 600,
                        letterSpacing: 2,
                        textTransform: "uppercase",
                        fontFamily: "'Syne', sans-serif",
                    }}>
                        Services
                    </span>
                    <h2 style={{
                        fontFamily: "'Syne', sans-serif",
                        fontSize: "clamp(28px, 8vw, 56px)",
                        fontWeight: 800,
                        lineHeight: 1.1,
                        color: t.text,
                        marginTop: 12,
                    }}>
                        What I can do
                        <span style={{ color: t.accent, display: "block" }}>
                            for your project
                        </span>
                    </h2>
                    <p style={{
                        color: t.text2,
                        fontSize: "clamp(14px, 3vw, 16px)",
                        lineHeight: 1.7,
                        marginTop: 16,
                    }}>
                        Comprehensive Flutter development services with expertise in Firebase, 
                        REST APIs, and production-ready applications.
                    </p>
                </div>

                {/* Services Grid - Fully Responsive */}
                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                    gap: "clamp(16px, 3vw, 24px)",
                    marginBottom: 40,
                }}>
                    {SERVICES.map((service, index) => (
                        <ServiceCard 
                            key={service.title} 
                            service={service} 
                            t={t} 
                            index={index}
                            vis={vis}
                        />
                    ))}
                </div>

                {/* CTA Section - Responsive */}
                <div style={{
                    background: t.bgCard,
                    border: `1px solid ${t.border}`,
                    borderRadius: 20,
                    padding: "clamp(24px, 5vw, 40px)",
                    display: "flex",
                    flexDirection: window.innerWidth <= 768 ? "column" : "row",
                    justifyContent: "space-between",
                    alignItems: window.innerWidth <= 768 ? "stretch" : "center",
                    gap: 20,
                    opacity: vis ? 1 : 0,
                    transform: vis ? "translateY(0)" : "translateY(30px)",
                    transition: "all 0.8s ease 0.4s",
                }}>
                    <div style={{
                        textAlign: window.innerWidth <= 768 ? "center" : "left",
                    }}>
                        <h3 style={{
                            fontFamily: "'Syne', sans-serif",
                            fontSize: "clamp(20px, 5vw, 24px)",
                            fontWeight: 700,
                            color: t.text,
                            marginBottom: 8,
                        }}>
                            Ready to start your project?
                        </h3>
                        <p style={{
                            color: t.text2,
                            fontSize: "clamp(13px, 3vw, 15px)",
                            lineHeight: 1.6,
                        }}>
                            Let's discuss how I can help bring your ideas to life with Flutter.
                        </p>
                    </div>
                    
                    <button
                        onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                        style={{
                            background: t.accent,
                            color: "#fff",
                            border: "none",
                            borderRadius: 12,
                            padding: "12px 24px",
                            fontSize: "clamp(14px, 3vw, 15px)",
                            fontWeight: 600,
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: 8,
                            fontFamily: "'Syne', sans-serif",
                            transition: "all 0.3s ease",
                            width: window.innerWidth <= 480 ? "100%" : "auto",
                        }}
                        onMouseEnter={e => {
                            e.currentTarget.style.background = t.accentHover;
                            e.currentTarget.style.transform = "translateY(-2px)";
                            e.currentTarget.style.boxShadow = `0 12px 24px ${t.accent}40`;
                        }}
                        onMouseLeave={e => {
                            e.currentTarget.style.background = t.accent;
                            e.currentTarget.style.transform = "none";
                            e.currentTarget.style.boxShadow = "none";
                        }}
                    >
                        <MessageSquare size={18} />
                        Let's Talk
                        <ArrowRight size={18} />
                    </button>
                </div>
            </div>
        </section>
    );
}

function ServiceCard({ service, t, index, vis }) {
    const [h, setH] = useState(false);
    const { icon: Icon, title, description, tags, color } = service;
    
    return (
        <div
            onMouseEnter={() => setH(true)}
            onMouseLeave={() => setH(false)}
            style={{
                background: t.bgCard,
                border: `1px solid ${h ? t.accentBorder : t.border}`,
                borderRadius: 20,
                padding: "clamp(20px, 4vw, 28px)",
                transition: "all 0.3s ease",
                transform: h ? "translateY(-8px)" : "none",
                boxShadow: h ? `0 24px 48px ${t.shadowColor || 'rgba(0,0,0,0.1)'}` : "none",
                opacity: vis ? 1 : 0,
                transform: vis ? (h ? "translateY(-8px)" : "none") : "translateY(30px)",
                transition: "opacity 0.8s ease, transform 0.3s ease, box-shadow 0.3s ease",
                transitionDelay: `${index * 0.1}s`,
                position: "relative",
                overflow: "hidden",
                height: "100%",
                display: "flex",
                flexDirection: "column",
            }}
        >
            {/* Icon */}
            <div style={{
                width: "clamp(48px, 10vw, 56px)",
                height: "clamp(48px, 10vw, 56px)",
                borderRadius: 16,
                background: `${color}15`,
                border: `2px solid ${color}30`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 16,
                color: color,
                transition: "all 0.3s ease",
                transform: h ? "scale(1.1) rotate(-5deg)" : "none",
            }}>
                <Icon size={window.innerWidth <= 480 ? 20 : 26} />
            </div>

            {/* Content */}
            <h3 style={{
                fontSize: "clamp(16px, 4vw, 18px)",
                fontWeight: 700,
                color: t.text,
                marginBottom: 8,
                fontFamily: "'Syne', sans-serif",
                lineHeight: 1.3,
            }}>
                {title}
            </h3>
            
            <p style={{
                color: t.text2,
                fontSize: "clamp(13px, 3vw, 14px)",
                lineHeight: 1.6,
                marginBottom: 16,
                flex: 1,
            }}>
                {description}
            </p>

            {/* Tags - Responsive */}
            <div style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 6,
            }}>
                {tags.map(tag => (
                    <span
                        key={tag}
                        style={{
                            padding: "4px 8px",
                            background: t.bg,
                            border: `1px solid ${t.border}`,
                            borderRadius: 6,
                            fontSize: "clamp(11px, 2.5vw, 12px)",
                            color: t.text2,
                        }}
                    >
                        {tag}
                    </span>
                ))}
            </div>

            {/* Hover Indicator */}
            <div style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: 3,
                background: `linear-gradient(90deg, transparent, ${color}, transparent)`,
                opacity: h ? 1 : 0,
                transition: "opacity 0.3s ease",
                borderBottomLeftRadius: 20,
                borderBottomRightRadius: 20,
            }} />
        </div>
    );
}