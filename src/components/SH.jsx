function SH({ num, title, t }) {
  return (
    <div style={{ marginBottom: 40 }}>
      <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: ".62rem", letterSpacing: ".25em", textTransform: "uppercase", color: t.accent, marginBottom: 8 }}>
        {num}
      </div>
      <h2 style={{ fontFamily: "'Inter',sans-serif", fontWeight: 700, fontSize: "clamp(1.7rem,4vw,2.8rem)", letterSpacing: "-.025em", color: t.txt, lineHeight: 1.1 }}>
        {title}
      </h2>
    </div>
  );
}

export default SH;
