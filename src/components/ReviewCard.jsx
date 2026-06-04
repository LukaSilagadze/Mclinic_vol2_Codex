import StarIcon from "./icons/StarIcon.jsx";

export default function ReviewCard({ review }) {
  return (
    <article className="review-card reveal-card">
      <div className="review-stars" aria-label={`${review.rating} ვარსკვლავი`}>
        {Array.from({ length: review.rating }).map((_, index) => (
          <StarIcon key={index} />
        ))}
      </div>
      <p>{review.text}</p>
      <strong>{review.author}</strong>
    </article>
  );
}
