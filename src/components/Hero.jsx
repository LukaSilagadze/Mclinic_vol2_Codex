import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { clinicData } from "../data/clinicData.js";
import StarIcon from "./icons/StarIcon.jsx";

const heroSlides = [
  "/images/slider_img1.jpg",
  "/images/slider_img2.png",
  "/images/Slider_img3.png",
];

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);

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
            src={slide}
            alt=""
            key={slide}
          />
        ))}
      </div>
      <div className="container home-hero-content">
        <p className="hero-eyebrow">Mclinic Georgia • თბილისი</p>
        <h1>თანამედროვე სტომატოლოგიური მომსახურება მშვიდ გარემოში</h1>
        <p>
          პროფესიონალური სტომატოლოგიური მკურნალობა სუფთა, ორგანიზებულ და თანამედროვე კლინიკაში.
        </p>
        <div className="hero-actions">
          <Link className="btn btn-hero-outline" to="/services">
            სერვისების ნახვა
          </Link>
        </div>
        <div className="hero-rating" aria-label={`Google შეფასება ${clinicData.rating.stars}`}>
          <span>Google შეფასება</span>
          <strong>{clinicData.rating.stars}</strong>
          <span className="rating-stars">
            {Array.from({ length: 5 }).map((_, index) => (
              <StarIcon key={index} />
            ))}
          </span>
          <span>{clinicData.rating.reviewCount} შეფასება</span>
        </div>
      </div>
    </section>
  );
}
