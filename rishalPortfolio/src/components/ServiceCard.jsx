// import { useState } from "react";

// export default function ServiceCard({ title, desc, tools, badge, accent = "var(--accent)", delay = 0 }) {
//     const [hov, setHov] = useState(false);

//     return (
//         <div
//             className="card"
//             onMouseEnter={() => setHov(true)}
//             onMouseLeave={() => setHov(false)}
//             style={{
//                 padding: "32px 28px",
//                 cursor: "default",
//                 opacity: 0,
//                 animation: `fadeUp 0.6s ease ${delay}ms both`,
//             }}
//         >
//             {/* Shimmer on hover */}
//             {hov && (
//                 <div
//                     style={{
//                         position: "absolute",
//                         inset: 0,
//                         background: "linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.04) 50%, transparent 70%)",
//                         animation: "shimmer 0.8s ease",
//                         pointerEvents: "none",
//                     }}
//                 />
//             )}

//             <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 22 }}>
//                 <div style={{
//                     width: 50, height: 50, borderRadius: 12,
//                     background: `${accent}12`,
//                     border: `1px solid ${accent}30`,
//                     display: "flex", alignItems: "center", justifyContent: "center",
//                     transition: "transform 0.3s",
//                     transform: hov ? "scale(1.08) rotate(-3deg)" : "scale(1)",
//                 }}>
//                     <div style={{ width: 22, height: 22, borderRadius: 4, background: accent, opacity: 0.85 }} />
//                 </div>
//                 <span style={{
//                     fontSize: 10, fontWeight: 700,
//                     padding: "4px 11px", borderRadius: 100,
//                     background: `${accent}10`,
//                     border: `1px solid ${accent}25`,
//                     color: accent,
//                     fontFamily: "'JetBrains Mono', monospace",
//                     letterSpacing: 1.5,
//                     textTransform: "uppercase",
//                 }}>{badge}</span>
//             </div>

//             <h3 style={{
//                 fontSize: 18, fontWeight: 700,
//                 color: "var(--text)", marginBottom: 10,
//                 transition: "color 0.2s",
//             }}>{title}</h3>

//             <p style={{ color: "var(--text2)", fontSize: 14, lineHeight: 1.78, marginBottom: 22 }}>{desc}</p>

//             <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
//                 {tools.map((t) => <span key={t} className="tag">{t}</span>)}
//             </div>
//         </div>
//     );
// }