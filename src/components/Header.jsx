import { useState } from "react";
import { NavLink } from "react-router-dom";
import { clinicData, navLinks } from "../data/clinicData.js";
import { publicAsset } from "../utils/publicAsset.js";
import InfoSidebar from "./InfoSidebar.jsx";
import MenuIcon from "./icons/MenuIcon.jsx";

export default function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <header className="site-header">
        <div className="container header-inner">
          <NavLink to="/" className="brand-link" aria-label="Mclinic Georgia">
            <img className="brand-mark" src={publicAsset("images/logo_small.jpg")} alt="" />
            <span>{clinicData.name}</span>
          </NavLink>

          <nav className="desktop-nav" aria-label="მთავარი ნავიგაცია">
            {navLinks.map((link) => (
              <NavLink key={link.to} to={link.to}>
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="header-actions">
            <a className="btn header-call" href={clinicData.phoneHref}>
              დარეკვა
            </a>
            <button
              className="menu-toggle"
              type="button"
              aria-label="ინფორმაციის პანელის გახსნა"
              aria-expanded={sidebarOpen}
              onClick={() => setSidebarOpen(true)}
            >
              <MenuIcon />
            </button>
          </div>
        </div>
      </header>

      <InfoSidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
    </>
  );
}
