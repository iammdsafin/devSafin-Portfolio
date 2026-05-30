import { useState, useEffect, useRef } from "react";

function Cursor({ t }) {
  const [pos, setPos] = useState({ x: -200, y: -200 });
  const [trail, setTrail] = useState({ x: -200, y: -200 });
  const [hover, setHover] = useState(false);
  const trRef = useRef({ x: -200, y: -200 });
  const posRef = useRef({ x: -200, y: -200 });
  useEffect(() => {
    const onMove = e => { posRef.current = { x: e.clientX, y: e.clientY }; setPos({ x: e.clientX, y: e.clientY }); };
    const onOver = e => setHover(!!e.target.closest("a,button,[data-h]"));
    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver);
    let raf;
    const tick = () => {
      trRef.current.x += (posRef.current.x - trRef.current.x) * 0.12;
      trRef.current.y += (posRef.current.y - trRef.current.y) * 0.12;
      setTrail({ ...trRef.current });
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => { window.removeEventListener("mousemove", onMove); document.removeEventListener("mouseover", onOver); cancelAnimationFrame(raf); };
  }, []);
  return (
    <>
      <div style={{ position: "fixed", width: hover ? 16 : 7, height: hover ? 16 : 7, background: t.accent, borderRadius: "50%", left: pos.x, top: pos.y, transform: "translate(-50%,-50%)", pointerEvents: "none", zIndex: 9999, transition: "width .15s, height .15s", mixBlendMode: "screen" }} />
      <div style={{ position: "fixed", width: hover ? 48 : 28, height: hover ? 48 : 28, border: `1.5px solid rgba(${t.aRgb},.3)`, borderRadius: "50%", left: trail.x, top: trail.y, transform: "translate(-50%,-50%)", pointerEvents: "none", zIndex: 9998, transition: "width .25s, height .25s" }} />
    </>
  );
}

export default Cursor;
