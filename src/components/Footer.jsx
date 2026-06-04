import { NavLink } from "react-router-dom";
import { clinicData, navLinks } from "../data/clinicData.js";
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
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <div className="footer-logo">
            <img src={publicAsset("images/logo.jpg")} alt="Mclinic Georgia Logo" className="footer-brand-mark" />
            <strong>{clinicData.name}</strong>
          </div>
          <p>Mclinic Georgia — თანამედროვე სტომატოლოგიური მომსახურება თბილისში.</p>
          <div className="footer-socials" aria-label="სოციალური ბმულები">
            <Socials />
          </div>
        </div>

        <div>
          <h2>ნავიგაცია</h2>
          <nav className="footer-links" aria-label="ქვედა ნავიგაცია">
            {navLinks.map((link) => (
              <NavLink key={link.to} to={link.to}>
                {link.label}
              </NavLink>
            ))}
          </nav>
        </div>

        <div>
          <h2>კონტაქტი</h2>
          <address>
            <a href={clinicData.phoneHref}>{clinicData.phone}</a>
            <span>{clinicData.shortAddress}</span>
            <span>ორშაბათი - პარასკევი</span>
            <span>სამუშაო საათები: 10:00 - 20:00</span>
          </address>
        </div>
      </div>
      <div className="container footer-bottom">© 2026 Mclinic Georgia. ყველა უფლება დაცულია.</div>
    </footer>
  );
}
