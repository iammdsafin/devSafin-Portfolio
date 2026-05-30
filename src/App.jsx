import { useState } from "react";
import { DARK, LIGHT } from "./styles/theme";
import GS from "./styles/globalStyles";

// Layout
import Cursor from "./components/Cursor";
import TopProgress from "./components/TopProgress";
import BottomNav from "./components/BottomNav";
import Footer from "./components/Footer";

// Sections
import About from "./components/About";
import Ticker from "./components/Ticker";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";

export default function App() {
  const [dark, setDark] = useState(true);
  const t = dark ? DARK : LIGHT;
  return (
    <div style={{ background: t.bg, color: t.txt, minHeight: "100vh", cursor: "none", overflowX: "hidden" }}>
      <style>{GS}</style>
      <Cursor t={t} />
      <TopProgress t={t} />
      <main>
        <About t={t} dark={dark} />
        <Ticker t={t} dark={dark} />
        <Skills t={t} />
        <Experience t={t} />
        <Education t={t} />
        <Contact t={t} dark={dark} />
      </main>
      <Footer t={t} />
      <BottomNav t={t} dark={dark} toggleDark={() => setDark(d => !d)} />
    </div>
  );
}
