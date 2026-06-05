import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../i18n/LanguageContext.jsx";
import { publicAsset } from "../utils/publicAsset.js";
import StarIcon from "./icons/StarIcon.jsx";

const heroSlides = [
  { src: publicAsset("images/slider_img1.jpg"), width: 2048, height: 622 },
  { src: publicAsset("images/slider_img2.jpg"), width: 786, height: 569 },
  { src: publicAsset("images/slider_img3.jpg"), width: 793, height: 569 },
];

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const { t } = useLanguage();

  useEffect(() => {
    const sliderTimer = window.setInterval(() => {
      setActiveSlide((currentSlide) => (currentSlide + 1) % heroSlides.length);
    }, 5000);

    return () => window.clearInterval(sliderTimer);
  }, []);

  return (
    <section className="home-hero">
      <div className="home-hero-slider" aria-hidden="true">
        {heroSlides.map((slide, index) => (
          <img
            className={`home-hero-slide${index === activeSlide ? " is-active" : ""}`}
            src={slide.src}
            width={slide.width}
            height={slide.height}
            loading={index === 0 ? "eager" : "lazy"}
            fetchPriority={index === 0 ? "high" : "low"}
            decoding={index === 0 ? "sync" : "async"}
            alt=""
            key={slide.src}
          />
        ))}
      </div>
      <div className="container home-hero-content">
        <p className="hero-eyebrow">{t.hero.eyebrow}</p>
        <h1>{t.hero.title}</h1>
        <p>{t.hero.text}</p>
        <div className="hero-actions">
          <Link className="btn btn-hero-outline" to="/services">
            {t.hero.action}
          </Link>
        </div>
        <div className="hero-rating" aria-label={`${t.common.googleRating} ${t.clinic.rating.stars}`}>
          <span>{t.common.googleRating}</span>
          <strong>{t.clinic.rating.stars}</strong>
          <span className="rating-stars">
            {Array.from({ length: 5 }).map((_, index) => (
              <StarIcon key={index} />
            ))}
          </span>
          <span>
            {t.clinic.rating.reviewCount} {t.hero.reviewCount}
          </span>
        </div>
      </div>
    </section>
  );
}
