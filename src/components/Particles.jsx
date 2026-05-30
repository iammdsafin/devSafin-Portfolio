import { useRef, useEffect } from "react";

function Particles({ t }) {
  const canvas = useRef(null);
  useEffect(() => {
    const cv = canvas.current; if (!cv) return;
    const ctx = cv.getContext("2d");
    let W = cv.width = cv.offsetWidth, H = cv.height = cv.offsetHeight;
    const dots = Array.from({ length: 45 }, () => ({ x: Math.random() * W, y: Math.random() * H, vx: (Math.random() - .5) * .3, vy: (Math.random() - .5) * .3, r: Math.random() * 1.2 + .4 }));
    let raf;
    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      dots.forEach(d => {
        d.x += d.vx; d.y += d.vy;
        if (d.x < 0 || d.x > W) d.vx *= -1;
        if (d.y < 0 || d.y > H) d.vy *= -1;
        ctx.beginPath(); ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${t.aRgb},.4)`; ctx.fill();
      });
      for (let i = 0; i < dots.length; i++) for (let j = i + 1; j < dots.length; j++) {
        const dx = dots[i].x - dots[j].x, dy = dots[i].y - dots[j].y, dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 90) { ctx.beginPath(); ctx.moveTo(dots[i].x, dots[i].y); ctx.lineTo(dots[j].x, dots[j].y); ctx.strokeStyle = `rgba(${t.aRgb},${.12 * (1 - dist / 90)})`; ctx.lineWidth = .5; ctx.stroke(); }
      }
      raf = requestAnimationFrame(draw);
    };
    draw();
    const resize = () => { W = cv.width = cv.offsetWidth; H = cv.height = cv.offsetHeight; };
    window.addEventListener("resize", resize);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
  }, [t.aRgb]);
  return <canvas ref={canvas} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none", opacity: .7 }} />;
}

export default Particles;
