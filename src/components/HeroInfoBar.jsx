import { clinicData } from "../data/clinicData.js";
import ClockIcon from "./icons/ClockIcon.jsx";
import LocationIcon from "./icons/LocationIcon.jsx";
import PhoneIcon from "./icons/PhoneIcon.jsx";

const items = [
  {
    title: "გჭირდებათ სტომატოლოგიური მომსახურება?",
    text: `დარეკეთ: ${clinicData.phone}`,
    icon: PhoneIcon,
  },
  {
    title: "სამუშაო საათები",
    text: "ორშაბათი - პარასკევი",
    time: "10:00 - 20:00",
    icon: ClockIcon,
  },
  {
    title: "მისამართი",
    text: clinicData.shortAddress,
    icon: LocationIcon,
  },
];

export default function HeroInfoBar() {
  return (
    <section className="hero-info-bar" aria-label="კლინიკის მოკლე ინფორმაცია">
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
