import { Link } from "react-router-dom";
import { useLanguage } from "../i18n/LanguageContext.jsx";
import { useRevealOnScroll } from "../hooks/useRevealOnScroll.js";
import ServiceCard from "./ServiceCard.jsx";
import SmileIcon from "./icons/SmileIcon.jsx";
import ImplantIcon from "./icons/ImplantIcon.jsx";
import BracesIcon from "./icons/BracesIcon.jsx";
import ToothIcon from "./icons/ToothIcon.jsx";

const serviceIcons = [SmileIcon, ImplantIcon, BracesIcon, ToothIcon];

export default function ServicesPreview() {
  const ref = useRevealOnScroll();
  const { t } = useLanguage();
  const services = t.servicesPreview.cards.map((service, index) => ({
    ...service,
    icon: serviceIcons[index],
  }));

  return (
    <section className="section">
      <div className="container">
        <div className="section-heading">
          <p className="section-kicker">{t.servicesPreview.kicker}</p>
          <h2>{t.servicesPreview.title}</h2>
          <p>{t.servicesPreview.text}</p>
        </div>
        <div ref={ref} className="services-grid reveal stagger-grid">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
        <div className="section-action">
          <Link className="btn btn-outline" to="/services">
            {t.servicesPreview.action}
          </Link>
        </div>
      </div>
    </section>
  );
}
