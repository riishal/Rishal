// About.jsx
import { useState } from "react";
import {
    Rocket, Laptop, Code2, GraduationCap,
    Download, ExternalLink, ChevronRight,
    Briefcase, Award, Calendar, MapPin
} from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { useInView } from "../hooks/useInView";
import aboutImg from "../assets/about.jpg";

const SKILLS = [
    { cat: "Mobile Development", items: ["Flutter", "Dart", "GetX", "Provider", "BLoC", "Riverpod"] },
    { cat: "Backend & Database", items: ["Firebase Auth", "Firestore", "Realtime DB", "Hive", "SQLite"] },
    { cat: "API & Integrations", items: ["REST APIs", "Dio", "FCM", "Payment Gateway", "Maps SDK", "PDF Gen"] },
    { cat: "DevOps & Tools", items: ["Git & GitHub", "Play Store", "App Signing", "CI/CD", "Android Studio"] },
];

const EXP = [
    {
        role: "Flutter Developer",
        co: "EBSOR Infosystems",
        sub: "Full-time · Remote",
        period: "May 2025 – Present",
        Icon: Rocket,
        pts: [
            "Built ECSO Logistics App — live on Google Play Store",
            "Developed Inspec QC & production monitoring application",
            "Role-based access control with JWT authentication",
            "PDF invoice generation & real-time WebSocket tracking",
            "40% load time improvement via performance optimization",
        ],
    },
    {
        role: "Flutter Developer",
        co: "Freelance",
        sub: "Remote · Multiple Clients",
        period: "Feb 2024 – Apr 2025",
        Icon: Laptop,
        pts: [
            "Leads Management CRM — sales pipeline & follow-up automation",
            "Site Diary app for construction project documentation",
            "Firebase-backed business automation solutions",
        ],
    },
    {
        role: "Software Developer",
        co: "XpertConsortium Technologies LLP",
        sub: "Full-time · On-site",
        period: "May 2023 – Jan 2024",
        Icon: Code2,
        pts: [
            "Learn Easy e-learning app with video, PDF & quiz modules",
            "REST API integrations with Flutter & Firebase backend",
        ],
    },
    {
        role: "Flutter Intern",
        co: "Edapt",
        sub: "Internship · On-site",
        period: "Sep 2022 – Mar 2023",
        Icon: GraduationCap,
        pts: [
            "Developed quiz app and e-commerce mobile application",
            "Hands-on with Dart, Firebase Auth, and REST APIs",
        ],
    },
];

