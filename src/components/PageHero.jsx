export default function PageHero({ title }) {
  return (
    <section className="page-hero">
      <div className="container page-hero-inner">
        <h1>{title}</h1>
        <div className="page-hero-divider" />
        <nav className="page-hero-breadcrumb" aria-label="გვერდის მდებარეობა">
          <span>მთავარი</span>
          <span aria-hidden="true">›</span>
          <strong>{title}</strong>
        </nav>
      </div>
    </section>
  );
}
