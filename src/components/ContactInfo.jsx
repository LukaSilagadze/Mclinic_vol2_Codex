import { useLanguage } from "../i18n/LanguageContext.jsx";
import ClockIcon from "./icons/ClockIcon.jsx";
import EmailIcon from "./icons/EmailIcon.jsx";
import LocationIcon from "./icons/LocationIcon.jsx";
import PhoneIcon from "./icons/PhoneIcon.jsx";
import Socials from "./socials.jsx";

export default function ContactInfo() {
  const { t } = useLanguage();

  return (
    <section className="section contact-section">
      <div className="container">
        <div className="contact-compact-layout">
          <article className="contact-info-panel">
            <p className="section-kicker">{t.common.contact}</p>
            <h2>{t.clinic.name}</h2>

            <div className="contact-info-list">
              <div className="contact-info-row">
                  <PhoneIcon />
                <div>
                  <strong>{t.pages.contact.phone}</strong>
                  <a href={t.clinic.phoneHref}>{t.clinic.phone}</a>
                </div>
              </div>

              <div className="contact-info-row">
                <EmailIcon />
                <div>
                  <strong>{t.pages.contact.email}</strong>
                  <a href={t.clinic.emailHref}>{t.clinic.email}</a>
                </div>
              </div>

              <div className="contact-info-row">
                <LocationIcon />
                <div>
                  <strong>{t.pages.contact.address}</strong>
                  <span>{t.clinic.address}</span>
                </div>
              </div>

              <div className="contact-info-row">
                <ClockIcon />
                <div>
                  <strong>{t.clinic.hoursLabel}</strong>
                  <span>{t.clinic.weekdayHours}</span>
                </div>
              </div>
            </div>

            <p className="appointment-note">{t.pages.contact.appointmentNote}</p>

            <div className="contact-actions">
              <a className="btn btn-primary" href={t.clinic.phoneHref}>
                {t.clinic.call}
              </a>
              <a className="btn btn-outline" href={t.clinic.googleMapsUrl} target="_blank" rel="noreferrer">
                Google Maps
              </a>
            </div>

            <div className="contact-socials">
              <Socials theme="light" />
            </div>
          </article>

          <div className="contact-map-embed">
            <iframe
              title={`${t.clinic.name} Google Maps`}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2977.687222310107!2d44.749238999999996!3d41.7272677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x404473201f14400b%3A0x427d2d5874812ddd!2sMclinic%20Georgia!5e0!3m2!1sen!2sge!4v1780562784603!5m2!1sen!2sge"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
