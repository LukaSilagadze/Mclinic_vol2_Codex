import { useEffect } from "react";
import Hero from "../components/Hero.jsx";
import HeroInfoBar from "../components/HeroInfoBar.jsx";
import TrustStats from "../components/TrustStats.jsx";
import ServicesPreview from "../components/ServicesPreview.jsx";
import ReviewHighlightStrip from "../components/ReviewHighlightStrip.jsx";
import BeforeAfterPreview from "../components/BeforeAfterPreview.jsx";
import ReviewsSection from "../components/ReviewsSection.jsx";
import CTASection from "../components/CTASection.jsx";
import CheckIcon from "../components/icons/CheckIcon.jsx";
import ClockIcon from "../components/icons/ClockIcon.jsx";
import LocationIcon from "../components/icons/LocationIcon.jsx";
import SmileIcon from "../components/icons/SmileIcon.jsx";
import { useRevealOnScroll } from "../hooks/useRevealOnScroll.js";

const reasons = [
  { title: "სუფთა და ორგანიზებული გარემო", icon: CheckIcon },
  { title: "თანამედროვე ტექნოლოგიებზე ორიენტირებული მიდგომა", icon: SmileIcon },
  { title: "ყურადღებიანი და პროფესიონალური გუნდი", icon: CheckIcon },
  { title: "ადაპტირებული სივრცე", icon: LocationIcon },
  { title: "პარკინგი ადგილზე", icon: ClockIcon },
];

function WhyChooseUs() {
  const ref = useRevealOnScroll();

  return (
    <section className="section why-section">
      <div className="container">
        <div className="section-heading">
          <p className="section-kicker">უპირატესობები</p>
          <h2>რატომ Mclinic Georgia?</h2>
        </div>
        <div ref={ref} className="why-grid reveal stagger-grid">
          {reasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <article className="why-card reveal-card" key={reason.title}>
                <Icon />
                <h3>{reason.title}</h3>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  useEffect(() => {
    document.title = "Mclinic Georgia | სტომატოლოგიური კლინიკა თბილისში";
  }, []);

  return (
    <main>
      <Hero />
      <HeroInfoBar />
      <ServicesPreview />
      <ReviewHighlightStrip />
      <BeforeAfterPreview />
      <WhyChooseUs />
      <TrustStats />
      <ReviewsSection />
      <CTASection />
    </main>
  );
}