export default function About() {
    const { t } = useTheme();
    const [ref, vis] = useInView(0.1);

    return (
        <section id="about" ref={ref} style={{
            background: t.bg,
            padding: "80px 20px",
        }}>
            <div style={{
                maxWidth: 1200,
                margin: "0 auto",
            }}>

                {/* Section Header */}
                <div style={{
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
                        About Me
                    </span>
                    <h2 style={{
                        fontFamily: "'Syne', sans-serif",
                        fontSize: "clamp(28px, 8vw, 56px)",
                        fontWeight: 800,
                        lineHeight: 1.1,
                        color: t.text,
                        marginTop: 12,
                    }}>
                        Crafting digital
                        <span style={{ color: t.accent, display: "block" }}>
                            experiences that matter
                        </span>
                    </h2>
                </div>

                {/* Profile Section - Responsive Grid */}
                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                    gap: "clamp(30px, 5vw, 60px)",
                    marginBottom: 60,
                }}>
                    
                    {/* Left Column - Photo & Stats */}
                    <div style={{
                        opacity: vis ? 1 : 0,
                        transform: vis ? "translateX(0)" : "translateX(-30px)",
                        transition: "all 0.8s ease 0.2s",
                    }}>
                        {/* Photo */}
                        <div style={{
                            position: "relative",
                            borderRadius: 20,
                            overflow: "hidden",
                            boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
                            aspectRatio: "1/1",
                            maxWidth: 400,
                            margin: "0 auto",
                        }}>
                            <img 
                                src={aboutImg} 
                                alt="Rishal" 
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                    display: "block",
                                    transition: "transform 0.6s ease",
                                }}
                            />
                            <div style={{
                                position: "absolute",
                                bottom: 0,
                                left: 0,
                                right: 0,
                                height: "30%",
                                background: `linear-gradient(to top, ${t.bg}, transparent)`,
                            }} />
                        </div>
                        
                        {/* Stats Cards - Responsive Grid */}
                        <div style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
                            gap: 12,
                            marginTop: 20,
                        }}>
                            <StatCard 
                                icon={<Briefcase size={18} />}
                                value="3+ Years"
                                label="Experience"
                                t={t}
                            />
                            <StatCard 
                                icon={<Award size={18} />}
                                value="12+ Apps"
                                label="Delivered"
                                t={t}
                            />
                        </div>
                    </div>

                    {/* Right Column - Bio */}
                    <div style={{
                        opacity: vis ? 1 : 0,
                        transform: vis ? "translateY(0)" : "translateY(30px)",
                        transition: "all 0.8s ease 0.3s",
                    }}>
                        <h3 style={{
                            fontFamily: "'Syne', sans-serif",
                            fontSize: "clamp(20px, 5vw, 28px)",
                            fontWeight: 700,
                            color: t.text,
                            marginBottom: 16,
                            lineHeight: 1.3,
                        }}>
                            Flutter Developer with a passion for creating seamless mobile experiences
                        </h3>
                        
                        <p style={{
                            color: t.text2,
                            fontSize: "clamp(14px, 3vw, 16px)",
                            lineHeight: 1.7,
                            marginBottom: 16,
                        }}>
                            With <strong style={{ color: t.text }}>3+ years of hands-on experience</strong> in Flutter development, 
                            I specialize in building high-performance cross-platform applications that users love. 
                            My approach combines clean architecture with pixel-perfect UI implementation.
                        </p>
                        
                        <p style={{
                            color: t.text2,
                            fontSize: "clamp(14px, 3vw, 16px)",
                            lineHeight: 1.7,
                            marginBottom: 24,
                        }}>
                            I've worked with startups and established companies to deliver robust solutions 
                            using <strong style={{ color: t.text }}>Flutter, Dart, Firebase, and REST APIs</strong>. 
                            From logistics apps to CRM systems, I focus on writing maintainable code and 
                            delivering exceptional user experiences.
                        </p>

                        {/* CTA Buttons - Responsive */}
                        <div style={{
                            display: "flex",
                            gap: 12,
                            flexWrap: "wrap",
                        }}>
                            <Button 
                                href="/resume.pdf" 
                                download 
                                icon={<Download size={16} />} 
                                label="Download Resume" 
                                t={t} 
                                primary 
                            />
                            <Button 
                                href="https://github.com/riishal" 
                                target="_blank" 
                                icon={<ExternalLink size={16} />} 
                                label="View GitHub" 
                                t={t} 
                            />
                        </div>
                    </div>
                </div>

                {/* Skills Section */}
                <div style={{
                    marginBottom: 60,
                    opacity: vis ? 1 : 0,
                    transform: vis ? "translateY(0)" : "translateY(30px)",
                    transition: "all 0.8s ease 0.4s",
                }}>
                    <h4 style={{
                        fontFamily: "'Syne', sans-serif",
                        fontSize: "clamp(18px, 4vw, 20px)",
                        fontWeight: 600,
                        color: t.text,
                        marginBottom: 20,
                    }}>
                        Technical Expertise
                    </h4>
                    
                    <div style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                        gap: 16,
                    }}>
                        {SKILLS.map(({ cat, items }) => (
                            <SkillCard key={cat} cat={cat} items={items} t={t} />
                        ))}
                    </div>
                </div>

                {/* Experience Section */}
                <div style={{
                    opacity: vis ? 1 : 0,
                    transform: vis ? "translateY(0)" : "translateY(30px)",
                    transition: "all 0.8s ease 0.5s",
                }}>
                    <h4 style={{
                        fontFamily: "'Syne', sans-serif",
                        fontSize: "clamp(18px, 4vw, 20px)",
                        fontWeight: 600,
                        color: t.text,
                        marginBottom: 20,
                    }}>
                        Work Experience
                    </h4>
                    
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 16,
                    }}>
                        {EXP.map((item, index) => (
                            <ExpItem key={index} item={item} t={t} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

// Helper Components
function StatCard({ icon, value, label, t }) {
    const [h, setH] = useState(false);
    
    return (
        <div
            onMouseEnter={() => setH(true)}
            onMouseLeave={() => setH(false)}
            style={{
                background: t.bgCard,
                border: `1px solid ${h ? t.accentBorder : t.border}`,
                borderRadius: 16,
                padding: "16px 12px",
                transition: "all 0.3s ease",
                transform: h ? "translateY(-4px)" : "none",
                boxShadow: h ? `0 12px 24px ${t.shadowColor || 'rgba(0,0,0,0.1)'}` : "none",
                textAlign: "center",
            }}
        >
            <div style={{
                width: 40,
                height: 40,
                borderRadius: 12,
                background: t.accentBg,
                border: `1px solid ${t.accentBorder}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 10px",
                color: t.accent,
            }}>
                {icon}
            </div>
            <div style={{
                fontSize: "clamp(18px, 4vw, 20px)",
                fontWeight: 700,
                color: t.text
            }}>
                {value}
            </div>
            <div style={{
                fontSize: "clamp(12px, 3vw, 13px)",
                color: t.text2
            }}>
                {label}
            </div>
        </div>
    );
}

function SkillCard({ cat, items, t }) {
    const [h, setH] = useState(false);
    
    return (
        <div
            onMouseEnter={() => setH(true)}
            onMouseLeave={() => setH(false)}
            style={{
                background: t.bgCard,
                border: `1px solid ${h ? t.accentBorder : t.border}`,
                borderRadius: 16,
                padding: 20,
                transition: "all 0.3s ease",
                transform: h ? "translateY(-4px)" : "none",
                boxShadow: h ? `0 16px 32px ${t.shadowColor || 'rgba(0,0,0,0.1)'}` : "none",
            }}
        >
            <div style={{
                fontSize: "clamp(13px, 3vw, 14px)",
                fontWeight: 600,
                color: t.accent,
                marginBottom: 12,
                fontFamily: "'Syne', sans-serif",
            }}>
                {cat}
            </div>
            <div style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 6,
            }}>
                {items.map(skill => (
                    <span
                        key={skill}
                        style={{
                            padding: "4px 10px",
                            background: t.bg,
                            border: `1px solid ${t.border}`,
                            borderRadius: 8,
                            fontSize: "clamp(11px, 2.5vw, 13px)",
                            color: t.text2,
                        }}
                    >
                        {skill}
                    </span>
                ))}
            </div>
        </div>
    );
}

function ExpItem({ item, t }) {
    const [h, setH] = useState(false);
    const { Icon } = item;
    
    return (
        <div
            onMouseEnter={() => setH(true)}
            onMouseLeave={() => setH(false)}
            style={{
                background: t.bgCard,
                border: `1px solid ${h ? t.accentBorder : t.border}`,
                borderRadius: 16,
                padding: "clamp(16px, 4vw, 24px)",
                transition: "all 0.3s ease",
                transform: h ? "translateX(8px)" : "none",
                boxShadow: h ? `0 16px 32px ${t.shadowColor || 'rgba(0,0,0,0.1)'}` : "none",
            }}
        >
            {/* Header - Responsive */}
            <div style={{
                display: "flex",
                flexDirection: window.innerWidth <= 640 ? "column" : "row",
                flexWrap: "wrap",
                justifyContent: "space-between",
                alignItems: window.innerWidth <= 640 ? "flex-start" : "center",
                gap: 12,
                marginBottom: 16,
            }}>
                <div style={{
                    display: "flex",
                    gap: 12,
                    alignItems: "center",
                    width: window.innerWidth <= 640 ? "100%" : "auto",
                }}>
                    <div style={{
                        width: 48,
                        height: 48,
                        borderRadius: 12,
                        background: t.accentBg,
                        border: `1px solid ${t.accentBorder}`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: t.accent,
                        flexShrink: 0,
                    }}>
                        <Icon size={22} />
                    </div>
                    <div>
                        <h5 style={{
                            fontSize: "clamp(16px, 4vw, 18px)",
                            fontWeight: 700,
                            color: t.text,
                            marginBottom: 2,
                        }}>{item.role}</h5>
                        <div style={{
                            fontSize: "clamp(13px, 3vw, 14px)",
                            color: t.accent,
                            fontWeight: 500
                        }}>
                            {item.co}
                        </div>
                    </div>
                </div>
                
                <span style={{
                    fontSize: "clamp(12px, 2.5vw, 13px)",
                    color: t.text2,
                    background: t.bg,
                    padding: "6px 12px",
                    borderRadius: 8,
                    border: `1px solid ${t.border}`,
                    whiteSpace: "nowrap",
                    width: window.innerWidth <= 640 ? "100%" : "auto",
                    textAlign: "center",
                }}>
                    {item.period}
                </span>
            </div>
            
            {/* Points */}
            <ul style={{
                margin: 0,
                padding: 0,
                listStyle: "none",
            }}>
                {item.pts.map((pt, idx) => (
                    <li key={idx} style={{
                        display: "flex",
                        gap: 8,
                        alignItems: "flex-start",
                        color: t.text2,
                        fontSize: "clamp(13px, 3vw, 14px)",
                        lineHeight: 1.6,
                        marginBottom: 8,
                    }}>
                        <ChevronRight 
                            size={14} 
                            color={t.accent} 
                            style={{
                                flexShrink: 0,
                                marginTop: 3,
                            }}
                        />
                        <span>{pt}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

function Button({ href, download, target, icon, label, t, primary }) {
    const [h, setH] = useState(false);
    
    return (
        <a
            href={href}
            download={download}
            target={target}
            rel={target ? "noopener noreferrer" : undefined}
            onMouseEnter={() => setH(true)}
            onMouseLeave={() => setH(false)}
            style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 8,
                padding: primary ? "12px 24px" : "10px 20px",
                background: primary ? t.accent : "transparent",
                color: primary ? "#fff" : t.text,
                border: primary ? "none" : `2px solid ${t.border}`,
                borderRadius: 12,
                fontSize: "clamp(13px, 3vw, 14px)",
                fontWeight: 600,
                textDecoration: "none",
                transition: "all 0.3s ease",
                transform: h ? "translateY(-2px)" : "none",
                boxShadow: h && primary ? `0 12px 24px ${t.accent}40` : "none",
                cursor: "pointer",
                width: window.innerWidth <= 480 ? "100%" : "auto",
            }}
        >
            {icon}
            {label}
        </a>
    );
}