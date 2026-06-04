import { Link } from "react-router-dom";
import { clinicData } from "../data/clinicData.js";
import StarIcon from "./icons/StarIcon.jsx";

export default function Hero() {
  return (
    <section className="home-hero" style={{ backgroundImage: `url(${clinicData.images.interior})` }}>
      <div className="container home-hero-content">
        <p className="hero-eyebrow">Mclinic Georgia • თბილისი</p>
        <h1>თანამედროვე სტომატოლოგიური მომსახურება მშვიდ გარემოში</h1>
        <p>
          პროფესიონალური სტომატოლოგიური მკურნალობა სუფთა, ორგანიზებულ და თანამედროვე კლინიკაში.
        </p>
        <div className="hero-actions">
          <Link className="btn btn-hero-outline" to="/services">
            სერვისების ნახვა
          </Link>
        </div>
        <div className="hero-rating" aria-label={`Google შეფასება ${clinicData.rating.stars}`}>
          <span>Google შეფასება</span>
          <strong>{clinicData.rating.stars}</strong>
          <span className="rating-stars">
            {Array.from({ length: 5 }).map((_, index) => (
              <StarIcon key={index} />
            ))}
          </span>
          <span>{clinicData.rating.reviewCount} შეფასება</span>
        </div>
      </div>
    </section>
  );
}
