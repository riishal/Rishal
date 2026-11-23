import os
from reportlab.lib.pagesizes import A4
from reportlab.lib import colors
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, Image, HRFlowable, PageBreak
)
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from PIL import Image as PILImage

PAGE_WIDTH, PAGE_HEIGHT = A4

pdf_path = r"G:\rishal\rishalPortfolio\public\RISHAL.pdf"
dist_pdf_path = r"G:\rishal\rishalPortfolio\dist\RISHAL.pdf"
photo_path = r"G:\rishal\rishalPortfolio\src\assets\profile.jpg"

header_photo_path = r"G:\rishal\rishalPortfolio\src\assets\resume_avatar.jpg"
im = PILImage.open(photo_path)
W, H = im.size
avatar = im.crop((int(W*0.06), int(H*0.01), int(W*0.94), int(H*0.65)))
avatar.save(header_photo_path, quality=95)

doc = SimpleDocTemplate(
    pdf_path,
    pagesize=A4,
    leftMargin=36,
    rightMargin=36,
    topMargin=28,
    bottomMargin=28
)

styles = getSampleStyleSheet()

primary_color = colors.HexColor("#111827")
accent_color = colors.HexColor("#15803d")
body_color = colors.HexColor("#374151")
muted_color = colors.HexColor("#4b5563")
line_color = colors.HexColor("#d1d5db")

name_style = ParagraphStyle(
    "Name",
    parent=styles["Normal"],
    fontName="Helvetica-Bold",
    fontSize=22,
    leading=26,
    textColor=primary_color,
    spaceAfter=2
)

title_style = ParagraphStyle(
    "Title",
    parent=styles["Normal"],
    fontName="Helvetica-Bold",
    fontSize=12.5,
    leading=15,
    textColor=colors.HexColor("#1f2937"),
    spaceAfter=4
)

contact_style = ParagraphStyle(
    "Contact",
    parent=styles["Normal"],
    fontName="Helvetica",
    fontSize=8.5,
    leading=12,
    textColor=body_color
)

section_heading_style = ParagraphStyle(
    "SectionHeading",
    parent=styles["Normal"],
    fontName="Helvetica-Bold",
    fontSize=10.5,
    leading=13,
    textColor=primary_color,
    spaceBefore=5,
    spaceAfter=3,
    textTransform="uppercase"
)

subheading_style = ParagraphStyle(
    "SubHeading",
    parent=styles["Normal"],
    fontName="Helvetica-Bold",
    fontSize=9.5,
    leading=12.5,
    textColor=primary_color,
    spaceAfter=1
)

submeta_style = ParagraphStyle(
    "SubMeta",
    parent=styles["Normal"],
    fontName="Helvetica",
    fontSize=8.5,
    leading=11.5,
    textColor=muted_color,
    spaceAfter=2.5
)

body_text_style = ParagraphStyle(
    "BodyText",
    parent=styles["Normal"],
    fontName="Helvetica",
    fontSize=8.8,
    leading=12.2,
    textColor=body_color,
    spaceAfter=3
)

bullet_style = ParagraphStyle(
    "BulletText",
    parent=styles["Normal"],
    fontName="Helvetica",
    fontSize=8.5,
    leading=11.6,
    textColor=body_color,
    leftIndent=11,
    firstLineIndent=-9,
    spaceAfter=2.2
)

skill_category_style = ParagraphStyle(
    "SkillCategory",
    parent=styles["Normal"],
    fontName="Helvetica-Bold",
    fontSize=8.6,
    leading=11.8,
    textColor=primary_color
)

skill_val_style = ParagraphStyle(
    "SkillValue",
    parent=styles["Normal"],
    fontName="Helvetica",
    fontSize=8.5,
    leading=11.8,
    textColor=body_color
)

story = []

# ================= PAGE 1 =================

# Header table
avatar_img = Image(header_photo_path, width=82, height=98)

