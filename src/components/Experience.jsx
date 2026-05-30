import { useState } from "react";
import { EXP } from "../data";
import Reveal from "./Reveal";
import SH from "./SH";

function Experience({ t }) {
  const [open, setOpen] = useState(0);
  return (
    <section id="experience" style={{ padding: "80px 5%", background: t.bg, borderTop: `1px solid ${t.brd}` }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <Reveal><SH num="03" title="Work Experience" t={t} /></Reveal>

        <div className="exp-grid" style={{ display: "grid", gridTemplateColumns: "280px 1fr", gap: 10, alignItems: "start" }}>
          {/* Job list */}
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            {EXP.map((e, i) => (
              <Reveal key={i} d={i * .09}>
                <button onClick={() => setOpen(i)} data-h
                  style={{ width: "100%", padding: "16px 18px", textAlign: "left", background: open === i ? t.card : "transparent", border: `1.5px solid ${open === i ? t.accent : t.brd}`, borderLeft: `4px solid ${open === i ? t.accent : t.dim}`, borderRadius: 0, transition: "all .2s" }}>
                  <div style={{ fontFamily: "'Inter',sans-serif", fontWeight: 600, fontSize: ".9rem", color: open === i ? t.txt : t.sub, lineHeight: 1.2, marginBottom: 4 }}>{e.role}</div>
                  <div style={{ fontFamily: "'Inter',sans-serif", fontSize: ".8rem", color: t.accent, fontWeight: 500, marginBottom: 6 }}>{e.co}</div>
                  <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: ".65rem", color: t.dim }}>{e.period}</div>
                  {e.now && (
                    <div style={{ display: "inline-flex", alignItems: "center", gap: 5, marginTop: 6, fontFamily: "'Inter',sans-serif", fontWeight: 500, fontSize: ".65rem", color: t.accent }}>
                      <span style={{ width: 5, height: 5, borderRadius: "50%", background: t.accent, display: "inline-block", animation: "pulse 2s infinite" }} />Current
                    </div>
                  )}
                </button>
              </Reveal>
            ))}
          </div>

          {/* Detail */}
          <Reveal d={.08}>
            <div style={{ background: t.card, border: `1px solid ${t.cardBd}`, borderRadius: 16, overflow: "hidden" }}>
              <div style={{ height: 3, background: `linear-gradient(90deg,${t.accent},${t.blue})` }} />
              <div style={{ padding: "24px 26px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 10, marginBottom: 10 }}>
                  <div>
                    <h3 style={{ fontFamily: "'Inter',sans-serif", fontWeight: 700, fontSize: "clamp(1rem,2.5vw,1.4rem)", color: t.txt, letterSpacing: "-.02em", lineHeight: 1.1, marginBottom: 5 }}>{EXP[open].role}</h3>
                    <div style={{ fontFamily: "'Inter',sans-serif", fontSize: ".85rem", color: t.accent, fontWeight: 500 }}>{EXP[open].co} · {EXP[open].loc}</div>
                  </div>
                  <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: ".68rem", color: t.sub, background: t.bg, border: `1px solid ${t.brd}`, padding: "5px 10px", borderRadius: 6, alignSelf: "flex-start", whiteSpace: "nowrap" }}>{EXP[open].period}</span>
                </div>

                <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 18 }}>
                  {EXP[open].tags.map(tag => (
                    <span key={tag} style={{ fontFamily: "'Inter',sans-serif", fontWeight: 500, fontSize: ".7rem", color: t.accent, background: `rgba(${t.aRgb},.1)`, border: `1px solid rgba(${t.aRgb},.2)`, padding: "3px 9px", borderRadius: 5 }}>{tag}</span>
                  ))}
                </div>

                <div style={{ borderTop: `1px solid ${t.brd}`, paddingTop: 14 }}>
                  {EXP[open].points.map((pt, i) => (
                    <div key={i} style={{ display: "flex", gap: 10, padding: "9px 0", borderBottom: i < EXP[open].points.length - 1 ? `1px solid ${t.brd}` : "none", animation: "fadeUp .35s both", animationDelay: `${i * .05}s` }}>
                      <span style={{ color: t.accent, flexShrink: 0, fontSize: ".75rem", marginTop: 3, lineHeight: 1 }}>▸</span>
                      <span style={{ fontFamily: "'Inter',sans-serif", fontSize: ".86rem", lineHeight: 1.75, color: t.sub, fontWeight: 400 }}>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default Experience;
