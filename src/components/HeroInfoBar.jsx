import { useLanguage } from "../i18n/LanguageContext.jsx";
import ClockIcon from "./icons/ClockIcon.jsx";
import LocationIcon from "./icons/LocationIcon.jsx";
import PhoneIcon from "./icons/PhoneIcon.jsx";

export default function HeroInfoBar() {
  const { t } = useLanguage();
  const items = [
    {
      ...t.homeInfo.items[0],
      text: `${t.homeInfo.items[0].text} ${t.clinic.phone}`,
      icon: PhoneIcon,
    },
    {
      ...t.homeInfo.items[1],
      icon: ClockIcon,
    },
    {
      ...t.homeInfo.items[2],
      text: t.clinic.shortAddress,
      icon: LocationIcon,
    },
  ];

  return (
    <section className="hero-info-bar" aria-label={t.homeInfo.label}>
      <div className="container hero-info-grid">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <article className="hero-info-item" key={item.title}>
              <Icon className="hero-info-icon" />
              <div>
                <h2>{item.title}</h2>
                <p>{item.text}</p>
                <p>{item.time}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