header_text = [
    Paragraph("RISHAL TT", name_style),
    Paragraph("Flutter Developer", title_style),
    Spacer(1, 2),
    HRFlowable(width="100%", thickness=0.75, color=line_color, spaceBefore=0, spaceAfter=4),
    Paragraph(
        "<b>Location:</b> Malappuram, Kerala, India &nbsp;&nbsp;|&nbsp;&nbsp; "
        "<b>Phone:</b> <a href='tel:+917592895143' color='#15803d'>+91 7592895143</a> &nbsp;&nbsp;|&nbsp;&nbsp; "
        "<b>Email:</b> <a href='mailto:riishaltt@gmail.com' color='#15803d'>riishaltt@gmail.com</a>",
        contact_style
    ),
    Paragraph(
        "<b>Portfolio:</b> <a href='https://rishal.vercel.app' color='#15803d'>rishal.vercel.app</a> &nbsp;&nbsp;|&nbsp;&nbsp; "
        "<b>GitHub:</b> <a href='https://github.com/riishal' color='#15803d'>github.com/riishal</a> &nbsp;&nbsp;|&nbsp;&nbsp; "
        "<b>LinkedIn:</b> <a href='https://www.linkedin.com/in/rishal-tt-9bb017262' color='#15803d'>rishal-tt</a>",
        contact_style
    )
]

header_table = Table([[avatar_img, header_text]], colWidths=[90, 433])
header_table.setStyle(TableStyle([
    ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
    ('LEFTPADDING', (1,0), (1,0), 10),
    ('RIGHTPADDING', (0,0), (-1,-1), 0),
    ('TOPPADDING', (0,0), (-1,-1), 0),
    ('BOTTOMPADDING', (0,0), (-1,-1), 0),
]))
story.append(header_table)
story.append(Spacer(1, 4))

# Professional Summary
story.append(HRFlowable(width="100%", thickness=1, color=primary_color, spaceBefore=2, spaceAfter=3))
story.append(Paragraph("PROFESSIONAL SUMMARY", section_heading_style))
story.append(Paragraph(
    "Results-driven <b>Flutter Developer with 4+ years of hands-on experience</b> architecting, engineering, and shipping scalable cross-platform mobile and web applications for Android, iOS, and Web. Proven track record delivering <b>16+ production-grade applications</b> across enterprise ERP systems, real-time logistics tracking, warehouse management, retail POS, and customer loyalty platforms. Deep expertise in <b>Clean Architecture, BLoC, Riverpod</b>, offline-first data sync (Hive/SQLite), WebSockets, and Firebase infrastructure. Adept at turning complex business requirements into fluid, 60fps applications published to the Google Play Store.",
    body_text_style
))
story.append(Spacer(1, 3))

# Technical Skills
story.append(HRFlowable(width="100%", thickness=1, color=primary_color, spaceBefore=2, spaceAfter=3))
story.append(Paragraph("TECHNICAL SKILLS", section_heading_style))

skills_data = [
    [Paragraph("Mobile Development:", skill_category_style), Paragraph("Flutter, Dart, Android SDK, iOS Development, Flutter Web, Cross-Platform Architecture", skill_val_style)],
    [Paragraph("Architecture & State:", skill_category_style), Paragraph("Clean Architecture, BLoC, Riverpod, Provider, GetX, MVC, Repository Pattern, Dependency Injection", skill_val_style)],
    [Paragraph("Backend & Cloud:", skill_category_style), Paragraph("RESTful APIs, WebSockets, Supabase, Firebase (Firestore, Auth, Storage, Cloud Messaging, FCM)", skill_val_style)],
    [Paragraph("Databases & Storage:", skill_category_style), Paragraph("Hive (Offline Sync Queues), SQLite, PostgreSQL (Supabase), Shared Preferences, Secure Storage", skill_val_style)],
    [Paragraph("Integrations & Hardware:", skill_category_style), Paragraph("Google Maps SDK & Geolocation, Thermal Bluetooth/USB Printing, Dynamic PDF Generation, Payment Gateways", skill_val_style)],
    [Paragraph("Tools & DevOps:", skill_category_style), Paragraph("Git, GitHub, CI/CD, Fastlane, Google Play Console, Postman, Vite, Node.js", skill_val_style)],
    [Paragraph("UI/UX & Optimization:", skill_category_style), Paragraph("Material 3, Responsive Framework, Lottie Animations, Pixel-Perfect UI, 40% Cold-Start Optimizations", skill_val_style)],
]

