import { useInView } from "../hooks";

function Reveal({ children, d = 0, style = {} }) {
  const [ref, vis] = useInView();
  return (
    <div ref={ref} style={{ opacity: vis ? 1 : 0, transform: vis ? "none" : "translateY(18px)", transition: `opacity .6s ${d}s ease, transform .6s ${d}s ease`, ...style }}>
      {children}
    </div>
  );
}

export default Reveal;
