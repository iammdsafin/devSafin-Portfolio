import { EDU, CERTS } from "../data";
import Reveal from "./Reveal";
import SH from "./SH";

function Education({ t }) {
  return (
    <section id="education" style={{ padding: "80px 5%", background: t.panel, borderTop: `1px solid ${t.brd}` }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <Reveal><SH num="04" title="Education & Certifications" t={t} /></Reveal>

        {/* Timeline */}
        <div style={{ position: "relative", paddingLeft: 28, marginBottom: 52 }}>
          <div style={{ position: "absolute", left: 7, top: 0, bottom: 0, width: 1.5, background: `linear-gradient(to bottom,${t.accent},${t.blue},transparent)` }} />
          {EDU.map((e, i) => (
            <Reveal key={i} d={i * .1}>
              <div style={{ position: "relative", marginBottom: i < EDU.length - 1 ? 10 : 0, paddingLeft: 22 }}>
                <div style={{ position: "absolute", left: -25, top: 20, width: 11, height: 11, borderRadius: "50%", background: i === 0 ? t.accent : t.panel, border: `2px solid ${i === 0 ? t.accent : t.dim}` }} />
                <div style={{ display: "grid", gridTemplateColumns: "68px 1fr", background: t.card, border: `1px solid ${t.cardBd}`, borderRadius: 12, overflow: "hidden", transition: "border-color .2s" }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = `rgba(${t.aRgb},.3)`}
                  onMouseLeave={e => e.currentTarget.style.borderColor = t.cardBd}>
                  <div style={{ padding: "16px 10px", background: i === 0 ? `rgba(${t.aRgb},.07)` : "transparent", borderRight: `1px solid ${t.brd}`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <span style={{ fontFamily: "'Inter',sans-serif", fontWeight: 700, fontSize: "1.2rem", color: i === 0 ? t.accent : t.dim, letterSpacing: "-.03em" }}>{e.yr}</span>
                  </div>
                  <div style={{ padding: "16px 20px" }}>
                    <div style={{ fontFamily: "'Inter',sans-serif", fontWeight: 600, fontSize: ".9rem", color: t.txt, marginBottom: 5 }}>{e.deg}</div>
                    <div style={{ fontFamily: "'Inter',sans-serif", fontSize: ".8rem", color: t.sub }}>{e.school}</div>
                    <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: ".62rem", color: t.dim, letterSpacing: ".08em", marginTop: 3 }}>{e.loc}</div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Certs */}
        <Reveal d={.15}>
          <h3 style={{ fontFamily: "'Inter',sans-serif", fontWeight: 700, fontSize: "1.2rem", color: t.txt, letterSpacing: "-.02em", marginBottom: 16 }}>Certifications</h3>
          <div className="cert-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 8 }}>
            {CERTS.map((c, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, padding: "14px 16px", background: t.card, border: `1px solid ${t.cardBd}`, borderRadius: 12, borderLeft: `3px solid ${c.color}`, transition: "transform .18s, box-shadow .18s" }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = `0 4px 14px ${c.color}22`; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}>
                <div style={{ width: 34, height: 34, borderRadius: 9, background: `${c.color}18`, border: `1px solid ${c.color}33`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <svg viewBox="0 0 24 24" fill="none" style={{ width: 16, height: 16 }}>
                    <path d="M12 15l-4 4 1-5L4 9l5-.5L12 4l3 4.5L20 9l-5 5 1 5z" stroke={c.color} strokeWidth="1.8" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <div style={{ fontFamily: "'Inter',sans-serif", fontWeight: 600, fontSize: ".84rem", color: t.txt, marginBottom: 2 }}>{c.name}</div>
                  <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: ".62rem", letterSpacing: ".1em", textTransform: "uppercase", color: t.dim }}>{c.from}</div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default Education;