skills_table = Table(skills_data, colWidths=[126, 397])
skills_table.setStyle(TableStyle([
    ('VALIGN', (0,0), (-1,-1), 'TOP'),
    ('TOPPADDING', (0,0), (-1,-1), 1.2),
    ('BOTTOMPADDING', (0,0), (-1,-1), 1.2),
    ('LEFTPADDING', (0,0), (-1,-1), 0),
    ('RIGHTPADDING', (0,0), (-1,-1), 0),
]))
story.append(skills_table)
story.append(Spacer(1, 4))

# Work Experience (Part 1 on Page 1)
story.append(HRFlowable(width="100%", thickness=1, color=primary_color, spaceBefore=2, spaceAfter=3))
story.append(Paragraph("WORK EXPERIENCE", section_heading_style))

# 1. EBSOR
ebsor_header = Table([
    [Paragraph("Flutter Developer — EBSOR Infosystems", subheading_style), Paragraph("May 2025 – Present", submeta_style)],
    [Paragraph("Enterprise & Cloud ERP Solutions · Remote / Manjeri, India", submeta_style), Paragraph("Full-time", submeta_style)]
], colWidths=[384, 139])
ebsor_header.setStyle(TableStyle([('TOPPADDING', (0,0), (-1,-1), 0), ('BOTTOMPADDING', (0,0), (-1,-1), 1), ('LEFTPADDING', (0,0), (-1,-1), 0)]))
story.append(ebsor_header)

ebsor_bullets = [
    "Architected and deployed <b>ECSO Logistics</b> on Google Play Store, managing full cargo lifecycles with Google Maps SDK, WebSockets, and real-time tracking.",
    "Engineered <b>zpick</b>, an industrial warehouse sales-order picking app with barcode scanning, SKU verification, and offline-first Hive queue sync.",
    "Developed <b>Metrix</b>, an enterprise employee self-service app for Code7 ERP with dynamic QR check-in, biometric login, and automated leave approvals.",
    "Built <b>Inspec QC Monitor</b>, digitizing factory quality audits with structured inspection checklists and real-time manager compliance dashboards.",
    "Engineered automated PDF invoice booking and instant Bluetooth/USB thermal printing modules for dispatchers and branch managers.",
    "Optimized network payloads and state rebuilds, achieving a <b>40% reduction in app load times</b> and high crash-free session metrics."
]
for b in ebsor_bullets:
    story.append(Paragraph(f"• {b}", bullet_style))

story.append(Spacer(1, 4))

# 2. FREELANCE
freelance_header = Table([
    [Paragraph("Flutter Developer (Freelance)", subheading_style), Paragraph("Feb 2024 – Apr 2025", submeta_style)],
    [Paragraph("Independent Client Contracts · Remote / Multiple Clients", submeta_style), Paragraph("Freelance", submeta_style)]
], colWidths=[384, 139])
freelance_header.setStyle(TableStyle([('TOPPADDING', (0,0), (-1,-1), 0), ('BOTTOMPADDING', (0,0), (-1,-1), 1), ('LEFTPADDING', (0,0), (-1,-1), 0)]))
story.append(freelance_header)

