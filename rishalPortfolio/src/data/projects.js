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
import gym7 from "../assets/gymApp/gym7.jpeg";
import gym8 from "../assets/gymApp/gym8.jpeg";
import gym9 from "../assets/gymApp/gym9.jpeg";
import gym10 from "../assets/gymApp/gym10.jpeg";
import gym11 from "../assets/gymApp/gym11.jpeg";
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

export const STATUS_STYLES = {
    Live: { color: "#22C55E", bg: "rgba(34,197,94,0.12)", border: "rgba(34,197,94,0.30)", dot: true },
    Completed: { color: "#60A5FA", bg: "rgba(96,165,250,0.12)", border: "rgba(96,165,250,0.30)", dot: false },
    Delivered: { color: "#A78BFA", bg: "rgba(167,139,250,0.12)", border: "rgba(167,139,250,0.30)", dot: false },
};

export const PROJECTS = [
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
        tags: ["Flutter", "Dart", "REST API", "Provider", "JWT", "PDF Gen"],
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
        screenshots: [gym1, gym2, gym3, gym4, gym5, gym6, gym7, gym8, gym9, gym10, gym11],
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
