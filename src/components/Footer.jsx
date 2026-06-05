import { NavLink } from "react-router-dom";
import { useLanguage } from "../i18n/LanguageContext.jsx";
import { publicAsset } from "../utils/publicAsset.js";
import FacebookIcon from "./icons/FacebookIcon.jsx";
import InstagramIcon from "./icons/InstagramIcon.jsx";
import YoutubeIcon from "./icons/YoutubeIcon.jsx";
import WhatsappIcon from "./icons/WhatsappIcon.jsx";
import Socials from "./socials";

const socialLabels = {
  facebook: "Facebook",
  instagram: "Instagram",
  youtube: "YouTube",
  whatsapp: "WhatsApp",
};

const socialIcons = {
  facebook: FacebookIcon,
  instagram: InstagramIcon,
  youtube: YoutubeIcon,
  whatsapp: WhatsappIcon,
};

function SocialIcon({ platform }) {
  const Icon = socialIcons[platform];
  if (!Icon) return null;
  return <Icon className="social-icon-svg" style={{ width: "20px", height: "20px" }} />;
}

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <div className="footer-logo">
            <img src={publicAsset("images/logo.jpg")} alt="Mclinic Georgia Logo" className="footer-brand-mark" loading="lazy" decoding="async" />
            <strong>{t.clinic.name}</strong>
          </div>
          <p>{t.footer.text}</p>
          <div className="footer-socials" aria-label={t.common.socialLinks}>
            <Socials />
          </div>
        </div>

        <div>
          <h2>{t.footer.navigation}</h2>
          <nav className="footer-links" aria-label={t.common.footerNav}>
            {t.nav.map((link) => (
              <NavLink key={link.to} to={link.to}>
                {link.label}
              </NavLink>
            ))}
          </nav>
        </div>

        <div>
          <h2>{t.footer.contact}</h2>
          <address>
            <a href={t.clinic.phoneHref}>{t.clinic.phone}</a>
            <a href={t.clinic.emailHref}>{t.clinic.email}</a>
            <span>{t.clinic.shortAddress}</span>
            <span>{t.clinic.weekdayRange}</span>
            <span>{t.footer.hours}</span>
          </address>
        </div>
      </div>
      <div className="container footer-bottom">{t.footer.copyright}</div>
    </footer>
  );
}
