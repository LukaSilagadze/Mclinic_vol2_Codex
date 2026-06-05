import { Link } from "react-router-dom";
import { useLanguage } from "../i18n/LanguageContext.jsx";
import { usePageMeta } from "../hooks/usePageMeta.js";

export default function NotFound() {
  const { t } = useLanguage();

  usePageMeta({
    title: `${t.clinic.name} | Page not found`,
    description: "The requested page could not be found.",
  });

  return (
    <main>
      <section className="section not-found-section">
        <div className="container not-found-panel">
          <p className="section-kicker">404</p>
          <h1>Page not found</h1>
          <p>The page you requested does not exist or has been moved.</p>
          <Link className="btn btn-primary" to="/">
            {t.nav[0].label}
          </Link>
        </div>
      </section>
    </main>
  );
}
