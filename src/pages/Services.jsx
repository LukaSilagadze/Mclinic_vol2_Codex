import { Link } from "react-router-dom";
import PageHero from "../components/PageHero.jsx";
import { useLanguage } from "../i18n/LanguageContext.jsx";
import CheckIcon from "../components/icons/CheckIcon.jsx";
import SmileIcon from "../components/icons/SmileIcon.jsx";
import ImplantIcon from "../components/icons/ImplantIcon.jsx";
import BracesIcon from "../components/icons/BracesIcon.jsx";
import ToothIcon from "../components/icons/ToothIcon.jsx";
import { useRevealOnScroll } from "../hooks/useRevealOnScroll.js";
import { usePageMeta } from "../hooks/usePageMeta.js";

const categoryIcons = [SmileIcon, ImplantIcon, BracesIcon, ToothIcon];

export default function Services() {
  const ref = useRevealOnScroll();
  const { t } = useLanguage();
  const categories = t.pages.services.categories.map((category, index) => ({
    ...category,
    services: t.clinic.services[category.servicesKey],
    icon: categoryIcons[index],
  }));

  usePageMeta({ title: t.meta.services, description: t.pages.services.text });

  return (
    <main>
      <PageHero
        title={t.pages.services.title}
        text={t.pages.services.text}
      />

      <section className="section services-page-section">
        <div className="container">
          <div ref={ref} className="service-category-grid reveal stagger-grid">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <article className="service-category-card reveal-card" key={category.title}>
                  <div className="service-category-header">
                    <Icon className="service-icon" />
                    <div>
                      <h2>{category.title}</h2>
                      <p>{category.description}</p>
                    </div>
                  </div>
                  <ul>
                    {category.services.map((service) => (
                      <li key={service}>
                        <CheckIcon />
                        <span>{service}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section service-bottom-cta">
        <div className="container">
          <div className="cta-panel">
            <div>
              <p className="section-kicker">{t.pages.services.ctaKicker}</p>
              <h2>{t.pages.services.ctaTitle}</h2>
              <p>{t.pages.services.ctaText}</p>
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
    </main>
  );
}
