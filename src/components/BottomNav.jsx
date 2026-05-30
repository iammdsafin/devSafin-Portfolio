import { useState, useEffect } from "react";
import { NAV } from "../data";
import { useActiveSection } from "../hooks";

function BottomNav({ t, dark, toggleDark }) {
  const active = useActiveSection();
  const [prog, setProg] = useState({});

  useEffect(() => {
    const calc = () => {
      const map = {};
      NAV.forEach(n => {
        const el = document.getElementById(n.id);
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const vh = window.innerHeight;
        const raw = (vh - rect.top) / (rect.height + vh);
        map[n.id] = Math.min(1, Math.max(0, raw));
      });
      setProg(map);
    };
    window.addEventListener("scroll", calc, { passive: true });
    calc();
    return () => window.removeEventListener("scroll", calc);
  }, []);

  const scrollTo = id => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <div style={{ position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 500, display: "flex", justifyContent: "center", padding: "0 16px 14px", pointerEvents: "none" }}>
      <nav style={{ display: "flex", alignItems: "center", gap: 0, background: t.navBg, backdropFilter: "blur(20px) saturate(160%)", border: `1px solid ${t.brd2}`, borderRadius: 24, padding: "6px 8px", boxShadow: `0 4px 24px rgba(0,0,0,${dark ? .55 : .12})`, pointerEvents: "all" }}>

        {NAV.map(n => {
          const isActive = active === n.id;
          const p = prog[n.id] || 0;
          return (
            <button key={n.id} onClick={() => scrollTo(n.id)} data-h
              style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center", gap: 3, padding: "8px 14px", borderRadius: 16, background: isActive ? `rgba(${t.aRgb},.1)` : "transparent", transition: "background .2s", minWidth: 56 }}>

              <div style={{ position: "absolute", top: 0, left: "15%", right: "15%", height: 2, borderRadius: 2, background: t.brd, overflow: "hidden" }}>
                <div style={{ height: "100%", width: `${p * 100}%`, background: t.accent, borderRadius: 2, transition: "width .15s", boxShadow: isActive ? `0 0 5px rgba(${t.aRgb},.5)` : "none" }} />
              </div>

              <svg viewBox="0 0 24 24" fill="none" style={{ width: 19, height: 19, marginTop: 2 }}>
                <path d={n.icon} stroke={isActive ? t.accent : t.sub} strokeWidth={isActive ? 2 : 1.6} strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </svg>

              <span style={{ fontFamily: "'Inter',sans-serif", fontSize: ".58rem", fontWeight: isActive ? 600 : 400, letterSpacing: ".04em", color: isActive ? t.accent : t.sub, transition: "color .2s" }}>{n.label}</span>
            </button>
          );
        })}

        <div style={{ width: 1, height: 32, background: t.brd, margin: "0 4px" }} />

        <button onClick={toggleDark} data-h style={{ width: 38, height: 38, borderRadius: 14, background: "transparent", border: `1px solid ${t.brd}`, color: t.sub, fontSize: ".9rem", display: "flex", alignItems: "center", justifyContent: "center", transition: "all .2s" }}>
          {dark ? "☀" : "●"}
        </button>
      </nav>
    </div>
  );
}

export default BottomNav;
