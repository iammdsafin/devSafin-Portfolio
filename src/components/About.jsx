import { ME } from "../data";
import Particles from "./Particles";
import Typed from "./Typed";

function About({ t, dark }) {
  return (
    <section id="about" style={{ minHeight: "100vh", display: "flex", alignItems: "center", padding: "80px 5% 100px", background: t.bg, position: "relative", overflow: "hidden" }}>
      <Particles t={t} />

      <div style={{ maxWidth: 1100, margin: "0 auto", width: "100%", position: "relative", zIndex: 2 }}>
        <div className="two-col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5%", alignItems: "center" }}>

          {/* Left */}
          <div>
            <div className="a0" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: `rgba(${t.aRgb},.1)`, border: `1px solid rgba(${t.aRgb},.22)`, padding: "7px 15px", borderRadius: 40, marginBottom: 26 }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: t.accent, display: "inline-block", animation: "pulse 2s infinite" }} />
              <span style={{ fontFamily: "'Inter',sans-serif", fontWeight: 500, fontSize: ".76rem", color: t.accent, letterSpacing: ".03em" }}>Available for opportunities</span>
            </div>

            <h1 className="a1" style={{ fontFamily: "'Inter',sans-serif", fontWeight: 800, fontSize: "clamp(2.6rem,7vw,5.5rem)", lineHeight: .95, letterSpacing: "-.04em", color: t.txt, marginBottom: 16 }}>
              Md. Safin
            </h1>

            <div className="a2" style={{ fontFamily: "'JetBrains Mono',monospace", fontWeight: 400, fontSize: "clamp(.8rem,1.5vw,.95rem)", color: t.accent, marginBottom: 20, lineHeight: 1.6 }}>
              &gt; <Typed text={ME.title} />
            </div>

            <div className="a3" style={{ fontFamily: "'Inter',sans-serif", fontSize: "clamp(.88rem,1.4vw,1rem)", lineHeight: 1.85, color: t.sub, maxWidth: 480, marginBottom: 36, fontWeight: 400 }}>
              {ME.bio.split("\n\n").map((para, i) => (
                <p key={i} style={{ margin: i === 0 ? 0 : "0.8rem 0 0" }}>{para}</p>
              ))}
            </div>

            <div className="a4" style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              {[
                { label: "Get In Touch", href: `mailto:${ME.email}`, primary: true },
                { label: "LinkedIn ↗", href: ME.linkedin },
                { label: "GitHub ↗",   href: ME.github },
              ].map(b => (
                <a key={b.label} href={b.href} target={b.href.startsWith("http") ? "_blank" : undefined} data-h
                  style={{ fontFamily: "'Inter',sans-serif", fontWeight: 600, fontSize: ".85rem", padding: "11px 24px", borderRadius: 40, display: "inline-block", background: b.primary ? t.accent : "transparent", color: b.primary ? (dark ? "#0b0d14" : "#fff") : t.txt, border: `1.5px solid ${b.primary ? t.accent : t.brd2}`, transition: "opacity .18s, transform .18s" }}>
                  {b.label}
                </a>
              ))}
            </div>
          </div>

          {/* Right */}
          <div style={{ display: "flex", flexDirection: "column", gap: 12, width: "100%", marginTop: "24px" }}>
            {[
              { n: "3+", l: "YEARS EXPERIENCE" },
              { n: "3",  l: "COMPANIES" },
              { n: "3.50", l: "CGPA" },
              { n: "4",  l: "CERTIFICATIONS" },
            ].map(s => (
              <div key={s.l} style={{ background: t.card, border: `1px solid ${t.cardBd}`, padding: "18px 20px", transition: "border-color .2s, transform .2s" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = `rgba(${t.aRgb},.35)`; e.currentTarget.style.transform = "translateX(-3px)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = t.cardBd; e.currentTarget.style.transform = "none"; }}>
                <div style={{ fontFamily: "'JetBrains Mono',monospace", fontWeight: 500, fontSize: "1.9rem", color: t.accent, lineHeight: 1, marginBottom: 5 }}>{s.n}</div>
                <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: ".6rem", letterSpacing: ".18em", color: t.sub, textTransform: "uppercase" }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div style={{ position: "absolute", bottom: 90, left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 5, animation: "floatY 2.5s ease-in-out infinite" }}>
        <span style={{ fontFamily: "'Inter',sans-serif", fontSize: ".58rem", fontWeight: 500, letterSpacing: ".18em", textTransform: "uppercase", color: t.dim }}>scroll</span>
        <div style={{ width: 1, height: 28, background: `linear-gradient(to bottom,${t.accent},transparent)` }} />
      </div>
    </section>
  );
}

export default About;
