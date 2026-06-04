import { useLanguage } from "../i18n/LanguageContext.jsx";
import { useRevealOnScroll } from "../hooks/useRevealOnScroll.js";
import ReviewCard from "./ReviewCard.jsx";

export default function ReviewsSection() {
  const ref = useRevealOnScroll();
  const { t } = useLanguage();

  return (
    <section className="section">
      <div className="container">
        <div className="section-heading">
          <p className="section-kicker">{t.reviewsSection.kicker}</p>
          <h2>{t.reviewsSection.title}</h2>
          <p>{t.reviewsSection.text}</p>
        </div>
        <div ref={ref} className="reviews-grid reveal stagger-grid">
          {t.clinic.reviews.map((review) => (
            <ReviewCard key={review.author} review={review} />
          ))}
        </div>
        <div className="section-action">
          <a className="btn btn-outline" href={t.clinic.googleMapsUrl} target="_blank" rel="noreferrer">
            {t.common.googleMaps}
          </a>
        </div>
      </div>
    </section>
  );
}
