import { useState, useEffect } from "react";

function TopProgress({ t }) {
  const [pct, setPct] = useState(0);
  useEffect(() => {
    const fn = () => { const d = document.documentElement; setPct(d.scrollTop / (d.scrollHeight - d.clientHeight) * 100); };
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);
  return <div style={{ position: "fixed", top: 0, left: 0, height: 2, width: `${pct}%`, background: `linear-gradient(90deg,${t.accent},${t.blue})`, zIndex: 600, transition: "width .08s" }} />;
}

export default TopProgress;
