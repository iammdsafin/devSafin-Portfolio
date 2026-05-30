import { useState } from "react";
import { SKILLS } from "../data";
import Reveal from "./Reveal";
import SH from "./SH";
import TechIcon from "./TechIcon";

function SkillCard({ skill, color, t, delay }) {
  const [h, setH] = useState(false);
  return (
    <div onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)} data-h
      style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8, padding: "16px 10px", borderRadius: 12, border: `1.5px solid ${h ? color : t.brd}`, background: h ? `${color}10` : t.panel, transform: h ? "translateY(-3px)" : "none", boxShadow: h ? `0 6px 18px ${color}25` : "none", transition: "all .2s", animation: `fadeUp .4s ${delay}s both`, cursor: "default" }}>
      <TechIcon name={skill} size={26} active={h} color={color} />
      <span style={{ fontFamily: "'Inter',sans-serif", fontWeight: 500, fontSize: ".75rem", color: h ? color : t.sub, textAlign: "center", lineHeight: 1.3, transition: "color .2s" }}>{skill}</span>
    </div>
  );
}

function Skills({ t }) {
  const [tab, setTab] = useState(0);
  const cur = SKILLS[tab];

  return (
    <section id="skills" style={{ padding: "80px 5%", background: t.panel, borderTop: `1px solid ${t.brd}` }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <Reveal><SH num="02" title="Skills & Expertise" t={t} /></Reveal>

        <Reveal d={.07}>
          <div style={{ display: "flex", gap: 6, marginBottom: 24, flexWrap: "wrap" }}>
            {SKILLS.map((g, i) => (
              <button key={g.cat} onClick={() => setTab(i)} data-h
                style={{ display: "inline-flex", alignItems: "center", gap: 7, padding: "8px 16px", borderRadius: 40, border: `1.5px solid ${tab === i ? g.color : t.brd}`, background: tab === i ? `${g.color}18` : "transparent", color: tab === i ? g.color : t.sub, fontFamily: "'Inter',sans-serif", fontWeight: tab === i ? 600 : 400, fontSize: ".82rem", transition: "all .18s", whiteSpace: "nowrap" }}>
                <span style={{ width: 7, height: 7, borderRadius: "50%", background: tab === i ? g.color : t.dim, transition: "background .2s" }} />
                {g.cat}
              </button>
            ))}
          </div>
        </Reveal>

        <Reveal d={.1} key={tab}>
          <div className="skill-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(130px, 1fr))", gap: 8, padding: "24px", background: t.card, border: `1px solid ${t.cardBd}`, borderRadius: 16, borderTop: `3px solid ${cur.color}` }}>
            {cur.items.map((skill, i) => (
              <SkillCard key={skill} skill={skill} color={cur.color} t={t} delay={i * .04} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default Skills;
