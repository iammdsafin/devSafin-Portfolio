import { ME } from "../data";
import Reveal from "./Reveal";
import SH from "./SH";

function Contact({ t, dark }) {
  return (
    <section id="contact" style={{ padding: "80px 5% 100px", background: t.bg, borderTop: `1px solid ${t.brd}`, position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: "-20%", left: "-10%", width: 400, height: 400, borderRadius: "50%", background: `radial-gradient(circle,rgba(${t.aRgb},.06) 0%,transparent 70%)`, pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "-20%", right: "-10%", width: 320, height: 320, borderRadius: "50%", background: `radial-gradient(circle,rgba(77,166,255,.06) 0%,transparent 70%)`, pointerEvents: "none" }} />

      <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <Reveal><SH num="05" title="Let's Connect" t={t} /></Reveal>

        <div className="contact-grid" style={{ display: "grid", gridTemplateColumns: "1fr 340px", gap: 48, alignItems: "start" }}>
          <Reveal>
            <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "clamp(.88rem,1.4vw,1rem)", lineHeight: 1.85, color: t.sub, fontWeight: 400, marginBottom: 28 }}>
              Open to new roles, collaborations, and interesting engineering challenges. Based in Dhaka - available globally for remote opportunities.
            </p>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 32 }}>
              {[
                { l: "✉ Email Me", h: `mailto:${ME.email}`, p: true },
                { l: "LinkedIn ↗", h: ME.linkedin },
                { l: "GitHub ↗",   h: ME.github },
              ].map(b => (
                <a key={b.l} href={b.h} target={b.h?.startsWith("http") ? "_blank" : undefined} data-h
                  style={{ fontFamily: "'Inter',sans-serif", fontWeight: 600, fontSize: ".85rem", padding: "11px 24px", borderRadius: 40, background: b.p ? t.accent : "transparent", color: b.p ? (dark ? "#0b0d14" : "#fff") : t.txt, border: `1.5px solid ${b.p ? t.accent : t.brd2}`, transition: "opacity .18s, transform .18s", textDecoration: "none" }}>
                  {b.l}
                </a>
              ))}
            </div>
          </Reveal>

          <Reveal d={.1}>
            <div style={{ background: t.card, border: `1px solid ${t.cardBd}`, borderRadius: 16, padding: "22px 20px", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg,${t.accent},${t.blue})` }} />
              <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: ".6rem", letterSpacing: ".18em", textTransform: "uppercase", color: t.dim, marginBottom: 16 }}>Quick Info</div>
              {[
                { l: "Availability",   v: "Full-time / Remote" },
                { l: "Response time",  v: "Within 24 hours" },
                { l: "Languages",      v: "English | Bengali " },
                { l: "Time zone",      v: "GMT+6 (Dhaka)" },
              ].map(r => (
                <div key={r.l} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 0", borderBottom: `1px solid ${t.brd}` }}>
                  <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: ".66rem", color: t.dim }}>{r.l}</span>
                  <span style={{ fontFamily: "'Inter',sans-serif", fontSize: ".84rem", color: t.txt, fontWeight: 500 }}>{r.v}</span>
                </div>
              ))}
              <div style={{ paddingTop: 14, display: "flex", gap: 8 }}>
                <a href={ME.github} target="_blank" data-h style={{ flex: 1, padding: "9px 0", textAlign: "center", fontFamily: "'Inter',sans-serif", fontWeight: 600, fontSize: ".76rem", color: t.txt, background: t.bg, border: `1px solid ${t.brd}`, borderRadius: 9, textDecoration: "none" }}>GitHub</a>
                <a href={ME.linkedin} target="_blank" data-h style={{ flex: 1, padding: "9px 0", textAlign: "center", fontFamily: "'Inter',sans-serif", fontWeight: 600, fontSize: ".76rem", color: t.txt, background: t.bg, border: `1px solid ${t.brd}`, borderRadius: 9, textDecoration: "none" }}>LinkedIn</a>
              </div>
            </div>
          </Reveal>

          {/* Contact info cards */}
          <Reveal d={.05}>
            {[
              { icon: "📍", l: "Location", v: ME.location },
              { icon: "✉️", l: "Email",    v: ME.email, h: `mailto:${ME.email}` },
              { icon: "📞", l: "Phone",    v: ME.phone },
            ].map(r => (
              <div key={r.l} style={{ display: "flex", gap: 12, alignItems: "center", padding: "10px 0", borderBottom: `1px solid ${t.brd}` }}>
                <span style={{ fontSize: ".95rem", width: 26, textAlign: "center", flexShrink: 0 }}>{r.icon}</span>
                <div>
                  <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: ".56rem", letterSpacing: ".16em", textTransform: "uppercase", color: t.dim, marginBottom: 2 }}>{r.l}</div>
                  {r.h
                    ? <a href={r.h} style={{ fontFamily: "'Inter',sans-serif", fontSize: ".88rem", color: t.accent, fontWeight: 500, textDecoration: "none" }}>{r.v}</a>
                    : <span style={{ fontFamily: "'Inter',sans-serif", fontSize: ".88rem", color: t.txt }}>{r.v}</span>
                  }
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default Contact;
