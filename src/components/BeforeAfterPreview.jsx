import { Link } from "react-router-dom";
import { useRevealOnScroll } from "../hooks/useRevealOnScroll.js";
import BeforeAfterSlider from "./BeforeAfterSlider.jsx";

const beforeImage = "/images/before.png";
const afterImage = "/images/after.png";

export default function BeforeAfterPreview() {
  const ref = useRevealOnScroll();

  return (
    <section className="section soft-section">
      <div className="container before-after-preview">
        <div className="section-heading left">
          <p className="section-kicker">სადემონსტრაციო მაგალითი</p>
          <h2>მკურნალობამდე და მკურნალობის შემდეგ</h2>
          <p>
            სექცია მომზადებულია რეალური კლინიკური შემთხვევებისთვის. საბოლოო ვერსიაში აქ დაემატება Mclinic
            Georgia-ს მიერ მოწოდებული ფოტოები, პაციენტის თანხმობის საფუძველზე.
          </p>
          <Link className="btn btn-primary" to="/results">
            შედეგების გვერდზე გადასვლა
          </Link>
        </div>
        <div ref={ref} className="reveal">
          <BeforeAfterSlider beforeImage={afterImage} afterImage={beforeImage} />
        </div>
      </div>
    </section>
  );
}
