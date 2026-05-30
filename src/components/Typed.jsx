import { useState, useEffect } from "react";

function Typed({ text }) {
  const [str, setStr] = useState("");
  useEffect(() => {
    let i = 0;
    const iv = setInterval(() => { i++; setStr(text.slice(0, i)); if (i >= text.length) clearInterval(iv); }, 55);
    return () => clearInterval(iv);
  }, [text]);
  return <>{str}<span style={{ animation: "typedBlink 1s infinite", display: "inline-block", marginLeft: 1 }}>_</span></>;
}

export default Typed;
