import { useState, useEffect, useRef, useCallback } from "react";
import {
    X, ExternalLink, Smartphone, CheckCircle,
    Calendar, Building2, Layers, Clock, ArrowUpRight,
} from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { useInView } from "../hooks/useInView";

import ecso1 from "../assets/ecso/ecso1.jpeg";
import ecso2 from "../assets/ecso/ecso2.jpeg";
import ecso3 from "../assets/ecso/ecso3.jpeg";
import ecso4 from "../assets/ecso/ecso4.jpeg";
import ecsoImg from "../assets/ecso/ecsoimage.jpeg";
import inspec1 from "../assets/inspec/inspec1.jpeg";
import inspec2 from "../assets/inspec/inspec2.jpeg";
import inspec3 from "../assets/inspec/inspec3.jpeg";
import inspec4 from "../assets/inspec/inspec4.jpeg";
import inspec5 from "../assets/inspec/inspec5.jpeg";
import inspec6 from "../assets/inspec/inspec6.jpeg";
import inspecImg from "../assets/inspec/inspecimage.jpeg";
import sitediary1 from "../assets/sitediary/sitediary1.jpeg";
import sitediary2 from "../assets/sitediary/sitediary2.jpeg";
import sitediary3 from "../assets/sitediary/sitediary3.jpeg";
import sitediary4 from "../assets/sitediary/sitediary4.jpeg";
import sitediary5 from "../assets/sitediary/sitediary5.jpeg";
import sitediary6 from "../assets/sitediary/sitediary6.jpeg";
import sitediaryImg from "../assets/sitediary/sitediaryimage.jpeg";
import gym1 from "../assets/gymApp/gym1.jpeg";
import gym2 from "../assets/gymApp/gym2.jpeg";
import gym3 from "../assets/gymApp/gym3.jpeg";
import gym4 from "../assets/gymApp/gym4.jpeg";
import gym5 from "../assets/gymApp/gym5.jpeg";
import gym6 from "../assets/gymApp/gym6.jpeg";
import gymImg from "../assets/gymApp/gymimage.jpg";
import bizsmartImg from "../assets/bizsmart/bizsmartimage.jpeg";
import bizsmart1 from "../assets/bizsmart/bizsmart1.jpeg";
import bizsmart2 from "../assets/bizsmart/bizsmart2.jpeg";
import bizsmart3 from "../assets/bizsmart/bizsmart3.jpeg";
import bizsmart4 from "../assets/bizsmart/bizsmart4.jpeg";
import coreconnectCover from "../assets/coreConnect/coreconnectimage.jpg";
import coreconnect0 from "../assets/coreConnect/coreconnectimage0.jpeg";
import coreconnect1 from "../assets/coreConnect/coreconnect1.jpeg";
import coreconnect2 from "../assets/coreConnect/coreconnect2.jpeg";
import coreconnect3 from "../assets/coreConnect/coreconnect3.jpeg";
import coreconnect4 from "../assets/coreConnect/coreconnect4.jpeg";
import coreconnect6 from "../assets/coreConnect/coreconnect6.jpeg";
import coreconnect7 from "../assets/coreConnect/coreconnect7.jpeg";
import coreconnect8 from "../assets/coreConnect/coreconnect8.jpeg";
import coreconnect9 from "../assets/coreConnect/coreconnect9.jpeg";
import coreconnect10 from "../assets/coreConnect/coreconnect10.jpeg";
import poultryShopImage from "../assets/poultryShop/poultryShopimage.jpg";
import poultryShop1 from "../assets/poultryShop/poultryShop1.jpeg";
import poultryShop2 from "../assets/poultryShop/poultryShop2.jpeg";
import poultryShop3 from "../assets/poultryShop/poultryShop3.jpeg";
import poultryShop4 from "../assets/poultryShop/poultryShop4.jpeg";
import poultryShop5 from "../assets/poultryShop/poultryShop5.jpeg";
import poultryShop6 from "../assets/poultryShop/poultryShop6.jpeg";
import salesmateCover from "../assets/salesmate/salesmateimage.jpg";
import salesmate0 from "../assets/salesmate/salesmate0.jpeg";
import salesmate1 from "../assets/salesmate/salesmate1.jpeg";
import salesmate2 from "../assets/salesmate/salesmate2.jpeg";
import salesmate3 from "../assets/salesmate/salesmate3.jpeg";
import salesmate4 from "../assets/salesmate/salesmate4.jpeg";
import salesmate5 from "../assets/salesmate/salesmate5.jpeg";
import salesmate6 from "../assets/salesmate/salesmate6.jpeg";
import salesmate7 from "../assets/salesmate/salesmate7.jpeg";
import salesmate8 from "../assets/salesmate/salesmate8.jpeg";
import salesmate9 from "../assets/salesmate/salesmate9.jpeg";
import salesmate10 from "../assets/salesmate/salesmate10.jpeg";

