function Ticker({ t, dark }) {
  const items = ["MSSQL Server", "T-SQL", "C# .NET", "React", "PHP Laravel", "Data Analysis", "Agile", "Production Support", "Query Optimization", "REST APIs", "Git", "Stored Procedures"];
  const dbl = [...items, ...items];
  return (
    <div style={{ overflow: "hidden", background: t.accent, padding: "11px 0" }}>
      <div style={{ display: "flex", animation: "ticker 24s linear infinite", whiteSpace: "nowrap" }}>
        {dbl.map((it, i) => (
          <span key={i} style={{ fontFamily: "'Inter',sans-serif", fontSize: ".73rem", letterSpacing: ".14em", textTransform: "uppercase", fontWeight: 500, color: dark ? "#0b0d14" : "#fff", padding: "0 22px", flexShrink: 0 }}>
            {it}<span style={{ opacity: .4, marginLeft: 12 }}>✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export default Ticker;
