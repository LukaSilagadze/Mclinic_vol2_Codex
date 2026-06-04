import { Link } from "react-router-dom";
import { useLanguage } from "../i18n/LanguageContext.jsx";
import { useRevealOnScroll } from "../hooks/useRevealOnScroll.js";
import { publicAsset } from "../utils/publicAsset.js";
import BeforeAfterSlider from "./BeforeAfterSlider.jsx";

const beforeImage = publicAsset("images/before.png");
const afterImage = publicAsset("images/after.png");

export default function BeforeAfterPreview() {
  const ref = useRevealOnScroll();
  const { t } = useLanguage();

  return (
    <section className="section soft-section">
      <div className="container before-after-preview">
        <div className="section-heading left">
          <p className="section-kicker">{t.beforeAfter.kicker}</p>
          <h2>{t.beforeAfter.title}</h2>
          <p>{t.beforeAfter.text}</p>
          <Link className="btn btn-primary" to="/results">
            {t.beforeAfter.action}
          </Link>
        </div>
        <div ref={ref} className="reveal">
          <BeforeAfterSlider beforeImage={afterImage} afterImage={beforeImage} />
        </div>
      </div>
    </section>
  );
}
