import { Link } from "react-router-dom";
import { useLanguage } from "../i18n/LanguageContext.jsx";
import { useRevealOnScroll } from "../hooks/useRevealOnScroll.js";

export default function CTASection() {
  const ref = useRevealOnScroll();
  const { t } = useLanguage();

  return (
    <section className="section cta-section">
      <div className="container">
        <div ref={ref} className="cta-panel reveal">
          <div>
            <p className="section-kicker">{t.cta.kicker}</p>
            <h2>{t.cta.title}</h2>
            <p>{t.cta.text}</p>
          </div>
          <div className="cta-actions">
            <a className="btn btn-primary" href={t.clinic.phoneHref}>
              {t.clinic.call}
            </a>
            <Link className="btn btn-outline" to="/contact">
              {t.clinic.contact}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
