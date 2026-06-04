import { Link } from "react-router-dom";
import { useRevealOnScroll } from "../hooks/useRevealOnScroll.js";
import ServiceCard from "./ServiceCard.jsx";
import SmileIcon from "./icons/SmileIcon.jsx";
import ImplantIcon from "./icons/ImplantIcon.jsx";
import BracesIcon from "./icons/BracesIcon.jsx";
import ToothIcon from "./icons/ToothIcon.jsx";

const services = [
  {
    title: "ესთეტიკური სტომატოლოგია",
    text: "ესთეტიკური მკურნალობა, კოსმეტიკური სტომატოლოგია, ICON მეთოდი და გვირგვინები.",
    icon: SmileIcon,
  },
  {
    title: "იმპლანტაცია და ქირურგია",
    text: "იმპლანტები, სიბრძნის კბილის ამოღება და ძვლის გრაფტი.",
    icon: ImplantIcon,
  },
  {
    title: "ორთოდონტია",
    text: "ბრეკეტები, ორთოდონტიული მკურნალობა და თანკბილვის კორექცია.",
    icon: BracesIcon,
  },
  {
    title: "ზოგადი და ბავშვთა სტომატოლოგია",
    text: "კარიესის მკურნალობა, ბავშვთა სტომატოლოგია და გადაუდებელი მომსახურება.",
    icon: ToothIcon,
  },
];

export default function ServicesPreview() {
  const ref = useRevealOnScroll();

  return (
    <section className="section">
      <div className="container">
        <div className="section-heading">
          <p className="section-kicker">სერვისები</p>
          <h2>სტომატოლოგიური მიმართულებები</h2>
          <p>კლინიკა აერთიანებს ზოგად, ესთეტიკურ, ორთოდონტიულ და ქირურგიულ სტომატოლოგიურ მომსახურებებს.</p>
        </div>
        <div ref={ref} className="services-grid reveal stagger-grid">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
        <div className="section-action">
          <Link className="btn btn-outline" to="/services">
            ყველა სერვისის ნახვა
          </Link>
        </div>
      </div>
    </section>
  );
}
