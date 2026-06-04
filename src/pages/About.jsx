import { useEffect } from "react";
import PageHero from "../components/PageHero.jsx";
import CTASection from "../components/CTASection.jsx";
import { clinicData } from "../data/clinicData.js";
import CheckIcon from "../components/icons/CheckIcon.jsx";
import { useRevealOnScroll } from "../hooks/useRevealOnScroll.js";

const accessibilityItems = [
  "ადაპტირებული შესასვლელი",
  "ადაპტირებული საპირფარეშო",
  "ადაპტირებული დასაჯდომი სივრცე",
  "გენდერულად ნეიტრალური საპირფარეშო",
];

const doctors = [
  { name: "დოქტორი ნინო ნემსიწვერიძე", profession: "ზოგადი სტომატოლოგი" },
  { name: "დოქტორი მაკა გელაშვილი", profession: "ესთეტიკური სტომატოლოგი" },
  { name: "დოქტორი გიორგი კაპანაძე", profession: "იმპლანტოლოგი" },
  { name: "დოქტორი ანა ბერიძე", profession: "ორთოდონტი" },
];

export default function About() {
  const ref = useRevealOnScroll();
  const teamRef = useRevealOnScroll();

  useEffect(() => {
    document.title = "Mclinic Georgia | კლინიკის შესახებ";
  }, []);

  return (
    <main>
      <PageHero
        title="კლინიკის შესახებ"
        text="Mclinic Georgia არის სტომატოლოგიური კლინიკა თბილისში, რომელიც აერთიანებს პროფესიონალურ მიდგომას, მშვიდ გარემოს და მრავალმხრივ სტომატოლოგიურ მომსახურებებს."
      />

      <section className="section about-intro-section">
        <div ref={ref} className="container about-feature reveal">
          <div className="about-copy">
            <p className="section-kicker">კლინიკა</p>
            <h2>პროფესიონალური სტომატოლოგიური ზრუნვა მშვიდ გარემოში</h2>
            <p>
              კლინიკა პაციენტებს სთავაზობს ზოგად, ესთეტიკურ, ორთოდონტიულ და ქირურგიულ სტომატოლოგიურ
              მომსახურებებს. აქცენტი კეთდება სუფთა გარემოზე, ყურადღებიან მომსახურებაზე და ინდივიდუალურ
              მიდგომაზე.
            </p>
          </div>
          <img src={clinicData.images.interior} alt="Mclinic Georgia-ს ინტერიერი" />
        </div>
      </section>

      <section className="section soft-section dental-team-section">
        <div className="container">
          <div className="section-heading">
            <p className="section-kicker">სტომატოლოგიური გუნდი</p>
            <h2>გაიცანით ჩვენი ექიმები</h2>
            <p>გამოცდილი სტომატოლოგები, რომლებიც ორიენტირებულნი არიან ზუსტ მკურნალობაზე, კომფორტსა და გრძელვადიან პირის ღრუს ჯანმრთელობაზე.</p>
          </div>
          <div ref={teamRef} className="dental-team-grid reveal stagger-grid">
            {doctors.map((doctor) => (
              <article className="doctor-card reveal-card" key={doctor.name}>
                <div className="doctor-avatar" aria-hidden="true">
                  {doctor.name
                    .replace("დოქტორი ", "")
                    .split(" ")
                    .map((part) => part[0])
                    .join("")}
                </div>
                <h3>{doctor.name}</h3>
                <p>{doctor.profession}</p>
              </article>
            ))}
          </div>
        </div>
      </section>


      <section className="section about-details-section">
        <div className="container about-details-grid">
          <article className="about-detail-card">
            <p className="section-kicker">ხელმისაწვდომობა</p>
            <h2>კომფორტი და ხელმისაწვდომობა</h2>
            <ul>
              {accessibilityItems.map((item) => (
                <li key={item}>
                  <CheckIcon />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="about-detail-card">
            <p className="section-kicker">პარკინგი</p>
            <h2>პარკინგი</h2>
            <p>უფასო პარკინგი, ქუჩის უფასო პარკინგი და ადგილზე პარკინგი ხელმისაწვდომია.</p>
            <img src={clinicData.images.exterior} alt="Mclinic Georgia-ს შენობის ექსტერიერი" />
          </article>
        </div>
      </section>

      <section className="section soft-section">
        <div className="container about-feature reverse">
          <div className="about-copy">
            <p className="section-kicker">გარემო</p>
            <h2>სუფთა და ორგანიზებული სივრცე</h2>
            <p>პაციენტების შეფასებებში ხშირად აღინიშნება კლინიკის სისუფთავე, სიმშვიდე და ორგანიზებული გარემო.</p>
          </div>
          <img src={clinicData.images.product} alt="სტომატოლოგიური კლინიკის ფოტო" />
        </div>
      </section>

      <CTASection />
    </main>
  );
}
