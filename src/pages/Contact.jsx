import { useEffect } from "react";
import PageHero from "../components/PageHero.jsx";
import ContactInfo from "../components/ContactInfo.jsx";
import { useLanguage } from "../i18n/LanguageContext.jsx";

export default function Contact() {
  const { t } = useLanguage();

  useEffect(() => {
    document.title = t.meta.contact;
  }, [t.meta.contact]);

  return (
    <main>
      <PageHero
        title={t.pages.contact.title}
        text={t.pages.contact.text}
      />
      <ContactInfo />
    </main>
  );
}
