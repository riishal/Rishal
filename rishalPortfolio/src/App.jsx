import { useTheme } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Works from "./pages/Works";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

export default function App() {
  const { t } = useTheme();
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
        <Works />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}