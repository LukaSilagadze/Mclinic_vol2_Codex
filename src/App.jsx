import { Suspense, lazy } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";

const Services = lazy(() => import("./pages/Services.jsx"));
const Results = lazy(() => import("./pages/Results.jsx"));
const About = lazy(() => import("./pages/About.jsx"));
const Contact = lazy(() => import("./pages/Contact.jsx"));
const NotFound = lazy(() => import("./pages/NotFound.jsx"));

export default function App() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <>
      <Header isHome={isHome} />
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/results" element={<Results />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
}
