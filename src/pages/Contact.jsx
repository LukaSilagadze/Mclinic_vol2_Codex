import { useEffect } from "react";
import PageHero from "../components/PageHero.jsx";
import ContactInfo from "../components/ContactInfo.jsx";

export default function Contact() {
  useEffect(() => {
    document.title = "Mclinic Georgia | კონტაქტი";
  }, []);

  return (
    <main>
      <PageHero
        title="კონტაქტი"
        text="დაგვიკავშირდით ვიზიტის დასაგეგმად ან იხილეთ კლინიკის მდებარეობა რუკაზე."
      />
      <ContactInfo />
    </main>
  );
}
