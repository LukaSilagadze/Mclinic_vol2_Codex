import PageHero from "../components/PageHero.jsx";
import CTASection from "../components/CTASection.jsx";
import { useLanguage } from "../i18n/LanguageContext.jsx";
import CheckIcon from "../components/icons/CheckIcon.jsx";
import { useRevealOnScroll } from "../hooks/useRevealOnScroll.js";
import { usePageMeta } from "../hooks/usePageMeta.js";

export default function About() {
  const ref = useRevealOnScroll();
  const teamRef = useRevealOnScroll();
  const { t } = useLanguage();
  const { about } = t.pages;

  usePageMeta({ title: t.meta.about, description: about.text });

  return (
    <main>
      <PageHero
        title={about.title}
        text={about.text}
      />

      <section className="section about-intro-section">
        <div ref={ref} className="container about-feature reveal">
          <div className="about-copy">
            <p className="section-kicker">{about.clinicKicker}</p>
            <h2>{about.clinicTitle}</h2>
            <p>{about.clinicText}</p>
          </div>
          <img src={t.clinic.images.interior} alt={about.interiorAlt} loading="lazy" decoding="async" />
        </div>
      </section>

      <section className="section soft-section dental-team-section">
        <div className="container">
          <div className="section-heading">
            <p className="section-kicker">{about.teamKicker}</p>
            <h2>{about.teamTitle}</h2>
            <p>{about.teamText}</p>
          </div>
          <div ref={teamRef} className="dental-team-grid reveal stagger-grid">
            {about.doctors.map((doctor) => (
              <article className="doctor-card reveal-card" key={doctor.name}>
                <div className="doctor-avatar" aria-hidden="true">
                  {doctor.name
                    .replace("დოქტორი ", "")
                    .replace("Dr. ", "")
                    .replace("Доктор ", "")
                    .split(" ")
                    .map((part) => part[0])
                    .join("")}
                </div>
                <h3>{doctor.name}</h3>
                <p>{doctor.profession}</p>
              </article>
            ))}
          </div>
        </div>
      </section>


      <section className="section about-details-section">
        <div className="container about-details-grid">
          <article className="about-detail-card">
            <p className="section-kicker">{about.accessibilityKicker}</p>
            <h2>{about.accessibilityTitle}</h2>
            <ul>
              {about.accessibilityItems.map((item) => (
                <li key={item}>
                  <CheckIcon />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="about-detail-card">
            <p className="section-kicker">{about.parkingKicker}</p>
            <h2>{about.parkingTitle}</h2>
            <p>{about.parkingText}</p>
            <img src={t.clinic.images.exterior} alt={about.exteriorAlt} loading="lazy" decoding="async" />
          </article>
        </div>
      </section>

      <section className="section soft-section">
        <div className="container about-feature reverse">
          <div className="about-copy">
            <p className="section-kicker">{about.environmentKicker}</p>
            <h2>{about.environmentTitle}</h2>
            <p>{about.environmentText}</p>
          </div>
          <img src={t.clinic.images.product} alt={about.productAlt} loading="lazy" decoding="async" />
        </div>
      </section>

      <CTASection />
    </main>
  );
}
