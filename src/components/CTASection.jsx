import { Link } from "react-router-dom";
import { clinicData } from "../data/clinicData.js";
import { useRevealOnScroll } from "../hooks/useRevealOnScroll.js";

export default function CTASection() {
  const ref = useRevealOnScroll();

  return (
    <section className="section cta-section">
      <div className="container">
        <div ref={ref} className="cta-panel reveal">
          <div>
            <p className="section-kicker">კონტაქტი</p>
            <h2>დაგვიკავშირდით ვიზიტის დასაჯავშნად</h2>
            <p>
              კლინიკაში ვიზიტი წინასწარი შეთანხმებითაა. დაგვიკავშირდით ტელეფონით ან იხილეთ მისამართი
              კონტაქტის გვერდზე.
            </p>
          </div>
          <div className="cta-actions">
            <a className="btn btn-primary" href={clinicData.phoneHref}>
              დარეკვა
            </a>
            <Link className="btn btn-outline" to="/contact">
              კონტაქტი
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
