import { useLanguage } from "../i18n/LanguageContext.jsx";
import StarIcon from "./icons/StarIcon.jsx";

export default function ReviewCard({ review }) {
  const { t } = useLanguage();

  return (
    <article className="review-card reveal-card">
      <div className="review-stars" aria-label={`${review.rating} ${t.reviewsSection.starLabel}`}>
        {Array.from({ length: review.rating }).map((_, index) => (
          <StarIcon key={index} />
        ))}
      </div>
      <p>{review.text}</p>
      <strong>{review.author}</strong>
    </article>
  );
}
