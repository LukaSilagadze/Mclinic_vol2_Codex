import { useRevealOnScroll } from "../hooks/useRevealOnScroll.js";
import StarIcon from "./icons/StarIcon.jsx";

const highlights = [
  "„სუფთა და მშვიდი გარემო“",
  "„პროფესიონალური და ყურადღებიანი გუნდი“",
  "„თანამედროვე ტექნოლოგიებით აღჭურვილი კლინიკა“",
];

export default function ReviewHighlightStrip() {
  const ref = useRevealOnScroll();

  return (
    <section className="section slim-section">
      <div className="container">
        <div ref={ref} className="review-highlight-strip reveal">
          {highlights.map((highlight) => (
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
