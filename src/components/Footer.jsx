function Footer({ t }) {
  return (
    <footer style={{ background: t.panel, borderTop: `1px solid ${t.brd}`, padding: "18px 5%", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 10, position: "relative", zIndex: 1 }}>
      <span style={{ fontFamily: "'Inter',sans-serif", fontWeight: 700, fontSize: ".95rem", color: t.txt }}>Md. Safin<span style={{ color: t.accent }}>.</span></span>
      <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: ".6rem", letterSpacing: ".08em", color: t.dim }}>© 2025 · Technical Services Engineer · Dhaka</span>
      <div style={{ display: "flex", alignItems: "center", gap: 6, fontFamily: "'Inter',sans-serif", fontSize: ".78rem", fontWeight: 500, color: t.accent }}>
        <span style={{ width: 6, height: 6, borderRadius: "50%", background: t.accent, display: "inline-block", animation: "pulse 2s infinite" }} />
        Open to opportunities
      </div>
    </footer>
  );
}

export default Footer;