const PROJECTS = [
    {
        id: 1,
        title: "SalesMate – Smart POS & Sales Analytics",
        company: "Personal Product",
        period: "2025 – Present",
        status: "Live",
        statusLabel: "Live · 3+ Shops",
        category: "Retail POS",
        desc: "Simple and powerful POS system for cafes and small shops with billing, sales tracking, top-selling analytics, and instant Bluetooth/USB printing.",
        longDesc: "SalesMate is a modern point-of-sale (POS) system built for cafes and small retail shops. The application enables fast billing, real-time sales tracking, and detailed analytics including top-selling items, hourly sales trends, and payment breakdown reports. It supports instant receipt printing via Bluetooth and USB thermal printers. The system is currently deployed in 3+ active shops and includes a Web version for cross-platform access and reporting.",
        tags: ["Flutter", "Firebase", "Retail POS", "Sales Tracking", "Analytics Dashboard", "Bluetooth Printing", "USB Thermal Printing", "Web Version Available", "Business Intelligence"],
        link: null,
        coverImg: salesmateCover,
        screenshots: [salesmate0, salesmate1, salesmate2, salesmate3, salesmate4, salesmate5, salesmate6, salesmate7, salesmate8, salesmate9, salesmate10],
        highlights: ["Fast and simple billing system", "Instant receipt printing (Bluetooth & USB)", "Multiple payment methods (Cash / UPI / Card)", "Top-selling items tracking", "Hourly, Daily, Weekly & Monthly analytics", "Payment breakdown reports", "Item & category management", "Bill history with edit & delete", "Live daily sales dashboard", "Web version for reporting & access", "Currently used by 3+ active shops"],
    },
    {
        id: 2,
        title: "ECSO – Logistics",
        company: "ESBOR Infosystems",
        period: "May 2025 – Present",
        status: "Live",
        statusLabel: "Live",
        category: "Logistics",
        desc: "End-to-end logistics platform with real-time cargo tracking, invoice booking, PDF generation, and role-based auth.",
        longDesc: "ECSO is a comprehensive logistics and courier management system for a Saudi-based company. Full shipment lifecycle — booking to delivery — with WebSocket tracking, automated PDF invoices, and role-based access for admins, branch managers, and staff.",
        tags: ["Flutter", "Firebase", "REST API", "GetX", "JWT", "PDF Gen"],
        link: "https://play.google.com/store/apps/details?id=com.ebsor.ecso",
        coverImg: ecsoImg,
        screenshots: [ecso1, ecso2, ecso3, ecso4],
        highlights: ["Real-time cargo tracking via WebSocket", "PDF invoice generation & sharing", "Role-based access control", "Multi-branch management", "40% faster load performance"],
    },
    {
        id: 3,
        title: "Inspec – QC Monitor",
        company: "ESBOR Infosystems",
        period: "2025",
        status: "Live",
        statusLabel: "Live",
        category: "Quality Control",
        desc: "Quality control & production monitoring with structured inspection workflows and analytics dashboards.",
        longDesc: "Inspec digitalises manufacturing QC — replacing paper checklists with smart workflows. Teams capture defects live on the shop floor while managers monitor dashboards for trends, compliance, and approvals.",
        tags: ["Flutter", "Dart", "Firebase", "Offline First", "Analytics"],
        link: "https://play.google.com/store/apps/details?id=com.ebsor.inspec",
        coverImg: inspecImg,
        screenshots: [inspec1, inspec2, inspec3, inspec4, inspec5, inspec6],
        highlights: ["Structured QC inspection workflows", "Real-time production monitoring", "Offline-first with background sync", "Analytics dashboard with charts", "Multi-level approval system"],
    },
    {
        id: 4,
        title: "BizSmart – Self Ordering System",
        company: "ESBOR Infosystems",
        period: "2026",
        status: "Live",
        statusLabel: "Live",
        category: "Retail / ERP",
        desc: "Self-ordering web application designed to streamline billing and improve customer checkout experience.",
        longDesc: "BizSmart is a modern self-ordering web application developed as part of Code7 ERP. The platform enables customers to browse products, add items, place orders, and complete billing independently — reducing queues and improving operational efficiency.",
        tags: ["Flutter Web", "ERP Integration", "Order Management", "Billing System", "Responsive UI"],
        link: null,
        coverImg: bizsmartImg,
        screenshots: [bizsmart1, bizsmart2, bizsmart3, bizsmart4],
        highlights: ["Self-service ordering interface", "Real-time order summary & tax calculation", "Customer details & VAT management", "Smooth checkout & order confirmation flow", "ERP-integrated order processing", "Responsive design for mobile & web", "Optimized billing workflow for faster checkout"],
    },
    {
        id: 5,
        title: "Site Diary",
        company: "Freelance",
        period: "2025",
        status: "Live",
        statusLabel: "Live",
        category: "Construction",
        desc: "Digital site diary for construction management — daily logs, photo documentation, manpower tracking.",
        longDesc: "Site Diary replaces paper-based construction diaries. Engineers log daily progress, annotate photos, record manpower and equipment, and share structured reports with clients.",
        tags: ["Flutter", "Firebase", "REST API", "Photo Docs", "GetX"],
        link: null,
        coverImg: sitediaryImg,
        screenshots: [sitediary1, sitediary2, sitediary3, sitediary4, sitediary5, sitediary6],
        highlights: ["Daily site progress logging", "Photo capture with annotations", "Manpower & equipment tracking", "Automated report generation", "Multi-project management"],
    },
    {
        id: 6,
        title: "GymFlow – Member & Revenue Manager",
        company: "Personal Project",
        period: "2026",
        status: "Live",
        statusLabel: "Live",
        category: "Business Management",
        desc: "Complete gym management app for handling memberships, payments, expiry tracking, reminders, and invoice sharing.",
        longDesc: "GymFlow is a full-featured mobile application built for gym owners to manage customers efficiently. The app handles member registration, membership duration tracking, automated expiry monitoring, revenue reports, and instant WhatsApp invoice sharing.",
        tags: ["Flutter", "Firebase", "WhatsApp Integration", "Invoice System", "Analytics"],
        link: null,
        coverImg: gymImg,
        screenshots: [gym1, gym2, gym3, gym4, gym5, gym6],
        highlights: ["Customer registration with photo upload", "Membership duration tracking (1, 2, 3 months & custom)", "Expired and expiring member alerts", "Direct WhatsApp reminder & invoice sharing", "Revenue analytics dashboard", "Monthly income reporting system", "Payment status tracking (Paid / Expired)"],
    },
    {
        id: 7,
        title: "CoreConnect – Business Management Solution",
        company: "Freelance",
        period: "2025",
        status: "Completed",
        statusLabel: "Completed",
        category: "Business Management",
        desc: "Complete business management app for handling sales, purchases, invoicing, financial tracking, reporting, and PDF printing.",
        longDesc: "CoreConnect is a full-scale business management mobile application developed as a freelance client project. The system streamlines daily operations including sales order creation, invoice management, purchase tracking, expense monitoring, and real-time financial reporting.",
        tags: ["Flutter", "Firebase", "PDF Generation", "Sales Management", "Purchase Tracking", "Analytics Dashboard", "Financial Reporting", "Printing System"],
        link: null,
        coverImg: coreconnectCover,
        screenshots: [coreconnect0, coreconnect1, coreconnect2, coreconnect3, coreconnect4, coreconnect6, coreconnect7, coreconnect8, coreconnect9, coreconnect10],
        highlights: ["Secure login system with role-based access", "Sales order creation & tracking", "Invoice management system", "Purchase and supplier management", "Expense tracking with profit calculation", "Financial dashboard (Bank / Cash / Total Balance)", "Advanced monthly & yearly report filters", "A4 formatted PDF report export", "Print-ready financial statements", "Admin profile management"],
    },
    {
        id: 8,
        title: "Poultry Shop – Smart POS System",
        company: "Personal Project",
        period: "2026",
        status: "Live",
        statusLabel: "Live",
        category: "Retail POS",
        desc: "Smart and simple POS system built for poultry shops with voice-based sales entry, daily rate management, and pending payment tracking.",
        longDesc: "Poultry Shop POS is a lightweight and user-friendly mobile billing system designed specifically for poultry shop owners. The app simplifies daily operations with voice-based sale entry, customizable daily rate settings, and real-time pending payment tracking. Supports Malayalam language for local usability.",
        tags: ["Flutter", "Firebase", "Voice Recognition", "Retail POS", "Local Business Solution", "Pending Payment Tracking", "Multi-language Support", "Sales Analytics"],
        link: null,
        coverImg: poultryShopImage,
        screenshots: [poultryShop1, poultryShop2, poultryShop3, poultryShop4, poultryShop5, poultryShop6],
        highlights: ["Voice-based sales entry (Tap to Record)", "Daily rate setting (per kg price management)", "Weight-based & amount-based sales tracking", "Pending payment tracking system", "Mark transactions as Paid", "Daily, Weekly & Monthly reports", "Total sales analytics dashboard", "Malayalam language support"],
    },
];

