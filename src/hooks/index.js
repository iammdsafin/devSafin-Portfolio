import { useState, useEffect, useRef } from "react";
import { NAV } from "../data";

export function useInView(thr = 0.12) {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVis(true); io.disconnect(); }
    }, { threshold: thr });
    io.observe(ref.current);
    return () => io.disconnect();
  }, [thr]);
  return [ref, vis];
}

export function useActiveSection() {
  const [active, setActive] = useState("about");
  useEffect(() => {
    const io = new IntersectionObserver(
      (es) => es.forEach(e => { if (e.isIntersecting) setActive(e.target.id); }),
      { threshold: 0.35 }
    );
    NAV.forEach(n => { const el = document.getElementById(n.id); if (el) io.observe(el); });
    return () => io.disconnect();
  }, []);
  return active;
}
