import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { clinicData, navLinks } from "../data/clinicData.js";
import CloseIcon from "./icons/CloseIcon.jsx";
import CheckIcon from "./icons/CheckIcon.jsx";
import ClockIcon from "./icons/ClockIcon.jsx";
import LocationIcon from "./icons/LocationIcon.jsx";
import PhoneIcon from "./icons/PhoneIcon.jsx";

const socialLabels = {
  facebook: "Facebook",
  instagram: "Instagram",
  youtube: "YouTube",
  whatsapp: "WhatsApp",
};

function SocialIcon({ label }) {
  const text = label === "Instagram" ? "IG" : label === "YouTube" ? "YT" : label === "WhatsApp" ? "WA" : "f";
  return <span aria-hidden="true">{text}</span>;
}

export default function InfoSidebar({ open, onClose }) {
  useEffect(() => {
    if (!open) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  return (
    <>
      <button
        className={`sidebar-overlay ${open ? "open" : ""}`}
        type="button"
        aria-label="პანელის დახურვა"
        onClick={onClose}
      />
      <aside className={`info-sidebar ${open ? "open" : ""}`} aria-modal="true" role="dialog" aria-label="Mclinic Georgia ინფორმაცია">
        <div className="sidebar-top">
          <div className="sidebar-brand">
            <img className="sidebar-brand-mark" src="/images/logo_small.jpg" alt="" />
            <div>
              <strong>{clinicData.name}</strong>
            </div>
          </div>
          <button className="sidebar-close" type="button" aria-label="დახურვა" onClick={onClose}>
            <CloseIcon />
          </button>
        </div>

        <nav className="mobile-sidebar-nav" aria-label="მობილური ნავიგაცია">
          {navLinks.map((link) => (
            <NavLink key={link.to} to={link.to} onClick={onClose}>
              {link.label}
            </NavLink>
          ))}
          <a className="btn btn-primary" href={clinicData.phoneHref}>
            დარეკვა
          </a>
        </nav>

        <div className="sidebar-info-content">
          <section className="sidebar-section">
            <h2>სერვისები</h2>
            <ul className="sidebar-list">
              {clinicData.sidebarServices.map((service) => (
                <li key={service}>
                  <CheckIcon />
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="sidebar-section">
            <h2>კონტაქტი</h2>
            <div className="sidebar-contact-list">
              <p>
                <ClockIcon />
                <span>ორშაბათი - პარასკევი: 10:00 - 20:00</span>
              </p>
              <p>
                <ClockIcon />
                <span>შაბათი: 11:00 - 18:00</span>
              </p>
              <p>
                <LocationIcon />
                <span>{clinicData.shortAddress}</span>
              </p>
              <p>
                <PhoneIcon />
                <a href={clinicData.phoneHref}>{clinicData.phone}</a>
              </p>
            </div>
          </section>

          <section className="sidebar-section">
            <h2>კლინიკის შესახებ</h2>
            <p className="sidebar-about">
              Mclinic Georgia არის სტომატოლოგიური კლინიკა თბილისში, რომელიც აერთიანებს პროფესიონალურ მიდგომას,
              მშვიდ გარემოს და მრავალმხრივ სტომატოლოგიურ მომსახურებებს.
            </p>
          </section>

          <div className="sidebar-socials" aria-label="სოციალური ბმულები">
            {Object.entries(clinicData.socialLinks).map(([key, href]) => (
              <a key={key} href={href} aria-label={socialLabels[key]}>
                <SocialIcon label={socialLabels[key]} />
              </a>
            ))}
          </div>
        </div>
      </aside>
    </>
  );
}
