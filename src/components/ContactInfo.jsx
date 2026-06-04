import { clinicData } from "../data/clinicData.js";
import ClockIcon from "./icons/ClockIcon.jsx";
import LocationIcon from "./icons/LocationIcon.jsx";
import PhoneIcon from "./icons/PhoneIcon.jsx";
import Socials from "./socials.jsx";

export default function ContactInfo() {
  const mapSrc = `https://www.google.com/maps?q=${clinicData.coordinates.latitude},${clinicData.coordinates.longitude}&z=16&output=embed`;

  return (
    <section className="section contact-section">
      <div className="container">
        <div className="contact-compact-layout">
          <article className="contact-info-panel">
            <p className="section-kicker">კონტაქტი</p>
            <h2>{clinicData.name}</h2>

            <div className="contact-info-list">
              <div className="contact-info-row">
                <PhoneIcon />
                <div>
                  <strong>ტელეფონი</strong>
                  <a href={clinicData.phoneHref}>{clinicData.phone}</a>
                </div>
              </div>

              <div className="contact-info-row">
                <LocationIcon />
                <div>
                  <strong>მისამართი</strong>
                  <span>{clinicData.address}</span>
                </div>
              </div>

              <div className="contact-info-row">
                <ClockIcon />
                <div>
                  <strong>სამუშაო საათები</strong>
                  <span>ორშაბათი - პარასკევი: 10:00 - 20:00</span>
                </div>
              </div>
            </div>

            <p className="appointment-note">ვიზიტი წინასწარი დაჯავშნითაა.</p>

            <div className="contact-actions">
              <a className="btn btn-primary" href={clinicData.phoneHref}>
                დარეკვა
              </a>
              <a className="btn btn-outline" href={clinicData.googleMapsUrl} target="_blank" rel="noreferrer">
                Google Maps
              </a>
            </div>

            <div className="contact-socials">
              <Socials theme="light" />
            </div>
          </article>

          <div className="contact-map-embed">
            <iframe
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