const STATUS_STYLES = {
    Live: { color: "#22C55E", bg: "rgba(34,197,94,0.12)", border: "rgba(34,197,94,0.30)", dot: true },
    Completed: { color: "#60A5FA", bg: "rgba(96,165,250,0.12)", border: "rgba(96,165,250,0.30)", dot: false },
    Delivered: { color: "#A78BFA", bg: "rgba(167,139,250,0.12)", border: "rgba(167,139,250,0.30)", dot: false },
};

/* ══════════════════════════════════════════
   PREMIUM PHONE MOCKUP
══════════════════════════════════════════ */
/* ══════════════════════════════════════════
   FINAL FIXED PHONE MOCKUP
   - objectFit: "contain" → full screenshot shown, no bottom crop
   - Taller aspect ratio (large: 232×500, small: 156×338)
   - Slim 7px bezel, notch sits on screen
   - Works on dark & light screenshots
   
   DROP-IN REPLACEMENT for PhoneFrame in Works.jsx
══════════════════════════════════════════ */

function PhoneFrame({ src, large = false, fading = false }) {
    const w   = large ? 232  : 156;
    const h   = large ? 500  : 338;   // ← taller: better phone aspect ratio
    const r   = large ? 40   : 27;
    const pad = large ? 7    : 5;

    return (
        <div style={{
            width: w,
            height: h,
            flexShrink: 0,
            position: "relative",
            filter: `drop-shadow(0 ${large ? 44 : 16}px ${large ? 80 : 32}px rgba(0,0,0,${large ? 0.72 : 0.48}))`,
        }}>
            {/* Outer glow halos — large only */}
            {large && (
                <>
                    <div style={{
                        position: "absolute", inset: -10, borderRadius: r + 12,
                        border: "1px solid rgba(255,255,255,0.045)",
                        pointerEvents: "none",
                    }} />
                    <div style={{
                        position: "absolute", inset: -4, borderRadius: r + 5,
                        border: "1px solid rgba(255,255,255,0.065)",
                        pointerEvents: "none",
                    }} />
                </>
            )}

            {/* ── Phone Shell ── */}
            <div style={{
                width: "100%",
                height: "100%",
                borderRadius: r,
                position: "relative",
                overflow: "hidden",
                background: "linear-gradient(155deg, #3a3a3a 0%, #1c1c1c 25%, #0f0f0f 60%, #090909 100%)",
                boxShadow: large
                    ? `
                        0 0 0 1px rgba(255,255,255,0.12),
                        inset 0 1px 0 rgba(255,255,255,0.10),
                        inset 1px 0 0 rgba(255,255,255,0.04),
                        0 55px 110px rgba(0,0,0,0.82)
                    `
                    : `
                        0 0 0 1px rgba(255,255,255,0.10),
                        inset 0 1px 0 rgba(255,255,255,0.08)
                    `,
            }}>
                {/* Top metallic sheen */}
                <div style={{
                    position: "absolute", top: 0, left: 0, right: 0, height: "38%",
                    background: "linear-gradient(180deg, rgba(255,255,255,0.055) 0%, transparent 100%)",
                    borderRadius: `${r}px ${r}px 0 0`,
                    pointerEvents: "none", zIndex: 26,
                }} />

                {/* Left edge glint */}
                <div style={{
                    position: "absolute", top: "6%", left: 0, width: "1px", bottom: "6%",
                    background: "linear-gradient(180deg, transparent, rgba(255,255,255,0.12) 35%, rgba(255,255,255,0.05) 68%, transparent)",
                    pointerEvents: "none", zIndex: 26,
                }} />

                {/* ── Side Buttons ── */}
                {/* Power */}
                <div style={{
                    position: "absolute", right: -2.5,
                    top: large ? 125 : 82,
                    width: 3, height: large ? 62 : 42,
                    background: "linear-gradient(180deg, #2a2a2a, #333, #242424)",
                    borderRadius: "0 3px 3px 0",
                    boxShadow: "2px 0 5px rgba(0,0,0,0.55)",
                }} />
                {/* Mute */}
                <div style={{
                    position: "absolute", left: -2.5,
                    top: large ? 62 : 40,
                    width: 3, height: large ? 24 : 16,
                    background: "linear-gradient(180deg, #2a2a2a, #2e2e2e, #222)",
                    borderRadius: "3px 0 0 3px",
                    boxShadow: "-2px 0 5px rgba(0,0,0,0.55)",
                }} />
                {/* Vol+ */}
                <div style={{
                    position: "absolute", left: -2.5,
                    top: large ? 96 : 64,
                    width: 3, height: large ? 38 : 25,
                    background: "linear-gradient(180deg, #2a2a2a, #2e2e2e, #222)",
                    borderRadius: "3px 0 0 3px",
                    boxShadow: "-2px 0 5px rgba(0,0,0,0.55)",
                }} />
                {/* Vol- */}
                <div style={{
                    position: "absolute", left: -2.5,
                    top: large ? 145 : 97,
                    width: 3, height: large ? 38 : 25,
                    background: "linear-gradient(180deg, #2a2a2a, #2e2e2e, #222)",
                    borderRadius: "3px 0 0 3px",
                    boxShadow: "-2px 0 5px rgba(0,0,0,0.55)",
                }} />

                {/* ── Screen ── */}
                <div style={{
                    position: "absolute",
                    top: pad,
                    left: pad,
                    right: pad,
                    bottom: pad,
                    borderRadius: r - pad,
                    overflow: "hidden",
                    background: "#111",          // neutral bg for letterbox gaps
                }}>
                    {src ? (
                        <img
                            src={src}
                            alt="screenshot"
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "contain",          // ← KEY FIX: shows full screenshot
                                objectPosition: "center top",  // align to top, centered horizontally
                                opacity: fading ? 0 : 1,
                                transform: fading ? "scale(1.03)" : "scale(1)",
                                transition: "opacity 0.7s cubic-bezier(0.4,0,0.2,1), transform 0.7s cubic-bezier(0.4,0,0.2,1)",
                                display: "block",
                            }}
                        />
                    ) : (
                        <div style={{
                            width: "100%", height: "100%",
                            display: "flex", alignItems: "center", justifyContent: "center",
                            background: "#0e0e0e",
                        }}>
                            <Smartphone size={large ? 40 : 26} color="#222" />
                        </div>
                    )}

                    {/* Notch — slim centered pill overlaid on screen */}
                    <div style={{
                        position: "absolute",
                        top: large ? 10 : 7,
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: large ? 50 : 33,
                        height: large ? 5 : 4,
                        background: "#000",
                        borderRadius: 100,
                        zIndex: 20,
                        boxShadow: "inset 0 1px 2px rgba(0,0,0,0.9)",
                    }} />

                    {/* Screen glare */}
                    <div style={{
                        position: "absolute", inset: 0,
                        background: "linear-gradient(135deg, rgba(255,255,255,0.036) 0%, transparent 52%)",
                        pointerEvents: "none", zIndex: 10,
                    }} />
                </div>

                {/* Home bar */}
                <div style={{
                    position: "absolute",
                    bottom: large ? 5 : 3,
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: large ? 96 : 64,
                    height: large ? 4 : 3,
                    background: "rgba(255,255,255,0.18)",
                    borderRadius: 100,
                    zIndex: 27,
                }} />
            </div>
        </div>
    );
}

