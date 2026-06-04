import { useEffect } from "react";
import { Link } from "react-router-dom";
import PageHero from "../components/PageHero.jsx";
import { clinicData } from "../data/clinicData.js";
import CheckIcon from "../components/icons/CheckIcon.jsx";
import SmileIcon from "../components/icons/SmileIcon.jsx";
import ImplantIcon from "../components/icons/ImplantIcon.jsx";
import BracesIcon from "../components/icons/BracesIcon.jsx";
import ToothIcon from "../components/icons/ToothIcon.jsx";
import { useRevealOnScroll } from "../hooks/useRevealOnScroll.js";

const categories = [
  {
    title: "ესთეტიკური სტომატოლოგია",
    description: "ღიმილის ესთეტიკის გაუმჯობესებაზე ორიენტირებული მკურნალობა.",
    services: clinicData.services.aesthetic,
    icon: SmileIcon,
  },
  {
    title: "იმპლანტაცია და ქირურგია",
    description: "ქირურგიული და აღდგენითი პროცედურები ფუნქციისა და კომფორტის აღსადგენად.",
    services: clinicData.services.surgery,
    icon: ImplantIcon,
  },
  {
    title: "ორთოდონტია",
    description: "კბილების მდებარეობისა და თანკბილვის კორექციაზე ორიენტირებული მკურნალობა.",
    services: clinicData.services.orthodontics,
    icon: BracesIcon,
  },
  {
    title: "ზოგადი და ბავშვთა სტომატოლოგია",
    description: "ყოველდღიური სტომატოლოგიური ზრუნვა ბავშვებისა და ზრდასრულებისთვის.",
    services: clinicData.services.general,
    icon: ToothIcon,
  },
];

export default function Services() {
  const ref = useRevealOnScroll();

  useEffect(() => {
    document.title = "Mclinic Georgia | სერვისები";
  }, []);

  return (
    <main>
      <PageHero
        title="სერვისები"
        text="Mclinic Georgia გთავაზობთ სტომატოლოგიური მომსახურებების ფართო სპექტრს — ესთეტიკური მკურნალობიდან იმპლანტაციამდე და ორთოდონტიამდე."
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
              <p className="section-kicker">კონსულტაცია</p>
              <h2>გჭირდებათ კონსულტაცია?</h2>
              <p>დაგვიკავშირდით და შეარჩიეთ თქვენთვის საჭირო მიმართულება.</p>
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
    </main>
  );
}
