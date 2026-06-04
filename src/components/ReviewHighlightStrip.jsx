import { useLanguage } from "../i18n/LanguageContext.jsx";
import { useRevealOnScroll } from "../hooks/useRevealOnScroll.js";
import StarIcon from "./icons/StarIcon.jsx";

export default function ReviewHighlightStrip() {
  const ref = useRevealOnScroll();
  const { t } = useLanguage();

  return (
    <section className="section slim-section">
      <div className="container">
        <div ref={ref} className="review-highlight-strip reveal">
          {t.reviewHighlights.map((highlight) => (
            <article key={highlight}>
              <StarIcon />
              <strong>{highlight}</strong>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