/* ══════════════════════════════════════════
   CAROUSEL — slow smooth cross-fade, 4.5s interval
══════════════════════════════════════════ */
function Carousel({ screenshots, accent }) {
    const [idx, setIdx] = useState(0);
    const [fading, setFading] = useState(false);
    const [paused, setPaused] = useState(false);
    const pendingIdx = useRef(null);
    const timerRef = useRef(null);
    const total = screenshots.length;
    const touchStart = useRef(0);

    // Crossfade transition: fade out → swap → fade in
    const goTo = useCallback((next) => {
        if (fading || next === idx) return;
        pendingIdx.current = next;
        setFading(true);
        // After fade-out (350ms), swap image then fade in
        setTimeout(() => {
            setIdx(pendingIdx.current);
            setFading(false);
        }, 380);
    }, [fading, idx]);

    const next = useCallback(() => goTo((idx + 1) % total), [goTo, idx, total]);
    const prev = useCallback(() => goTo((idx - 1 + total) % total), [goTo, idx, total]);

    // Auto-advance — slow 4500ms
    useEffect(() => {
        if (total <= 1 || paused) return;
        timerRef.current = setInterval(next, 4500);
        return () => clearInterval(timerRef.current);
    }, [total, paused, next]);

    const onTouchStart = (e) => { touchStart.current = e.touches[0].clientX; };
    const onTouchEnd = (e) => {
        const dx = e.changedTouches[0].clientX - touchStart.current;
        if (Math.abs(dx) > 50) dx < 0 ? next() : prev();
    };

    const prevIdx = (idx - 1 + total) % total;
    const nextIdx = (idx + 1) % total;

    if (total === 0) return (
        <div style={{ display: "flex", justifyContent: "center", padding: "40px 0" }}>
            <PhoneFrame large />
        </div>
    );

    return (
        <div
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
            style={{ userSelect: "none" }}
        >
            {/* 3-phone layout */}
            <div style={{
                display: "flex", justifyContent: "center", alignItems: "center",
                gap: "clamp(10px, 3vw, 40px)", padding: "32px 0 50px",
            }}>
                {/* Prev */}
                <div
                    className="side-phone"
                    onClick={prev}
                    style={{
                        opacity: 0.26,
                        transform: "scale(0.76) perspective(900px) rotateY(14deg)",
                        transformOrigin: "right center",
                        flexShrink: 0, cursor: "pointer",
                        transition: "opacity 0.5s ease, transform 0.5s ease",
                    }}
                    onMouseEnter={e => { e.currentTarget.style.opacity = "0.45"; }}
                    onMouseLeave={e => { e.currentTarget.style.opacity = "0.26"; }}
                >
                    <PhoneFrame src={screenshots[prevIdx]} />
                </div>

                {/* Center — main */}
                <div style={{ position: "relative", zIndex: 2, flexShrink: 0 }}>
                    <PhoneFrame src={screenshots[idx]} large fading={fading} />
                    {/* Glow under phone */}
                    <div style={{
                        position: "absolute", bottom: -20, left: "10%", right: "10%", height: 30,
                        background: `radial-gradient(ellipse, ${accent}30 0%, transparent 75%)`,
                        filter: "blur(12px)",
                        pointerEvents: "none",
                    }} />
                    {/* Counter */}
                    <div style={{
                        position: "absolute", bottom: -32, left: "50%", transform: "translateX(-50%)",
                        background: accent, color: "#fff", borderRadius: 100,
                        padding: "4px 14px", fontSize: 11, fontWeight: 700,
                        whiteSpace: "nowrap", fontFamily: "'Syne', sans-serif",
                        boxShadow: `0 4px 18px ${accent}55`,
                    }}>
                        {idx + 1} / {total}
                    </div>
                </div>

                {/* Next */}
                <div
                    className="side-phone"
                    onClick={next}
                    style={{
                        opacity: 0.26,
                        transform: "scale(0.76) perspective(900px) rotateY(-14deg)",
                        transformOrigin: "left center",
                        flexShrink: 0, cursor: "pointer",
                        transition: "opacity 0.5s ease, transform 0.5s ease",
                    }}
                    onMouseEnter={e => { e.currentTarget.style.opacity = "0.45"; }}
                    onMouseLeave={e => { e.currentTarget.style.opacity = "0.26"; }}
                >
                    <PhoneFrame src={screenshots[nextIdx]} />
                </div>
            </div>

            {/* Nav + dots */}
            {total > 1 && (
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 14, marginBottom: 12 }}>
                    <NavBtn onClick={prev} accent={accent}>←</NavBtn>
                    <div style={{ display: "flex", gap: 6 }}>
                        {screenshots.map((_, i) => (
                            <button key={i}
                                onClick={() => goTo(i)}
                                style={{
                                    width: i === idx ? 26 : 7, height: 7, borderRadius: 4,
                                    border: "none", padding: 0, cursor: "pointer",
                                    background: i === idx ? accent : "rgba(255,255,255,0.14)",
                                    transition: "all 0.4s cubic-bezier(0.4,0,0.2,1)",
                                    boxShadow: i === idx ? `0 0 10px ${accent}80` : "none",
                                }}
                            />
                        ))}
                    </div>
                    <NavBtn onClick={next} accent={accent}>→</NavBtn>
                </div>
            )}

            <style>{`
                @media (max-width: 600px) { .side-phone { display: none !important; } }
            `}</style>
        </div>
    );
}

