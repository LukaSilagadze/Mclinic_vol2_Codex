import { clinicData } from "../data/clinicData.js";
import { useRevealOnScroll } from "../hooks/useRevealOnScroll.js";
import ReviewCard from "./ReviewCard.jsx";

export default function ReviewsSection() {
  const ref = useRevealOnScroll();

  return (
    <section className="section">
      <div className="container">
        <div className="section-heading">
          <p className="section-kicker">შეფასებები</p>
          <h2>პაციენტების შეფასებები</h2>
          <p>Google Maps-ზე კლინიკას აქვს 4.8 ვარსკვლავი 245 შეფასების საფუძველზე.</p>
        </div>
        <div ref={ref} className="reviews-grid reveal stagger-grid">
          {clinicData.reviews.map((review) => (
            <ReviewCard key={review.author} review={review} />
          ))}
        </div>
        <div className="section-action">
          <a className="btn btn-outline" href={clinicData.googleMapsUrl} target="_blank" rel="noreferrer">
            Google Maps-ზე ნახვა
          </a>
        </div>
      </div>
    </section>
  );
}
