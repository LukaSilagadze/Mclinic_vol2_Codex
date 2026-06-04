import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Services from "./pages/Services.jsx";
import Results from "./pages/Results.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";

export default function App() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <>
      <Header isHome={isHome} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/results" element={<Results />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}
