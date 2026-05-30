const TechIcon = ({ name, size = 26, active = false, color = "#888" }) => {
  const c = active ? color : "#888";
  const s = { width: size, height: size, display: "block", flexShrink: 0 };
  const map = {
    "MSSQL Server":   <svg style={s} viewBox="0 0 24 24"><rect width="24" height="24" rx="4" fill="#CC2927"/><text x="12" y="15.5" textAnchor="middle" fill="white" fontSize="6" fontWeight="bold" fontFamily="Arial">MSSQL</text></svg>,
    "T-SQL":          <svg style={s} viewBox="0 0 24 24"><rect width="24" height="24" rx="4" fill="#0078D4"/><text x="12" y="15.5" textAnchor="middle" fill="white" fontSize="6.5" fontWeight="bold" fontFamily="Arial">T-SQL</text></svg>,
    "MySQL":          <svg style={s} viewBox="0 0 24 24" fill="none"><rect width="24" height="24" rx="4" fill="#00618A"/><path d="M5 15c0-3 2-6 4-6 1 0 2 .5 3 1.5C13 9.5 14 9 15 9c2 0 4 3 4 6" stroke="#F29111" strokeWidth="1.8" fill="none" strokeLinecap="round"/><circle cx="12" cy="17" r="1.5" fill="#F29111"/></svg>,
    "Stored Procedures": <svg style={s} viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="18" rx="3" stroke={c} strokeWidth="1.7"/><path d="M7 8h10M7 12h6M7 16h8" stroke={c} strokeWidth="1.7" strokeLinecap="round"/></svg>,
    "Query Optimization": <svg style={s} viewBox="0 0 24 24" fill="none"><circle cx="10" cy="10" r="6" stroke={c} strokeWidth="1.7"/><path d="M15 15l5 5" stroke={c} strokeWidth="2" strokeLinecap="round"/><path d="M8 10h4M10 8v4" stroke={c} strokeWidth="1.5" strokeLinecap="round"/></svg>,
    "Indexing":        <svg style={s} viewBox="0 0 24 24" fill="none"><path d="M4 6h16M4 10h10M4 14h12M4 18h8" stroke={c} strokeWidth="1.7" strokeLinecap="round"/></svg>,
    "Execution Plans": <svg style={s} viewBox="0 0 24 24" fill="none"><circle cx="5" cy="12" r="2" fill={c}/><circle cx="12" cy="6" r="2" fill={c}/><circle cx="12" cy="18" r="2" fill={c}/><circle cx="19" cy="12" r="2" fill={c}/><path d="M7 12h3M12 8v3M12 15v1M14 12h3M9 10l2 2M15 10l-2 2" stroke={c} strokeWidth="1.4"/></svg>,
    "Data Integrity":  <svg style={s} viewBox="0 0 24 24" fill="none"><path d="M12 3l8 3v6c0 4-3.5 7.5-8 9-4.5-1.5-8-5-8-9V6l8-3z" stroke={c} strokeWidth="1.7" strokeLinejoin="round"/><path d="M9 12l2 2 4-4" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>,
    "Views & Functions": <svg style={s} viewBox="0 0 24 24" fill="none"><path d="M12 5c-5 0-9 5-9 7s4 7 9 7 9-5 9-7-4-7-9-7z" stroke={c} strokeWidth="1.7"/><circle cx="12" cy="12" r="2.5" fill={c}/></svg>,
    "C#":             <svg style={s} viewBox="0 0 24 24"><rect width="24" height="24" rx="4" fill="#9B4F96"/><text x="12" y="16" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold" fontFamily="Arial">C#</text></svg>,
    "ASP.NET":        <svg style={s} viewBox="0 0 24 24"><rect width="24" height="24" rx="4" fill="#512BD4"/><text x="12" y="15" textAnchor="middle" fill="white" fontSize="5.5" fontWeight="bold" fontFamily="Arial">ASP.NET</text></svg>,
    ".NET Core":      <svg style={s} viewBox="0 0 24 24"><rect width="24" height="24" rx="4" fill="#512BD4"/><text x="12" y="15.5" textAnchor="middle" fill="white" fontSize="6" fontWeight="bold" fontFamily="Arial">.NET</text></svg>,
    "PHP":            <svg style={s} viewBox="0 0 24 24"><rect width="24" height="24" rx="12" fill="#777BB4"/><text x="12" y="15.5" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold" fontFamily="Arial">php</text></svg>,
    "Laravel":        <svg style={s} viewBox="0 0 24 24"><rect width="24" height="24" rx="4" fill="#FF2D20"/><text x="12" y="15.5" textAnchor="middle" fill="white" fontSize="5.5" fontWeight="bold" fontFamily="Arial">Laravel</text></svg>,
    "OOP":            <svg style={s} viewBox="0 0 24 24" fill="none"><rect x="3" y="8" width="6" height="8" rx="2" stroke={c} strokeWidth="1.7"/><rect x="15" y="8" width="6" height="8" rx="2" stroke={c} strokeWidth="1.7"/><path d="M9 12h6" stroke={c} strokeWidth="1.7" strokeLinecap="round"/></svg>,
    "REST APIs":      <svg style={s} viewBox="0 0 24 24" fill="none"><circle cx="5" cy="12" r="2.2" stroke={c} strokeWidth="1.6"/><circle cx="19" cy="12" r="2.2" stroke={c} strokeWidth="1.6"/><path d="M7.2 12h9.6" stroke={c} strokeWidth="1.7" strokeDasharray="2.5 2" strokeLinecap="round"/></svg>,
    "JavaScript":     <svg style={s} viewBox="0 0 24 24"><rect width="24" height="24" rx="4" fill="#F7DF1E"/><text x="12" y="16.5" textAnchor="middle" fill="#222" fontSize="9" fontWeight="bold" fontFamily="Arial">JS</text></svg>,
    "React":          <svg style={s} viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="2" fill="#61DAFB"/><ellipse cx="12" cy="12" rx="9" ry="3.2" stroke="#61DAFB" strokeWidth="1.4"/><ellipse cx="12" cy="12" rx="9" ry="3.2" stroke="#61DAFB" strokeWidth="1.4" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="9" ry="3.2" stroke="#61DAFB" strokeWidth="1.4" transform="rotate(120 12 12)"/></svg>,
    "HTML5":          <svg style={s} viewBox="0 0 24 24"><rect width="24" height="24" rx="4" fill="#E34F26"/><text x="12" y="15.5" textAnchor="middle" fill="white" fontSize="6" fontWeight="bold" fontFamily="Arial">HTML5</text></svg>,
    "CSS3":           <svg style={s} viewBox="0 0 24 24"><rect width="24" height="24" rx="4" fill="#1572B6"/><text x="12" y="15.5" textAnchor="middle" fill="white" fontSize="7" fontWeight="bold" fontFamily="Arial">CSS3</text></svg>,
    "Tailwind CSS":   <svg style={s} viewBox="0 0 24 24"><rect width="24" height="24" rx="4" fill="#06B6D4"/><path d="M6 12c0-2 1-4 3-4s3 2 3 4 1 4 3 4 3-2 3-4" stroke="white" strokeWidth="2.2" fill="none" strokeLinecap="round"/></svg>,
    "Figma":          <svg style={s} viewBox="0 0 24 24" fill="none"><rect x="8" y="2" width="8" height="6" rx="2" fill="#F24E1E"/><rect x="8" y="9" width="8" height="6" rx="2" fill="#A259FF"/><rect x="8" y="16" width="8" height="6" rx="2" fill="#0ACF83"/><circle cx="20" cy="12" r="4" fill="#1ABCFE"/></svg>,
    "Git":            <svg style={s} viewBox="0 0 24 24"><rect width="24" height="24" rx="4" fill="#F05032"/><text x="12" y="15.5" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold" fontFamily="Arial">git</text></svg>,
    "GitHub":         <svg style={s} viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.22.68-.48v-1.69c-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.1-1.46-1.1-1.46-.9-.62.07-.6.07-.6 1 .07 1.53 1.02 1.53 1.02.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0112 6.8c.85 0 1.7.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10.01 10.01 0 0022 12c0-5.52-4.48-10-10-10z" fill="#ccc"/></svg>,
    "Jira":           <svg style={s} viewBox="0 0 24 24"><rect width="24" height="24" rx="4" fill="#0052CC"/><text x="12" y="15.5" textAnchor="middle" fill="white" fontSize="6.5" fontWeight="bold" fontFamily="Arial">JIRA</text></svg>,
    "Agile":          <svg style={s} viewBox="0 0 24 24" fill="none"><path d="M12 3v3M12 18v3M3 12h3M18 12h3M6.34 6.34l2.12 2.12M15.54 15.54l2.12 2.12M6.34 17.66l2.12-2.12M15.54 8.46l2.12-2.12" stroke={c} strokeWidth="1.8" strokeLinecap="round"/></svg>,
    "Scrum":          <svg style={s} viewBox="0 0 24 24" fill="none"><path d="M12 2a10 10 0 110 20A10 10 0 0112 2z" stroke={c} strokeWidth="1.7"/><path d="M12 7v5l3 3" stroke={c} strokeWidth="1.8" strokeLinecap="round"/></svg>,
    "Data Analysis":  <svg style={s} viewBox="0 0 24 24" fill="none"><rect x="3" y="13" width="4" height="8" rx="1" fill={c}/><rect x="10" y="8" width="4" height="13" rx="1" fill={c}/><rect x="17" y="4" width="4" height="17" rx="1" fill={c}/><path d="M5 9l6-4 6 4" stroke={c} strokeWidth="1.6" strokeLinecap="round"/></svg>,
  };
  return map[name] || (
    <svg style={s} viewBox="0 0 24 24" fill="none">
      <rect x="3" y="3" width="18" height="18" rx="3" stroke={c} strokeWidth="1.7"/>
      <path d="M8 12h8M12 8v8" stroke={c} strokeWidth="1.7" strokeLinecap="round"/>
    </svg>
  );
};

export default TechIcon;
