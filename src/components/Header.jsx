import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useLanguage } from "../i18n/LanguageContext.jsx";
import { publicAsset } from "../utils/publicAsset.js";
import InfoSidebar from "./InfoSidebar.jsx";
import LanguageSwitcher from "./LanguageSwitcher.jsx";
import MenuIcon from "./icons/MenuIcon.jsx";

export default function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <>
      <header className="site-header">
        <div className="container header-inner">
          <NavLink to="/" className="brand-link" aria-label="Mclinic Georgia">
            <img className="brand-mark" src={publicAsset("images/logo_small.jpg")} alt="" />
            <span>{t.clinic.name}</span>
          </NavLink>

          <nav className="desktop-nav" aria-label={t.common.mainNav}>
            {t.nav.map((link) => (
              <NavLink key={link.to} to={link.to}>
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="header-actions">
            <LanguageSwitcher />
            <a className="btn header-call" href={t.clinic.phoneHref}>
              {t.clinic.call}
            </a>
            <button
              className="menu-toggle"
              type="button"
              aria-label={t.sidebar.openLabel}
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
