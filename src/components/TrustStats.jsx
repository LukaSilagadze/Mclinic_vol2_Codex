import AnimatedCounter from "./AnimatedCounter.jsx";
import { useRevealOnScroll } from "../hooks/useRevealOnScroll.js";

export default function TrustStats() {
  const ref = useRevealOnScroll();

  return (
    <section className="section trust-stats-section">
      <div className="container">
        <div ref={ref} className="trust-stats-grid reveal">
          <article>
            <strong>
              <AnimatedCounter end={4.8} decimals={1} suffix=" ★" />
            </strong>
            <span>Google რეიტინგი</span>
          </article>
          <article>
            <strong>
              <AnimatedCounter end={245} suffix="+" />
            </strong>
            <span>შეფასება</span>
          </article>
          <article>
            <strong>
              <AnimatedCounter end={13} suffix="+" />
            </strong>
            <span>სერვისი</span>
          </article>
          <article>
            <strong>10:00 - 20:00</strong>
            <span>სამუშაო დღეებში</span>
          </article>
        </div>
      </div>
    </section>
  );
}
