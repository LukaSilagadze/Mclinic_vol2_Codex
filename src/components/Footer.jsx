import { NavLink } from "react-router-dom";
import { clinicData, navLinks } from "../data/clinicData.js";
import ToothIcon from "./icons/ToothIcon.jsx";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <div className="footer-logo">
            <ToothIcon />
            <strong>{clinicData.name}</strong>
          </div>
          <p>Mclinic Georgia — თანამედროვე სტომატოლოგიური მომსახურება თბილისში.</p>
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
