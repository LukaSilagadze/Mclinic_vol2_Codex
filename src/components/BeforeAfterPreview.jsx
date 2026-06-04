import { Link } from "react-router-dom";
import { useRevealOnScroll } from "../hooks/useRevealOnScroll.js";
import BeforeAfterSlider from "./BeforeAfterSlider.jsx";

const svgPlaceholder = (background, accent, detail) =>
  `data:image/svg+xml;utf8,${encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 560">
      <rect width="900" height="560" fill="${background}"/>
      <circle cx="700" cy="120" r="170" fill="${accent}" opacity="0.16"/>
      <circle cx="180" cy="460" r="150" fill="${detail}" opacity="0.13"/>
      <path d="M240 250c78-70 198-70 276 0 80-70 202-70 282 0v108c-78 74-204 74-282 0-78 74-200 74-276 0z" fill="#ffffff" opacity="0.92"/>
      <path d="M270 281c56-38 137-38 193 0M568 281c56-38 137-38 193 0" stroke="${accent}" stroke-width="18" stroke-linecap="round" opacity="0.38"/>
      <path d="M260 364c76 60 190 60 266 0 76 60 190 60 266 0" stroke="${detail}" stroke-width="14" stroke-linecap="round" opacity="0.32"/>
    </svg>
  `)}`;

const beforeImage = svgPlaceholder("#eef1ea", "#98A879", "#1f2933");
const afterImage = svgPlaceholder("#f8faf5", "#7f8f63", "#98A879");

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
          <BeforeAfterSlider beforeImage={beforeImage} afterImage={afterImage} />
        </div>
      </div>
    </section>
  );
}
