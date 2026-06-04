import { useLanguage } from "../i18n/LanguageContext.jsx";

export default function PageHero({ title, text, note }) {
  const { t } = useLanguage();

  return (
    <section className="page-hero">
      <div className="container page-hero-inner">
        <h1>{title}</h1>
        {text && <p>{text}</p>}
        {note && <p className="page-hero-note">{note}</p>}
        <div className="page-hero-divider" />
        <nav className="page-hero-breadcrumb" aria-label={t.common.pageLocation}>
          <span>{t.common.home}</span>
          <span aria-hidden="true">›</span>
          <strong>{title}</strong>
        </nav>
      </div>
    </section>
  );
}