freelance_bullets = [
    "Developed and deployed <b>SalesMate POS</b> (live in 3+ retail shops) with rapid billing, sales analytics, top-selling trackers, and thermal receipt printing.",
    "Designed and built <b>Albaik App</b>, an integrated attendance, staff shift tracking, and employee management system with custom reporting.",
    "Engineered <b>CoreConnect</b>, a full business operations suite handling sales orders, supplier purchases, expense ledgers, and A4 PDF export.",
    "Created <b>Site Diary</b>, enabling construction engineers to log daily logs, capture annotated photo evidence, and track manpower on site.",
    "Implemented clean architecture and Provider/Riverpod state management for robust maintainability and testability."
]
for b in freelance_bullets:
    story.append(Paragraph(f"• {b}", bullet_style))

# ================= PAGE BREAK =================
story.append(PageBreak())

# ================= PAGE 2 =================

story.append(HRFlowable(width="100%", thickness=1, color=primary_color, spaceBefore=0, spaceAfter=4))
story.append(Paragraph("WORK EXPERIENCE (CONTINUED)", section_heading_style))

# 3. XPERTCONSORTIUM
xp_header = Table([
    [Paragraph("Software Developer — XpertConsortium Technologies LLP", subheading_style), Paragraph("May 2023 – Jan 2024", submeta_style)],
    [Paragraph("Mobile & Web Solutions · Calicut, India", submeta_style), Paragraph("Full-time", submeta_style)]
], colWidths=[384, 139])
xp_header.setStyle(TableStyle([('TOPPADDING', (0,0), (-1,-1), 0), ('BOTTOMPADDING', (0,0), (-1,-1), 1), ('LEFTPADDING', (0,0), (-1,-1), 0)]))
story.append(xp_header)

xp_bullets = [
    "Developed and maintained <b>Learn Easy</b> educational mobile application, integrating secure video streaming, PDF viewers, and interactive quizzes.",
    "Implemented RESTful API integrations and Firebase backend services ensuring high performance and synchronized offline persistence.",
    "Collaborated with UI/UX designers to craft responsive, human-centered Flutter interfaces adhering to Material design guidelines."
]
for b in xp_bullets:
    story.append(Paragraph(f"• {b}", bullet_style))

story.append(Spacer(1, 4))

# 4. EDAPT
edapt_header = Table([
    [Paragraph("Flutter Developer Intern — Edapt", subheading_style), Paragraph("Sep 2022 – Mar 2023", submeta_style)],
    [Paragraph("EdTech Solutions · Malappuram, India", submeta_style), Paragraph("Internship", submeta_style)]
], colWidths=[384, 139])
edapt_header.setStyle(TableStyle([('TOPPADDING', (0,0), (-1,-1), 0), ('BOTTOMPADDING', (0,0), (-1,-1), 1), ('LEFTPADDING', (0,0), (-1,-1), 0)]))
story.append(edapt_header)

edapt_bullets = [
    "Mastered Dart fundamentals, reactive state management, Firebase Auth, and RESTful API consumption.",
    "Engineered an interactive Quiz App and built an E-commerce prototype with product catalog, cart, and checkout flows."
]
for b in edapt_bullets:
    story.append(Paragraph(f"• {b}", bullet_style))

story.append(Spacer(1, 6))

# FEATURED PROJECTS
story.append(HRFlowable(width="100%", thickness=1, color=primary_color, spaceBefore=2, spaceAfter=4))
story.append(Paragraph("FEATURED PROJECTS & APPLICATIONS", section_heading_style))

