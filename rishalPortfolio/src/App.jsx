import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { useTheme } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Experience from "./pages/Experience";
import Works from "./pages/Works";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import ProjectDetail from "./pages/ProjectDetail";

function Portfolio() {
  const { t } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const target = location.state?.scrollTo;
    if (!target) return;
    const tryScroll = (attempts = 0) => {
      const el = document.getElementById(target);
      if (el) {
        const offset = 80;
        const top = el.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top, behavior: "smooth" });
      } else if (attempts < 10) {
        setTimeout(() => tryScroll(attempts + 1), 80);
      }
    };
    tryScroll();
  }, [location.state]);

  return (
    <div style={{
      background: t.bg, color: t.text,
      minHeight: "100vh",
      transition: "background 0.3s, color 0.3s",
    }}>
      <Navbar />
      <main>
        <Home />
        <About />
        <Services />
        <Experience />
        <Works />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Portfolio />} />
      <Route path="/project/:id" element={<ProjectDetail />} />
    </Routes>
  );
}