function NavBtn({ onClick, accent, children }) {
    const [h, setH] = useState(false);
    return (
        <button onClick={onClick}
            onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
            style={{
                width: 36, height: 36, borderRadius: "50%",
                border: `1px solid ${h ? accent : "rgba(255,255,255,0.13)"}`,
                background: h ? `${accent}22` : "rgba(255,255,255,0.03)",
                color: h ? accent : "#888", fontSize: 15, fontWeight: 700,
                cursor: "pointer", transition: "all 0.25s",
                display: "flex", alignItems: "center", justifyContent: "center",
            }}
        >{children}</button>
    );
}

/* ══════════════════════════════════════════
   MODAL
══════════════════════════════════════════ */
function Modal({ p, onClose, t, isDark }) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        requestAnimationFrame(() => setTimeout(() => setMounted(true), 10));
        const fn = (e) => { if (e.key === "Escape") onClose(); };
        document.addEventListener("keydown", fn);
        document.body.style.overflow = "hidden";
        return () => { document.removeEventListener("keydown", fn); document.body.style.overflow = ""; };
    }, [onClose]);

    const sc = STATUS_STYLES[p.status] || STATUS_STYLES.Delivered;

    return (
        <div onClick={onClose} style={{
            position: "fixed", inset: 0, zIndex: 1000,
            background: `rgba(0,0,0,${mounted ? 0.93 : 0})`,
            backdropFilter: `blur(${mounted ? 28 : 0}px)`,
            WebkitBackdropFilter: `blur(${mounted ? 28 : 0}px)`,
            display: "flex", alignItems: "center", justifyContent: "center",
            padding: "clamp(12px, 3vw, 24px)",
            transition: "background 0.35s ease, backdrop-filter 0.35s ease",
        }}>
            <div
                onClick={e => e.stopPropagation()}
                style={{
                    background: t.bg2, border: `1px solid ${t.border2}`,
                    borderRadius: 26, width: "100%", maxWidth: 1100,
                    maxHeight: "90vh", overflowY: "auto", position: "relative",
                    transform: mounted ? "translateY(0) scale(1)" : "translateY(40px) scale(0.96)",
                    opacity: mounted ? 1 : 0,
                    transition: "transform 0.45s cubic-bezier(0.16,1,0.3,1), opacity 0.35s ease",
                }}
            >
                {/* Close btn */}
                <button onClick={onClose} style={{
                    position: "absolute", top: 14, right: 14, width: 40, height: 40,
                    borderRadius: "50%", background: t.bgCard, border: `1px solid ${t.border}`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    cursor: "pointer", zIndex: 10, color: t.text,
                    transition: "all 0.25s cubic-bezier(0.16,1,0.3,1)",
                }}
                    onMouseEnter={e => {
                        e.currentTarget.style.borderColor = t.accentBorder;
                        e.currentTarget.style.background = t.accentBg;
                        e.currentTarget.style.transform = "rotate(90deg) scale(1.1)";
                    }}
                    onMouseLeave={e => {
                        e.currentTarget.style.borderColor = t.border;
                        e.currentTarget.style.background = t.bgCard;
                        e.currentTarget.style.transform = "rotate(0deg) scale(1)";
                    }}
                ><X size={15} /></button>

                {/* Header */}
                <div style={{ padding: "28px 28px 18px", borderBottom: `1px solid ${t.border}` }}>
                    <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 10, flexWrap: "wrap" }}>
                        <span style={{
                            display: "inline-flex", alignItems: "center", gap: 5,
                            fontSize: 10.5, color: sc.color, background: sc.bg,
                            border: `1px solid ${sc.border}`,
                            padding: "4px 12px", borderRadius: 100, fontWeight: 700,
                        }}>
                            {sc.dot && <span style={{ width: 6, height: 6, borderRadius: "50%", background: sc.color, display: "inline-block", animation: "pulse-dot 2s infinite" }} />}
                            {p.statusLabel}
                        </span>
                        <span style={{ display: "flex", alignItems: "center", gap: 5, color: t.text3, fontSize: 12 }}><Building2 size={11} /> {p.company}</span>
                        <span style={{ display: "flex", alignItems: "center", gap: 5, color: t.text3, fontSize: 12 }}><Calendar size={11} /> {p.period}</span>
                    </div>
                    <h2 style={{
                        fontFamily: "'Syne', sans-serif",
                        fontSize: "clamp(20px, 3.5vw, 30px)", fontWeight: 800,
                        color: t.text, letterSpacing: "-0.5px",
                    }}>{p.title}</h2>
                </div>

                {/* Carousel area */}
                <div style={{
                    padding: "24px 28px",
                    background: isDark ? "rgba(34,197,94,0.02)" : "rgba(22,163,74,0.02)",
                    borderBottom: `1px solid ${t.border}`,
                }}>
                    <Carousel screenshots={p.screenshots} accent={t.accent} />
                </div>

                {/* Details */}
                <div style={{
                    padding: "28px",
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                    gap: 28,
                }}>
                    <div>
                        <ModalLabel t={t}>About</ModalLabel>
                        <p style={{ color: t.text2, fontSize: 13.5, lineHeight: 1.75, marginTop: 10, marginBottom: 22 }}>{p.longDesc}</p>
                        <ModalLabel t={t}>Tech Stack</ModalLabel>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: 7, marginTop: 10 }}>
                            {p.tags.map(tag => (
                                <span key={tag} style={{
                                    padding: "5px 12px", background: t.accentBg, border: `1px solid ${t.accentBorder}`,
                                    borderRadius: 100, fontSize: 11.5, color: t.accent, fontFamily: "'Syne', sans-serif",
                                }}>{tag}</span>
                            ))}
                        </div>
                    </div>
                    <div>
                        <ModalLabel t={t}>Key Features</ModalLabel>
                        <div style={{ display: "flex", flexDirection: "column", gap: 7, marginTop: 10, marginBottom: 22 }}>
                            {p.highlights.map(h => (
                                <div key={h} style={{
                                    display: "flex", gap: 9, alignItems: "center",
                                    padding: "9px 13px", background: t.accentBg,
                                    border: `1px solid ${t.accentBorder}`, borderRadius: 8,
                                }}>
                                    <CheckCircle size={13} color={t.accent} style={{ flexShrink: 0 }} />
                                    <span style={{ color: t.text2, fontSize: 12.5 }}>{h}</span>
                                </div>
                            ))}
                        </div>
                        {p.link && (
                            <a href={p.link} target="_blank" rel="noreferrer" style={{
                                display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                                background: t.accent, color: "#fff", borderRadius: 12,
                                padding: "13px 20px", fontSize: 13, fontWeight: 700,
                                textDecoration: "none", width: "100%",
                                transition: "all 0.25s cubic-bezier(0.16,1,0.3,1)",
                                fontFamily: "'Syne', sans-serif",
                            }}
                                onMouseEnter={e => {
                                    e.currentTarget.style.background = t.accentHover;
                                    e.currentTarget.style.transform = "translateY(-2px)";
                                    e.currentTarget.style.boxShadow = `0 10px 28px ${t.accent}55`;
                                }}
                                onMouseLeave={e => {
                                    e.currentTarget.style.background = t.accent;
                                    e.currentTarget.style.transform = "none";
                                    e.currentTarget.style.boxShadow = "none";
                                }}
                            ><ExternalLink size={14} /> View on Play Store</a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

function ModalLabel({ children, t }) {
    return (
        <div style={{
            fontFamily: "'Syne', sans-serif", fontSize: 10, color: t.text3,
            letterSpacing: 1.5, textTransform: "uppercase", fontWeight: 700,
        }}>{children}</div>
    );
}

/* ══════════════════════════════════════════
   CARD
══════════════════════════════════════════ */
function Card({ p, t, isDark, idx, vis, onOpen }) {
    const [h, setH] = useState(false);
    const [ripple, setRipple] = useState(null);
    const sc = STATUS_STYLES[p.status] || STATUS_STYLES.Delivered;

    const handleClick = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setRipple({ x: e.clientX - rect.left, y: e.clientY - rect.top });
        setTimeout(() => setRipple(null), 700);
        onOpen();
    };

    return (
        <div
            onClick={handleClick}
            onMouseEnter={() => setH(true)}
            onMouseLeave={() => setH(false)}
            style={{
                borderRadius: 20, overflow: "hidden",
                background: t.bgCard,
                border: `1px solid ${h ? t.accentBorder : t.border}`,
                cursor: "pointer",
                display: "flex", flexDirection: "column",
                position: "relative",
                transform: h ? "translateY(-9px) scale(1.012)" : "translateY(0) scale(1)",
                boxShadow: h
                    ? `0 36px 72px rgba(0,0,0,0.52), 0 0 0 1px ${t.accentBorder}, 0 0 60px ${t.accent}08`
                    : t.shadow,
                transition: "all 0.42s cubic-bezier(0.16,1,0.3,1)",
                opacity: vis ? 1 : 0,
                animation: vis ? `cardFadeUp 0.65s cubic-bezier(0.16,1,0.3,1) ${idx * 90}ms both` : "none",
                height: "100%",
            }}
        >
            {/* Click ripple */}
            {ripple && (
                <div style={{
                    position: "absolute",
                    left: ripple.x - 120,
                    top: ripple.y - 120,
                    width: 240, height: 240,
                    borderRadius: "50%",
                    background: `${t.accent}14`,
                    zIndex: 50,
                    animation: "rippleOut 0.7s ease-out forwards",
                    pointerEvents: "none",
                }} />
            )}

            {/* Top-edge hover glow */}
            <div style={{
                position: "absolute", top: 0, left: 0, right: 0, height: 1,
                background: h
                    ? `linear-gradient(90deg, transparent, ${t.accent}88, transparent)`
                    : "transparent",
                transition: "background 0.4s ease",
                zIndex: 5,
            }} />

            {/* Ambient hover radial */}
            <div style={{
                position: "absolute", inset: 0, borderRadius: 20,
                opacity: h ? 1 : 0,
                background: `radial-gradient(ellipse at 50% 0%, ${t.accent}0c 0%, transparent 65%)`,
                transition: "opacity 0.45s ease",
                pointerEvents: "none", zIndex: 1,
            }} />

            {/* ── Image ── */}
            <div style={{
                position: "relative", height: 216,
                overflow: "hidden",
                background: isDark ? "#070707" : "#e4e4e4",
                flexShrink: 0,
            }}>
                {p.coverImg ? (
                    <img src={p.coverImg} alt={p.title} style={{
                        position: "absolute", inset: 0, width: "100%", height: "100%",
                        objectFit: "cover", objectPosition: "center",
                        transform: h ? "scale(1.09)" : "scale(1)",
                        transition: "transform 0.65s cubic-bezier(0.16,1,0.3,1)",
                    }} />
                ) : (
                    <div style={{
                        position: "absolute", inset: 0,
                        background: `linear-gradient(135deg, ${t.accentBg}, transparent)`,
                        display: "flex", alignItems: "center", justifyContent: "center",
                    }}>
                        <Layers size={40} color={t.accent} style={{ opacity: 0.18 }} />
                    </div>
                )}

                {/* Gradient */}
                <div style={{
                    position: "absolute", inset: 0,
                    background: "linear-gradient(180deg, rgba(0,0,0,0.08) 0%, transparent 30%, rgba(0,0,0,0.82) 100%)",
                    pointerEvents: "none",
                }} />

                {/* Arrow hover button */}
                <div style={{
                    position: "absolute", top: 12, right: 12, zIndex: 5,
                    width: 34, height: 34, borderRadius: "50%",
                    background: h ? t.accent : "rgba(0,0,0,0.52)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    backdropFilter: "blur(10px)",
                    transform: h ? "scale(1.12) rotate(0deg)" : "scale(1) rotate(-45deg)",
                    transition: "all 0.35s cubic-bezier(0.16,1,0.3,1)",
                    boxShadow: h ? `0 6px 20px ${t.accent}66` : "none",
                }}>
                    <ArrowUpRight size={15} color="#fff" />
                </div>

                {/* Title */}
                <div style={{ position: "absolute", bottom: 13, left: 14, right: 52, zIndex: 3 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 4, marginBottom: 3 }}>
                        <Building2 size={10} color="rgba(255,255,255,0.55)" />
                        <span style={{ fontSize: 10.5, color: "rgba(255,255,255,0.55)", fontFamily: "'Syne', sans-serif" }}>{p.company}</span>
                    </div>
                    <h3 style={{
                        fontFamily: "'Syne', sans-serif",
                        fontSize: 15.5, fontWeight: 700, color: "#fff",
                        lineHeight: 1.3, margin: 0,
                    }}>{p.title}</h3>
                </div>
            </div>

            {/* ── Body ── */}
            <div style={{
                padding: "14px 16px 16px",
                display: "flex", flexDirection: "column", gap: 10,
                flex: 1, position: "relative", zIndex: 2,
            }}>
                {/* Desc */}
                <p style={{
                    color: t.text2, fontSize: 12.5, lineHeight: 1.66, margin: 0,
                    display: "-webkit-box", WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical", overflow: "hidden",
                }}>
                    {p.desc}
                </p>

                {/* Status + Category */}
                <div style={{
                    display: "flex", alignItems: "center", gap: 7,
                    flexWrap: "wrap", marginTop: "auto",
                    paddingTop: 12, borderTop: `1px solid ${t.border}`,
                }}>
                    <span style={{
                        display: "inline-flex", alignItems: "center", gap: 5,
                        padding: "5px 11px", borderRadius: 100,
                        background: sc.bg, border: `1px solid ${sc.border}`,
                        color: sc.color, fontSize: 11, fontWeight: 700,
                        fontFamily: "'Syne', sans-serif",
                    }}>
                        {sc.dot && (
                            <span style={{
                                width: 6, height: 6, borderRadius: "50%",
                                background: sc.color, display: "inline-block",
                                boxShadow: `0 0 7px ${sc.color}`,
                                animation: "pulse-dot 2s ease-in-out infinite",
                            }} />
                        )}
                        {p.statusLabel}
                    </span>

                    <span style={{
                        padding: "5px 11px", borderRadius: 100,
                        background: t.accentBg, border: `1px solid ${t.accentBorder}`,
                        color: t.accent, fontSize: 11, fontWeight: 600,
                        fontFamily: "'Syne', sans-serif",
                    }}>
                        {p.category}
                    </span>

                    {p.screenshots.length > 0 && (
                        <div style={{ display: "flex", alignItems: "center", gap: 4, color: t.text3, fontSize: 11, marginLeft: "auto" }}>
                            <Smartphone size={11} />
                            <span>{p.screenshots.length} screens</span>
                        </div>
                    )}
                </div>

                {/* Period */}
                <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
                    <Clock size={10} color={t.text3} />
                    <span style={{ fontSize: 10.5, color: t.text3 }}>{p.period}</span>
                </div>
            </div>
        </div>
    );
}

/* ══════════════════════════════════════════
   MAIN
══════════════════════════════════════════ */
export default function Works() {
    const { t, isDark } = useTheme();
    const [ref, inView] = useInView(0.08);
    const [active, setActive] = useState(null);
    const [companyFilter, setCompanyFilter] = useState("all");
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const sectionRef = useRef(null);

    const companies = ["all", ...new Set(PROJECTS.map(p => p.company))];
    const filtered = companyFilter === "all" ? PROJECTS : PROJECTS.filter(p => p.company === companyFilter);

    // Mouse-tracking spotlight
    useEffect(() => {
        const el = sectionRef.current;
        if (!el) return;
        const onMove = (e) => {
            const rect = el.getBoundingClientRect();
            setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
        };
        el.addEventListener("mousemove", onMove);
        return () => el.removeEventListener("mousemove", onMove);
    }, []);

    const setRefs = (node) => {
        sectionRef.current = node;
        if (typeof ref === "function") ref(node);
        else if (ref && typeof ref === "object") ref.current = node;
    };

    return (
        <section
            id="works"
            ref={setRefs}
            style={{
                background: t.bg, position: "relative",
                overflow: "hidden",
                padding: "96px clamp(24px, 6vw, 96px)",
                borderTop: `1px solid ${t.border}`,
            }}
        >
            {/* Mouse-follow ambient spotlight */}
            <div style={{
                position: "absolute",
                left: mousePos.x - 350,
                top: mousePos.y - 350,
                width: 700, height: 700,
                borderRadius: "50%",
                background: `radial-gradient(circle, ${t.accent}07 0%, transparent 70%)`,
                pointerEvents: "none", zIndex: 0,
                transition: "left 1.2s cubic-bezier(0.25,0.46,0.45,0.94), top 1.2s cubic-bezier(0.25,0.46,0.45,0.94)",
            }} />

            {/* Decorative floating blobs */}
            <div style={{
                position: "absolute", top: -160, right: -100, width: 560, height: 560,
                borderRadius: "50%",
                background: `radial-gradient(circle, ${t.accent}07 0%, transparent 68%)`,
                pointerEvents: "none", zIndex: 0,
                animation: "floatBlob 14s ease-in-out infinite",
            }} />
            <div style={{
                position: "absolute", bottom: -100, left: -80, width: 440, height: 440,
                borderRadius: "50%",
                background: `radial-gradient(circle, ${t.accent}05 0%, transparent 68%)`,
                pointerEvents: "none", zIndex: 0,
                animation: "floatBlob 18s ease-in-out infinite reverse",
            }} />
            {/* Grid dot texture overlay */}
            <div style={{
                position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none",
                backgroundImage: `radial-gradient(${t.accent}10 1px, transparent 1px)`,
                backgroundSize: "40px 40px",
                maskImage: "radial-gradient(ellipse at center, rgba(0,0,0,0.15) 0%, transparent 75%)",
                WebkitMaskImage: "radial-gradient(ellipse at center, rgba(0,0,0,0.15) 0%, transparent 75%)",
            }} />

            <div style={{ maxWidth: 1300, margin: "0 auto", position: "relative", zIndex: 2 }}>

                {/* Header */}
                <div style={{
                    textAlign: "center",
                    marginBottom: "clamp(36px, 5vw, 60px)",
                    opacity: inView ? 1 : 0,
                    transform: inView ? "none" : "translateY(30px)",
                    transition: "all 0.75s cubic-bezier(0.16,1,0.3,1)",
                }}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginBottom: 14 }}>
                        <div style={{ width: 44, height: 1.5, background: `linear-gradient(90deg, transparent, ${t.accent})` }} />
                        <span style={{
                            fontFamily: "'Syne', sans-serif", fontSize: 10.5,
                            color: t.accent, letterSpacing: 3.5, textTransform: "uppercase", fontWeight: 700,
                        }}>Portfolio</span>
                        <div style={{ width: 44, height: 1.5, background: `linear-gradient(90deg, ${t.accent}, transparent)` }} />
                    </div>

                    <h2 style={{
                        fontFamily: "'Syne', sans-serif",
                        fontSize: "clamp(32px, 5vw, 60px)", fontWeight: 800,
                        color: t.text, letterSpacing: "-0.035em", lineHeight: 1.05, marginBottom: 14,
                    }}>
                        Featured{" "}
                        <span style={{
                            color: t.accent,
                            textShadow: `0 0 50px ${t.accent}44`,
                            position: "relative",
                        }}>
                            Works
                            {/* Underline accent */}
                            <span style={{
                                position: "absolute", bottom: -4, left: 0, right: 0, height: 3,
                                background: `linear-gradient(90deg, ${t.accent}cc, ${t.accent}44)`,
                                borderRadius: 2,
                                transform: inView ? "scaleX(1)" : "scaleX(0)",
                                transformOrigin: "left",
                                transition: "transform 0.8s cubic-bezier(0.16,1,0.3,1) 0.3s",
                                display: "block",
                            }} />
                        </span>
                    </h2>

                    <p style={{
                        color: t.text2, fontSize: "clamp(13px, 1.4vw, 15px)",
                        maxWidth: 390, margin: "0 auto 30px", lineHeight: 1.7,
                    }}>
                        Click any card to explore screenshots and technical details
                    </p>

                    {/* Filter */}
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 8, justifyContent: "center" }}>
                        {companies.map((company, ci) => (
                            <button
                                key={company}
                                onClick={() => setCompanyFilter(company)}
                                style={{
                                    padding: "7px 20px", borderRadius: 100,
                                    border: `1px solid ${companyFilter === company ? t.accent : t.border}`,
                                    background: companyFilter === company ? t.accentBg : "transparent",
                                    color: companyFilter === company ? t.accent : t.text2,
                                    fontSize: 12.5, fontWeight: companyFilter === company ? 700 : 500,
                                    cursor: "pointer", fontFamily: "'Syne', sans-serif",
                                    transition: "all 0.25s cubic-bezier(0.16,1,0.3,1)",
                                    boxShadow: companyFilter === company ? `0 0 20px ${t.accent}28` : "none",
                                    opacity: inView ? 1 : 0,
                                    transform: inView ? "translateY(0)" : "translateY(14px)",
                                    transitionDelay: `${ci * 55 + 200}ms`,
                                }}
                                onMouseEnter={e => {
                                    if (companyFilter !== company) {
                                        e.currentTarget.style.borderColor = t.accentBorder;
                                        e.currentTarget.style.color = t.accent;
                                        e.currentTarget.style.background = `${t.accentBg}66`;
                                    }
                                }}
                                onMouseLeave={e => {
                                    if (companyFilter !== company) {
                                        e.currentTarget.style.borderColor = t.border;
                                        e.currentTarget.style.color = t.text2;
                                        e.currentTarget.style.background = "transparent";
                                    }
                                }}
                            >
                                {company === "all" ? "All Projects" : company}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Grid */}
                <div
                    className="works-grid"
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(3, 1fr)",
                        gap: "clamp(12px, 2vw, 22px)",
                    }}
                >
                    {filtered.map((project, index) => (
                        <Card
                            key={project.id}
                            p={project}
                            idx={index}
                            vis={inView}
                            t={t}
                            isDark={isDark}
                            onOpen={() => setActive(project)}
                        />
                    ))}
                </div>
            </div>

            {active && (
                <Modal p={active} onClose={() => setActive(null)} t={t} isDark={isDark} />
            )}

            <style>{`
                @keyframes pulse-dot {
                    0%, 100% { opacity: 1; box-shadow: 0 0 5px currentColor; }
                    50%       { opacity: 0.45; box-shadow: 0 0 12px currentColor; }
                }
                @keyframes cardFadeUp {
                    from { opacity: 0; transform: translateY(36px) scale(0.96); }
                    to   { opacity: 1; transform: translateY(0) scale(1); }
                }
                @keyframes rippleOut {
                    from { transform: scale(0.1); opacity: 1; }
                    to   { transform: scale(3.5);  opacity: 0; }
                }
                @keyframes floatBlob {
                    0%,100% { transform: translate(0, 0) scale(1); }
                    33%     { transform: translate(28px, -22px) scale(1.06); }
                    66%     { transform: translate(-18px, 14px) scale(0.96); }
                }
                @media (max-width: 1000px) { .works-grid { grid-template-columns: repeat(2,1fr) !important; } }
                @media (max-width: 560px)  { .works-grid { grid-template-columns: 1fr !important; } }
            `}</style>
        </section>
    );
}