projects_list = [
    ("ECSO – Logistics & Courier Platform", "Google Play Store", "Real-time cargo shipment tracking via WebSockets, branch management, dispatch booking, and automated PDF invoicing. Built with Flutter, Provider, and REST APIs."),
    ("zpick – Warehouse Order Picking App", "Enterprise Deployed", "High-speed order fulfillment app for warehouse pickers with barcode SKU verification, bin location navigation, and offline-first Hive queue sync with Code7 ERP."),
    ("Metrix – Code7 HR & Attendance App", "Live Enterprise Solution", "Official employee companion app with dynamic QR clock-in/out, biometric security, break tracking, punch corrections, and payroll slip integrations."),
    ("SalesMate – Smart Retail POS", "Live in 3+ Active Shops", "Complete retail POS billing and analytics app supporting Bluetooth/USB thermal printing, sales performance dashboards, and Web version reporting."),
    ("Inspec – Quality Control & Monitoring", "Google Play Store", "Manufacturing quality assurance app replacing paper checklists with digital audit workflows, photo defect captures, and real-time manager dashboards."),
    ("Noor Habits & MoneyMentor", "Production Apps", "Personal finance and routine tracking apps featuring automated SMS bank transaction detection, EMI schedule tracking, habit streak analytics, and Supabase cloud sync.")
]

for title, tag, desc in projects_list:
    proj_table = Table([
        [Paragraph(f"<b>{title}</b>", subheading_style), Paragraph(f"<i>{tag}</i>", submeta_style)],
        [Paragraph(desc, body_text_style), ""]
    ], colWidths=[384, 139])
    proj_table.setStyle(TableStyle([
        ('SPAN', (0,1), (1,1)),
        ('TOPPADDING', (0,0), (-1,-1), 1),
        ('BOTTOMPADDING', (0,0), (-1,-1), 1.5),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
    ]))
    story.append(proj_table)
    story.append(Spacer(1, 2))

story.append(Spacer(1, 4))

# KEY ACHIEVEMENTS
story.append(HRFlowable(width="100%", thickness=1, color=primary_color, spaceBefore=2, spaceAfter=4))
story.append(Paragraph("KEY HIGHLIGHTS & ACHIEVEMENTS", section_heading_style))

achievements = [
    "<b>16+ Production Apps Shipped:</b> Successfully delivered cross-platform solutions across enterprise logistics, ERP, retail POS, and consumer apps.",
    "<b>40% Performance Optimization:</b> Reduced cold-start times and network latency across core ERP modules through payload optimization and efficient widget trees.",
    "<b>Offline-First Engineering:</b> Implemented rock-solid zero-downtime offline queues using Hive and SQLite in industrial warehouse settings."
]
for ach in achievements:
    story.append(Paragraph(f"• {ach}", bullet_style))

story.append(Spacer(1, 6))

# EDUCATION & LANGUAGES
story.append(HRFlowable(width="100%", thickness=1, color=primary_color, spaceBefore=2, spaceAfter=4))
story.append(Paragraph("EDUCATION & LANGUAGES", section_heading_style))

edu_lang_data = [
    [
        Paragraph("<b>Bachelor of Computer Applications (BCA)</b>", subheading_style),
        Paragraph("<b>Languages:</b>", subheading_style)
    ],
    [
        Paragraph("Indira Gandhi National Open University (IGNOU) · <b>Graduated (July 2024)</b>", body_text_style),
        Paragraph("English (Professional Working Proficiency)<br/>Malayalam (Native)", body_text_style)
    ],
    [
        Paragraph("<b>Higher Secondary Education – Computer Commerce</b>", subheading_style),
        ""
    ],
    [
        Paragraph("Board of Higher Secondary Examination, Kerala", body_text_style),
        ""
    ]
]
edu_table = Table(edu_lang_data, colWidths=[340, 183])
edu_table.setStyle(TableStyle([
    ('TOPPADDING', (0,0), (-1,-1), 1),
    ('BOTTOMPADDING', (0,0), (-1,-1), 1),
    ('LEFTPADDING', (0,0), (-1,-1), 0),
]))
story.append(edu_table)

doc.build(story)
print("PDF built successfully!")

import pypdf
reader = pypdf.PdfReader(pdf_path)
print("Final Page Count:", len(reader.pages))

import shutil
shutil.copyfile(pdf_path, dist_pdf_path)
print("Copied to dist/RISHAL.pdf")
