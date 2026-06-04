import AnimatedCounter from "./AnimatedCounter.jsx";
import { useRevealOnScroll } from "../hooks/useRevealOnScroll.js";
import { useLanguage } from "../i18n/LanguageContext.jsx";

export default function TrustStats() {
  const ref = useRevealOnScroll();
  const { t } = useLanguage();

  return (
    <section className="section trust-stats-section">
      <div className="container">
        <div ref={ref} className="trust-stats-grid reveal">
          <article>
            <strong>
              <AnimatedCounter end={4.8} decimals={1} suffix=" ★" />
            </strong>
            <span>{t.stats.googleRating}</span>
          </article>
          <article>
            <strong>
              <AnimatedCounter end={245} suffix="+" />
            </strong>
            <span>{t.stats.reviews}</span>
          </article>
          <article>
            <strong>
              <AnimatedCounter end={13} suffix="+" />
            </strong>
            <span>{t.stats.services}</span>
          </article>
          <article>
            <strong>10:00 - 20:00</strong>
            <span>{t.stats.weekdays}</span>
          </article>
        </div>
      </div>
    </section>
  );
}
