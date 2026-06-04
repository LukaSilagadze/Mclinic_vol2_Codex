import { useEffect } from "react";
import PageHero from "../components/PageHero.jsx";
import BeforeAfterSlider from "../components/BeforeAfterSlider.jsx";
import { useLanguage } from "../i18n/LanguageContext.jsx";
import { useRevealOnScroll } from "../hooks/useRevealOnScroll.js";

const svgPlaceholder = (background, accent, detail, variant) =>
  `data:image/svg+xml;utf8,${encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 560">
      <rect width="900" height="560" fill="${background}"/>
      <circle cx="${variant === 1 ? 720 : 180}" cy="130" r="170" fill="${accent}" opacity="0.16"/>
      <circle cx="${variant === 2 ? 730 : 180}" cy="450" r="145" fill="${detail}" opacity="0.12"/>
      <path d="M230 250c80-68 202-68 282 0 76-68 198-68 278 0v112c-78 72-204 72-278 0-80 72-202 72-282 0z" fill="#ffffff" opacity="0.93"/>
      <path d="M265 282c56-36 135-36 190 0M575 282c56-36 135-36 190 0" stroke="${accent}" stroke-width="${variant === 3 ? 12 : 18}" stroke-linecap="round" opacity="0.38"/>
      <path d="M262 365c76 58 190 58 266 0 76 58 190 58 266 0" stroke="${detail}" stroke-width="14" stroke-linecap="round" opacity="0.32"/>
      <path d="M450 214v178" stroke="${accent}" stroke-width="8" stroke-linecap="round" opacity="${variant === 2 ? 0.3 : 0}"/>
    </svg>
  `)}`;

const caseImages = [
  {
    beforeImage: svgPlaceholder("#eef1ea", "#98A879", "#1f2933", 1),
    afterImage: svgPlaceholder("#f8faf5", "#7f8f63", "#98A879", 1),
  },
  {
    beforeImage: svgPlaceholder("#f1f2ef", "#98A879", "#6b7280", 2),
    afterImage: svgPlaceholder("#ffffff", "#7f8f63", "#98A879", 2),
  },
  {
    beforeImage: svgPlaceholder("#ecefeb", "#98A879", "#1f2933", 3),
    afterImage: svgPlaceholder("#f8faf5", "#7f8f63", "#98A879", 3),
  },
];

export default function Results() {
  const ref = useRevealOnScroll();
  const { t } = useLanguage();
  const cases = t.pages.results.cases.map((title, index) => ({
    title,
    ...caseImages[index],
  }));

  useEffect(() => {
    document.title = t.meta.results;
  }, [t.meta.results]);

  return (
    <main>
      <PageHero
        title={t.pages.results.title}
        text={t.pages.results.text}
        note={t.pages.results.note}
      />

      <section className="section results-section">
        <div className="container">
          <div ref={ref} className="results-grid reveal stagger-grid">
            {cases.map((item) => (
              <BeforeAfterSlider
                key={item.title}
                beforeImage={item.beforeImage}
                afterImage={item.afterImage}
                beforeLabel={t.beforeAfter.before}
                afterLabel={t.beforeAfter.after}
                title={item.title}
                description={t.pages.results.demoDescription}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section soft-section additional-gallery-section">
        <div className="container">
          <div className="section-heading">
            <p className="section-kicker">{t.pages.results.galleryKicker}</p>
            <h2>{t.pages.results.galleryTitle}</h2>
            <p>{t.pages.results.galleryText}</p>
          </div>
          <div className="future-gallery-grid">
            {t.pages.results.galleryItems.map((item) => (
              <article className="future-gallery-card" key={item}>
                <span>{item}</span>
                <strong>{t.pages.results.beforeAfter}</strong>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
