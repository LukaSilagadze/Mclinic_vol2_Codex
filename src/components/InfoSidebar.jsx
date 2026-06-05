import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useLanguage } from "../i18n/LanguageContext.jsx";
import { publicAsset } from "../utils/publicAsset.js";
import LanguageSwitcher from "./LanguageSwitcher.jsx";
import CloseIcon from "./icons/CloseIcon.jsx";
import CheckIcon from "./icons/CheckIcon.jsx";
import ClockIcon from "./icons/ClockIcon.jsx";
import EmailIcon from "./icons/EmailIcon.jsx";
import LocationIcon from "./icons/LocationIcon.jsx";
import PhoneIcon from "./icons/PhoneIcon.jsx";

import Socials from "./socials.jsx";

export default function InfoSidebar({ open, onClose }) {
  const { t } = useLanguage();

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
        aria-label={t.sidebar.overlayLabel}
        onClick={onClose}
      />
      <aside className={`info-sidebar ${open ? "open" : ""}`} aria-modal="true" role="dialog" aria-label={t.sidebar.dialogLabel}>
        <div className="sidebar-top">
          <div className="sidebar-brand">
            <img className="sidebar-brand-mark" src={publicAsset("images/logo_small.jpg")} alt="" />
            <div>
              <strong>{t.clinic.name}</strong>
            </div>
          </div>
          <LanguageSwitcher />
          <button className="sidebar-close" type="button" aria-label={t.common.close} onClick={onClose}>
            <CloseIcon />
          </button>
        </div>

        <nav className="mobile-sidebar-nav" aria-label={t.common.mobileNav}>
          {t.nav.map((link) => (
            <NavLink key={link.to} to={link.to} onClick={onClose}>
              {link.label}
            </NavLink>
          ))}
          <a className="btn btn-primary" href={t.clinic.phoneHref}>
            {t.clinic.call}
          </a>
        </nav>

        <div className="sidebar-info-content">
          <section className="sidebar-section">
            <h2>{t.common.services}</h2>
            <ul className="sidebar-list">
              {t.clinic.sidebarServices.map((service) => (
                <li key={service}>
                  <CheckIcon />
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="sidebar-section">
            <h2>{t.common.contact}</h2>
            <div className="sidebar-contact-list">
              <p>
                <ClockIcon />
                <span>{t.clinic.weekdayHours}</span>
              </p>
              <p>
                <ClockIcon />
                <span>{t.clinic.saturdayHours}</span>
              </p>
              <p>
                <LocationIcon />
                <span>{t.clinic.shortAddress}</span>
              </p>
              <p>
                <PhoneIcon />
                <a href={t.clinic.phoneHref}>{t.clinic.phone}</a>
              </p>
              <p>
                <EmailIcon />
                <a href={t.clinic.emailHref}>{t.clinic.email}</a>
              </p>
            </div>
          </section>

          <section className="sidebar-section">
            <h2>{t.pages.about.title}</h2>
            <p className="sidebar-about">{t.sidebar.aboutText}</p>
          </section>

          <div className="sidebar-socials">
            <Socials theme="light" />
          </div>
        </div>
      </aside>
    </>
  );
}
